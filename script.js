
const input = document.querySelectorAll(".button-pad-btn");
let userInput = [];


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

const operate = function(operator, num1, num2) {
    if (operator === "+") {return add(num1,num2);}
    if (operator === "-") return subtract(num1,num2);
    if (operator === "x") return multiply(num1,num2);
    if (operator === "/") return divide(num1, num2);
};

const test = function(btn) {
    console.log(btn.path[0].innerText);
}

const display = function(btn) {
    const bottomScreen = document.querySelector("#screen-bottom");
    userInput.push(btn.path[0].innerText)
    bottomScreen.textContent = userInput.join("").toString();
}

console.log(userInput);

input.forEach(button => button.addEventListener("click", display));


