function foo(a, b) {
  console.log(b);
  return {
    foo: function (c) {
      return foo(c, a);
    }
  }
}

var x = foo(0); 
console.log(x.foo(1), x.foo(2), x.foo(3))

var y = foo(0).foo(1).foo(2).foo(3);
console.log(y)

var z = foo(0).foo(1);
console.log(z.foo(2), z.foo(3))