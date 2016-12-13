var
    http = require('http'),
    url = require('url'),
    util = require('util'),
    fs = require('fs');
//F:\My-Node\MyNode\lesson\http\templates
FILE = 'e:/MyNode/MyNode/lesson/http/templates';

var Server = http.createServer(function (req, res) {
    //req 依赖 客户端发送的请求
    //res 返回 服务端返回给客户端的响应
    res.writeHead('200', {'Content-Type': 'text/html'}); // mime
    //获取客户端输入的地址
    // console.log(url.parse(req.url).pathname);
    //定位到真实的文件
    var htmlUrl =  FILE + url.parse(req.url).pathname;

    if( url.parse(req.url).pathname != '/favicon.ico'){ //favicon 图标找不到会报错
        // fs
        var data = fs.readFileSync(htmlUrl,'utf-8'); //从源文件读取文件的内容
        res.write(data);
    }

    res.end();
});
console.log(' noden run @127.0.0.1:8888');
Server.on('connection',function(){
    console.log('connected!');
});
Server.listen(8888);

