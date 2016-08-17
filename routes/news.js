var express = require('express');
var router = express.Router();

var newsService = require('../service/NewsService');

module.exports = router;

/* GET users listing. */
router.get('/', function(req, res, next) {
	// res.render('addNews',{title:"AddNews"});
	// console.log(req.params);
  	res.send('respond with a resource  ');
  	// res.send("id: "+req.query.id+"  password: "+req.query.password);
  	// next();	
});

router.get("/list/:id",function(req,res,next){
	res.send('respond with a resource  '+req.params.id);
	res.json();
});

/*news*/
router.get('/addNews',function(req,res){
	res.render('addNews',{title:"AddNews"});
});
/*news*/
router.get('/newsList',function(req,res){
	var newsObj = {};
	var us = new newsService();
	var result = us.find(newsObj,function(err,doc){
		if(doc){
			res.render('newsList',{newslist:doc,title:"NewsList"});
		}else{
			res.json(err);
		}
	});
});


/*添加新闻*/ 
router.post('/addNews', function(req, res) {
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
		if(doc){
			console.log(newsObj.title + ": save success in " + new Date());
			res.redirect('/news/newsList');
		}else{
			console.log(newsObj.title+ ": save failed in " + new Date());
			res.render('/',{title:"index"});
		}
	});
});