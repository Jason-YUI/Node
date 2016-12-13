/**
 * Created by Administrator on 2016/11/25.
 */
//console.log('this is a');
exports.name='john';
exports.date='this is a date';
var privateVariable=5;
exports.getPrivate=function(){
    return privateVariable;
};