const express = require('express')
const router =  express.Router()
const task = require('../controllers/task-controller')

router
    .get('/list', task.viewTask)
    .post('/add', task.addTask)
    .delete('/delete/:id', task.deleteTask)
    .patch('/update/:id', task.updateTask)

module.exports = router