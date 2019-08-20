const bodyParser=require('body-parser')
const express=require('express')
var server=express()
server.use('/',function(req,res,next){
  console.log("我是中间件")
  next()
})
server.use('/',function(req,res,next){
  console.log("我是中间件")
})
var users={'zhangsan':'12345','lisi':12345,'wangwu':12345}

server.get('/user/login',function(req,res){
  var username=req.query['username']
  var password=req.query['password']
  res.send({username:username,password:password})
})

server.use(bodyParser.urlencoded({}))

server.post('/user/login',function(req,res){
  var username=req.body.username
  var password=req.body.password
  if(users[username]==null){
    res.send({'ok':false,'msg':'不存在这个用户'})
  }else if(users[username]!=password){
    res.send({'ok':false,'msg':'密码错误'})
  }else{
    res.send({'ok':true,'msg':'登录成功'})
  }
})

server.listen(8080)
