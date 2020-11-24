var person = {
  name: 'Tom',
  age: 32,
  height: 1.8,
  weight: 60
}
// destructuring assignment with default value
var { name: n } = person
console.log(n)
