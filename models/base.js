// var mongoose = require("mongoose"); //顶会议用户组件
// var Schema = mongoose.Schema; //创建模型
// var userScheMa = new Schema({
// 	userid:String,
// 	password:String
// });//定义要给新的模型，但是此模式还未和users集合有关联
 
// //与users集合关联
// exports.user = mongoose.model('users',userScheMa);

// var mongodb = require('./mongodb');

// function User(user){
// 	this.userid = user.userid;
// 	this.password = user.password;
// };

module.exports = {};

//存储用户信息
// User.prototype.save = function(callback){
// 	//要存入数据库的用户文档
// 	var user ={
// 		userid:this.userid,
// 		password:this.password,
// 	};
// 	//打开数据库
// 	mongodb.open(function(err,db){
// 		if(err){
// 			return callback(err);
// 		}
// 		//读取users集合
// 		db.collection('users',function(err,collection){
// 			if(err){
// 				mongodb.close();
// 				return callback(err);
// 			}
// 			//将用户数据插入users集合
// 			collection.insert(user,{
// 				safe:true
// 			},function(err,user){
// 				mongodb.close();
// 				if(err){
// 					return callback(err);//错误，返回err信息
// 				}
// 				callback(null,user);//成功：err为null,并返回存储后的用户文档
// 			});
// 		});
// 	});
// };
// User.prototype.get = function(userid,callback){
// 	//打开数据库
// 	mongodb.open(function(err,db){
// 		if(err) return callback(err);
// 		//读取users集合
// 		db.collection('users',function(err,collection){
// 			if(err) {
// 				// console.log("链接失败");
// 				mongodb.close();
// 				return callback(err);
// 			}
// 			collection.find(userid).toArray(function(err,doc){
// 				console.log(userid);
// 				mongodb.close();
// 				if(err){return callback(err);}
// 				callback(null,doc);
// 			});
// 		});
// 	});
// };
// User.prototype.count = function(user,callback){
// 	//打开数据库
// 	mongodb.open(function(err,db){
// 		if(err){
// 			return callback(err);
// 		}
// 		//链接成功
// 		db.collection('users',function(err,collection){
// 			if(err){
// 				mongodb.close();
// 				return callback(err);
// 			}
// 			collection.count(user,function(err,doc){
// 				mongodb.close();
// 				if(err){
// 					return callback(err);
// 				}
// 				callback(null,doc);
// 			});
// 		});
// 	});
// };
//获取全集
// User.prototype.find = function(userid,callback){
// 	mongodb.find('users',{},userid,function(err,data){
// 		return callback(null,data);
// 	});
// }