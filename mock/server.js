let express = require('express');
let app = express();
let bodyParser = require('body-parser');
app.listen(3000);
app.all('*', function(req, res, next) {
    console.log(req.method);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
});
app.use(bodyParser.json());

//輪播圖
let sliders = require('./slider')
app.get('/api/getSliders',function (req,res) {
    res.send(sliders);
});
//課程列表
let lessonList = require('./lessionList');
//登录
let userInfo = require('./userInfo');
app.post('/api/login',function (req,res) {
    res.send(userInfo);
});
app.get('/api/getLesson/:user',function (req,res) {
    console.log(req.params.user);
    res.send(userInfo)
});
//获取详情
let detail = require('./detail');
app.get('/api/detail/:id',function (req,res) {
    res.send(detail);
});



//获取课程类型
app.get('/api/getLessons/:type/:limit/:offset',function (req,res) {
    console.log(req.params.type);
    console.log(req.params.limit);
    console.log(req.params.offset);
    setTimeout(function () {
        if(req.params.type=='視頻教程'){
            res.send(lessonList);
        }else if(req.params.type=='文檔課件'){
            res.send(lessonList);
        }else if(req.params.type=='HTML5培訓課程'){
            res.send(lessonList);
        }else if(req.params.type == 'Node課程培訓'){
            res.send(lessonList);
        }else{
            res.send(lessonList);
        }
    },0)
});