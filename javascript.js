// javascript.js

function add(a, b) {
    return Number(a) + Number(b);
}

function subtract(a, b) {
    return Number(a) - Number(b);
}

function multiply(a, b) {
    return Number(a) * Number(b);
}

function divide(a, b) {
    if (Number(b) !== 0)
        return Number(a) / Number(b);
    else
        return "NaN";
}

let firstNum = "";
let operator = "";
let secondNum = "";
let displayNumber = "";
let equalsJustPressed = false;

function operate(firstNum, operator, secondNum) {
    if (operator === "+")
        return add(firstNum, secondNum);
    else if (operator === "-")
        return subtract(firstNum, secondNum);
    else if (operator === "*")
        return multiply(firstNum, secondNum);
    else if (operator === "/")
        return divide(firstNum, secondNum);
    else
        console.error("Invalid operator");
}

function clear() {
    firstNum = "";
    operator = "";
    secondNum = "";
    displayNumber = "";
    document.querySelector("#displayValue").textContent = "";
}


const buttonsList = Array.from(document.querySelectorAll("#calcButtons button"));
for (const button of buttonsList) {
    if(button.classList.contains("calcNumber")) {
        button.addEventListener("click", () => {
            if ((firstNum === "" && operator === "" && secondNum == "") || equalsJustPressed) {
                clear();
                displayNumber = button.textContent;
                document.querySelector("#displayValue").textContent = Math.round(displayNumber * 10000) / 10000;
                firstNum = Number(displayNumber);
                equalsJustPressed = false;
            }
            else if (firstNum !== "" && operator === "" && secondNum === "") {
                displayNumber += button.textContent;
                document.querySelector("#displayValue").textContent = Math.round(displayNumber * 10000) / 10000;
                firstNum = Number(displayNumber);
                equalsJustPressed = false;
            }
            else if (firstNum !== "" && operator !== "" && secondNum === "") {
                displayNumber = button.textContent;
                document.querySelector("#displayValue").textContent = Math.round(displayNumber * 10000) / 10000;
                secondNum = Number(displayNumber);
                equalsJustPressed = false;
            }
            else if (firstNum !== "" && operator !== "" && secondNum !== "") {
                displayNumber += button.textContent;
                document.querySelector("#displayValue").textContent = Math.round(displayNumber * 10000) / 10000;
                secondNum = Number(displayNumber);
                equalsJustPressed = false;
            }
            else {
                console.error("Should never get here.")
            }
        });
    }
    else if(button.classList.contains("calcOperator")) {
        button.addEventListener("click", () => {
            if ((firstNum === "" && operator === "" && secondNum == "") || equalsJustPressed) {
                operator = button.textContent;
                secondNum = ""
                equalsJustPressed = false;
            }
            else if (firstNum !== "" && operator === "" && secondNum === "") {
                operator = button.textContent;
                equalsJustPressed = false;
            }
            else if (firstNum !== "" && operator !== "" && secondNum === "") {
                operator = button.textContent;
                equalsJustPressed = false;
            }
            else if (firstNum !== "" && operator !== "" && secondNum !== "") {
                displayNumber = operate(firstNum, operator, secondNum);
                document.querySelector("#displayValue").textContent = Math.round(displayNumber * 10000) / 10000;
                firstNum = Number(displayNumber);
                operator = button.textContent; 
                equalsJustPressed = false;              
            }
            else {
                console.error("Should never get here.")
            }
        })
    }
    else if (button.id==="equals") {
        button.addEventListener("click", () => {
            if (firstNum === "" || operator === "" || secondNum === "")
                ; //do nothing
            else {
                displayNumber = operate(firstNum, operator, secondNum);
                document.querySelector("#displayValue").textContent = Math.round(displayNumber * 10000) / 10000;
                firstNum = Number(displayNumber);
                equalsJustPressed = true;
            }
        })
    }
    else if (button.id==="clear") {
        button.addEventListener("click", clear)
    }
}

function printState() { console.log("first number: " + firstNum + "\n second number: " + secondNum + "\n operator: " + operator + "\n display number: " + displayNumber); }