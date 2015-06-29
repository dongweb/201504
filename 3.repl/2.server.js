var http = require('http');

//当连接到来的时候要执行的回调函数
function waiter(req,res){
    //向客户端写响应码和头信息 设置内容类型为 html格式，并设置字符编码
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    //得到请求的URL
    var url = req.url;
    var urlObj = {};
    //解析URL，得到查询对易用 ? 用来分隔路径和查询字符串 比如中    /post?name=zfpx&age=6
    if(url.indexOf('?')>0){
        var urls = url.split('?');
        var pathname = urls[0];
        var queries = urls[1].split('&');//&用来分割不同的字段
        queries.forEach(function(query){
            var q = query.split('=');
            urlObj[q[0]] = q[1];
        })
    }
    //当路径是/menu的时候
    if(pathname == '/menu'){
        //end表示向客户端写入内容并结束响应
        res.end('<ul><li><a href="/chicken">黄焖鸡</a></li><li><a href="/leg">鸡腿饭</a></li></ul>');
    }else if(pathname == '/chicken'){
        res.end('客官，黄焖鸡来了 。');
    }else if(pathname == '/leg'){
        res.end('客官，鸡腿饭'+urlObj['num']+'份来了 。');
    } else{
        res.end(url);
    }


}
//建立服务器
var server = http.createServer(waiter);
//在本机的8080端口上进行监听客户端请求
server.listen(8080,'localhost');

/**
 * 1xx 请求被授理，正在处理中，请稍后
 * 2xx 服务器已经接收并理解处理
 * 3xx 重写向 需要客户端进一步请求 会在返回的header中入location(地址)
 * 4xx 请求错误  客户端发生错误，妨碍了服务器的处理。
 * 5xx 服务器端错误
 **/