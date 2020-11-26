// var is in function scope (will be hoisted on top), while let is in block scope
function f() {
  console.log(a);
  var a = 0;
}
f();

function f2() {
  try {
    console.log(a);
    let a = 0;
  } catch(e) {
    console.log('failed');
  }
}
f2();

// var will be rewriten if in the same scope
function f3() {
  var b = 0;
  if (true) {
    var b = 1;
  }
  console.log(b);
}
f3();

function f4() {
  let b = 0;
  if (true) {
    let b = 1;
  }
  console.log(b);
}
f4();
