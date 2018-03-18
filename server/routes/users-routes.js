var express = require('express');
var router = express.Router();
const user = require('../controllers/user-controller')

router
  .get('/list', user)
  .post('/add', user)
  .delete('/delete', user)
  .patch('/update', user)

module.exports = router;
