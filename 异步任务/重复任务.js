/**
 * 可重复执行一个异步任务的函数
 * @param {Function} promiseFn  返回promise的异步任务函数
 * @param {Number} retry        重复尝试的次数(大于等于1)
 * @param {Number} delay        尝试前的延迟(单位毫秒)
 */
function task(promiseFn, retry,delay) {
    if (retry == 1 || !retry) {
        return promiseFn()
    } else {
        return promiseFn().then(function(data) {
            return Promise.resolve(data)
        }).catch(function() {
            return sleep(delay).then(function(){
                return task(promiseFn, --retry,delay)
            })
        })
    }
}

/**
 * 休眠
 * @param {*} delay 休眠的时间(单位毫秒)
 */
function sleep(delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve(1)
            } catch (e) {
                reject(0)
            }
        }, delay);
    })
}
var count = 1
task(function() {
    if(count--!=1){
        return Promise.reject(1)
    }else{
        return Promise.resolve(2)
    }
}, count,3000).then(function(data) {
    console.log('成功后的值'+data)
})
