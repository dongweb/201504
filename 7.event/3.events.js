//var EventEmitter = require('events').EventEmitter;

function Event(){

}

Event.prototype.addListener = function addListener(type, listener) {
    if (typeof listener !== 'function')
        throw TypeError('listener must be a function');
    if (!this._events)
        this._events = {};
    if (this._events[type])
        this._events[type].push(listener);
    else
        this._events[type] = [listener];
}

Event.prototype.emit = function emit(type) {
    if (!this._events)
        this._events = {};
    var handler = this._events[type];

    var arr = new Array(arguments.length -1);
    for(var i=1;i<arguments.length;i++)
        arr[i-1] = arguments[i];

    for (var j = 0; j < handler.length; j++)
        handler[j].apply(this, arr);
}

function Girl(){

}
Girl.prototype = new Event();
//构建女神，好我人追哦
var girl = new Girl();
function Boy(){

}
var tuhao = new Boy();
tuhao.comfort = function(thing){
    console.log('tuhao:喜欢吗？喜欢我就买'+thing+'给你');
}
girl.addListener('看了好久好久',tuhao.comfort);

var diaosi = new Boy();
diaosi.comfort = function(thing){
    console.log('diaosi:喜欢吗？喜欢就多看'+thing+'一会');
}
girl.addListener('看了好久好久',diaosi.comfort);


girl.emit('看了好久好久','apple watch');
//凤姐没人追