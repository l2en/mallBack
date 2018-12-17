var express = require('express');
var router = express.Router();
var user = require('../model/user/userModel')


router.post('/login',function(req,res,next){
	user.login(req,res,next);
});

module.exports = router;

