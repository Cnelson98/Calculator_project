//creating a variable for the buttons, grabs all those buttons with class button
const buttons = document.querySelectorAll(".button");
//equation arrays
let userInputEquation = [];
let userInputEquationCopy = [];
//seperate numbers from operators
let firstNumber;
let secondNumber;
let operator;
let answer;

//creating an event listener for each button with class button, telling calculator what to do when buttons are clicked.
buttons.forEach((button) => {
  //(e) stands for event
  button.addEventListener("click", (e) => {
    //get the innerHTML of clicked buttons pnce click event happens
    let buttonText = e.target.innerHTML;

    //adds the buttons text to the  equation arrays (what button is pressed goes into equation array)
    userInputEquation.push(buttonText);
    userInputEquationCopy.push(buttonText);

    //updates display to show current equation

    document.querySelector(".inputbox").innerText = userInputEquation.join(""); // .join takes everything that was being pushed into array, and turns it into 1 string

    console.log(userInputEquation); //checking for bugs
  });
});

//adding event listener for numbers inputted in the keyboard
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
    "*",
  ];
  if (validKeys.includes(e.key)) {
    userInputEquation.push(e.key);
    document.getElementById("inputbox").innerText = userInputEquation.join(" ");
  }
  if (e.key === "=" || e.key === "Enter") {
    //calling calculateEquation function so the computer knows to calculate input after return button is pressed on keyboard
    calculateEquation();
  }
});

//used to run other functions when the = button is clicked
let calculateEquation = () => {
  console.log(userInputEquation);

  //call conversion function so it can be ran. converting button input to JS equation so that we can do math on it
  convertToJavascriptEquation();
  //calling determine operator function switch statement
  determineMath();
  //getting answer, update answer and reset arrays
  userInputEquation = [];
  //pushing answer back into array
  userInputEquation.push(answer);
};

//setting function to iterate through the array that jholds buttons that were clicked.
let convertToJavascriptEquation = () => {
  //checking for operators and telling JS what to do with them
  for (i = 0; i < userInputEquation.length; i++) {
    //chechking to see if these oeprators got pushed in the array
    if (["+", "-", "=", "/", "*"].includes(userInputEquation[i])) {
      //setting operator to equal to whatever index had the operator we wre looking for.
      operator = userInputEquation[i];
      //LOOK UP SPLICE EXACT DEFINITION - removes  or adds elements to a seperate array
      //anything starting at 0, all the way up to the index that we left off will be stored in the variable. returns a copy of the array/another array
      // . join combines arrays
      //starts at first index ends at current index
      //goes into array, slices in half from the start of user input up until operator(+ - /), when operator is pressed, operator is store into "operator " variable and slice is making a copy of the array. joins together into one string (join turns things into strings.)parsefloat then turns that string into a number.
      firstNumber = parseFloat(userInputEquation.slice(0, i).join(""));

      //starts at current index, and keeps going for whatever comes after
      //same thing, but for opposite side. "other integer to be added"
      secondNumber = parseFloat(userInputEquation.slice(i + 1).join(""));
      //making sure the loop isnt never ending, breaks off function.
      break;
    }
  }
};

//figuring out what type of mathmateical equation needs to be run.
//creating a function with a conditional (switch statement, but if/else would work fine too) that tells the calculator to add when the + is include, and so on.

let determineMath = () => {
  switch (operator) {
    case "+":
      answer = firstNumber + secondNumber;
      document.getElementById("inputbox").innerText = answer;
      break;

    case "-":
      answer = firstNumber - secondNumber;
      document.getElementById("inputbox").innerText = answer;
      break;

    case "*":
      answer = firstNumber * secondNumber;
      document.getElementById("inputbox").innerText = answer;
      break;

    case "/":
      //handling errors for when people try to divide by 0
      if (secondNumber === 0) {
        alert("Cannot divide by 0, please enter another number");
        return;
      }

      answer = firstNumber / secondNumber;
      document.getElementById("inputbox").innerText = answer;
      break;
  }
};

let clearButton = () => {
  userInputEquation = [];
  document.querySelector(".inputbox").innerText = [""];
};
