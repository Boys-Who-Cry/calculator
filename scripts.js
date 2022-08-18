const calculatorOutput = document.querySelector("#calculatorOutput");
let output = calculatorOutput.textContent;
const clear = document.querySelector("[data-clear]");
const equals = document.querySelector("[data-equals]");
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

const multiply = (num1, num2) => {return num1 * num2;}
const divide = (num1, num2) => {return num1 / num2;}
const add = (num1, num2) => {return num1 + num2;}
const subtract = (num1, num2) => {return num1 - num2;}

const operate = (prev, current, op) => {
    prev = Number(prev);
    current = Number(current);
    switch(op){
        case "*":
            results = multiply(prev, current);
            updateDisplay(results);
            break;
        case "/":
            results = divide(prev, current);
            updateDisplay(results);
            break;
        case "+":
            results = add(prev, current);
            updateDisplay(results);
            break;
        case "-":
            results = subtract(prev, current);
            updateDisplay(results);
            break;
    }
    return results;
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
        if(operator){
            getResults();
        }
        else if(previousOperand){
            operator = event.target.dataset.action;
        }
        else if(!currentOperand){return;}//Forbids choosing operator unless it proceeds a number.
        operator = event.target.dataset.action;
        console.log(`Operator: ${operator}`);
    });
})



//Clear
clear.addEventListener("click", () => {
    previousOperand = "";
    currentOperand = "";
    operator = "";
    updateDisplay("0");
    //console.log(`Previous: ${previousOperand} Current: ${currentOperand} Operator: ${operator}`);
});



//Equals
//The reasoning behind using another function to perform the functions of the equals button and calling the below getResults() function from inside of the equals button event listener is to be able to call it when chaining equations not using the equals button.
const getResults = () => {
    let results = operate(previousOperand, currentOperand, operator);

    previousOperand = results;
    currentOperand = "";
    operator = "";
    console.log(`Previous: ${previousOperand} Current: ${currentOperand} Operator: ${operator}`);
}
equals.addEventListener("click", () => {
    //Storing the return value of the operate function in its own variable and then reorganizing/resetting the calculators variables as such, enables the user to use the equals button to chain different equations.
    getResults();
});