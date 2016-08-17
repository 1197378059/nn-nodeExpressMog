var express = require('express');
var router = express.Router();

var newsService = require('../service/NewsService');

/* GET users listing. */
router.get('/', function(req, res, next) {
	// res.render('addNews',{title:"AddNews"});
	console.log(req.params);
  	res.send('respond with a resource  '+req.params);
  	// res.send("id: "+req.query.id+"  password: "+req.query.password);
});

/*news*/
router.get('/news/addNews',function(req,res){
	res.render('addNews',{title:"AddNews"});
});
/*news*/
router.get('/news/newsList',function(req,res){
	res.render('newsList',{title:"newsList"});
});

/*添加新闻*/ 
router.post('/news/addNews', function(req, res) {
	var us = new newsService();
	var newsObj = {
		title:req.body.title,
		content:req.body.content,
		createTime:new Date().toLocaleString(),
		updateTime:new Date().toLocaleString(),
		publicTime:new Date().toLocaleString()
	};
	us.save(newsObj,function(err,doc){
		if(err!=null){
			res.json(err);
			return;
		}
		console.log(doc);
		if(doc){
			console.log(newsObj.title + ": save success in " + new Date());
			res.redirect('/news/newsList');
		}else{
			console.log(newsObj.title+ ": save failed in " + new Date());
			res.render('/',{title:"index"});
		}
	});
});

module.exports = router;
