const http=require('http');
const urllib=require('url');
var server=http.createServer(function(req,res){
  var str='';
  var i=0
  req.on('data',function(data){
    console.log('��',i++,'���յ�����');
    str=str+data;
  })
  req.on('end',function(){
    console.log(str)
  })
})
server.listen(8080)