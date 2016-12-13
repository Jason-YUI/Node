/**
 * Created by Administrator on 2016/11/25.
 */
module.exports=person;   //重写module.exports
function person(name){
    this.name=name;
}
person.prototype.talk=function(){
    console.log("my name is", this.name);
};