var express = require('express');
// var mongo=require("mongodb");
var router = express.Router();
// var mongoose = require('mongoose');
// var user = require('../models/user').user;
// var settings = require('../settings');
// mongoose.connect('mongodb://localhost/hello-world');
// mongoose.connect(settings.host,settings.db);  //第二种链接方式
var userService = require('../service/UserService');
var newsService = require('../service/NewsService');


/* GET home page. */
router.get('/', function(req, res) {
	// list["user"]={
	// 	"userid": "String",
 //        "password": "String"
	// }
	// res.json(list);
  	 res.render('index', { title: 'index' });
});

/*login*/
router.get('/login', function(req, res) {
 	 res.render('login', { title: 'login' });
});
/*register*/
router.get('/reg', function(req, res) {
  	res.render('reg', { title: 'register' });
});
/*logout*/
router.get('/logout', function(req, res) {
  	res.render('logout', { title: 'logout' });
});

/*alluser*/
router.get('/list',function(req,res){
	res.render('list',{title:'alluser'});
});

/*hompage*/
router.post('/homepage', function(req, res) {
	var us = new userService();
	var query_doc = {userid: req.body.userid, password: req.body.password};
	(function(){
		us.count(query_doc, function(err, doc){
			if(err!=null){
				res.json(err);
				return;
			}
			if(doc){
				console.log(query_doc.userid + ": login success in " + new Date());
				res.render('homepage', { title: 'homepage' ,user:query_doc.userid});
			}else{
				console.log(query_doc.userid + ": login failed in " + new Date());
				res.redirect('/');
			}
		});
	})(query_doc);
});

router.get('/alluser',function(req,res){
	var userid = {};
	var us = new userService();
	var result = us.find(userid,function(err,user){
		if(user){
			res.render('list',{userlist:user,title:"allUser"});
		}else{
			res.json(err);
		}
	});
});

router.post('/reg',function(req,res){
	var userObj = {
		userid:req.body.userid,
		password:req.body.password
	};
	var us = new userService();
	us.save(userObj,function(err,doc){
		if(err!=null){
			res.json(err);
			return;
		}
		if(doc){
			console.log(userObj.userid + ": register success in " + new Date());
			res.render('login',{title:"Login"});
		}else{
			console.log(userObj.userid + ": register failed in " + new Date());
			res.render('/',{title:"index"});
		}
	});
});

module.exports = router;