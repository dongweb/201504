var util = require('util');
//声明一个构造函数
function Parent(){
    this.name = 'father';//定义自己的私有属性name
    this.age = 6;//定义自己的私有属性age
    this.say = function(){//定义自己的私有属性say
        console.log('hello '+this.name);
    }
}
//在原型上定义一个方法
Parent.prototype.showName = function(){
    console.log(this.name);
}
//定义子类
function Child(){
    Parent.call(this);//以child作为this调用父类的构造函数，得到父类的私有属性
    this.name = 'child';//定义自己的私有属性name 会覆盖父类的私有属性
}
//util.inherits(Child,Parent);//让子类继承父类
Child.prototype = new Parent();//这是原理
var p = new Parent();//创建父类对象
p.showName();//father 调用父类的showName方法，输出父类的名称 因为是用p来调用的，所以this就是p
p.say();//hello father 调用父类的say方法，输出父类的名称
var c =  new Child();//创建子类对象
c.showName();//child 调用子类的showName方法，输出子类的名称 因为是用p来调用的，所以this就是p
c.say();//hello child 调用子类的say方法，输出子类的名称

function Person(){ //构造函数
    this.name = 'zfpx'; //私有属性
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