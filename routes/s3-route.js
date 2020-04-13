const express = require('express');

const uploadS3 = require('../middleware/s3-upload');

const router = express.Router();

router.post('/', uploadS3.single('image'), (req, res) => {
  console.log(
    '============================================= S3 RESPONSE ================================================'
  );
  console.log(`/n/n/n------------------------------------ req.file ------------------------------------------/n/n/n`);
  console.log(req.file);

  const { key, location } = req.file;

  console.log('-------- req.body -----------');
  console.log(req.body);
  res.json({ key: key, location: location });
});

module.exports = router;
