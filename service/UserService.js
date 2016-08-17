var mongodb = require('../dao/mongodb');

module.exports = function (){
	this.config ={
		table_name:"users"
	},
	//获取数据
	this.find = function(userid,callback){
		mongodb.find(this.config.table_name,{},userid,function(err,data){
			return callback(null,data);
		});
	},
	this.save = function(user,callback){
		mongodb.save(this.config.table_name,user,function(err,data){
			if(err) return callback(err);
			if(data){
				return callback(null,data);
			}
		});
	},
	this.count = function(user,callback){
		mongodb.findOne(this.config.table_name,user,function(err,data){
			return callback(null,data);
		});
	}
};


