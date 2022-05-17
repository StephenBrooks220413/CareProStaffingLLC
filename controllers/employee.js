const Schedule = require('../models/Schedule')
const User = require('../models/User')

module.exports = async (req, res) => {
    const schedule = await Schedule.find({}).limit(30).sort({_id: -1})
    const users = await User.find({}).limit(1).sort({_id: -1})
    console.log(req.session)
    res.render('employee', {
        schedule, users
    })
}