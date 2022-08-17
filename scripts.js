const calculatorOutput = document.querySelector("#calculatorOutput");
let output = calculatorOutput.textContent;
const clear = document.querySelector("[data-clear]");
const equals = document.querySelectorAll("[data-equals]");
const actionButton = document.querySelectorAll("[data-action]");
const numberButton = document.querySelectorAll("[data-number]");

let previousOperand = "";
let currentOperand = "";
let operator = "";
let results;

const updateDisplay = (str) => {
    output = str;
    calculatorOutput.textContent = output;
}

const multiply = (num1, num2) => {
}
const divide = (num1, num2) => {
}
const add = (num1, num2) => {
}
const subtract = (num1, num2) => {
}

const operate = (firstNumber, secondNumber, operator) => {
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    switch(operator){
        case "*":
            results = multiply(firstNumber, secondNumber);
            break;
        case "/":
            results = divide(firstNumber, secondNumber);
            break;
        case "+":
            results = add(firstNumber, secondNumber);
            break;
        case "-":
            results = minus(firstNumber, secondNumber);
            break;
    }
    updateDisplay(results);
}



//Numbers
numberButton.forEach(button => {
    button.addEventListener("click", (event) => {
        //Gets second number
        if(operator && previousOperand === ""){
            previousOperand = currentOperand;
            currentOperand = "";
        }
        //First Number
        currentOperand += event.target.textContent;

        updateDisplay(currentOperand);

        console.log(`Previous: ${previousOperand} Current: ${currentOperand} Operator: ${operator}`);
    });
});



//Operator
actionButton.forEach(button => {
    button.addEventListener("click", (event) => {
        if(!currentOperand){return;}//Forbids choosing operator unless it proceeds a number.
        operator = event.target.dataset.action;
        //console.log(`Operator: ${operator}`);
    });
})