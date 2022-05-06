const Schedule = require('../models/Schedule')

module.exports = async (req, res) => {
    const schedule = await Schedule.find({}).limit(30).sort({_id: -1})
    console.log(req.session)
    res.render('scheduling', {
        schedule
    })
}