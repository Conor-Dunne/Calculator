
const topScreen = document.querySelector("#screen-top");
const bottomScreen = document.querySelector("#screen-bottom");
let userInput = [];
let num1 = 0;
let num2 = 0;
let operator = "";
let result = 0;

const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const multiply = function (a, b) {
    return a * b;
};

const divide = function (a, b) {
    return a / b;
};


const operate = function () {
    num2 = Number(userInput.join("").toString());
    if (operator === "") return;
    if (operator === "+") result = add(num1, num2);
    if (operator === "-") result = subtract(num1, num2);
    if (operator === "x") result = multiply(num1, num2);
    if (operator === "/") result = divide(num1, num2);
    topScreen.textContent = `${num1} ${operator} ${num2} =`;
    bottomScreen.textContent = result;
    num1 = result;
    userInput = [];
};

const test = function (btn) {
    console.log(btn.target.id);
}

const display = function (btn) {
    if (bottomScreen.textContent === "0") num2 = 0;
    if (result) {
        userInput = [];
        result = "";
    }
    userInput.push(this.textContent);
    bottomScreen.textContent = userInput.join("").toString();
}

const chainOperators = function (btn) {
    num2 = Number(bottomScreen.textContent);
    if (operator === "+") result = add(num1, num2);
    if (operator === "-") result = subtract(num1, num2);
    if (operator === "x") result = multiply(num1, num2);
    if (operator === "/") result = divide(num1, num2);
    num1 = result;
    num2 = 0;
    userInput = [];
}

const sign = function (btn) {
    if (bottomScreen.textContent === "0") return;
    if (num1 === 0) {
        operator = btn.target.textContent;
        num1 = Number(bottomScreen.textContent);
        userInput = [];
        topScreen.textContent = `${num1} ${operator}`;
    }
    else if (num1) {
        chainOperators();
        operator = btn.target.textContent;
        topScreen.textContent = `${result} ${operator}`;

    }
}

const clearData = function (btn) {
    if (btn.target.id === "clear-all") {
        topScreen.textContent = "";
        bottomScreen.textContent = "0";
        operator = "";
        num1 = 0;
        num2 = 0;
        userInput = [];
        result = 0;
    }
};



//event listeners
const input = document.querySelectorAll(".number");
input.forEach(button => button.addEventListener("click", display));

const selectOperator = document.querySelectorAll(".operator");
selectOperator.forEach(button => button.addEventListener("click", sign));

const equals = document.querySelector("#equals-btn");
equals.addEventListener("click", operate);

const clearBtns = document.querySelectorAll(".clear");
clearBtns.forEach(button => button.addEventListener("click", clearData));


