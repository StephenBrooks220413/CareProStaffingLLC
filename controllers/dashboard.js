const Schedule = require('../models/Schedule')
const User = require('../models/User')

module.exports = async (req, res) => {
    const schedule = await Schedule.find({}).limit(100).sort({_id: -1})
    const users = await User.find({}).limit(100).sort({_id: -1})
    console.log(req.session)
    res.render('dashboard', {
        schedule, users
    })
}