var dgram = require('dgram');
var util = require('util');
var client = dgram.createSocket('udp4');
var buffer = new Buffer('你好');
/**
 * buffer 发送的数据
 * offset 偏移量
 * length 长度
 * port 服务器端口号
 * address 服务器端地址
 */
client.send(buffer,0,buffer.length,41234,'192.168.1.157');
