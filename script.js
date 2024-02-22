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
	MULTIPLY: "x",      
	DIVIDE: "÷"         
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

function operate(prevNumStr, currNumStr, op) {
    const num1 = parseFloat(prevNumStr);
    const num2 = parseFloat(currNumStr);

    if(typeof(num1) !== "number" || typeof(num2) !== "number")
        return NaN;

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
            return NaN;
    }
}

// Main handler when any button is pressed
function buttonHandler() {
    switch(this.dataset.type)
    {
        case "number":
            if(displayMain.innerHTML === "0" || mainNumStr === null)
                mainNumStr = this.innerHTML;
            else
                mainNumStr += this.innerHTML;
            
            // update display
            displayMain.innerHTML = mainNumStr;
            
            break;

        case "decimal":
            if(!mainNumStr)
                mainNumStr = "0";

            if(!mainNumStr.includes("."))
            {
                mainNumStr += this.innerHTML;
            
                // update display
                displayMain.innerHTML = mainNumStr;
            }
            break;

        case "operator":
            // bring mainNum to subNum if there's no subNum & empty mainNum
            if(!subNumStr) 
            {
                subNumStr = mainNumStr;
                mainNumStr = null;
                displaySub.innerHTML = subNumStr;
            }

            // if user alrd entered some num ie. substr has some num
            if(mainNumStr)
            {
                const answer = operate(subNumStr, mainNumStr, op);
                // update "frontend" values
                displaySub.innerHTML = answer;
                displayMain.innerHTML = answer;

                // update "backend" values
                subNumStr = answer;
                mainNumStr = null;
            }

            // update operator
            op = this.innerHTML;
            displayOp.innerHTML = "&nbsp;" + op;

            break;

        case "equal":
            // check if user has keyed in all numStr and operator
            if(mainNumStr && subNumStr && op)
            {
                const answer = operate(subNumStr, mainNumStr, op);

                // update "frontend" values
                displaySub.innerHTML += "&nbsp;" + op + "&nbsp;" + mainNumStr + "&nbsp;" + "=";
                displayMain.innerHTML = answer;
                displayOp.innerHTML = "";

                // update "backend" values
                subNumStr = null;
                mainNumStr = answer;
                op = null;
            }
            break;

        case "clear":
            if(this.value == "all_clear")
            {
                mainNumStr = "0";
                subNumStr = null;
                op = null;

                displaySub.innerHTML = subNumStr;
                displayOp.innerHTML = op;
            }
            else if(this.value == "delete")
            {
                // remove last char if mainNum is not null or 0
                if(mainNumStr && mainNumStr !== "0")                    
                    mainNumStr = mainNumStr.slice(0, -1);

                // if mainNum is now null, a -ve op OR empty, chg it to 0
                if(!mainNumStr || mainNumStr === "-" || mainNumStr === "")
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