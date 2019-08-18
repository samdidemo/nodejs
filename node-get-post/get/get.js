const http=require('http');
const urllib=require('url');
var server=http.createServer(function(req,res){
  if(req.url.indexOf('?')){
    var obj=urllib.parse(req.url,true);
    var pathname=obj.pathname;
    var parmeter=obj.query;
    console.log(pathname,parmeter);
    res.write(parmeter.user+parmeter.password);
    res.end();
  }
})
server.listen(8080)
