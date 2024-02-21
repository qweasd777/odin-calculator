// current input on calculator
const displayMain = document.querySelector('.main-text');       
// prev input on calculator
const displaySub = document.querySelector('.sub-text');        
const displayOp = document.querySelector('.op-text');   

// variables to store number string
let mainNumStr = "0";
let subNumStr = null;
let op = null;


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
            if(displayMain.innerHTML === "0")
                mainNumStr = this.innerHTML;
            else
                mainNumStr += this.innerHTML;
            
            // update display
            displayMain.innerHTML = mainNumStr;
            
            break;

        case "decimal":
            if(mainNumStr && !mainNumStr.includes("."))
            {
                mainNumStr += this.innerHTML;
            
                // update display
                displayMain.innerHTML = mainNumStr;
            }
            break;

        case "operator":
            break;

        case "equal":
            break;

        case "clear":
            if(this.value == "all_clear")
            {
                mainNumStr = "0";
                subNumStr = null;
                op = null;

                displaySub.innerHTML = subNumStr;
            }
            else if(this.value == "delete")
            {
                // remove last char if main is not 0
                if(mainNumStr !== "0")                    
                    mainNumStr = mainNumStr.slice(0, -1);

                // if main is now only a negative op OR null, chg it to 0
                if(mainNumStr === "-" || mainNumStr === "")
                    mainNumStr = "0";
            }
            displayMain.innerHTML = mainNumStr;
            
            break;
    }
}

// ---------- BUTTONS ----------
const btn_all = document.querySelectorAll('button');
//const btn_clear = document.querySelector('#setClear');

btn_all.forEach(btn => btn.addEventListener('click', buttonHandler));


// ---------- BUTTONS ----------