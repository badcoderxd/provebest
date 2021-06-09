const express = require('express');
const { signUp, login, requireLogin } = require('../controller/auth');
const { validateRequest, isRequestValidated } = require('../validators/auth');
const router = express.Router();

router.post('/signup', validateRequest, isRequestValidated, signUp );

router.post('/login', login );

router.get('/profile',requireLogin,(req,res)=>{
    res.status(200).json({
        message:"hello"
    });
});

module.exports = router;