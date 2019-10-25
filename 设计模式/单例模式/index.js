/**
 * 代理一个单例类
 * @param {*} Fn 代理的构造函数
 */
function singleton(Fn){
    var instance;
    return function(...args){
        if(!instance){
            instance = new Fn(...args)
        }
        return instance;
    }
}
function User(name){
    this.name = name;
}
var ProxyUser = singleton(User);
console.log((new ProxyUser('小红')).name);
console.log((new ProxyUser('小明')).name);