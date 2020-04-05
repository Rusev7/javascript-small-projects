// Възможно най-смотания начин, който ще видите за правене на калкулатор,
// но на това ниво така :D

// 01. Вземаме всеки елемент, който ще използваме
const input = document.querySelector('#input');
const clearIcon = document.querySelector('.icon');
// цифри
const digitOne = document.querySelector('#btn-1');
const digitTwo = document.querySelector('#btn-2');
const digitThree = document.querySelector('#btn-3');
const digitFour = document.querySelector('#btn-4');
const digitFive = document.querySelector('#btn-5');
const digitSix = document.querySelector('#btn-6');
const digitSeven = document.querySelector('#btn-7');
const digitEight = document.querySelector('#btn-8');
const digitNine = document.querySelector('#btn-9');
const digitZero = document.querySelector('#btn-0');
// Оператори
const add = document.querySelector('#btn-add');
const subtract = document.querySelector('#btn-sub');
const multiply = document.querySelector('#btn-x');
const divide = document.querySelector('#btn-divison');
const decimal = document.querySelector('#btn-dec');

digitOne.addEventListener('click', () => {
    input.value += digitOne.value;
});

digitTwo.addEventListener('click', () => {
    input.value += digitTwo.value;
});

digitThree.addEventListener('click', () => {
    input.value += digitThree.value;
});

digitFour.addEventListener('click', () => {
    input.value += digitFour.value;
});

digitFive.addEventListener('click', () => {
    input.value += digitFive.value;
});

digitSix.addEventListener('click', () => {
    input.value += digitSix.value;
});

digitSeven.addEventListener('click', () => {
    input.value += digitSeven.value;
});

digitEight.addEventListener('click', () => {
    input.value += digitFour.value;
});

digitNine.addEventListener('click', () => {
    input.value += digitNine.value;
});

digitZero.addEventListener('click', () => {
    input.value += digitZero.value;
});



// Изчистване на екрана
clearIcon.addEventListener('click', () =>{
    input.value = '';
});





// let numbers = [];
// let array = '1+64';

// let slicePos = array.indexOf('+');

// let firstNum = Number(array.slice(0, slicePos));
// let secondNum = Number(array.slice(slicePos + 1, array.length));
// numbers.push(firstNum);
// numbers.push(secondNum);
// console.log(numbers);
// console.log(firstNum);
// console.log(secondNum);
// console.log(firstNum + secondNum);