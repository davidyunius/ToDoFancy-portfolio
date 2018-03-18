const mongoose = require('mongoose')
const Schema = mongoose.Schema

const taskSchema = new Schema({
    status: Boolean,
    description: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Task', taskSchema)