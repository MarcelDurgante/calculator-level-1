let key = document.querySelectorAll('.keys');
let number = document.querySelectorAll('.key__numbers');
let operator = document.querySelectorAll('.key__operators');
let clear = document.getElementById('clear')
let equal = document.getElementById('equal');
let displayMax = document.getElementById('displayMax');
let displayMini = document.getElementById('displayMini');

let keys = Array.from(key)
let numbers = Array.from(number)
let operators = Array.from(operator)

let log = [];

// Print Numbers on Screen

numbers.forEach((number) => {
    number.addEventListener('click', () => {
        displayMax.textContent += number.innerText
        number.classList.add('key__numbers-clicked')
        setTimeout(() => {
            number.classList.remove('key__numbers-clicked')
        }, 100);
    });
});

// Print Operators on Screen

operators.forEach((operator) => {
    operator.addEventListener('click', (e) => {

        // click effect on click a key
        operator.classList.add('key__operators-clicked');
        setTimeout(() => {
            operator.classList.remove('key__operators-clicked')
        }, 100);

        //-----PRINT ON SCREEN
        displayMax.textContent += operator.innerText


        //----- CLEAR BUTTON -----
        if(operator.textContent == 'C') {
            displayMax.textContent = 0;
            displayMini.textContent = 0;

        // -------- SHOW ONLY ONE OPERATOR --------
        } else if (
            displayMax.textContent.slice(-1) == "+" ||
            displayMax.textContent.slice(-1) == "-" ||
            displayMax.textContent.slice(-1) == "*" ||
            displayMax.textContent.slice(-1) == "/" ||
            displayMax.textContent.slice(-1) == "%" ||
            displayMax.textContent.slice(-1) == "+-"
        ) {} else {
            displayMax.textContent += e.target.value;
        }
    });
});


// Clear Screen

/* function clearScreen() {
    clear.addEventListener('click', () => {
        displayMax.textContent = "";
        displayMini.textContent = "";
    })
};
clearScreen(); */

// Sum
function addition(val1, val2) {
    let res = val1 + val2;
    displayMax.textContent = res;
}

//  Equal key functions

let equalBtn = equal.addEventListener('click', equalResult);

function equalResult() {
    //display Max on Mini Screen
    displayMini.textContent += (displayMax.textContent);
    let innerMax = (displayMax.innerText);

    // log operations
    log.push(innerMax);
    // do calculus
    //sum

    console.log(log)
    // print results
};