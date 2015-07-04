/**
 * 通过流向文件里写入数据
 *
 */
var fs = require('fs');
var ws = fs.createWriteStream('target');
ws.write('hello');
ws.end('over');
