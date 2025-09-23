const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

async function getSpotifyToken() {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Authorization": "Basic " + Buffer.from(clientId + ":" + clientSecret).toString("base64")
    },
    body: "grant_type=client_credentials"
  });

  const data = await response.json();
  return data.access_token;
}

router.get('/search', async (req, res) => {
  const { q } = req.query;
  if (!q) return res.status(400).json({ error: "Query missing" });

  try {
    const token = await getSpotifyToken();
    const response = await fetch(
      `https://api.spotify.com/v1/search?q=${encodeURIComponent(q)}&type=track&limit=10`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    const data = await response.json();
    const tracks = data.tracks.items.map(track => ({
      name: track.name,
      artist: track.artists.map(a => a.name).join(", "),
      album: track.album.name,
      image: track.album.images[0]?.url,
      preview: track.preview_url
    }));
    res.json(tracks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch from Spotify" });
  }
});

module.exports = router;
