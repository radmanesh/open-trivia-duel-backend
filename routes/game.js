const express = require('express');
const router = express.Router();

/**
 * @description Start a solo game
 * @route POST /game/start
 */
router.post('/start', (req, res) => {
  res.send('Start a solo game');
});

/**
 * @description Match player with an opponent
 * @route POST /game/duel/find
 */
router.post('/duel/find', (req, res) => {
  res.send('Match player with an opponent');
});

/**
 * @description Submit answer in duel
 * @route POST /game/duel/:id/answer
 */
router.post('/duel/:id/answer', (req, res) => {
  res.send(`Submit answer in duel with ID ${req.params.id}`);
});

/**
 * @description Fetch duel progress
 * @route GET /game/duel/:id/status
 */
router.get('/duel/:id/status', (req, res) => {
  res.send(`Fetch duel progress with ID ${req.params.id}`);
});

/**
 * @description End game and save results
 * @route POST /game/duel/:id/finish
 */
router.post('/duel/:id/finish', (req, res) => {
  res.send(`End game and save results for duel with ID ${req.params.id}`);
});

module.exports = router;
