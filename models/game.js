class Game {
  /**
   * @description Create a new game instance
   * @param {string} title - The title of the game
   * @param {string} genre - The genre of the game
   */
  constructor(title, genre) {
    this.title = title;
    this.genre = genre;
  }

  /**
   * @description Insert the game into the database
   * @returns {Promise<void>}
   * @throws {Error} If insertion fails
   */
  async save() {
    const db = require('../db');
    try {
      await db.query('INSERT INTO games (title, genre) VALUES ($1, $2)', [this.title, this.genre]);
    } catch (error) {
      throw new Error('Error inserting game into database');
    }
  }

  /**
   * @description Find a game by ID
   * @param {number} id - The ID of the game
   * @returns {Promise<Game|null>} The found game or null if not found
   * @throws {Error} If query fails
   */
  static async findById(id) {
    const db = require('../db');
    try {
      const result = await db.query('SELECT * FROM games WHERE id = $1', [id]);
      if (result.rows.length > 0) {
        const game = result.rows[0];
        return new Game(game.title, game.genre);
      } else {
        return null;
      }
    } catch (error) {
      throw new Error('Error querying game by ID');
    }
  }

  /**
   * @description Update the game's information in the database
   * @param {number} id - The ID of the game
   * @returns {Promise<void>}
   * @throws {Error} If update fails
   */
  async update(id) {
    const db = require('../db');
    try {
      await db.query('UPDATE games SET title = $1, genre = $2 WHERE id = $3', [this.title, this.genre, id]);
    } catch (error) {
      throw new Error('Error updating game in database');
    }
  }
}

module.exports = Game;
