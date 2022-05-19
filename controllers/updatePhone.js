const User = require('../models/User')

module.exports = function(req, res, next) {
    User.findByIdAndUpdate(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('employee');
        } else {
            console.log('Failed to update user Details: ' + err);
        }
    });
}