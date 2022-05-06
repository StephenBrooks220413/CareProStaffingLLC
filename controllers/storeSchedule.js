const Schedule = require('../models/Schedule');
const path = require("path");

module.exports = async (req, res)=>{
    await Schedule.create(req.body)
    res.redirect('/scheduling')
}