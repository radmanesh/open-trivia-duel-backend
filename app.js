const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// Import routes
const userRoutes = require('./routes/user');
const triviaRoutes = require('./routes/trivia');
const gameRoutes = require('./routes/game');
const leaderboardRoutes = require('./routes/leaderboard');

// Use routes
app.use('/auth', userRoutes);
app.use('/user', userRoutes);
app.use('/questions', triviaRoutes);
app.use('/question', triviaRoutes);
app.use('/game', gameRoutes);
app.use('/leaderboard', leaderboardRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
