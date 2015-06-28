var util = require('util');
function Parent(){
    this.name = 'father';
    this.age = 6;
    this.say = function(){
        console.log('hello '+this.name);
    }
}
Parent.prototype.showName = function(){
    console.log(this.name);
}
function Child(){
    Parent.call(this);
    this.name = 'child';
}
//util.inherits(Child,Parent);
Child.prototype = new Parent();
var p = new Parent();
p.showName();//father
p.say();//hello father
var c =  new Child();
c.showName();
c.say();

function Person(){
    this.name = 'zfpx';
    this.toString = function(){
        return this.name;
    }
}
var p = new Person();
console.log(p.toString());
// legacy: obj, showHidden, depth, colors*/
console.log(util.inspect(p,false));

console.log(util.isArray([]));//判断是否一个数组
console.log(util.isRegExp('dd'));
console.log(util.isDate(new Date()));
console.log(util.isError(new Error));