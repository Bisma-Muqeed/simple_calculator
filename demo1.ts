import inquirer from "inquirer";

const answer = await inquirer.prompt([
  {
    message: "Please Enter the First Number",
    type: "number",
    name: "firstNumber",
  },
  {
    message: "Please Enter the Second Number",
    type: "number",
    name: "secondNumber",
  },
  {
    message: "please Select one of the Operators to perform Operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);
// console.log(answer)
// Conditional Statement
if(answer.operator === "Addition") {
  console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "Subtraction") {
  console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "Multiplication") {
  console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operator === "Division") {
  console.log(answer.firstNumber / answer.secondNumber);
} else {
  console.log("Please Select Valid Operator");

}
