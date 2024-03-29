const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const HttpError = require('../models/http-error');
const User = require('../models/user');

const getUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find({}, '-password');
  } catch (err) {
    const error = new HttpError('Fetching users failed. Try again?', 500);
    return next(error);
  }
  res.json({ users: users.map(el => el.toObject({ getters: true })) });
};

const signup = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.log(errors);
    return next(new HttpError('Invalid inputs passed please check your data', 422));
  }

  const { name, email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError('Signing up failed, please try again with different credentials!', 500);
    return next(error);
  }

  if (existingUser) {
    const error = new HttpError('User already exists. Please login instead?', 422);
    return next(error);
  }
  let hashedPassword;

  try {
    hashedPassword = await bcrypt.hash(password, 12);
  } catch (err) {
    const error = new HttpError('Could not create user, try again', 500);
    return next(error);
  }

  const createdUser = new User({
    name,
    email,

    // Old code to save file to mern application
    // image: req.file.path,

    // New code that takes the request object to save to S3
    image: req.file.key,
    
    password: hashedPassword,
    places: []
  });

  try {
    await createdUser.save();
  } catch (err) {
    const error = new HttpError('Signed up failed. Try again', 500);
    return next(error);
  }

  let token;
  try {
    token = jwt.sign({ userId: createdUser.id, email: createdUser.email }, process.env.JWT_KEY, {
      expiresIn: '1h'
    });
  } catch (err) {
    const error = new HttpError('Signed up failed. Try again', 500);
    return next(error);
  }

  res.status(201).json({ userId: createdUser.id, email: createdUser.email, token: token });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError('Login up failed, please try again with different credentials!', 500);
    return next(error);
  }

  if (!existingUser) {
    const error = new HttpError('Invalid credentials. Try again!', 403);
    return next(error);
  }
  let isValidPassword = false;

  try {
    isValidPassword = await bcrypt.compare(password, existingUser.password);
  } catch (err) {
    const error = new HttpError('Could not log you in check you credentials and try again', 500);
    return next(error);
  }

  if (!isValidPassword) {
    const error = new HttpError('Invalid credentials. Try again!', 403);
    return next(error);
  }

  let token;
  try {
    token = jwt.sign({ userId: existingUser.id, email: existingUser.email }, process.env.JWT_KEY, {
      expiresIn: '1h'
    });
  } catch (err) {
    const error = new HttpError('Login failed. Try again', 500);
    return next(error);
  }
  res.json({ userId: existingUser.id, email: existingUser.email, token: token });
};

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;
