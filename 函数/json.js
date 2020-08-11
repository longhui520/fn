var JSON = {};
// JSON RegExp
var rvalidchars = /^[\],:{}\s]*$/,
    rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g,
    rvalidescape = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
    rvalidtokens = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
    _type = Object.prototype.toString,
    trim = function(str) {
        return str.replace(/(^\s*)|(\s*$)/g, '');
    };
/**
 * 字符串解析为JSON
 * @param {String} data sJSON字符串
 * @return {Object} JSON 对象
 */

JSON.parse = function(data) {
    if (data === null) {
        return data;
    }
    if (typeof data === 'string') {
        data = trim(data);
        if (data) {
            var dataReplace = data
                .replace(rvalidescape, '@')
                .replace(rvalidtokens, ']')
                .replace(rvalidbraces, '');
            if (rvalidchars.test(dataReplace)) {
                return new Function('return ' + data)();
            }
        }
    }
};

/**
 * [ description]
 * @param  {Object} data JSON对象
 * @return {String} JSON字符串
 */

JSON.stringify = function(data) {
    var tArr = [];
    //数组使用递归
    if (_type.apply(data) === '[object Array]') {
        for (var i = 0; i < data.length; i++) {
            tArr.push(JSON.stringify(data[i]));
        }
        return '[' + tArr.join(',') + ']';
    }
    //日期直接返回时间戳
    if (_type.apply(data) === '[object Date]') {
        return 'new Date(' + data.getTime() + ')';
    }
    //正则或函数直接使用toString
    if (_type.apply(data) === '[object RegExp]' || _type.apply(data) === '[object Function]') {
        return data.toString();
    }
    //对象使用for in递归
    if (_type.apply(data) === '[object Object]') {
        for (var i in data) {
            if (typeof data[i] === 'string') {
                data[i] = "'" + data[i] + "'";
            } else {
                if (typeof data[i] === 'object') {
                    data[i] = JSON.stringify(data[i]);
                } else {
                    data[i] = "'" + data[i] + "'";
                }
            }
            tArr.push(i + ': ' + data[i]);
        }
        return '{' + tArr.join(',') + '}';
    }
};
var a  = {
    b:function(){console.log(a)}
}
var b = JSON.stringify(a)
var c = JSON.parse(b)
console.log(b)
console.log(c)