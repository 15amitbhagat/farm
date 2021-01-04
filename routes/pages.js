const express = require('express');

const authController = require('../controllers/authf');
const authControllerl = require('../controllers/authl');
const authControllerc = require('../controllers/authc');
const authControllers = require('../controllers/auths');

const router = express.Router();


//homepage
router.get('/', (req, res) => {
    res.render('index');
});

//index page of farmer
router.get('/indexf',authController.isLoggedInf, (req, res) => {
    res.render('indexf',{
        user:req.user
    });
});

//register page of farmer
router.get('/registerf', (req, res) => {
    var message = '';
    res.render('registerf',{message:message});
});


//login page of farmer
router.get('/loginf', (req, res) => {
    var message = '';

    res.render('loginf',{message:message});
});


//profile page of farmer
router.get('/profilef',authController.isLoggedInf, (req, res) => {

    if(req.user){
        res.render('profilef',{
            user:req.user
        });
    }
    else{
        res.redirect('/loginf');
    }
    
});

//add product page by farmer

router.get('/addproductf', authController.isAddProductf, (req, res) => {

    if(req.user){
        res.render('addproductf',{
            user:req.user
        });  
    }
    else{
        res.redirect('/loginf');
    }
    
});


//view labour page for farmer

router.get('/viewlabourf', authController.isAddProductf, (req, res) => {

    if(req.user){
        res.render('viewlabourf',{
            user:req.user
        });  
    }
    else{
        res.redirect('/loginf');
    }
    
});

//buy tools for farmer

router.get('/buytoolf', authController.isAddProductf, (req, res) => {

    if(req.user){
        res.render('buytoolf',{
            user:req.user
        });  
    }
    else{
        res.redirect('/loginf');
    }
    
});



//index page of labour
router.get('/indexl',authControllerl.isLoggedInl, (req, res) => {
    res.render('indexl',{
        user:req.user
    });
});

//register page of labour
router.get('/registerl', (req, res) => {
    var message="";
    res.render('registerl',{
       message:message 
    });
});


//login page of labour
router.get('/loginl', (req, res) => {
    var message="";
    res.render('loginl',{message:message});
});

//profile page of labour
router.get('/profilel',authControllerl.isLoggedInl, (req, res) => {
    
    if(req.user){
        res.render('profilel',{
            user:req.user
        });
    }
    else{
        res.redirect('/loginl');
    }
});

//add profile page bylabour
router.get('/addprofilel',authControllerl.isLoggedInl, (req, res) => {
    
    if(req.user){
        res.render('addprofilel',{
            user:req.user
        });
    }
    else{
        res.redirect('/loginl');
    }
});


//index page of customer
router.get('/indexc',authControllerc.isLoggedInc, (req, res) => {
    res.render('indexc',{
        user:req.user
    });
});

//register page of customer
router.get('/registerc', (req, res) => {
    var message="";
    res.render('registerc',{message:message});
});



//login page of customer
router.get('/loginc', (req, res) => {
    var message="";
    res.render('loginc',{message:message});
});


//profile page of customer
router.get('/profilec',authControllerc.isLoggedInc, (req, res) => {
    if(req.user){
        res.render('profilec',{
            user:req.user
        });
    }
    else{
        res.redirect('/loginc');
    }
});

//buy product page  of customer
router.get('/buyproductc',authControllerc.isLoggedInc, (req, res) => {
    if(req.user){
        res.render('buyproductc',{
            user:req.user
        });
    }
    else{
        res.redirect('/loginc');
    }
});


//index page of seller
router.get('/indexs',authControllers.isLoggedIns, (req, res) => {
    res.render('indexs',{
        user:req.user
    });
});

//register page of seller
router.get('/registers', (req, res) => {
    var message="";
    res.render('registers',{message:message});
});


//login page of seller
router.get('/logins', (req, res) => {
    var message="";
    res.render('logins',{message:message});
});

//profile page of seller
router.get('/profiles',authControllers.isLoggedIns, (req, res) => {
    if(req.user){
        res.render('profiles',{
            user:req.user
        });
    }
    else{
        res.redirect('/logins');
    }
});


//ADD product by seller
router.get('/addproducts',authControllers.isLoggedIns, (req, res) => {
    if(req.user){
        res.render('addproducts',{
            user:req.user
        });
    }
    else{
        res.redirect('/logins');
    }
});

module.exports = router;