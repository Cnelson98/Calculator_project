// document.querySelector(".calculatorWrapper").addEventListener("Click", "keydown", function ()){
let display = document.getElementById("calculatorInput");
let usersInputEquation = [];
let appendNumber = (number) => {
  display.value += number;
  usersInputEquation.push(number);
  // console.log(usersInputEquation)
};
let appendDivide = () => {
  document.querySelector(".inputbox").textContent = "/";
  display.value += "/";
  usersInputEquation.push("/");
  // console.log(usersInputEquation)
};
let appendMinus = () => {
  document.querySelector(".inputbox").textContent = "-";
  display.value += "-";
  usersInputEquation.push("-");
  // console.log(usersInputEquation)
};
let appendPlus = () => {
  //   document.querySelector(".inputbox").textContent = "+";
  display.value += "+";
  usersInputEquation.push("+");
  // console.log(usersInputEquation)
};
let appendMultiply = () => {
  document.querySelector(".inputbox").textContent = "*";
  display.value += "x";
  usersInputEquation.push("x");
  // console.log(usersInputEquation)
};
let calculateEquation = () => {
  console.log(usersInputEquation);
  console.log(display.value);
  convertStringToJavaScriptEquation();
};
let convertStringToJavaScriptEquation = () => {
  // convert the equation to numbers and operators that javscript understands
  // loop through the user input equation
  for (let i = 0; i < usersInputEquation.length; i++) {
    console.log(usersInputEquation[i]);
  }
  // separate the first number from the second
  // assign each thing to a variable
};
let clearDisplay = () => {
  document.querySelector(".inputbox").textContent = "+";
  display.value = "";
};

//  };
