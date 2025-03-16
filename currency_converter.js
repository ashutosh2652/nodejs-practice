import https from "https";
import readline from "readline";
import chalk from "chalk";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const currency_convert = (amout, rate) => {
  return (amout * rate).toFixed(2);
};
const api_key = "15b83bd8279ac739701334af";
const url = `https://v6.exchangerate-api.com/v6/${api_key}/latest/USD`;

https.get(url, (response) => {
  let data = "";
  response.on("data", (chunk) => {
    data += chunk;
  });
  response.on("end", () => {
    const rates = JSON.parse(data).conversion_rates;
    rl.question("Enter the amount in USD:", (amount) => {
      rl.question(
        "Enter the target currency (e.g., INR, EUH, NPR):",
        (currency) => {
          const rate = rates[currency.toUpperCase()];
          if (rate) {
            console.log(
              chalk.blue.bgRed.bold(
                `${amount} is approximately ${currency_convert(
                  amount,
                  rate
                )} ${currency}`
              )
            );
          } else {
            console.log("Invalid country code.");
          }
          rl.close();
        }
      );
    });
  });
  response.on("error", (error) => {
    if (error) {
      console.log("Error while converting the currency:", error);
    } else {
    }
  });
});
