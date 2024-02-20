// ---------- BUTTONS ----------
//const btnAll_brushes = document.querySelectorAll('.brushType');
//const btn_clear = document.querySelector('#setClear');
// ---------- BUTTONS ----------
// current input on calculator
const displayMain = document.querySelector('.main');       
// prev input on calculator
const displaySub = document.querySelector('.sub');        
const inputOperator = document.querySelector('.operator');   

const Operators = {
	ADD: "+",
	SUBTRACT: "-",
	MULTIPLY: "x",      // might be wrong char
	DIVIDE: "÷"         // might be wrong char
};

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, num2, op) {
    switch(op) {
        case Operators.ADD:
            return add(num1, num2);
        case Operators.SUBTRACT:
            return subtract(num1, num2);
        case Operators.MULTIPLY:
            return multiply(num1, num2);
        case Operators.DIVIDE:
            return divide(num1, num2);
        default:
            return "undefined operation";
    }
}

function updateDisplay() {
    
}