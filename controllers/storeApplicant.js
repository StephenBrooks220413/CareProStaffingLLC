const Applicant = require('../models/Applicant');
const path = require("path");

module.exports = (req, res)=>{
    let image = req.files.image;
    image.mv(path.resolve(__dirname, '..' ,'public/uploads', image.name),async(error, applicant)=>{
        await Applicant.create({
            if(error){
                const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message)
                req.flash('validationErrors', validationErrors)
                req.flash('data', req.body)
                return res.redirect('/apply')
            },
            ...req.body,
            image: '/uploads/' + image.name,
            userid: req.session.userId
        })
            // .then(applicant)
        res.redirect('/')
    })
    // User.create(req.body, (error, user) => {
    //     if(error){
    //         const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message)
    //         req.flash('validationErrors', validationErrors)
    //         req.flash('data', req.body)
    //         return res.redirect('/auth/register')
    //     }
    //     res.redirect('/auth/login')
    // })
}
