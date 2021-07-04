let dispNumber = 0;
let firts = 0;
let operator = "";
let result = true;

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
    }
}

function refresh() { document.getElementById("res").textContent = dispNumber; }

function number(n) {
    if(result) {
        dispNumber = n;
        result = false;
    }
    else {
        dispNumber = dispNumber * 10 + n;
    }
    refresh();
}

function operation(s) {
    firts = dispNumber;
    operator = s;
    dispNumber = 0;
}

function res() {
    if(!result) {
        dispNumber = operate(firts, dispNumber, operator);
        result = true;
    }
    refresh();
}

function fullClear() {
    dispNumber = 0;
    firts = 0;
    operator = "";
    refresh();
}

function erase() {
    dispNumber = (dispNumber - dispNumber % 10) / 10;
    refresh();
}