// create a class using a function
function Cat(name, age = 0) {
  this.name = name
  this.age = age
  console.log('A cat with name', this.name, 'and age', this.age, 'is created')
  this.saySth = saySth
}
var tom = new Cat('Tom', 10)

// define a class method via prototype
Cat.prototype.sayHello = function() {
  console.log('Hello I am', this.name)
}
tom.sayHello()

// define a method and bind it to a class instance
function saySth(text) {
  console.log(this.name, ':', text)
}
// four ways of binding a method to a class instance
tom.saySth('I want to play')
saySth.apply(tom, ['I want to eat'])
saySth.call(tom, 'I want to drink')
saySth.bind(tom, 'I want to sleep')()

// create a class using class keyword
class Kitten extends Cat {
  constructor(name, badge, age) {
    super(name, age)
    this.badge = badge
  }
  displayBadge() {
    console.log('My badge is', this.badge)
  }
}
var peter = new Kitten('Peter', 'A kitten', 2)
peter.sayHello()
peter.displayBadge()
