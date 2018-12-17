var express = require('express');
var router = express.Router();

/* GET home page. */
//进入主页面信息
router.get('/', function(req, res, next) {
  res.render('index', { title: '接口测试'});
});

module.exports = router;
