let counterValue = 0;
let counter = document.getElementById('counter');

function addValue(){
    counterValue += 1;
    counter.innerText = `[${counterValue}]`;
}

function subtractValue(){
    if (counterValue == 0) {
        counterValue = 0;
    } else {
        counterValue -= 1;
    }
      
    counter.innerText = `[${counterValue}]`;
}

let subtract = document.getElementById('leftButton');
let add = document.getElementById('rightButton');

subtract.addEventListener('click', subtractValue);
add.addEventListener('click', addValue);

