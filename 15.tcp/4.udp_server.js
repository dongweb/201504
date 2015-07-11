/**
 * TCP是面向连接的协议
 * UDP面向非连接的协议，可以直接发送数据
 *
 * 有可能丢包
 * 资源 消耗少 处理速度 快
 **/

var dgram = require('dgram');
var util = require('util');
var server = dgram.createSocket('udp4',function(msg,rinfo){
    console.log('接收到 ',msg.toString());
    console.log(util.inspect(rinfo));
});
server.bind(41234,'192.168.1.157');
