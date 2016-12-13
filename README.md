
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

  Express
        Express 是一个基于 Node.js 平台的极简、灵活的 web 应用开发框架.
        http://www.expressjs.com.cn/

        Express 应用生成器 http://www.expressjs.com.cn/starter/generator.html
        $ npm install express-generator -g

  版本号的规则
  <version> (0.0.0) 主版本号.次版本号.修正版本号














