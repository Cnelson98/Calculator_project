// document.querySelector(".calculatorWrapper").addEventListener("Click", "keydown", function ()){
let display = document.getElementById("calculatorInput");
let usersInputEquation = [];
let firstNumber;
let secondNumber;
let operator;
let buttons = document.querySelectorAll(".button");
let answer = buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let buttonText = e.target.innerText;
    usersInputEquation.push(buttonText);
    document.querySelector(".inputbox").innerText =
      usersInputEquation.join(" ");
  });
});

document.addEventListener("keydown", (e) => {
  const validKeys = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "+",
    "-",
    "/",
  ];

  if (validKeys.includes(e.key)) {
    usersInputEquation.push(e.key);
    document.querySelector(".inputbox").innerText =
      usersInputEquation.join(" ");
  }

  if (e.key === "=" || e.key === "Enter") {
    calculate();
  }
});
let calculate = () => {
  //   console.log(usersInputEquation);

  convertStringToJavaScriptEquation();
  determineMath();
  console.log(firstNumber, secondNumber);
  usersInputEquation = [];
  usersInputEquation.push(answer);

  answer;
};
let convertStringToJavaScriptEquation = () => {
  for (i = 0; i < usersInputEquation.length; i++)
    if (["+", "-", "x", "/"].includes(usersInputEquation[i])) {
      operator = usersInputEquation[i];
      firstNumber = parseFloat(usersInputEquation.slice(0, 1).join(""));
      secondNumber = parseFloat(usersInputEquation.slice(i + 1).join(""));
      break;
    }
};
let determineMath = () => {
  switch (operator) {
    case "+":
      answer = firstNumber + secondNumber;
      document.querySelector(".inputbox").innerText = answer;
      break;

    case "-":
      answer = firstNumber - secondNumber;
      document.querySelector(".inputbox").innerText = answer;
      answer;
      break;

    case "/":
      if (secondNumber === 0) {
        alert("cannot divide number by 0");
      }
      answer = firstNumber / secondNumber;
      document.querySelector(".inputbox").innerText = answer;
      answer;
      break;

    case "x":
      answer = firstNumber * secondNumber;
      document.querySelector(".inputbox").innerText = answer;
      answer;
      break;
  }
};

// let calculateEquation = () => {
//   console.log(usersInputEquation);
//   console.log(display.value);
//   convertStringToJavaScriptEquation();
//   console.log();
// };
//  convertStringToJavaScriptEquatletion = () => {
//   // convert the equation to numbers and operators that javscript understands
//   // loop through the user input equation
//   for (let i = 0; i < usersInputEquation.length; i++) {
//     console.log(usersInputEquation[i]);
//   }
//   // separate the first number from the second
//   // assign each thing to a variable
// };
let clearDisplay = () => {
  document.querySelector(".inputbox").textContent = "+";
  display.value = "";
};

//  };
