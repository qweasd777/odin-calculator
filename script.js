// current input on calculator
const displayMainText = document.querySelector('.main-text').innerHTML;       
// prev input on calculator
const displaySubText = document.querySelector('.sub-text').innerHTML;        
const displayOpText = document.querySelector('.op-text').innerHTML;   

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

// Main handler when any button is pressed
function buttonHandler() {
    switch(this.dataset.type)
    {
        case "number":
            // console.log(this.innerHTML);
            break;

        case "decimal":
            break;

        case "operator":
            break;

        case "equal":
            break;

        case "clear":
        default:
            if(this.dataset.value == "all_clear")
            {

            }
            else if(this.dataset.value == "delete")
            {

            }
            break;
    }
}

// ---------- BUTTONS ----------
const btn_all = document.querySelectorAll('button');
//const btn_clear = document.querySelector('#setClear');

btn_all.forEach(btn => btn.addEventListener('click', buttonHandler));


// ---------- BUTTONS ----------