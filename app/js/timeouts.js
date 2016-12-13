/**
 * Created by Administrator on 2016/11/25.
 */
var start=Date.now();
setTimeout(function(){
    console.log(Date.now()-start);
    for(var i=0;i<10000000;i++){}
},1000);
setTimeout(function(){
    console.log(Date.now()-start);
},2000)