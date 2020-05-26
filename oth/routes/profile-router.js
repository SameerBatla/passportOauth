const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('hey there ' + req.user.userName);
});

module.exports = router;
