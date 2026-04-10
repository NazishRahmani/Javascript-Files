let todo = [];
let request = prompt("add,remove,list");

while (request != "quit") {
  if (request == "add") {
    let task = prompt("Enter your task");
    todo.push(task);
  } else if (request == "remove") {
    let index = prompt("Enter the index of the task to remove");
    todo.splice(index, 1);
  } else if (request == "list") {
    for (let i = 0; i < todo.length; i++) {
      console.log(`${i + 1}. ${todo[i]}`);
    }
  } else {
    console.log('Invalid command. Please enter "add", "remove", or "list".');
  }
  request = prompt("add,remove,list");
}
