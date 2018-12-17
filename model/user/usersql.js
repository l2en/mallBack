var user={
	//增
	userinsert:'INSERT INTO `user` (`id`,`userName`,`psw`) VALUES(0001,?,?)',
	userlogin:'SELECT * FROM `user` WHERE userName = ? AND psw = ?',
}

module.exports=user;