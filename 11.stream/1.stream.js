/**
 * readFile
 * 将文件完整的读入缓存区
 *
 **/

/**
 * read 读取时不断将文件的一小块读入缓存区，然后从缓存区中读取文件
 * 1. 比较麻烦
 * 2. 接收客户端数据的时候无法知道数据的大小，以及数据到达时间
 */

/**
 * 有些时候我们不关心文件的内容，以及文件的大小。
 * 我们只需要关注是否读到的数据，以及读到数据应该如何处理。
 * 流是有序，有起点终点的，字节传输手段
 *
 */
var fs = require('fs');
var rs = fs.createReadStream('./target',{ highWaterMark: 1024});
rs.on('open',function(){
    console.log('文件打开了');
});
rs.pause();
setTimeout(function(){
    rs.resume();
},2000);
rs.on('data',function(data){
console.log('data');
});
rs.on('end',function(){
    console.log('文件关闭');
});

/*
 * 流的读取方式有两种 上面的叫流动模式
 * 还有非流动模式
 *
 */
/*
var rs = fs.createReadStream('./65k',{ highWaterMark: 64*1024});
var arr = [];
rs.on('readable',function(){
    console.log('readable');
    var data;
      /!*  while(null != (data = rs.read(1024*65))){
            arr.push(data);
        }*!/
});
rs.on('end',function(){
    var b = Buffer.concat(arr);
    console.log(b);
});*/
