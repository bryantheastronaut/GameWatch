import express, { Router } from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import User from './db/users';

const app = express();
const router = Router();
const API_PORT = process.env.API_PORT || 3001;

app.use(morgan('combined'));

mongoose.connect('mongodb://gamewatch:password@ds019836.mlab.com:19836/bryandb');

app.get('/', (req, res) => {
  res.send('yay!');
});

app.get('/users', (req, res) => {
  User.find({}, (err, users) => {
    res.send(users);
  });
});

app.get('/newTestUser', (req, res) => {
  const newUser = new User();
  newUser.username = 'braaayyynnn';
  newUser.password = 'password';
  newUser.save((err, user) => {
    console.log('user created:', JSON.stringify(user));
  });
});

app.post('/users', (req, res) => {
  // send username/password to make new account
  // be sure to validate, hash password, and
  // ensure uniqueness. Mongoose may do some validation as well
});

app.listen(API_PORT, () => console.log(`Listening on ${API_PORT}`));
