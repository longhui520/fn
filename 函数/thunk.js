function thunk(fn){
    return function(){
        var args = Array.prototype.slice.call(arguments)
        return function(callback){
            args.push(callback);
            return fn.apply(this,args)
        }
    }
}
function fn1(a,cb){
    console.log(a)
    cb(a);
}
var fn2 = thunk(fn1)
// fn2(2)(console.log)

function* g(){
    var a1 = yield fn2(1)
    var a2 = yield fn2(2)
    var a3 = yield fn2(3)
    var a4 = yield fn2(4)
}
var gn = g();

function run(g){
    var gn = g();
    function next(data){
        var result = gn.next(data)
        if(result.done)return
        result.value(next)
    }
    next()
}
run(g)