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
const checkForRepeat = () => {
}
numberButton.forEach(button => {
    button.addEventListener("click", (event) => {
        //Second number
        if(operator && previousOperand === ""){
            previousOperand = currentOperand;
            currentOperand = "";
        }

        //First Number
        currentOperand += event.target.textContent;

        //Can't have more than one period
        for(let i = 0; i < currentOperand.length; i++){
            if(currentOperand.indexOf(".") !== currentOperand.lastIndexOf(".")){
                currentOperand = currentOperand.slice(0,-1);
            }
        }
        updateDisplay(currentOperand);
        
        //Can't have leading zeros
        if(currentOperand[0] === "0"){clearCalculator();}
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
        //Cant choose operator without previously choosing a number.
        else if(!currentOperand){return;}
        operator = event.target.dataset.action;
        console.log(`Operator: ${operator}`);
    });
})



//Clear
const clearCalculator = () => {
    previousOperand = "";
    currentOperand = "";
    operator = "";
    updateDisplay("0");
}
clear.addEventListener("click", () => {
    clearCalculator();
});



//Equals
const getResults = () => {
    let results = operate(previousOperand, currentOperand, operator);

    previousOperand = results;
    currentOperand = "";
    operator = "";
}
equals.addEventListener("click", () => {
    getResults();
});