var http = require('http');
//建立服务器

var server = http.createServer(waiter);

function waiter(req,res){
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    var url = req.url;
    var urlObj = {};
    if(url.indexOf('?')>0){
        var urls = url.split('?');
        var pathname = urls[0];
        var queries = urls[1].split('&');
        queries.forEach(function(query){
            var q = query.split('=');
            urlObj[q[0]] = q[1];
        })
    }
    if(pathname == '/menu'){
        res.end('<ul><li><a href="/chicken">黄焖鸡</a></li><li><a href="/leg">鸡腿饭</a></li></ul>');
    }else if(pathname == '/chicken'){
        res.end('客官，黄焖鸡来了 。');
    }else if(pathname == '/leg'){
        res.end('客官，鸡腿饭'+urlObj['num']+'份来了 。');
    } else{
        res.end(url);
    }


}
server.listen(8080,'localhost');

/**
 * 1xx 请求被授理，正在处理中，请稍后
 * 2xx 服务器已经接收并理解处理
 * 3xx 重写向 需要客户端进一步请求 会在返回的header中入location(地址)
 * 4xx 请求错误  客户端发生错误，妨碍了服务器的处理。
 * 5xx 服务器端错误
 **/