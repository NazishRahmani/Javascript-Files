let a = 1,
  b = 2,
  c = 3;

let id = setInterval(() => {
  console.log(b);
  if (b == 5) {
    clearInterval(id);
  }
  b++;
});
