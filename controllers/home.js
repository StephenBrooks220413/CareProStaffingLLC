
const Reviews = require('../models/Review')
const Users = require('../models/User')

module.exports = async (req, res) => {
    const reviews = await Reviews.find({}).limit(3).sort({_id: -1})
    const users = await Users.find({}).limit(1).sort({_id: -1})
    res.render('index', {
        reviews, users
    })
}