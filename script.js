
const topScreen = document.querySelector("#screen-top");
const bottomScreen = document.querySelector("#screen-bottom");
const onlyNum = new RegExp('^[0-9]*$');
let userInput = [];
let num1;
let num2;
let operator;
let result;

const add = function(a,b) {
    return a + b;
};

const subtract = function(a,b) {
    return a - b;
};

const multiply = function(a,b) {
    return a*b;
};

const divide = function(a,b) {
    return a / b;
};


const operate = function() {
    num2 = Number(userInput.join("").toString());
    if (operator === "+") result = add(num1,num2);
    if (operator === "-") result = subtract(num1,num2);
    if (operator === "x") result = multiply(num1,num2);
    if (operator === "/") result = divide(num1, num2);
    topScreen.textContent = `${num1} ${operator} ${num2}`;
    bottomScreen.textContent = result;
    userInput = [];
    userInput.push(result);
    console.log(result);
};

const test = function(btn) {
    console.log(btn.path[0].innerText);
}

const display = function(btn) {
    if (btn.target.className != "button-pad-btn number") {
        return;
    } else userInput.push(this.textContent);
    bottomScreen.textContent = userInput.join("").toString();
}

const sign = function() {
    topScreen.textContent = `${userInput.join("").toString()} +`;
    num1 = Number(userInput.join("").toString());
    operator = this.textContent;
    bottomScreen.textContent = "0";
    userInput = [];
}



//event listeners
const input = document.querySelectorAll(".button-pad-btn");
input.forEach(button => button.addEventListener("click", display));

const plus = document.querySelector("#plus");
plus.addEventListener("click", sign);

const equals = document.querySelector("#equals-btn");
equals.addEventListener("click", operate);


