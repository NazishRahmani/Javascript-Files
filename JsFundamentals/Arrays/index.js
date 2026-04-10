let x = [1, 2, 3, 4];
x.push(100);
console.log(x);


let n = ["Nazish", "Tabish", "Sonu", "Monu"];
console.log(n);

for (i in n) {
  console.log(n[i]);
}

let cars = ["BMW", "cultus", "mehran"];
console.log(cars.length);
console.log(cars.join("...."));

cars.unshift("BMW");
console.log(cars);

console.log(cars.shift());

console.log(cars);
