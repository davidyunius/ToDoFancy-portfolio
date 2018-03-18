var express = require('express');
var router = express.Router();
const user = require('../controllers/user.controller')

router
  .get('/', user)

module.exports = router;
