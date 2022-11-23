const { request, response } = require('express');
const express = require('express');

const app = express();

app.get('/home',(request,response)=>{
    response.sendFile(__dirname + '/index.html');
});

app.get('/data',(request,response)=>{
    response.send('数据');
});

app.all('/check-username', (request,response)=>{
    // 允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    // 响应头，允许自定义响应头
    response.setHeader('Access-Control-Allow-Headers','*')
    const data = {
        exist: 1,
        msg: '已存在'
    };
    // 对对象进行字符串转换
    let str = JSON.stringify(data);
    //设置响应
    response.end(`handle(${str})`);
});

app.all('/jquery-jsonp', (request,response)=>{
    // 允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    // 响应头，允许自定义响应头
    response.setHeader('Access-Control-Allow-Headers','*')
    const data = {
        name:'xiaohei',
        city: ['longyou','lidao']
    };
    // 对对象进行字符串转换
    let str = JSON.stringify(data);

    // 接收callback参数
    let cb = request.query.callback;

    //设置响应
    response.end(`(${cb})(${str})`);
});

app.listen(9000,()=>{
    console.log('服务启动，9000端口监听。。。');
})