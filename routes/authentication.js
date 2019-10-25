const User = require('../models/user');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

module.exports=function(router){
    router.post('/register', function(req, res){
        if(!req.body.email){
            res.json({success: false, message: 'You must provide an email.'});
        } else {
            if(!req.body.username){
                res.json({success: false, message: 'You must provide a username.'});
            }
            else{
                if(!req.body.password){
                    res.json({success: false, message: 'You must provide a password.'});
            }
            else{
                let user = new User({
                    email: req.body.email.toLowerCase(),
                    username: req.body.username.toLowerCase(),
                    password: req.body.password
                })
                user.save(function(err){
                    if(err){
                        if(err.code === 11000){
                            res.json({success: false, message: 'Username/Email already Exists.'});
                        }
                        else if(err.errors.email){
                            res.json({success: false, message: err.errors.email.message});
                        }
                        else if(err.errors.username){
                            res.json({success: false, message: err.errors.username.message});
                        }
                        else if(err.errors.password){
                            res.json({success: false, message: err.errors.password.message});
                        }
                    }
                    else{
                        res.json({success: true, message: 'Registration Successful'});
                    }
                });
            }
        }
    }
    });

    router.post('/login', (req, res) =>{
        if(!req.body.username){
            res.json({ success: false, message: "No username provided"});
        } else {
            if(!req.body.password){
                res.json({ success: false, message: "No password provided"});
            }
         else {
            User.findOne({username: req.body.username.toLowerCase()}, (err, user) =>{
                if(err){
                    res.json({ success: false, message: err});
                } else {
                    if(!user){
                        res.json({ usccess: false, message: "User not found"});
                    }
                    else{
                        const pass = user.comparePassword(req.body.password);
                        if(!pass){
                            res.json({success: false, message: 'Password invalid'});
                        }
                        else{
                            const token = jwt.sign({
                                userId: user._id
                            }, config.secret, {expiresIn: '24h'});
                            res.json({success: true, message: "logged in", token: token, user: {username: user.username}});
                        }
                    }
                }
            });
        }
    }
    });

    // router.use((req,res,next) => {
    //     req.headers['authorization'];
    // })
    
    return router;
}