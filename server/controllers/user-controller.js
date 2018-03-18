const User = require('../models/user-model')
var bcrypt = require('bcrypt');
const saltRounds = 4;

module.exports = {
    viewUser (req, res) {
        User.find().then(userData => {
            res.status(200).json({
                message: 'User data found!',
                userData
            })
        }).catch(err => {
            message: err
        })
    },
    addUser (req, res) {
        const input = req.body
        var hash = bcrypt.hashSync(input.password, saltRounds);
        User.create({
            name: input.name,
            password: hash,
            email: input.email
        }).then(userData => {
            res.status(201).json({
                message: 'User data created!',
                userData
            })
        }).catch(err => {
            message: err
        })
    },
    updateUser (req, res) {
        User.update({
            _id: req.params.id
        }, {
            $set: {
                name: req.body.name,
                password: req.body.password,
                email: req.body.email
            }
        }, {where: {_id: req.params.id} }).then(userData => {
            res.status(200).json({
                message: 'User data successfully updated!',
                userData
            })
        }).catch(err => {
            message: err
        })
    },
    deleteUser (req, res) {
        User.remove({
            _id: req.params.id
        }).then(userData => {
            res.status(200).json({
                message: 'Data deleted!',
                userData
            })
        }).catch(err => {
            res.status(500).json({
                message: err
            })
        })
    }
}