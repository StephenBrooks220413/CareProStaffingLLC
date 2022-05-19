const userModel = require('../models/User')

module.exports = async (req, res) => {
    try {
        const { todo } = req.body
        const update = await userModel.findOneAndUpdate({_id: req.params.id}, {todo})
        if (!update) {
            return res.status(400).json({
                success: false,
                message: 'Not successfully updated'
            })
        }
        return res.status(200).json({
            success: true,
            message: 'Profile successfully updated'
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        })
    }
}