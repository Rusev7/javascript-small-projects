// document.getElementById('idname') - Служи за вземането на конкретен елемент от HTML документа

// document.getElementById('idname').style.cssProperty - служи за настройването на определена CSS 
// стойност на конкретен елемент

// element.addEventListener('click', function) - служи за буквално "слагане на слушател за събития"
// като в случая "слуша" за кликването на button елемента, който е взет document.getElementById('background')
// втория аргумент е подаването на функция БЕЗ (), за да може да я извиква само при клик, иначе ще я извика при 
// зареждането на програмата

function changeBackground() {
    // array of colors
    const colors = ['#FFA421', '#0078ff', '#bd00ff', '#01ff1f', '#e3ff00'];
    // random number assigned to a var
    let num = Math.floor(Math.random() * colors.length);
    // get the body element
    let bodyEl = document.querySelector('body');
    // style it
    bodyEl.style.backgroundColor = colors[num];
}

let button = document.getElementById('background');

button.addEventListener('click', changeBackground);