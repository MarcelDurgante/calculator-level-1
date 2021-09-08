let key = document.querySelectorAll('.keys');
let number = document.querySelectorAll('.key__numbers');
let operator = document.querySelectorAll('.key__operators');
let clear = document.getElementById('clear')
let equal = document.getElementById('equal');
let displayMax = document.getElementById('displayMax');

let keys = Array.from(key)
let numbers = Array.from(number)
let operators = Array.from(operator)

let history = [];


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
    operator.addEventListener('click', () => {
        displayMax.textContent += operator.innerText
        operator.classList.add('key__operators-clicked');
        setTimeout(() => {
            operator.classList.remove('key__operators-clicked')
        }, 100);
    });
});

// Clear Screen

clear.addEventListener('click', () => {
    displayMax.textContent = "";
    displayMini.textContent = "";
});

//  Function Display on Mini Screen

let equalBtn = equal.addEventListener('click', printDisplayMini);

function displayToMini () {
        displayMini.textContent += displayMax.innerHTML;
        history.push(displayMini.textContent);
        console.log(history)
}


