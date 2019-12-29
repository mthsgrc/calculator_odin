/* eslint-env es6 */
/* eslint-disable no-console */

const resultDisplay = document.querySelector(".result-display");
const numberBtns = document.querySelectorAll(".number-btn");
const operatorBtns = document.querySelectorAll(".operator-btn");
const equalsBtn = document.querySelector(".equals-btn");
const clearBtn = document.querySelector(".clear-btn");

let displayValue = 0;
let firstValue = 0;
let secondValue = 0;
let operator;
let total = 0;

clearCalc();

function clearCalc() {
    resultDisplay.textContent = 0;
    displayValue = 0;
    firstValue = 0;
    secondValue = 0;
    total = 0;
    operator = "";
}

function add(x, y) {
    return (x + y);
}

function subtract(x, y) {
    return (x - y);
}

function multiply(x, y) {
    return (x * y);
}

function divide(x, y) {
    return (x / y);
}

function operate(x, y, operator) {
    let result = 0;
    switch (operator) {
        case "+":
            result = add(x, y);
            break;
        case "-":
            result = subtract(x, y);
            break;
        case "*":
            result = multiply(x, y);
            break;
        case "/":
            result = divide(x, y);
            break;
        default:
            break;
    }
    return result;
}

function checkPeriod() {
    let checkArray = Array.from(firstValue);
    return checkArray.includes('.');
}

function populate(value) {
    //value == number
    //is there a . in resultDisplay?
    //	
    if (checkPeriod(firstValue)) {
        //do nothing
    } else {

        resultDisplay.textContent += value;
    }

    firstValue = +resultDisplay.textContent;
}


numberBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let btnValue = e.target.innerText;

        populate(btnValue);

    });
});


operatorBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {

    });
});


clearBtn.addEventListener("click", () => {
    clearCalc();
});

equalsBtn.addEventListener("click", () => {
    operate();
})