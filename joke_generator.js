import https from "https";
import chalk from "chalk";

const getjoke = () => {
  const url = "https://official-joke-api.appspot.com/random_joke";
  https.get(url, (response) => {
    let data = "";
    response.on("data", (chunk) => {
      data += chunk;
    });
    response.on("end", () => {
      const joke = JSON.parse(data);
      console.log(`Here is the random ${joke.type} joke:`);
      console.log(chalk.red(`${joke.setup}`));
      console.log(chalk.blue.bgRed.bold(`${joke.punchline}`));
    });
    response.on("error", (error) => {
      console.log("Error while displaying joke:", error.message);
    });
  });
};
getjoke();
