let favColor = "green";
let guess = prompt("guess the color: ");

while (guess != favColor && guess != "quit") {
  guess = prompt("guess the color:");
}

if (guess == favColor) {
  alert("You Won");
} else {
  alert("You Quit");
}
