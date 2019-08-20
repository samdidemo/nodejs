const express=require('express')
var server=express()
var users={'zhangsan':'12345','lisi':12345,'wangwu':12345}
server.get('/login',function(req,res){
  var user=req.query['user']
  var password=req.query['password']
  console.log(user,password)
  if(users[user]==null){
    res.send({'ok':false,'msg':'不存在这个用户'})
  }else if(users[user]!=password){
    res.send({'ok':false,'msg':'密码错误'})
  }else{
    res.send({'ok':true,'msg':'登录成功'})
  }
})
server.listen(8080)
