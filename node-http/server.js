const http=require('http');
var server=http.createServer(function(req,res){
  console.log("someone coming");
  console.log(req.url);
  res.write("welcome");
  res.end();
})
server.listen(8080)
