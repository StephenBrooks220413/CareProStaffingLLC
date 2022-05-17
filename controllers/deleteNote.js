const Note = require('../models/Note')

module.exports = function(req, res, next) {
    Note.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/dashboard');
        } else {
            console.log('Failed to Delete note Details: ' + err);
        }
    });
}