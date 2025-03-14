const express = require('express');
const router = express.Router();
const db = require('../db'); // Import database connection

/**
 * @description Register user
 * @route POST /auth/signup
 */
router.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  try {
    await db.query('INSERT INTO users (username, password) VALUES ($1, $2)', [username, password]);
    res.status(201).send('User signup successful');
  } catch (error) {
    res.status(500).send('Error registering user');
  }
});

/**
 * @description Login user
 * @route POST /auth/login
 */
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const result = await db.query('SELECT * FROM users WHERE username = $1 AND password = $2', [username, password]);
    if (result.rows.length > 0) {
      res.send('User login successful');
    } else {
      res.status(401).send('Invalid credentials');
    }
  } catch (error) {
    res.status(500).send('Error logging in user');
  }
});

/**
 * @description Fetch user profile
 * @route GET /user/:id
 */
router.get('/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    const result = await db.query('SELECT * FROM users WHERE id = $1', [userId]);
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    res.status(500).send('Error fetching user profile');
  }
});

/**
 * @description Update user settings
 * @route PUT /user/:id
 */
router.put('/:id', async (req, res) => {
  const userId = req.params.id;
  const { username, password } = req.body;
  try {
    await db.query('UPDATE users SET username = $1, password = $2 WHERE id = $3', [username, password, userId]);
    res.send('User settings updated');
  } catch (error) {
    res.status(500).send('Error updating user settings');
  }
});

module.exports = router;
