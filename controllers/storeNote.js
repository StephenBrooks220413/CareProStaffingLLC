const Note = require('../models/Note');
const path = require("path");

module.exports = (req, res)=>{
    let image = req.files.image;
    image.mv(path.resolve(__dirname, '..' ,'public/uploads', image.name),async(error, user)=>{
        await Note.create({
            if(error){
                const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message)
                req.flash('validationErrors', validationErrors)
                req.flash('data', req.body)
                return res.redirect('/dashboard')
            },
            ...req.body,
            image: '/uploads/' + image.name,
            userid: req.session.userId
        })
        res.redirect('/dashboard')
    })
}