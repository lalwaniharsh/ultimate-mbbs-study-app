const express = require('express');
const router = express.Router();

// Get study schedule
router.get('/schedule', async (req, res) => {
  res.json({ message: 'Study schedule', schedule: [] });
});

// Create study session
router.post('/session', async (req, res) => {
  res.json({ message: 'Study session created', session: {} });
});

module.exports = router;
