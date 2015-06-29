/**
 * 在浏览器端的事件驱动
 * $('#btn').click(function(){
 *      alert('aa');
 * });
 */
var http = require('http');
var fs = require('fs');

/*
创建http服务器
var server = http.createServer(function(req,res){

});

server.listen(8080);*/

//以异步的方式读取1.md文件
fs.readFile('1.md',function(err,data){
    console.log('read over');
});
console.log('1');
//从结果可以看出先执行同步方法，再执行异步方法