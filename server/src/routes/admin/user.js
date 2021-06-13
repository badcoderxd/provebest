const express = require('express');
const { signUp, login, requireLogin, logout } = require('../../controller/admin/auth');
const { validateRequest, isRequestValidated } = require('../../validators/auth');
const router = express.Router();

router.post('/admin/signup', validateRequest, isRequestValidated, signUp );

router.post('/admin/login', login );

router.post('/admin/logout', requireLogin, logout)


module.exports = router;