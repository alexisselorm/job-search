// export const evenOrOdd = (number) => (number % 2 == 0 ? "Even" : "Odd");
// export const multiply = (x, y) => x * y;

const interval = setInterval(() => {
  console.log("2 seconds man");
}, 2000);

setTimeout(() => {
  clearInterval(interval);
}, 11000);
