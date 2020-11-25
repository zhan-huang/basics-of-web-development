var arr = [1, 2, 3, 4]

// destructuring assignment
var [a, b] = arr
console.log(a, b)
var [b, a] = [a, b]
console.log(a, b)

// spread operator
console.log(...arr)
arr = [...arr, 5, 6, 7]
console.log(...arr)

// splice method
console.log(arr.splice(1, 2, 0, 0))
console.log(arr)
