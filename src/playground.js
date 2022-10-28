// export const evenOrOdd = (number) => (number % 2 == 0 ? "Even" : "Odd");
// export const multiply = (x, y) => x * y;

// const interval = setInterval(() => {
//   console.log("2 seconds man");
// }, 2000);

// setTimeout(() => {
//   clearInterval(interval);
// }, 11000);

// const list = ["A", "B", "C", "D", "E"];
// console.log(list.length);
// console.log(0 % 4);

const axios = require("axios");

const url = "http://localhost:3000/jobs";

axios
  .get(url)
  .then((response) => console.log(response))
  .catch((reject) => console.log(reject.message));
