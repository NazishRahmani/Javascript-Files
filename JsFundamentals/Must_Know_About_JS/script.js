// hoisting
console.log(a);
var a = 5;
console.log(a);

// primitive types

let z = 0 / 0;
console.log(z); // NaN
console.log(typeof z); //Number

//  truthy falsy

let n = "nazish";

let new_n = n;
new_n[0] = "t";
console.log((n[0] = "t"));

let arr = [1, 2, 3];
arr[0] = 5;
console.log(arr);

arr.splice(0, 1);
console.log(arr);

let x = "a";
let y = "A";
console.log(x.charCodeAt());

//  Global Scope

{
  let a = 50;
  {
    let a = 20;
    console.log(a);
  }
  console.log(a);
}

function outerFunction() {
  let x = 2,
    y = 3;
  function innerFunction() {
    let z = x + y;
    console.log(z);
  }
  innerFunction();
}

outerFunction();
