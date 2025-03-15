class User {
  /**
   * @description Create a new user instance
   * @param {string} username - The username of the user
   * @param {string} password - The password of the user
   */
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  /**
   * @description Insert the user into the database
   * @returns {Promise<void>}
   * @throws {Error} If insertion fails
   */
  async save() {
    const db = require('../db');
    try {
      await db.query('INSERT INTO users (username, password) VALUES ($1, $2)', [this.username, this.password]);
    } catch (error) {
      throw new Error('Error inserting user into database');
    }
  }

  /**
   * @description Find a user by username and password
   * @param {string} username - The username of the user
   * @param {string} password - The password of the user
   * @returns {Promise<User|null>} The found user or null if not found
   * @throws {Error} If query fails
   */
  static async findByCredentials(username, password) {
    const db = require('../db');
    try {
      const result = await db.query('SELECT * FROM users WHERE username = $1 AND password = $2', [username, password]);
      if (result.rows.length > 0) {
        const user = result.rows[0];
        return new User(user.username, user.password);
      } else {
        return null;
      }
    } catch (error) {
      throw new Error('Error querying user by credentials');
    }
  }

  /**
   * @description Find a user by ID
   * @param {number} id - The ID of the user
   * @returns {Promise<User|null>} The found user or null if not found
   * @throws {Error} If query fails
   */
  static async findById(id) {
    const db = require('../db');
    try {
      const result = await db.query('SELECT * FROM users WHERE id = $1', [id]);
      if (result.rows.length > 0) {
        const user = result.rows[0];
        return new User(user.username, user.password);
      } else {
        return null;
      }
    } catch (error) {
      throw new Error('Error querying user by ID');
    }
  }

  /**
   * @description Update the user's information in the database
   * @param {number} id - The ID of the user
   * @returns {Promise<void>}
   * @throws {Error} If update fails
   */
  async update(id) {
    const db = require('../db');
    try {
      await db.query('UPDATE users SET username = $1, password = $2 WHERE id = $3', [this.username, this.password, id]);
    } catch (error) {
      throw new Error('Error updating user in database');
    }
  }
}

module.exports = User;
