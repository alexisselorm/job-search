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

// const axios = require("axios");

// const url = "http://localhost:3000/jobs";
// const fetchJobsv1 = () => {
//   axios
//     .get(url)
//     .then((response) => console.log(response))
//     .catch((reject) => console.log(reject.message));
// };
// fetchJobsv1();

// const fetchJobsv2 = async () => {
//   const result = await axios.get(url);
//   console.log(result.data);
// };

// fetchJobsv2();

// const sushi = [
//   "Tuna",
//   "Salmon",
//   "Shrimp",
//   "Uni",
//   "YellowTail",
//   "Lavender",
//   "Seshimi",
// ];

// console.log(sushi.slice(2, 8));

// const numbers = [1, 2, 3, 4, 56, 9, 7, 12];
// const filtered = numbers.filter((number) => number > 6);
// console.log(filtered);

const jobs = [
  { title: "Angular Dev", organization: "Microsoft" },
  { title: "Programmer", organization: "Google" },
  { title: "Dever", organization: "Microsoft" },
];

console.log(jobs.filter((job) => job.organization === "Microsoft"));
