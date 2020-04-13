const fs = require('fs');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const placesRoutes = require('./routes/places-route');
const usersRoutes = require('./routes/users-route');
const HttpError = require('./models/http-error');
const s3Route = require('./routes/s3-route');

const app = express();

app.use(bodyParser.json());

app.use('/uploads/images', express.static(path.join('uploads', 'images')));
app.use(express.static(path.join('public')));
app.engine('html', require('ejs').renderFile);

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE');
  next();
});

// app.use('/api/upload-s3', s3Route);

app.use('/api/places', placesRoutes); // => /api/places
app.use('/api/users', usersRoutes); // => /api/users

app.use((req, res, next) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

// app.use((req, res, next) => {
//   const error = new HttpError('Could not find this route', 404);
//   throw error;
// });

app.use((error, req, res, next) => {
  if (req.file) {
    fs.unlink(req.file.path, (err) => {
      console.log(err);
    });
  }
  // Check if a response header has already been sent
  if (res.headerSent) {
    next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || 'Unknown error occured' });
});

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@demo-cluster-nxw2x.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(process.env.PORT || 5000);
  })
  .catch((error) => {
    console.log(error);
  });
