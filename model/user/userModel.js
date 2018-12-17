//实现与mysql交互
var mysql=require('mysql');
var $conf=require('../../conf/db');
var $util = require('../../util/util')
var $sql = require('./usersql')
//使用连接池
var pool  = mysql.createPool($util.extend({}, $conf.mysql));
// 向前台返回JSON方法的简单封装
var toJson = function (res, ret) {
	if(typeof ret === 'undefined') {
		res.json({
			code:'1',
			msg: '操作失败'
		});
	} else {
		res.json(ret);
	}
};

module.exports = {
  // 登录
	login: function (req, res, next) {
		pool.getConnection(function(err, connection) {
			// 获取前台页面传过来的参数
			var param = req.query || req.params;
 			
			connection.query($sql.userlogin, [param.userName, param.psw], function(err, result) {
				toJson(res, result);
				connection.release();
 
			});
		});
  }
}


