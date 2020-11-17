// two ways of creating a function
function f() {
  console.log('f is called')  
}
f()

var f2 = function() {
  console.log('f2 is called')
}
f2();

// IIFE (Immediately Invoked Function Expression)
(function() {
  console.log('f3 is called')  
})();

// get all arguments using arguments
function f4() {
  console.log(arguments)
}
f4(1, 2, 3, 4, 5)

// get all arguments using rest param
function f5(a, ...b) {
  console.log(a, b)
}
f5(1, 2, 3, 4, 5)

// this is treated differently in the regular and arrow functions
var person = {
  name: 'Tom',
  age: 32,
  getName: function() {
    return function() {
      console.log(this.name)
    }
  }
}
person.getName()()

var person2 = {
  name: 'Tom',
  age: 32,
  getName: function() {
    return () => {
      console.log(this.name)
    }
  }
}
person2.getName()()
