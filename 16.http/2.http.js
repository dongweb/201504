/**
 * 业务逻辑分发
 */
var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function(req,res){
 var handler = {
     article:{
         add:function(req,res,args){
            res.end('add '+args[0]+' '+args[1]+' successfully');
         },
         delete:function(req,res,args){
             res.end('delete '+args[0]+' successfully');
         }
     }
 }
    //handler['article']['add']
    //  xxxx:8080/article/add/:title/:content
    //  xxxx:8080/article/delete/:id
  var pathname = url.parse(req.url).pathname;
  var paths =  pathname.split('/');
  var ctrl = paths[1];
  var action = paths[2];
  var args = paths.slice(3);
  if(handler[ctrl]&&handler[ctrl][action]){
      handler[ctrl][action].apply(null,[req,res,args]);
  }else{
      res.writeHead(500);
  }
}).listen(8080);
