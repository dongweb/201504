var EventEmitter = require('events').EventEmitter;
var util = require('util');

function LineReader(){

}

util.inherits(LineReader,EventEmitter);

var obj = new LineReader();
obj.on('newListener',function(eventName,func){
    console.log(eventName,func);
});

obj.on('xxx',function(name,age){
    console.log(name,age);
});

obj.emit('xxx','zfpx',6);
