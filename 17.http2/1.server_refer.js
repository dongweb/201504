var http = require('http');
var url = require('url');
var fs = require('fs');
/**
 *
 */
var server = http.createServer(function(req,res){
    var urlObj = url.parse(req.url,true);
    var pathname = urlObj.pathname;
    if(pathname =='/'){
        fs.createReadStream('./img.html').pipe(res);
    }else if(pathname =='/post'){

    }

}).listen(8080);