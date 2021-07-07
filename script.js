/**
 * Local variables
 */
let dispNumber = 0;
let firts = 0;
let second = 0;
let operator = "";
let dot = 0;

/**
 * Primary functions
 * @param {firts member} a 
 * @param {second member} b 
 * @returns Desired result
 */
const add = function(a, b) { return a + b; }
const subtract = function(a, b) { return a - b; }
const multiply = function(a, b) { return a * b; }
const divide = function(a, b) { return a / b; }

const operate = function(a, b, op) {
    switch(op) {
        case "+": 
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            if(b == 0) return "ERROR"
            return divide(a, b);
        case "%":
            return dispNumber / 100;
    }
}

/**
 * Action functions
 */

/**
 * Updates the displayed number and refresh
 * @param {Number picked} n 
 */
function number(n) {
    if(!dot) {
        dispNumber = (dispNumber * 10) + n;
    }
    else {
        dispNumber = dispNumber + (n * Math.pow(10, - dot));
        if(dot < 13) dot++;
    }
    refresh();
}

/**
 * 
 * @param {Operation picked} s 
 */
function operation(s) {
    // Save the number
    saveNumber();
    // Concadenate operations
    if(second) res();
    // Set the operation
    operator = s;
    dot = 0;
}

/**
 * Makes the operation, displays it
 * and resets the variables
 */
function res() {
    if(!second) saveNumber();
    dispNumber = operate(firts, second, operator);
    refresh();
    firts = dispNumber;
    dispNumber = 0;
    second = 0;
    dot = 0;
}

/**
 * Clears all variables and resfreshes the display
 */
function fullClear() {
    dispNumber = 0;
    firts = 0;
    second = 0;
    operator = "";
    dot = 0;
    refresh();
}

/**
 * Removes the las digit from the display and refreshes the display
 */
function erase() {
    
}

/**
 * Let the user to introduce decimals
 */
function decimal() {
    if(dot == 0) dot = 1;
}

//Auxiliar functions

/**
 * Refresh the display with dispNumber
 */
function refresh() { document.getElementById("res").textContent = dispNumber.toFixed(dot ? dot - 1 : dot); }

/**
 * Resets variables for the new number
 */
function newNumber() {}

/**
 * Saves the number in the correct variable
 * and resets the input variable
 */
function saveNumber() {
    (!firts) ? firts = dispNumber : second = dispNumber;
    dispNumber = 0;
}