// for Farmer


const mysql = require('mysql');

const jwt = require('jsonwebtoken');

const bcrypt = require('bcryptjs');

const dotenv = require('dotenv');
dotenv.config({ path: '.env' });

const {promisify}=require('util');


const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});


//function for login

exports.loginf=  async(req,res)=>{
    
   try {
       const {email, password}=req.body;

       if(!email || !password){
           return res.status(400).render('loginf',{
               message: 'please provide an e-mail or password'
           })
       } 
       
       db.query('SELECT * FROM farmer WHERE email = ?',[email], async(error,results)=>{
           if(!results || !(await bcrypt.compare(password,results[0].password))){
               res.status(401).render('loginf',{
                   message:'Email or password is incorrect'
               })
           }
           else{
               const id=results[0].id;

               const token =jwt.sign({id:id}, process.env.JWT_SECRET,{
                   expiresIn:process.env.JWT_EXPIRES_IN
               });

               console.log(token);

               const cookieOptions={
                   expires: new Date(
                       Date.now() + process.env.JWT_COOKIE_EXPIRES *24*60*60*1000
                   ),
                   httpOnly: true
               }

               res.cookie('jwt', token, cookieOptions);
               res.status(200).redirect('/indexf'); //change where to redirect after login
           }

       })

   } catch (error) {
       console.log(error);
       
   }
}






exports.registerf = (req, res) => {
    console.log(req.body);

    const { name, email, password, passwordConfirm } = req.body;

    db.query('SELECT email FROM farmer WHERE email= ?', [email], async(error, results) => {
        if (error) { console.log(error); }

        if(!email || !password || !name || !passwordConfirm){
            return res.status(400).render('registerf',{
                message: 'please provide an e-mail or password'
            })
        } 

       else if (results.length > 0) {
            return res.render('registerf', {
                message: 'THIS email is already in use'
            });
        } else if (password !== passwordConfirm) {
            return res.render('registerf', {
                message: 'Password Do not match'
            });
        }

        let hasedPassword = await bcrypt.hash(password, 8);
        console.log(hasedPassword);

        db.query('INSERT INTO farmer SET ?', { name: name, email: email, password: hasedPassword }, (error, results) => {
            if (error) {
                console.log(error);
            } else {
                console.log(results);
                return res.render('registerf', {
                    message: 'User registered'
                });
            }
        })

    });


}



exports.isLoggedInf = async(req, res, next) => {

    // console.log(req.cookie);
    if (req.cookies.jwt) {
        try {
            //verify the token
            const decoded = await promisify(jwt.verify)(req.cookies.jwt,
                process.env.JWT_SECRET);
            console.log(decoded);

            //check if user still exists
            db.query('SELECT * FROM farmer WHERE id = ?', [decoded.id], (error, result) => {
                console.log(result);

                if (!result) {
                    return next();
                }
                req.user = result[0];
                return next();
            });

        } catch (error) {
            console.log(error);
            return next();
        }
    } else {
        next();
    }

}

exports.logoutf = async(req, res) => {
    res.cookie('jwt', 'logout', {
        expires: new Date(Date.now() + 2 * 1000),
        httpOnly: true
    });
    res.status(200).redirect('/indexf');
}


//add product by farmer authentication


exports.isAddProductf = async(req, res, next) => {

    // console.log(req.cookie);
    if (req.cookies.jwt) {
        try {
            //verify the token
            const decoded = await promisify(jwt.verify)(req.cookies.jwt,
                process.env.JWT_SECRET);
            console.log(decoded);

            //check if user still exists
            db.query('SELECT * FROM farmer WHERE id = ?', [decoded.id], (error, result) => {
                console.log(result);

                if (!result) {
                    return next();
                }
                req.user = result[0];
                return next();
            });

        } catch (error) {
            console.log(error);
            return next();
        }
    } else {
        next();
    }

}