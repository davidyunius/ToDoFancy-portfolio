const Task = require('../models/task-model')

module.exports = {
    viewTask (req, res) {
        Task.find().then(taskData => {
            res.status(200).json({
                message: 'Task data found!',
                taskData
            })
        }).catch(err => {
            res.status(500).json({
                message:err
            })
        })
    },
    addTask (req, res) {
        Task.create({
            status: false,
            description: String,
            createdAt: new Date(),
            updatedAt: new Date()
        }).then(taskData => {
            res.status(201).json({
                message: 'Task data created!',
                taskData
            })
        }).catch(err => {
            res.status(500).json({
                message:err
            })
        })
    },
    updateTask (req, res) {
        Task.update({
            _id: req.params.id
        }, {
            $set: {
                status: req.body.status,
                description: req.body.description,
                updatedAt: new Date()
            }
        }, {where : {_id: req.params.id}}).then(taskData => {
            res.status(200).json({
                message: 'Task data successfully updated!',
                taskData
            })
        }).catch(err => {
            res.status(500).json({
                message: err
            })
        })
    },
    deleteTask (req, res) {
        Task.remove({
            _id: req.params.id
        }).then(taskData => {
            res.status(200).json({
                message: 'Data deleted!',
                taskData
            })
        }).catch(err => {
            res.status(500).json({
                message: err
            })
        })
    }
}