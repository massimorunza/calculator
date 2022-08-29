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
    } else if (operator === '*') {
        return multiply(a, b);
    } else if (operator === '/') {
        return divide(a, b);
    }
}

console.log(operate('/', 2, 3));

// Function that populates the display when the user click buttons

// Targeting Display in the DOM and setting initial value to 0
const display = document.querySelector('.display');
display.textContent = '0';

// Targets the buttons and update
const buttons = document.querySelectorAll('.numbers'); 
console.log(buttons);

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (display.textContent === '0') {
            display.textContent = '';
            display.textContent = button.textContent;
        } else {
            display.textContent += button.textContent;
        }
    })
});