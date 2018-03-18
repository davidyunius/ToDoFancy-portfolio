var express = require('express');
var router = express.Router();
const user = require('../controllers/user-controller')

router
  .get('/list', user.viewUser)
  .post('/add', user.addUser)
  .delete('/delete/:id', user.deleteUser)
  .patch('/update/:id', user.updateUser)

module.exports = router;
