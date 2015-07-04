
var fs = require('fs');

function a(){
    try{
        b();
    }catch(ex){
        console.log(ex.message);
    }

}

function b(){
  setTimeout(function(){
      error();
  },2000)
}

a();