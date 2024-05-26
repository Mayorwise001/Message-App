// routes/users.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('This is the users page');
});

module.exports = router;
