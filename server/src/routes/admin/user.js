const express = require('express');
const { signUp, login, requireLogin } = require('../../controller/admin/auth');
const { validateRequest, isRequestValidated } = require('../../validators/auth');
const router = express.Router();

router.post('/admin/signup', validateRequest, isRequestValidated, signUp );

router.post('/admin/login', login );


module.exports = router;