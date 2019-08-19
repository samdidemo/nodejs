const express=require('express')
const expressStatic=require('express-static')
var server=express();
//使用express实现简单的后台接口
server.use('/user',function(req,res){
  res.send("用户信息")
})
server.use('/department',function(req,res){
  res.send("部门信息")
})
//使用express-static实现静态资源获取接口
server.use(expressStatic('./static/html'))
server.listen(8080)
