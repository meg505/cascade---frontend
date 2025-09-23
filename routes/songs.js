const express = require('express');
const router = express.Router();
const Song = require('../models/song');
const authMiddleware = require('../middleware/authmiddleware');

// Get all songs
router.get('/', async (req, res) => {
  const songs = await Song.findAll();
  res.json(songs);
});

// Add new song (protected)
router.post('/', authMiddleware, async (req, res) => {
  const { title, artist, album, url } = req.body;
  const song = await Song.create({ title, artist, album, url });
  res.json(song);
});

module.exports = router;
