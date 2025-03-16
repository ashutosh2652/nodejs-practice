import { error } from "console";
import readline from "readline/promises";

const api_key = "";
const base_url = "";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const getweather = async (city) => {
  const url = "";
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new error("Incorrect city name not found!");
    }
    const weatherdata = await res.json();
    console.log("\nWeather Information:");
    console.log(`City:${weatherdata.name}`);
    console.log(`Temperature:${weatherdata.main.temp}'C`);
  } catch (error) {
    console.log(error);
  }
};
const city = await rl.question("Enter a city name to get its weather");
await getweather(city);
rl.close();
