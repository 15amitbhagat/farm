const express = require('express');
const authController = require('../controllers/authf');
const authControllerl = require('../controllers/authl');
const authControllerc = require('../controllers/authc');
const authControllers = require('../controllers/auths');

const router = express.Router();




//register page of farmer
router.post('/registerf', authController.registerf);


//Login  page of farmer
router.post('/loginf', authController.loginf);

//logout page of farmer

router.get('/logoutf',authController.logoutf);


//register page oflabour
router.post('/registerl', authControllerl.registerl);

//Login  page of labour
router.post('/loginl', authControllerl.loginl);

//logout page of labour

router.get('/logoutl',authControllerl.logoutl);


//register page of customer
router.post('/registerc', authControllerc.registerc);

//Login  page of customer
router.post('/loginc', authControllerc.loginc);

//logout page of customer

router.get('/logoutc',authControllerc.logoutc);


//register page of Seller
router.post('/registers', authControllers.registers);


//Login  page of seller
router.post('/logins', authControllers.logins);

//logout page of seller

router.get('/logouts',authControllers.logouts);

module.exports = router;