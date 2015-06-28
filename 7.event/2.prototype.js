/**
 * 通过原型和构造函数生成对象
 * 1.构造函数内定义的属性继承方式与原型对象不同，
 *  需要子类调用call 才能继承
 * 2.构造函数内部的任何属性包括 函数在内会被重复创建,不同对象不共享实例
 * 3.构造函数运行的有闭包的开销。
 **/

function Person(){

}

Person.prototype.name = 'zfpx';
Person.prototype.showName = function(){
    console.log(this.name === this.__proto__.name);
}
var person = new Person();
//person.showName();



function Animal(name,food){
    this.food = food;
    this.name = name;
    this.getName = function(){
        return this.name;
    }
}

Animal.prototype.food = 'meat';
Animal.prototype.eat = function(){
    console.log('I am eating '+this.food);
}
var tiger = new Animal('tiger');
var mouse = new Animal('mouse','rice');
console.log(tiger.getName == mouse.getName);
console.log(tiger.eat == mouse.eat);
console.log(tiger.getName());
tiger.eat();//I am eating meat /undefined
mouse.eat();//I am eating rice

function aa(){
    var a = 'a';
    function b(){
        var a = undefined;
        console.log(a);

    }
    b();
}
//aa();//
/**
 * 原型链
 * Object Function 都是构造函数 ，用于生成对象
 * 所有的构造函数，包括 Object 都是Function构造函数的实例
 * Object.prototype是所有对象的祖先
 * Function.prototype是所有函数的祖先
 *
 **/

function Foo(){

}

Object.prototype.name ='zfpx';
Foo.prototype.name = 'foo';

var obj = new Object();
var foo = new Foo();

console.log(obj.name);//zfpx
console.log(foo.name);//foo
console.log(foo.__proto__.name);//foo
console.log(foo.__proto__.__proto__.name);//zfpx
console.log(foo.__proto__.constructor.prototype.name);


