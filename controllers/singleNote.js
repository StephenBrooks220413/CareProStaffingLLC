const Note = require('../models/Note')

module.exports = async (req, res) => {
    const note = await Note.find({}).limit(40).sort({_id: -1})
    console.log(req.session)
    res.render('singleNote', {
        note
    })
}