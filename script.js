
const topScreen = document.querySelector("#screen-top");
const bottomScreen = document.querySelector("#screen-bottom");
const onlyNum = new RegExp('^[0-9]*$');
let userInput = [];
let num1;
let num2;

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
    console.log(btn.target.className);
    if (btn.target.className != "button-pad-btn number") {
        return;
    } else userInput.push(this.textContent);
    bottomScreen.textContent = userInput.join("").toString();
}

const sign = function(btn) {
    topScreen.textContent = `${userInput.join("").toString()} +`;
    bottomScreen.textContent = "0";
    userInput = [];
}

console.log(userInput);


//event listeners
const input = document.querySelectorAll(".button-pad-btn");
input.forEach(button => button.addEventListener("click", display));

const plus = document.querySelector("#plus");
console.log(plus);
plus.addEventListener("click", sign);



