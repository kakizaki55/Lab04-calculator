 // import functions
import { add } from './calculator.js';
import { sub } from './calculator.js';
import { mul } from './calculator.js';
import { div } from './calculator.js';
import { mod } from './calculator.js';


//additon 
const addNum1 = document.getElementById('addNum1');
const addNum2 = document.getElementById('addNum2');
const addButton = document.getElementById('addButton');
const addAnswer = document.getElementById('addAnswer');

// reference needed DOM elements

addButton.addEventListener('click', () => {
    const num1 = Number (addNum1.value);
    const num2 = Number(addNum2.value);
    

    const sum = add(num1, num2);
    addAnswer.textContent = sum;
});
//subtraction 
const subNum1 = document.getElementById('subNum1');
const subNum2 = document.getElementById('subNum2');
const subButton = document.getElementById('subButton');
const subAnswer = document.getElementById('subAnswer');

subButton.addEventListener('click', () => {
    const num1 = Number (subNum1.value);
    const num2 = Number(subNum2.value);
    

    const sum = sub(num1, num2);
    subAnswer.textContent = sum;

});
//multipication 
const mulNum1 = document.getElementById('mulNum1');
const mulNum2 = document.getElementById('mulNum2');
const mulButton = document.getElementById('mulButton');
const mulAnswer = document.getElementById('mulAnswer');

mulButton.addEventListener('click', () => {
    const num1 = Number (mulNum1.value);
    const num2 = Number(mulNum2.value);
    

    const sum = mul(num1, num2);
    mulAnswer.textContent = sum;

});

//dividion 
const divNum1 = document.getElementById('divNum1');
const divNum2 = document.getElementById('divNum2');
const divButton = document.getElementById('divButton');
const divAnswer = document.getElementById('divAnswer');

divButton.addEventListener('click', () => {
    const num1 = Number (divNum1.value);
    const num2 = Number(divNum2.value);
    

    const sum = div(num1, num2);
    divAnswer.textContent = sum;

});
//module 
const modNum1 = document.getElementById('modNum1');
const modNum2 = document.getElementById('modNum2');
const modButton = document.getElementById('modButton');
const modAnswer = document.getElementById('modAnswer');

modButton.addEventListener('click', () => {
    const num1 = Number (modNum1.value);
    const num2 = Number(modNum2.value);
    

    const sum = mod(num1, num2);
    modAnswer.textContent = sum;

});
