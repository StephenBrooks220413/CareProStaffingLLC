const Schedule = require('../models/Schedule')

module.exports = function(req, res, next) {
    Schedule.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/scheduling');
        } else {
            console.log('Failed to Delete user Details: ' + err);
        }
    });
}