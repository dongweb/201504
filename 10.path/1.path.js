var path = require('path');
var fs = require('fs');
var out = fs.createReadStream();
out.on('data');
/**
 * normalize 将非标准的路径 转化为标准路径
 * 1.解析  . ..
 * 2.多个斜杠转化为一人
 * 3.正斜杠 和 反斜杠 转换
 * 4.如果以斜杠结尾，保留斜杠
 **/
console.log(path.normalize('.//a////b//d'));

console.log(path.join(__dirname,'a','b','c'));
//__dirname/a/b/c
//返回当前文件所属的目录
console.log(path.dirname(__filename));
// 201504

// basename获取一个路径 的文件名
console.log(path.basename(__filename));
console.log(path.basename(__filename,path.extname(__filename)));
console.log(path.extname(__filename));
console.log(path.seq);//文件分隔符
console.log(path.delimiter);//环境变量分隔符 ; :
