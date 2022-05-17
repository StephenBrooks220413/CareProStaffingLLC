const Schedule = require('../models/Schedule');

module.exports = async (req, res) => {
    const schedule = await Schedule.findById(req.params.id)
    res.render('changeSchedule', {
        schedule
    })
}