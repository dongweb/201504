/*
  1. 创建TCP服务器
  2. 可以接收客户端的连接
  3. 可以统计当前的连接数
  4. 可以接收用户的聊天信息并广播
  5. 当用户退出的时候进行广播
 */

var net = require('net');
var util = require('util');
var clients  = {};
var count = 0;
var server = net.createServer(function(socket){
    socket.write('欢迎光临，当前有'+count+'人在聊天,请设置呢称\r\n');
    var nickname;
    socket.setEncoding('utf8');
    socket.on('data',function(chunk){
        if(nickname){
            broadcast(nickname+":"+chunk+'\r\n');
        }else{
            if(clients[chunk]){
                socket.write('你这个呢称被别人用了\r\n');
            }else{
                chunk = chunk.replace(/\r\n/,'');
                nickname = chunk;
                clients[nickname] = socket;
                count ++;
                broadcast('SYSTEM:'+nickname+'来到了聊天室');
            }
        }
    });
    socket.on('close',function(){
        count --;
        delete clients[nickname];
        socket.destroy();
        broadcast('SYSTEM:'+nickname+'离开了聊天室');
    });
});

function broadcast(msg){
    for(var nickname in clients){
        clients[nickname].write(msg);
    }
}

server.listen(8080,'0.0.0.0');
