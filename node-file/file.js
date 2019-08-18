//引进文件模块FileSystem
const fs=require('fs')
//使用fs进行读取文件，参数为文件名lin.txt，并且有一个回调函数
//参数err，错误信息
//参数data，文件中的数据
fs.readFile('lin.txt',function(err,data){
  if(err){
    console.log("出错了");
  }else{
    console.log("读取成功，内容为",data.toString());//如果不使用toString(),输出的将是一个二进制buffer
    //<Buffer 6d 79 20 6e 61 6d 65 20 69 73 20 6c 69 6e 79 6f 6e 67 62 69... >
  }
});

//格式fs.writeFile(文件名，内容，回调函数)
fs.writeFile("node.txt","this is the text to the node.txt",function(err){
  if(err==null){
    console.log("写入成功");
  }
});
