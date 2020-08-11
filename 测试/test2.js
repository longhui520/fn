function getUrlParamStr(url, param) {
    function getParam(url, param,separator) {
        separator = separator || '/';
        var arr = url.split(separator);
        var index = -1;
        var obj = {};
        for (var i = 0; i < param.length; i++) {
            index = arr.indexOf(param[i]);
            if (index > -1) {
                obj[param[i]] = arr[index + 1] || "";
            }
        }
        return obj;
    }
    function serialize(obj) {
        var str = "";
        for (var k in obj) {
            if (obj[k]) {
                str += "/" + k + "/" + obj[k];
            }
        }
        return str;
    }
    return serialize(getParam(url,param));
}
console.log(getUrlParamStr('http://183.230.93.120:40390/Admin/index.php/MisAutoMobilePqv/add/projectworkid/12354/projectid/1095', ['projectworkid','projectid']));