const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ScheduleSchema = new Schema ({
    hours: {
        type: String,
        unique: true
    },
    date: {
        type: String,
        required: true
    },
    employeeID: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    client: {
        type: String,
        required: true
    },
    datePosted: {
        type: Date,
        default: new Date()
    },
    name: String
})

const Schedule = mongoose.model('Schedule', ScheduleSchema)
module.exports = Schedule