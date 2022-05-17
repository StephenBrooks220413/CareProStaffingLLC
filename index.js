const express = require('express');
const app = new express();
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const expressSession = require('express-session');
const ejs = require('ejs');
const mongoose = require('mongoose');
const flash = require('flash');

require('dotenv').config();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(fileUpload());
app.use(expressSession({
    secret:process.env.SECRET
}));
app.use(flash());

globalloggedIn = null;
app.use("*", (req, res, next)=>{
    loggedIn = req.session.userId;
    next()
});

// DB Connection
process.on("uncaughtException", (err) => {
    console.log("UNCAUGHT EXCEPTION, APP SHUTTING NOW!!");
    console.log(err.message, err.name);
    process.exit(1);
});
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
})
if(!mongoose){
    console.log('No DB connection')
} else {
    console.log('DB connection')
}

//////////////////////////////////////////////////
//Server Starting
let port = process.env.PORT;
if(port == null || port == ""){
    port = 4000
}
app.listen(port, () => {
    console.log('App listening')
})
/////////////////////////////////////////////////////////////
// Middlewares
const validateMiddleware = require('./middleware/validateMiddleware');
const authMiddleware = require('./middleware/authMiddleware');
const redirectIfAuthenticated = require('./middleware/redirectIfAuthenticated')

/////////////////////////////////////////////////
// Controllers
const homeController = require('./controllers/home');
const adminController = require('./controllers/admin');
const dashboardController = require('./controllers/dashboard')
const contactController = require('./controllers/contact');
const applyPageController = require('./controllers/apply');
const aboutController = require('./controllers/about');
const pocController = require('./controllers/POC');
const communityController = require('./controllers/community');
const portfolioController = require('./controllers/portfolio');
const loginController = require('./controllers/login');
const registerController = require('./controllers/register');
const storeUserController = require('./controllers/storeUser');
const loginUserController = require('./controllers/loginUser');
const logoutController = require('./controllers/logout');
const profilesController = require('./controllers/profiles');
const profileController = require('./controllers/profile');
const newReviewController = require('./controllers/newReview');
const storeReviewController = require('./controllers/storeReview');
const scheduleController = require('./controllers/schedule');
const storeScheduleController = require('./controllers/storeSchedule');
const applicantController = require('./controllers/storeApplicant');
const storeController = require('./controllers/store');
const termsController = require('./controllers/term');
const employeeController = require('./controllers/employee')
/////////////////////////////////////////////////

app.get('/', homeController);
app.get('/employee', employeeController)
app.get('/admin', adminController);
app.get('/terms&conditions', termsController);
app.get('/dashboard', dashboardController)
app.get('/contact', contactController)
app.get('/apply', applyPageController)
app.post('/applicant', applicantController);
app.get('/store', storeController)
app.get('/about', aboutController);
app.get('/portfolio', portfolioController);
app.get('/poc', pocController);
app.get('/community', communityController);

//////////////////////////////////////////////////////////////////////////
// Users
app.get('/auth/login', redirectIfAuthenticated, loginController);
app.get('/auth/register', redirectIfAuthenticated, registerController);
app.post('/users/register', redirectIfAuthenticated, storeUserController);
app.post('/users/login', redirectIfAuthenticated, loginUserController);
app.get('/auth/logout', logoutController);
app.get('/profiles', profilesController);
app.get('/profile/:id', validateMiddleware, profileController);
app.post('/schedule/store', storeScheduleController)
app.get('/scheduling',authMiddleware, scheduleController);

///////////////////////////////////////////////////////////
// Reviews
app.get('/auth/createReview', newReviewController);
app.post('/reviews/store', storeReviewController);

app.use((req, res) => res.render('error'))


