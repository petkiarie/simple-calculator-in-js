// Variables to store the calculator state
let displayValue = '';
let resultValue = '';

// Function to update the display
function updateDisplay() {
    document.getElementById('display').value = displayValue;
}

// Function to handle button clicks
function inputDigit(digit) {
    displayValue += digit;
    updateDisplay();
}

function inputOperator(operator) {
    displayValue += operator;
    updateDisplay();
}

function calculateResult() {
    try {
        //eval() funciton helps evaluate and 
        // execute a string of code as if it was an actual js code
        
        resultValue = eval(displayValue);
        displayValue = resultValue.toString();
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}

function clearDisplay() {
    displayValue = '';
    resultValue = '';
    updateDisplay();
}
