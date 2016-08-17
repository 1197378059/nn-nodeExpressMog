var settings = require("../settings");
var mongo=require("mongodb");

var host=settings.host;
var port=settings.port;
var server=new mongo.Server(host,port,{auto_reconnect:true});//创建数据库所在的服务器服务器
module.exports=new mongo.Db(settings.db,server,{safe:true});//创建数据库对象