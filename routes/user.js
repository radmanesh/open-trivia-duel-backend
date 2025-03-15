const express = require('express');
const router = express.Router();
const User = require('../models/user'); // Import User model

/**
 * @description Register user
 * @route POST /auth/signup
 */
router.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  const user = new User(username, password);
  try {
    await user.save();
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
    const user = await User.findByCredentials(username, password);
    if (user) {
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
    const user = await User.findById(userId);
    if (user) {
      res.json(user);
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
  const user = new User(username, password);
  try {
    await user.update(userId);
    res.send('User settings updated');
  } catch (error) {
    res.status(500).send('Error updating user settings');
  }
});

module.exports = router;
