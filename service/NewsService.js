var mongodb = require('../dao/mongodb');

module.exports = function (){
	this.config ={
		table_name:"news"
	},
	//获取数据
	this.find = function(newsObj,callback){
		mongodb.find(this.config.table_name,{},newsObj,function(err,data){
			return callback(null,data);
		});
	},
	this.save = function(newsObj,callback){
		mongodb.save(this.config.table_name,newsObj,function(err,data){
			if(err) return callback(err);
			if(data){
				return callback(null,data);
			}
		});
	}
};


