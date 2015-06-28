

function Emitter(){

}

Emitter.prototype.on =
    function on(type,listener){
    if(typeof listener != 'function'){
        throw TypeError('listener must be a function');
    }
    //如果此属性不存在，则进行初始化
    if(!this._events){
        this._events = {};
    }
    if(this._events[type]){
        this._events[type].push(listener);
    }else{
        this._events[type] = [listener];
    }
}

Emitter.prototype.emit = function emit(type){
    if(!this._events){
        this._events = {};
    }
    var listeners = this._events[type];
    if(listeners)
    listeners.forEach(function(listener){
        listener.apply(this);
    })
}

function Girl(){

}
Girl.prototype = new Emitter();

var girl = new Girl();

girl.on('21years',function(){
    console.log('marry my son');
})
girl.emit('21years');

