/**
 * 事件驱动
 * $('#btn').click(function(){
 *      alert('aa');
 * });
 */
var http = require('http');
var fs = require('fs');

/*
var server = http.createServer(function(req,res){

});

server.listen(8080);*/


fs.readFile('1.md',function(err,data){
    console.log('read over');
});
console.log('1');