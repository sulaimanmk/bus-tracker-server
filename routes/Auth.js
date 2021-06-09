const express = require('express');
const router = express.Router();
const {login, logout, register  } = require('../controllers/AuthController');

router.route('/login').post(LogIn);

router.route('/logout').post(LogOut);

router.route('/register').post(Register);



module.exports = router;