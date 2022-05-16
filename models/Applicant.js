const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ApplicantSchema = new Schema ({
    name: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: [true, 'Please Provide A Username']
    },
    about: {
        type: String,
        required: [true, 'Please Talk About Yourself']
    },
    joinedDate: {
        type: Date,
        default: new Date()
    },
    email: {
        type: String,
        required: [true, 'Please Provide An Email']
    },
    preference: {
        type: String
    },
    hours: {
        type: String
    },
    image: {
        type: String,
        required: true
    }
})

const Applicant = mongoose.model('Applicant', ApplicantSchema)
module.exports = Applicant