// create a function returning another function
function add(x) {
  return function(y) {
    return x + y
  }
}
var add5 = add(5)
console.log(add5(3))

// an example of the creation of a closure when a scope is created
for (var i = 0; i < 10; i++) {
  setTimeout(function() {console.log(i)}, 100)
}
for (let i = 0; i < 10; i++) {
  setTimeout(function() {console.log(i)}, 100)
}
for (var i = 0; i < 10; i++) {
  (function(j = i) {
    setTimeout(function() {console.log(j)}, 100)
  })()
}
