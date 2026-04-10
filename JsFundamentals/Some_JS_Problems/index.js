let num = 250;
if (num % 10 == 0) {
  console.log("Good");
} else {
  console.log("Bad");
}

let n = "Nazish Rahmani";
let age = 20;
console.log(`${n} is ${age} years old`);

let month = 2;

switch (month) {
  case 1:
    console.log("Jan");
    break;
  case 2:
    console.log("Feb");
    break;
  case 3:
    console.log("Mar");
    break;
  case 4:
    console.log("Apr");
    break;
}

let str = "apple";

if ((str[0] == "a" || str[0] == "A") && str.length >= 5) {
  console.log("Golden String");
} else {
  console.log("Not a golden string");
}

let x = 3242131;
let y = 4234231;
if ((x % 10 == y % 10 )&& (x % 100 == y % 100)) {
  console.log(true);
} else console.log(false);


