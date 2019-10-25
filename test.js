function convert({value,compType,compProps}){
     function getType(o) {
        var _toString = Object.prototype.toString;
        var _type = {
            'undefined': 'undefined',
            'number': 'number',
            'boolean': 'boolean',
            'string': 'string',
            'string': 'string',
            '[object Function]': 'function',
            '[object Array]': 'array',
            '[object Date]': 'date',
            '[object RegExp]': 'regExp',
            '[object Object]': 'object',
            '[object Error]': 'error'
        };
        return _type[typeof o] || _type[_toString.call(o)] || (o ? "object" : "null");
    }
    var fns = {
        'compInput':function(value){
            if(getType(value) == 'object'){
                return {code:(value.code ||""),text:(value.text||"")};
            }
            if(getType(value) == 'string'){
                return {code:value,text:value};
            }
            return {code:"",text:""};
        },
        'compRadio':function(value){
            if(getType(value) == 'object'){
                return {code:(value.code ||""),text:(value.text||"")};
            }
            return {code:"",text:""};
        },
        'compMap':function(value){
            if(getType(value) == 'object'){
                var temp = {};
                for(var key in value){
                    temp[key]= value[key]||"";
                }
                return temp;
            }
            return {detail:'',latitude:'',longitude:'',province:'',city:'',area:'',town:'',street:'',address:''};
        },
        'compDatetime':function(value){
            if(getType(value) == 'object'){
                return {code:(value.code||""),text:(value.text||"")};
            }
            return {code:"",text:""};
        },
        'compSelect':function(value){
            if(getType(value) == 'array'){
                return value;
            }
            return [];
        },
        'compFileupload':function(value){
            if(getType(value) == 'array'){
                return value;
            }
            return [];
        },
        'compCheckbox':function(value){
            if(getType(value) == 'array'){
                return value;
            }
            return [];
        },
        'compLookup':function(value){
            if(getType(value) == 'array'){
                return value.map(function(v){
                     2  
                });
            }
            return [];
        },
        'default':function(value){
            if(getType(value) == 'string'){
                return {code:value,text:value};
            }else{
                return {code:"",text:""};
            }
        }
    }
}