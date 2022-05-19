const userModel = require('../models/User')

module.exports = async (req, res) => {
    try {
        await userModel.findByIdAndUpdate(id,{
            phone: 'Update phone',
            email: 'Updated email'
        }, res.render('employee'))
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        })
    }
}