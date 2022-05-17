const User = require('../models/User')

module.exports = function(req, res, next) {
    User.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/dashboard');
        } else {
            console.log('Failed to Delete user Details: ' + err);
        }
    });
}