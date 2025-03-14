const express = require('express');
const router = express.Router();

/**
 * @description Fetch questions
 * @route GET /questions
 */
router.get('/', (req, res) => {
  const { category, difficulty } = req.query;
  res.send(`Fetch questions for category ${category} with difficulty ${difficulty}`);
});

/**
 * @description Validate and save user answer
 * @route POST /question/submit
 */
router.post('/submit', (req, res) => {
  res.send('Validate and save user answer');
});

module.exports = router;
