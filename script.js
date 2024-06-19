// script.js

document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '';
    let operator = null;
    let firstOperand = null;

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const value = button.getAttribute('data-value');

            if (value === 'C') {
                currentInput = '';
                operator = null;
                firstOperand = null;
                display.textContent = '';
                return;
            }

            if (value === '=') {
                if (operator && firstOperand !== null && currentInput) {
                    const secondOperand = parseFloat(currentInput);
                    switch (operator) {
                        case '+':
                            currentInput = (firstOperand + secondOperand).toString();
                            break;
                        case '-':
                            currentInput = (firstOperand - secondOperand).toString();
                            break;
                        case '*':
                            currentInput = (firstOperand * secondOperand).toString();
                            break;
                        case '/':
                            currentInput = (firstOperand / secondOperand).toString();
                            break;
                    }
                    display.textContent = currentInput;
                    firstOperand = null;
                    operator = null;
                }
                return;
            }

            if (['+', '-', '*', '/'].includes(value)) {
                if (currentInput) {
                    firstOperand = parseFloat(currentInput);
                    operator = value;
                    currentInput = '';
                }
                return;
            }

            currentInput += value;
            display.textContent = currentInput;
        });
    });
});
