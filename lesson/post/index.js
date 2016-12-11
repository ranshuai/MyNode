var
    http = require('http'),
    url = require('url'),
    util = require('util'),
    fs = require('fs'),
    queryString = require('querystring');
//F:\My-Node\MyNode\lesson\http\templates
FILE = 'f:/My-Node/MyNode/lesson/post';

var Server = http.createServer(function (req, res) {
    //req 依赖 客户端发送的请求
    //res 返回 服务端返回给客户端的响应
    //获取客户端输入的地址
    // console.log(url.parse(req.url).pathname);
    //定位到真实的文件
    var htmlUrl = FILE + url.parse(req.url).pathname;
    var pathname = url.parse(req.url).pathname;


    if (pathname == '/index') {
        //fs.readFile 以异步的方式读取文件内容。
        fs.readFile('index.html', 'utf-8', function (err, data) {
            if (err) {
                console.log('Server.error:101');
            } else {
                console.log('Server:200');
                res.writeHead(200,{'Content-Type': 'text/html'});
                res.write(data);
                res.end();
            }
        });
    }else if(pathname == '/post'){
        console.log('post')
        //获取post提交的数据
        var post = '';
        //调用客户端是数据事件 如果有事件就会触发
        req.on('data',function(chunk){
            post += chunk;
        });
        //事件结束了
        req.on('end',function(){
            //把字符串转换成obj
            post = queryString.parse(post);
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write('name is :'+post.name);
            res.end();
        });



    }
    else {
        res.writeHead('404', {'Content-Type': 'text/html'}); // mime
        res.end('404');
    }

});
Server.listen(8080);
console.log('127.0.0.1:8080');