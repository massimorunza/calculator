function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a/b;
}

function operate(operator, a, b) {
    if (operator === '+') {
        return add(a, b);
    } else if (operator === '-') {
        return subtract(a, b);
    } else if (operator === 'x') {
        return multiply(a, b);
    } else if (operator === '/') {
        return divide(a, b);
    }
}

// Declaring some variables that will be useful later

let displayValue1 = undefined;
let displayValue2 = undefined;
let operator = '';
let switcher = false;

// Function that populates the display when the user click buttons

// Targeting Display in the DOM and setting initial value to 0
const display = document.querySelector('.display');
display.textContent = '0';

// Targets the buttons containing numbers, as soon as they are clicked display is update with
// the right value
const buttons = document.querySelectorAll('.numbers'); 

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (display.textContent === '0') {
            display.textContent = '';
            display.textContent = button.textContent;
        } else if (display.textContent.includes('+') || display.textContent.includes('-') || 
                   display.textContent.includes('x') || display.textContent.includes('/')    ) {
            display.textContent = '';
            display.textContent += button.textContent;
        } else {
            display.textContent += button.textContent;
        }
    })
});

// Targets the operators buttons. As soon as they are clicked

const operators = document.querySelectorAll('.operator');

operators.forEach((button) => {
    button.addEventListener('click', () => {
        switcher = false;
        if (displayValue1 === undefined){
            displayValue1 = display.textContent;
            operator = button.textContent;
            display.textContent += operator;
            console.log(displayValue1, '', displayValue2);
        } else {
            displayValue2 = display.textContent;
            console.log(operate(operator, parseInt(displayValue1), parseInt(displayValue2)));
        }
    })
});

const calc = document.querySelector('.calculate');

calc.addEventListener('click', () => {
    if (switcher === false) {
        switcher = true;
        displayValue2 = display.textContent;
        display.textContent = operate(operator, parseInt(displayValue1), parseInt(displayValue2));
        displayValue1 = undefined;
        displayValue2 = undefined;
        } else {
        console.log('nein');
        }
},);