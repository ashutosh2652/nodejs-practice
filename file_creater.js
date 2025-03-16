import readline from "readline";
import fs from "fs";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const filecreation = () => {
  rl.question("Enter your filename:", (filename) => {
    rl.question("Enter content of your file:", (content) => {
      fs.writeFile(`${filename}.txt`, content, (err) => {
        if (err) {
          console.log("Error writing the file:", err);
        } else {
          console.log(`File ${filename}.txt created successfully.`);
        }
      });
      rl.close();
    });
  });
};
filecreation();
