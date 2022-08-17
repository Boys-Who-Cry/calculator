const calculatorOutput = document.querySelector("#calculatorOutput");
const clear = document.querySelector("[data-clear]");
const equals = document.querySelectorAll("[data-equals]");
const actionButton = document.querySelectorAll("[data-action]");
const numberButton = document.querySelectorAll("[data-number]");


const multiply = (num1, num2) => {
}
const divide = (num1, num2) => {
}
const add = (num1, num2) => {
}
const subtract = (num1, num2) => {
}

const operate = (firstNumber, secondNumber, operator) => {
    switch(operator){
        case "*":
            multiply(firstNumber, secondNumber);
            break;
        case "/":
            divide(firstNumber, secondNumber);
            break;
        case "+":
            add(firstNumber, secondNumber);
            break;
        case "-":
            minus(firstNumber, secondNumber);
            break;
    }
}

console.log(clear);