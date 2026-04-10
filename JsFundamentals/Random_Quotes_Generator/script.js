const quotes = [
  "A room without books is like a body without a soul",
  " You only live once, but if you do it right, once is enough",
  "Be the change that you wish to see in the world",
  "The only way to do great work is to love what you do",
  "The greatest accomplishment is not in never falling, but in rising every time you fall",
  "If you can dream it, you can achieve it",
  "The most difficult thing in life is to know what you want to become. The most difficult thing is to not be afraid to ask for help.",
  "Believe you can and you're halfway there",
  "The only way to do great work is to love what you do",
  "Success is not final, failure is not fatal: It is the courage to continue that counts",
  "The only way to do great work is to love what you do",
];
console.log(typeof quotes)

function quoteGenerator() {
  let index = Math.floor(Math.random() * quotes.length);
  console.log(index);
  return quotes[index];
}

console.log(quoteGenerator());



let currDate = new Date();
console.log(currDate);

console.log(currDate.toLocaleDateString());
