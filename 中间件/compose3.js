class Middleware {
  constructor() {
    this.fns = [];
  }
  add(fn) {
    this.fns.push(fn);
  }
  run(context, next) {
    let index = -1;
    let dispatch = i => {
      index = i;
      let fn = this.fns[i];
      if (i == this.fns.length) {
        fn = next;
      }
      if (!fn) return Promise.resolve();
      try {
        return Promise.resolve(
          fn(context, () => {
            return dispatch(i + 1);
          })
        );
      } catch (e) {
        return Promise.reject(e);
      }
    };
    return dispatch(0);
  }
}
var m = new Middleware();
m.add(async (ctx, next) => {
  ctx.a = 3
  console.log(ctx)
  var b = await next();
  console.log(b)
});
m.add(async (ctx, next) => {
   return new Promise((resolve)=>setTimeout(resolve,10000,200))
});
m.run({ a: 1 });
