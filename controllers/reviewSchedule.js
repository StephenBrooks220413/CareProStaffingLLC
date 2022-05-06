const ReviewSchedule = require('../models/Schedule')

module.exports = async (req, res) => {
    const schedule = await ReviewSchedule.findById(req.params.id)
    res.render('reviewSchedule', {
        schedule
    })
}