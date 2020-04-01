// document.getElementById('idname').value - ще вземе стойността въведена в Input елемент от HTML документа
// element.innerText - служи за промяна на текста вътре в HTML елемента

// в случая element('keyup', function) - keyup е събитие, при което потребител натиска което и да е копче от 
// клавиатурата си

let label = document.getElementById('result');

function countLetters(){
    let input = document.getElementById('letters').value;
    label.innerText = `Result: ${input.length}`;
}

let inputTag = document.getElementById('letters');

inputTag.addEventListener('keyup', countLetters);