/**
 *fs.open(path, flags, mode, callback);
 * 路径 模式 权限 回调
 * fd 是一个打开文件索引 是累加的
 * 0 标准输入  1  标准输出 2 错误输出
 */
var fs = require('fs');
fs.open('./msg.txt', 'r', function (err, fd) {
    fs.close(fd);
    console.log(err, fd);
});
fs.open('./msg.txt', 'r', function (err, fd) {
    console.log(err, fd);
});

/**
 * 如何分多次读取文件
 * fs.read();
 * fd, buffer, offset, length, position, callback
 *    fd 文件索引
 *    buffer 把文件内容读到哪个buffer里
 *    offset buffer偏移量 从哪个字节开始写起
 *    length 从文件中读取的字节数
 *    position 文件中读取的开始位置
 */
/**
 * 1、改为同步的方式
 2. 先读盗墓再读笔记
 http://nodeapi.ucdok.com/#/api/fs.html
 */
//var fd = fs.openSync('./msg.txt');
//var bytesRead = fs.readSync(fd,buff,0,6,3);
fs.openSync('./msg.txt', 'r', function (err, fd) {
    var buff = new Buffer(9);
    //先读 "墓笔"
    fs.read(fd, buff, 0, 6, 3, function (err, bytesRead) {
        console.log(bytesRead, buff.slice(0, bytesRead).toString());
        fs.read(fd, buff, 6, 3, 9, function (err, bytesRead) {
            console.log(bytesRead, buff.toString());
        });
    });
});


var fd = fs.openSync('./msg.txt', 'r');
var buff = new Buffer(12);
var bytesRead = fs.readSync(fd, buff, 0, 6, 0);
var bytesRead2 = fs.readSync(fd, buff, 6, 6, 6);
console.log(bytesRead, buff.slice(0, bytesRead).toString());
console.log(bytesRead2, buff.slice(bytesRead, bytesRead + bytesRead2).toString());


