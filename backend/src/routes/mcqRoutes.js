const express = require('express');
const router = express.Router();

// Get MCQs
router.get('/', async (req, res) => {
  res.json({ message: 'MCQ routes - Get all MCQs', mcqs: [] });
});

// Submit MCQ answer
router.post('/submit', async (req, res) => {
  res.json({ message: 'MCQ answer submitted', correct: true });
});

module.exports = router;
