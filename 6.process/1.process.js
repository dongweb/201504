/**
 * 在操作系统中，每个应用程序都是一个进程类的对象
 * process
 * 可以在任何模块中访问。
 */

//console.log(process);
var name = 'zfpx';
/**
 *  id: '.', 模块的ID，.代表当前文件 或文件的绝对路径
 exports: {},//导出对象
 parent: null,
 filename: 'd:\\vip_data\\mygit\\201504\\6.process\\1.process.js',
 loaded: false,
 children: [],
 paths:
 */
// on 方法哪来的 ？ 事件的时候解决
//
console.log(process.pid);
process.stdin.on('data',function(chunk){
    process.stdout.write(chunk);
});
//nextTick: [Function: nextTick],
//
//stdout: [Getter],
//    stderr: [Getter],
//    stdin: [Getter],
//exit: [Function],
//    kill: [Function],

process.argv.forEach(function(val){
    console.log(val);
});
process.on('SIGTERM',function(){
    //process.exit();
    console.log('我就不自杀');
});
setTimeout(function(){
    process.kill(process.pid);
},3000);
