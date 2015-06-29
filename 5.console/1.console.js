var name = 'zfpx';
console.log(name);
var age = 'age';
console.log(age);

/**
 * 全局对象 global->window
 * 在程序的任何地方都可以访问
 *
 **/

//console.log(global);

//log 标准输出输出流
console.log('hello');

console.log('%s','zfpx');//字符串
console.log('%j',{name:'zfpx'});//对象转JSON// 描述字符串
console.log('%d',99.99);//数字转化为数字
console.log('%s',99.99);//数字转字符串
console.log('%d','99.99');//字符串转数字

console.log("1+1");//原样输出
console.log(1+2);//还可以执行数学表达式
var a =2,b ='2';
console.log(a+b);//可以实现数字和字符串拼接
console.log(a==b);//执行布尔表达式
//node 1.console.js > result.log 2>&1
console.warn('warn');//输出警告
console.error('error');//输出错误信息

console.log(' %s %d','zfpx',6);//可以同时输出多个格式化字符

console.log(JSON.stringify({name:'zfpx'}));//JSON对象转字符串

console.dir({name:'zfpx'});//dir 是把对象转字符串
//输出当前的堆栈信息
//console.trace();
//执行断言，如果为true不进行任何操作，如果为false会报错
console.assert(2==1);



