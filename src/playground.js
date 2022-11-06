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

// const jobs = [
//   { title: "Angular Dev", organization: "Microsoft" },
//   { title: "Programmer", organization: "Google" },
//   { title: "Dever", organization: "Microsoft" },
// ];

// console.log(jobs.filter((job) => job.organization === "Microsoft"));
const { ref, reactive, computed, toRef, toRefs } = require("vue");
// Number reactiivty
let a = ref(1);
let b = ref(2);

let c = computed(() => a.value + b.value);
console.log(c.value);

a.value = 10;
console.log(c.value);

b.value = 10;
console.log(c.value);

// String reactivity
const name = ref("Alexis");
let title = computed(() => name.value + " the Great");
console.log(title.value);

name.value = "Selorm";
console.log(title.value);

// Object Reactivity
// const person = ref({
//   name: "Alexis",
// });

// let titlee = computed(() => person.value.name + " the mighty!");
// console.log(titlee.value);

// person.value.name = "Selorm";
// console.log(titlee.value);

// Use reactive specifically for objects
const person = reactive({
  firstName: "Alexis",
  lastName: "Gbeckor-Kove",
});

// When we destructure an object we lose its reactivity. i.e the individual properties themselves are not reactive
// const { firstName, lastName } = person;
// To solve this problem, use the toRef method. It takes a reactive object as its first argument and a string representation of the property you would like to change
const firstName = toRef(person, "firstName");
const lastName = toRef(person, "lastName");

let titlee = computed(
  () => `${firstName.value} ${lastName.value} the mighty! - toRef`
);
console.log(titlee.value);

// ToRefs.Takes a reactive object and makes all individual properties in the object reactive
const { firstName: first, lastName: last } = toRefs(person);

let titles = computed(
  () => `${first.value} ${last.value} the mighty! - toRefs`
);
console.log(titles.value);

// const titleLength = computed(() => titlee.value.length);
// console.log(titleLength.value);

firstName.value = "Massimiliano";
lastName.value = "Argento 'Killer Striker'";
console.log(titlee.value);

// Multiple layers of reactivity
