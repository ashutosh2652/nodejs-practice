import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const todos = [];

const showmenu = () => {
  console.log("\n 1:Add a Task");
  console.log("2: View Task");
  console.log("3: Exit");
  rl.question("Choose an option:", handleinput);
};

const handleinput = (option) => {
  if (option === "1") {
    rl.question("Enter the task:", (task) => {
      console.log("Task added:", task);
      showmenu();
    });
  } else if (option === "2") {
    console.log("\n Your Todos list.");
    todos.forEach((todo, index) => {
      console.log(`${index + 1}: ${todo}`);
    });
    showmenu();
  } else if (option === "3") {
    console.log("Good Byee");
    rl.close();
  } else {
    console.log("Invalid Input. Please try again.");
    showmenu();
  }
};

showmenu();
