function compose(middleware){
    return function(context,next){
        let index = -1
        return dispatch(0)
        function dispatch(i){
            index = i
            let fn = middleware[i]
            if(i == middleware.length){
                fn = next
            }
            if(!fn) return
            return fn(context,function next(){
                return dispatch(i+1)
            })
        }
    }
}
var ms = [
    function foo (ctx, next) {
      console.log('foo1')
      next()
      console.log('foo2')
    },
    function bar (ctx, next) {
      console.log('bar1')
      next()
      console.log('bar2')
    },
    function qux (ctx, next) {
      console.log('qux1')
      next()
      console.log('qux2')
    }
  ]
  
  compose(ms)(11,()=>console.log('结束了'))