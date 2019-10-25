function getType(o,type){
    var _toString = Object.prototype.toString;
    var _type = {
        'undefined':'undefined',
        'nummber':'number',
        'boolean':'boolean',
        'string':'string',
        '[object Function]':'function',
        '[object Array]':'array',
        '[object Date]':'date',
        '[object RegExp]':'reg',
        '[object Object]':'object',
        '[object Error]':'error'
    }
    var __type =  _type[typeof 0] ||_type[_toString.call(o)] || (o ? "object" : "null")
    if(type){
        return __type === type;
    }else{
        return __type;
    }
}