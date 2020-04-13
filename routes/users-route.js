const express = require('express');
const { check } = require('express-validator');

const usersControllers = require('../controllers/users-controllers');
const fileUpload = require('../middleware/file-upload');
const uploadS3 = require('../middleware/s3-upload');

const router = express.Router();

router.get('/', usersControllers.getUsers);

router.post(
  '/signup',
  uploadS3.single('image'),
  [
    check('name')
      .not()
      .isEmpty(),
    check('email')
      .normalizeEmail()
      .isEmail(),
    check('password').isLength({ min: 6 })
  ],
  usersControllers.signup
);

router.post('/login', usersControllers.login);

module.exports = router;
