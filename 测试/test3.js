var arr= [
    {
        id:1,
        child:[
            {
                id:2,child:[{id:3,child:[{id:4}]}]
            }
        ]
    },
    {
        id:10,
        child:[
            {
                id:20,child:[{id:30}]
            }
        ]
    }
];
var obj = {
    "1":[1,2,3],
    "2":[2,3],
    "3":[3]
}

function flatten(arr) {
    arr = arr || []
    return arr.reduce(function (prev, next) {
        return Object.prototype.toString.call(next) === '[object Array]' ? prev.concat(flatten(next)) : prev.concat(next)
    }, [])
}
function fn(arr,obj){
    arr.forEach(function(item){
        var key = item.id;
        if(key){
            if(!obj.hasOwnProperty(key)){
                obj[key] = [];
            }
            obj[key].push(key);
            if(item.child){
             var subobj = fn(item.child,{});
             Object.assign(obj,subobj);
             var subarr = flatten(Object.values(subobj));
             obj[key] = obj[key].concat(subarr);
             obj[key] = [... new Set(obj[key])]
            }
        }
    
    });

    return obj;
}
console.log(fn(arr,{}));