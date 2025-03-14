const express = require('express');
const router = express.Router();

/**
 * @description Fetch top players
 * @route GET /leaderboard/global
 */
router.get('/global', (req, res) => {
  res.send('Fetch top players');
});

/**
 * @description Fetch friend rankings
 * @route GET /leaderboard/friends
 */
router.get('/friends', (req, res) => {
  res.send('Fetch friend rankings');
});

/**
 * @description Fetch user rewards
 * @route GET /user/:id/rewards
 */
router.get('/:id/rewards', (req, res) => {
  res.send(`Fetch user rewards with ID ${req.params.id}`);
});

/**
 * @description Claim rewards
 * @route POST /user/:id/rewards/claim
 */
router.post('/:id/rewards/claim', (req, res) => {
  res.send(`Claim rewards for user with ID ${req.params.id}`);
});

module.exports = router;
