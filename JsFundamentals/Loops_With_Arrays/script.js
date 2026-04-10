let arr = [1, 2, 3, 4, 5];

// function itr(val,i) {
//   console.log(val*val);
// }

//    arr.forEach((val) => {
//  val = val*2
// }); // Output: 1, 2, 3, 4, 5

// console.log(arr);

// let arr1 = arr.map((val) => {
//   return val * 2;
// });

// console.log(arr1);
// console.log(arr);

// let newArr = arr.filter((val) => {
//   return val % 2 == 0;
// });
// console.log(newArr);

// let max = arr.reduce((prev, curr) => {
//   return prev > curr ? prev : curr;
// });

// let sum = arr.reduce((prev, curr) => {
//   return prev + curr;
// });

// console.log(sum);
// console.log(max);

// let ans = arr.some((val) => {
//   return val == 0;
// });

// console.log(ans);

// let arr2 = arr.find((val) => {
//   return val&1;
// });

// console.log(arr2);

let x = [1, 2, 3, 4, 5, 6, 7, 8, 9];
x.forEach((e, i) => {
  x[i] = e * e;
});

console.log(x);

// let y = x.map((e) => {
//   return e * 10;
// });
// console.log(y);

// let z = x.filter((e) => {
//   return e & 1;
// });

// console.log(z);

// let sum = x.reduce((prev,curr)=>{
//      return prev + curr;
// })
// console.log(sum);

