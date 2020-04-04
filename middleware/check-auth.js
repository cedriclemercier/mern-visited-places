const jwt = require('jsonwebtoken');

const HttpError = require('../models/http-error');

module.exports = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next();
  }
  try {
    const token = req.headers.authorization.split(' ')[1]; // Authorization: 'Brearer TOKEN'
    if (!token) {
      throw new Error('Authentication failed!');
    }
    // Validating token
    const decodedToken = jwt.verify(token, process.env.JWT_KEY);

    //Adding data to token as decoded user id
    req.userData = { userId: decodedToken.userId };
    next();
  } catch (err) {
    const error = new HttpError('Authentication failed!', 401);
    next(error);
  }
};
