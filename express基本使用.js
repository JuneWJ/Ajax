// 引入express
const { request } = require('express');
const express = require('express')

// 创建应用对象
const app = express()

// 创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装
app.get('/server', (request,response)=>{
    // 允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    
    //设置响应
    response.send('AJAX GET')
});
/* app.post('/server', (request,response)=>{
    // 允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    // 响应头，允许自定义响应头
    response.setHeader('Access-Control-Allow-Headers','*')
    //设置响应
    response.send('AJAX POST')
}); */

//可以接收任意类型的请求
app.all('/server', (request,response)=>{
    // 允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    // 响应头，允许自定义响应头
    response.setHeader('Access-Control-Allow-Headers','*')
    //设置响应
    response.send('AJAX POST')
});

app.all('/json-server', (request,response)=>{
    // 允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    // 响应头，允许自定义响应头
    response.setHeader('Access-Control-Allow-Headers','*')
    const data = {
        name: 'heixiu'
    }
    // 对对象进行字符串转换
    let str = JSON.stringify(data)
    //设置响应
    response.send(str)
});

//针对IE缓存
app.all('/IE-server', (request,response)=>{
    // 允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    //设置响应
    response.send('AJAX IE')
});

// 延时响应
app.get('/delay', (request,response)=>{
    // 允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    setTimeout(()=>{
        //设置响应
        response.send('延时响应')
    },3000)
    
});

//jQuery服务
app.all('/jQuery', (request,response)=>{
    // 允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*')
    const data = {
        name: 'heixiu'
    }
    response.send(JSON.stringify(data))
})

//fetch函数
app.all('/fetch', (request,response)=>{
    // 允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*')
    const data = {
        name: 'heixiu'
    }
    response.send(JSON.stringify(data))
})



// 监听端口启动服务
app.listen(8000, ()=>{
    console.log('服务启动，8000端口监听。。。');
})