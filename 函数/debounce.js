function debounce(fun,delay){
    return function(...args){
        var that = this;
        clearTimeout(fun.id);
        fun.id = setTimeout(function(){
            fun.apply(that,args);
        },delay);
    }
}
function throttle(fun,delay){
    var flag = true;
    return function(...args){
        if(!flag){return;}
        var that = this;
        flag = false;
        setTimeout(function(){
            fun.apply(that,args);
            flag = true;
        },delay)
    }
}