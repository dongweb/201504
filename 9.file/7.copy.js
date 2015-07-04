var fs = require('fs');
var BUFFER_SIZE = 3;
/**
 * fs.writeSync(fd, buffer, offset, length, position)
 *  fd 文件描述符，要写入的文件
 *  buffer 从个缓存区开始读
 *  offset 从缓存区里面读的开始位置
 *  length 读取的字节数
 *  position 写入文件的开始位置
 * @param src
 * @param desc
 */
function copy(src,desc){
    //读到的位置 来源fd 目标fd 实际读到的字节数
    var readSoFar,fdsrc,fddest,read;
    var buff = new Buffer(BUFFER_SIZE);
    fdsrc = fs.openSync(src,'r');
    fddest = fs.openSync(desc,'w');
    readSoFar = 0;
    var counter = 0;
    do{
        read = fs.readSync(fdsrc,buff,0,BUFFER_SIZE,readSoFar);
        fs.writeSync(fddest,buff,0,read);
        readSoFar += read;
        console.log(counter++);
    }while(read==BUFFER_SIZE)
    fs.closeSync(fdsrc);
    fs.closeSync(fddest);
}

copy('src','dest');