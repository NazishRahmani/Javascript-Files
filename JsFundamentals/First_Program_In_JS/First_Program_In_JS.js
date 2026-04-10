console.log("My name is Nazish Rahmani");
let x = 4;

// console.log(nazish);

console.log(x);

const a = 32;

var n = "nazish";
console.log(n);

console.log("my name is", n);

console.log(`my name is ${n}`);

let _ = 4;
console.log(_);

let $ = 4;

console.log($);

// const z; // This is not allowed because const must be initialized with value

var val;
val = 10;
console.log(val);

let b = 100;
//  Block Scope
{
  let b = 10;
  console.log(b);
}
console.log(b);

var c = 11;
{
  var c = 20;
  console.log(c);
}

console.log(c);

console.log(add(10, 20));
function add(a, b) {
  return `sum is ${a + b}`;
}

let f = (a, b) => {
  return a * b;
};
console.log(f(3, 4));

var temp = 1000;

const func = () => {
  var temp = 2000;
  console.log(temp);
};
func();
console.log(temp);
