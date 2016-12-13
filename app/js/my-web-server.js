/**
 * Created by Administrator on 2016/11/24.
 */
/*var http=require('http');
var server=http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('<p>hello123</p>');
});
server.listen(3005);*/

/*
单线程的世界
* */
/*
var http=require('http');
http.createServer(function(req,res){
    database.getInformation(function(data){
        res.writeHead(200);
        res.end(data);
    });
});
*/

/*
错误处理
* */
/*var http=require('http');
http.createServer(function(){
    throw new Error('错误不会被捕获');
}).listen(3000);*/

/*process.on('uncaughtException',function(err){
    console.log(err);
    process.exit(1);
});*/

/*
堆榨信息
* */
function c(){
    b();
}
function b(){
    a();
}
function a(){
    setTimeout(function(){
        throw new Error("here");
    },10);
}
c();
