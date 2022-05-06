
const Reviews = require('../models/Review')

module.exports = async (req, res) => {
    const reviews = await Reviews.find({}).limit(4).sort({_id: -1})
    res.render('index', {
        reviews
    })
}