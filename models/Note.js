const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const NoteSchema = new Schema ({
    title: {
        type: String,
        unique: true
    },
    name: {
        type: String
    },
    relatedEmail: {
        type: String
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    datePosted: {
        type: Date,
        default: new Date()
    }
})

const Note = mongoose.model('Note', NoteSchema)
module.exports = Note