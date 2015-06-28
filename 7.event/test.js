var EventEmitter = require('events').EventEmitter;
var util = require('util');
function Person(name){
    this.name = name;
}
util.inherits(Person, EventEmitter);
var p = new Person();
/**
 * addListener(event,listener); 增加监听
 * on(event,listener)增加监听
 * once(event,listener) 只监听一次
 * removeListener 解除监听
 * removeAllListeners(event) 解除监听
 * emit(event) 发射事件
 * @type {Person}
 */
p.addListener('今天没学会',function(str){
    console.log('晚上放学找老师'+str)
});
p.emit('今天没学会','继续问');
p.on('微信发红包',function(str){
    console.log('赶紧去抢'+str);
})
p.emit('微信发红包','，一个不留');
p.once('我要吃米线',function(str){
    console.log('再加点酱香饼'+str)
});
p.emit('我要吃米线','来瓶饮料');
function eat(){
    console.log('我饿了');
}
function drink(){
    console.log('我渴了');
}
p.once('中午吃饭',eat);
p.once('中午吃饭',drink);
//p.removeListener('中午吃饭',eat);
//p.removeAllListeners('中午吃饭');
//p.emit('中午吃饭');
console.log(p.listeners('中午吃饭'));
console.log(EventEmitter.listenerCount(p,'中午吃饭'));