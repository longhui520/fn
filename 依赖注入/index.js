// 提供一个服务容器
const services = {
    A:()=>{console.log(1)},
    B:()=>{console.log(2)}
}
// 为目标函数注册需要的依赖

 function Service(A,B){
     A()
     B()
 }

 // 获取目标函数注册的依赖参数

 var getFuncParams = function (func) { 
    var matches = func.toString().match(/^function\s*[^\(]*\(\s*([^\)]*)\)/m); 
    if (matches && matches.length > 1) 
        return matches[1].replace(/\s+/, '').split(','); 
    return []; 
}
// 通过依赖项查询服务
var setFuncParams = function(params){
    var res = []
    for(var i=0;i<params.length;i++){
        res.push(services[params[i]])
    }
    return res;
} 

//注入依赖
function Activitor(func, scope) { 
    return ()=>{
        func.apply(scope||{},setFuncParams(getFuncParams(func)))
    }
}
var service = Activitor(Service)
service()