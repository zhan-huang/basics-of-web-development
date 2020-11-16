// used to bind class instance
function Person(name, age) {
  this.name = name
  this.age = age
}

var tom = new Person('Tom', '32')
console.log(tom.name + ':' + tom.age)

// used to refer to the object calling the function
var person = {
  name: 'Tom',
  age: '32',
  getAge: function() {
    return this.age
  }
}
console.log(person.getAge())
