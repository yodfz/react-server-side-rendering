const express = require('express');
const fs = require('fs');
const path = require('path');
const React = require('React');
const ReactDOMServer = require('react-dom/server');
const Index = require('./app/index');

const app = express();

// 服务器使用 static 中间件构建 build 路径
app.use('/build', express.static(path.join(__dirname, 'build')));

// 使用我们的 handleRender 中间件处理服务端请求
app.get('*', (req, res)=> {
    // 把 Hello 组件渲染成 HTML 字符串
    // console.log(Index);
    const html = ReactDOMServer.renderToStaticMarkup(React.createElement(Index.default));
    console.log(html);
    // 加载 index.html 的内容
    fs.readFile(__dirname + '/app/templates/index.html', 'utf8', function (err, data) {
        if (err) throw err;

        // 把渲染后的 React HTML 插入到 div 中
        const document = data.replace(/<div id="app"><\/div>/, `<div id="app">${html}</div>`);

        // 把响应传回给客户端
        res.send(document);
    });
});

// 启动服务器
app.listen(3101);