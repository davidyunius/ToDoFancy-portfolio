const express = require('express')
const router =  express.Router()
const task = require('../controllers/task-controller')

router
    .get('/', task)

module.exports = router