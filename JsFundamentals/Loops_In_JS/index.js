console.log("Hello");
let x = 1;

for (let i = 0; i < 5; i++) {
  console.log(x);
  x++;
}

let str = "Hello";
for (x in str) {
  console.log(str[x]);
}
for (x of str) {
  console.log(x);
}

let y = 1;
while (y <= 10) {
  console.log(10 * y);
  y++;
}

