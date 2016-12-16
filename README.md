
1.在github 上托管源代码
  在npm上发布自己的模块
  在代码中使用第三方的模块包
  这三者形成了node应用的闭环

  1.1npm www.npmjs.com
        npm -v 查看版本号
        npm init 生成pagejson文件
        npm install <name> 安装命令
        npm install <name> -g 全局安装
        npm root 查看当前包的安装路径
        npm root -g 查看全局的安转路径
        npm ls 显示所有的安装包
        npm remove 删除
        npm updata 更新

  1.2node编码规范
        var a = b * c; 运算符前后用空格分开
        var html = '<a href="www.baidu.com"></a>' 字符串使用单引号
        function aa(){ 函数的定义方式
            //code
        }
        一句话结束要用 ; 分号

  1.3命名规范
        1.3.1变量命名  小驼峰命名  首个单词首字母小写后面的单词首字母大写
        1.3.2方法命名  小驼峰命名
        1.3.3类名命名  大驼峰命名  首个单词首字母大写后面的单词首字母大写
        1.3.4常量命名  下划线命名  单词大写   PATH_APP
        1.3.5包命名    不要用 js node 命名

  1.4 == 和 ===
        尽量不要用 === 全等

  1.5异步返回
        functiton aa(err,data){
            //先返回是否成功 err
            //在返回数据 data
        }

  1.6注释规范
        /** 块的注释规范
        *
        */


  版本号的规则
  <version> (0.0.0) 主版本号.次版本号.修正版本号

   supervisor   运行 supervisor --harmony index 启动程序，
   会监听当前目录下 node 和 js 后缀的文件 当这些文件发生改动时，supervisor 会自动重启程序。

  Express
        Express 是一个基于 Node.js 平台的极简、灵活的 web 应用开发框架.
        http://www.expressjs.com.cn/

        Express 应用生成器 http://www.expressjs.com.cn/starter/generator.html
        $ npm install express-generator -g
   var express = require('express');
     var app = express();
     app.get('/', function(req, res) {
       res.send('hello, express');
     });
     生成一个 express 实例 app，挂载了一个根路由控制器

    路由
    path-to-regexp
    req.query: 解析后的 url 中的 querystring，如 ?name=haha，req.query 的值为 {name: 'haha'}
    req.params: 解析 url 中的占位符，如 /:name，访问 /haha，req.params 的值为 {name: 'haha'}
    req.body: 解析后请求体，需使用相关的模块，如 body-parser，请求体为 {"name": "haha"}，则 req.body 为 {name: 'haha'}

    var express = require('express');
    var router = express.Router();

    router.get('/', function(req, res) {
      res.send('hello, express');
    });
    每个路由文件通过生成一个 express.Router 实例 router 并导出
    module.exports = router;

    var express = require('express');
    var app = express();
    var indexRouter = require('./routes/index');
    var userRouter = require('./routes/users');

    app.use('/', indexRouter);
    app.use('/users', userRouter);

    app.listen(3000);

    模板引擎
    ejs
    app.set('view engine', 'ejs');// 设置模板引擎为 ejs













