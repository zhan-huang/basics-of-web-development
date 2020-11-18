// when a function is called with new, 'this' is used to bind the arguments to the instance props
function Person(name, age) {
  this.name = name
  this.age = age
}

var tom = new Person('Tom', '32')
console.log(tom.name + ':' + tom.age)

// when a function is called by a class instance/object, 'this' is used to bind the arguments to the props
var person = {
  name: 'Tom',
  age: '32',
  getAge: function() {
    return this.age
  }
}
console.log(person.getAge())
