/**
 * nextTick
 *
 */
/*
function say(){
    console.log('say');
}

//setTimeout(say,0);

//process.nextTick(say);
//console.log('next');

setImmediate(say);

console.log('next');*/

setImmediate(function(){
    console.log('setImmediate延迟1');
});
setImmediate(function(){
    console.log('setImmediate延迟2');
});
process.nextTick(function(){
    console.log('nextTick延迟1');
});
process.nextTick(function(){
    console.log('nextTick延迟2');
});
process.nextTick(function(){
    console.log('nextTick延迟3');
});
console.log('next');
process.stdin.on('data',function(chunk){
    process.stdout.write(chunk);
});
process.on('uncaughtException',function(err){
    console.log(err);
});

//ddd();

