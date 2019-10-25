function namespace(obj,name){
    var parts = name.split(".");
    var current = obj;
    for(var i=0;i<parts.length;i++){
        if(!current.hasOwnProperty(parts[i])){
            current[parts[i]] = {};
        }
        current = current[parts[i]];
    }
    return obj;
}
console.log(namespace({},'a.b.c.d.e'));