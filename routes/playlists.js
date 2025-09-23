const express = require('express');
const router = express.Router();
const Playlist = require('../models/playlist');
const Song = require('../models/song');
const authMiddleware = require('../middleware/authmiddleware');

// Get user playlists
router.get('/', authMiddleware, async (req, res) => {
  const playlists = await Playlist.findAll({ where: { userId: req.user.id }, include: Song });
  res.json(playlists);
});

// Create playlist
router.post('/', authMiddleware, async (req, res) => {
  const { name } = req.body;
  const playlist = await Playlist.create({ name, userId: req.user.id });
  res.json(playlist);
});

module.exports = router;
