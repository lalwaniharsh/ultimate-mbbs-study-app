const express = require('express');
const router = express.Router();

// Get all todos
router.get('/', async (req, res) => {
  res.json({ message: 'Todo list', todos: [] });
});

// Create todo
router.post('/', async (req, res) => {
  res.json({ message: 'Todo created', todo: {} });
});

module.exports = router;
