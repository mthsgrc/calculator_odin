/* eslint-env es6 */
/* eslint-disable no-console */

const resultDisplay = document.querySelector(".result-display");
const displayFirstValue = document.querySelector(".display-first-value");
const displayValueTemp = document.querySelector(".display-value-typing");
const displayOperator = document.querySelector(".display-operator");
const numberBtns = document.querySelectorAll(".number-btn");
const operatorBtns = document.querySelectorAll(".operator-btn");
const equalsBtn = document.querySelector(".equals-btn");
const clearBtn = document.querySelector(".clear-btn");

let firstValue = 0;
let secondValue = 0;
let operatorValue = "";
let total = 0;

clearCalc();

function clearCalc() {
    displayFirstValue.textContent = null;
    displayValueTemp.textContent = "";
    displayOperator.textContent = "";
    firstValue = 0;
    secondValue = 0;
    operatorValue = "";
    total = 0;
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
    if (y == 0) {
        return "ERROR!"
    } else {
        return (x / y);
    }
}

function operate(x, y, operator) {
	let result;
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
    total = result.toFixed(3);
}


// Already in populate()
function checkPeriod(value) {
    let toTest = value;
    if (value.textContent.indexOf(".") !== -1 && value == ".") {
        //do nothing
    } else {
        value.textContent += value;
    }
}


function populate(value) {
    //value == number
    //is there a . in resultDisplay?
    if (displayValueTemp.textContent.indexOf(".") !== -1 && value == ".") {
        //do nothing
    } else {
        displayValueTemp.textContent += value;
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
        let operatorSymbol = e.target.innerText;

        insertOperator(operatorSymbol);

    });
});


function insertOperator(operator) {
    if (displayFirstValue.textContent == false) {
        displayFirstValue.textContent = displayValueTemp.textContent;
        firstValue = +displayValueTemp.textContent

        displayOperator.textContent = operator;
        operatorValue = displayOperator.textContent;
        displayValueTemp.textContent = "";

    } else if (displayFirstValue.textContent == true && operator !== false) {

        secondValue = displayValueTemp.textContent;

    	operate(firstValue, secondValue, operatorValue);

    	displayValueTemp.textContent = total;


    } else {
        displayOperator.textContent = operator;
        operatorValue = operator;
        displayValueTemp.textContent = "";

    }
}
clearBtn.addEventListener("click", () => {
    clearCalc();
});

equalsBtn.addEventListener("click", () => {
	secondValue = +displayValueTemp.textContent;

    operate(firstValue, secondValue, operatorValue);

    firstValue = total;

    displayValueTemp.textContent = total;
    displayFirstValue.textContent = "";
    displayOperator.textContent = ""; 

});
