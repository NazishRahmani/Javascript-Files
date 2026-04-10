let a = 8;
let b = 5,
  c = 6;
if (a >= b) {
  if (a >= c) {
    console.log(`${a} is greater than ${c}`);
  } else {
    console.log(`${c} is greater than ${a}`);
  }
} else if (b > a) {
  if (b >= c) {
    console.log(`${b} is greater than ${c}`);
  } else {
    console.log(`${c} is greater than ${b}`);
  }
}

let num = 500;
if (num >= 1 && num <= 100) {
  if (num > 50) {
    console.log("greater than 50");
  } else {
    console.log("less than 50");
  }
} else {
  console.log("invalid number");
}

for (let i = 2; i <= 10; i++) {
  console.log(`Multiples of ${i}`);
  for (let j = i; j <= 50; j += i) {
    console.log(j);
  }
}
