var person = {
    name:'zfpx',
    say:function(words,words2){
        console.log(this.name + ' say '+words,words2);
    }
}

person.say('hello');
var p = {name:'node.js'};
person.say.call(p,'xxx'); // node.js say xxx

var newSay = person.say.bind(p,'myhello');
newSay('hello1','hello2');// node.js say myhello
newSay.call(person);


