const express = require('express');
const router = express.Router();

/**
 * @description Register user
 * @route POST /auth/signup
 */
router.post('/signup', (req, res) => {
  res.send('User signup');
});

/**
 * @description Login user
 * @route POST /auth/login
 */
router.post('/login', (req, res) => {
  res.send('User login');
});

/**
 * @description Fetch user profile
 * @route GET /user/:id
 */
router.get('/:id', (req, res) => {
  res.send(`Fetch user profile with ID ${req.params.id}`);
});

/**
 * @description Update user settings
 * @route PUT /user/:id
 */
router.put('/:id', (req, res) => {
  res.send(`Update user settings with ID ${req.params.id}`);
});

module.exports = router;
