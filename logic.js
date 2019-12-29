/* eslint-env es6 */
/* eslint-disable no-console */

const resultDisplay = document.querySelector(".result-display");
const displayValue = document.querySelector(".display-value")
const numberBtns = document.querySelectorAll(".number-btn");
const operatorBtns = document.querySelectorAll(".operator-btn");
const equalsBtn = document.querySelector(".equals-btn");
const clearBtn = document.querySelector(".clear-btn");

let firstValue = 0;
let secondValue = 0;
let operator;
let total = 0;

clearCalc();

function clearCalc() {
    displayValue.textContent = "";
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

function checkPeriod(value) {
    let toTest = value;
    if (toTest.indexOf(".") !== -1) {
        //console.log('Found . in string')
    } else {
        //console.log('Not . found')
    }
}


function populate(value) {
    //value == number
    //is there a . in resultDisplay?
    if (displayValue.textContent.indexOf(".") !== -1 && value == ".") {
        //do nothing
    } else {
        displayValue.textContent += value;
    }

}




numberBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        //take value os button
        let btnValue = e.target.innerText;
        //send to display
        populate(btnValue);

    });
});


operatorBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let operatorValue = e.target.innerText;

        callOperator()
    });
});


clearBtn.addEventListener("click", () => {
    clearCalc();
});

equalsBtn.addEventListener("click", () => {
    operate();
})