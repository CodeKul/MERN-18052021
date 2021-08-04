import { displayCity } from "./myModule.js";
function displayGreeting() {
  return "Hello";
}
function calculate(number1, number2) {
  return [number1 + number2 - 300, number1 * number2 - 500];
}
let newCity = displayCity();

let skills = ["Javascript", "React", "CSS", "Bootstrap"];

export { displayGreeting, calculate, skills, newCity }; //named exports
