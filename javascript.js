// javascript.js

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b !== 0)
        return a / b;
    else
        return "NaN";
}

let firstNum;
let operator;
let secondNum;

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

let displayNumber;

const buttonsList = Array.from(document.querySelectorAll("#calcButtons button"));
for (const button of buttonsList) {
    if(button.classList.contains("calcNumber")) {
        button.addEventListener("click", () => {
            displayNumber = button.textContent;
            document.querySelector("#displayValue").textContent = displayNumber;
        });
    }
}