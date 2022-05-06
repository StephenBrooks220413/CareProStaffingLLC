const Review = require('../models/Review');
const path = require("path");

module.exports = async (req, res)=>{
    await Review.create(req.body)
    res.redirect('/')
}