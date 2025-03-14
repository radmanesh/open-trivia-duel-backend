const request = require('supertest');
const express = require('express');
const app = express();
const userRouter = require('../routes/user');

app.use(express.json());
app.use('/auth', userRouter);

describe('User Routes', () => {
  describe('POST /auth/signup', () => {
    it('should register a new user', async () => {
      const response = await request(app)
        .post('/auth/signup')
        .send({ username: 'testuser', password: 'testpass' });
      expect(response.status).toBe(201);
      expect(response.text).toBe('User signup successful');
    });

    it('should return error if registration fails', async () => {
      const response = await request(app)
        .post('/auth/signup')
        .send({ username: '', password: '' });
      expect(response.status).toBe(500);
      expect(response.text).toBe('Error registering user');
    });
  });

  describe('POST /auth/login', () => {
    it('should login an existing user', async () => {
      const response = await request(app)
        .post('/auth/login')
        .send({ username: 'testuser', password: 'testpass' });
      expect(response.status).toBe(200);
      expect(response.text).toBe('User login successful');
    });

    it('should return error for invalid credentials', async () => {
      const response = await request(app)
        .post('/auth/login')
        .send({ username: 'wronguser', password: 'wrongpass' });
      expect(response.status).toBe(401);
      expect(response.text).toBe('Invalid credentials');
    });
  });
});
