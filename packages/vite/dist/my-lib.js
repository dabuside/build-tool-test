var s = (o, e, t) => new Promise((u, c) => {
  var r = (n) => {
    try {
      i(t.next(n));
    } catch (a) {
      c(a);
    }
  }, w = (n) => {
    try {
      i(t.throw(n));
    } catch (a) {
      c(a);
    }
  }, i = (n) => n.done ? u(n.value) : Promise.resolve(n.value).then(r, w);
  i((t = t.apply(o, e)).next());
});
function f(...o) {
  return s(this, null, function* () {
    yield g(0), console.log(o);
  });
}
function g(o) {
  return new Promise((e) => setTimeout(e, o));
}
f(10, {}, "666");
