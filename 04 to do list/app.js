// Избираме елементите, които ще използваме
const clear = document.querySelector('.clear'); // Бутона за изчистване
const dateElement = document.querySelector('#date'); // Не съм добавял дата в проекта(ако решите вижте в google как става)
const list = document.getElementById('list'); 
const input = document.getElementById('input');

const check = 'fa-check-circle'; // класът за кръгчето с тикче 
const uncheck = 'fa-circle-thin'; // класът за незапълненото кръгче
const lineThrough = 'lineThrough'; // класът за "задраскания" тескт

let LIST, id; // декларираме променливите, като първата е масив (ще видите по-надолу)

let data = localStorage.getItem('TODO'); // localStorage се използва за запазване на дата в локалното
// хранилище в браузъра, така че като рефрешнете да си остане това, което и преди го имало

if(data) { // проверяваме дали преди това е имало налична някаква дата/информация
    LIST = JSON.parse(data); // ако има вкарваме данните в LIST array-я (масива)
    id = LIST.length; // id-то го задаваме да е колкото дължината на масива 
    loadList(LIST); // функцията вкарва данните в LIST array-я
} else { // в противен случай се "рестартират" променливите
    LIST = [];
    id = 0;
}

// forEach() цикъла е за да loop-ваме в масив, като в случая 'item' е името на всеки елемент в масива
// item.name item.id item.done item.trash ще ги разберете от по-долу, но иначе .name и другите са 
// атрибути на обект

function loadList(array) {
    array.forEach(item => {
        addToDo(item.name, item.id, item.done, item.trash);
    });
}

// функцията отдолу служи за изтриване на локалното хранилище и всичко което се вижда на екрана 

clear.addEventListener('click', () => {
    localStorage.clear();
    location.reload();
});

function addToDo(text, id, done, trash) {
    let isDone, lineClass;

    if (trash) { // ако trash == true -> функцията връща return; , което значи че (!!!!по-долния код няма да се чете!!!!)
        return;
    }

    if(done){ // ако е изпълнена задачата да се промени класа и съответно кръгчето да стане запълнено/незапълнено
        isDone = check;
        lineClass = lineThrough; 
    } else {
        isDone = uncheck;
        lineClass = '';
    }

    // html е константа, в която задаваме какво ще има елементът, който ще поставим

    const html = `<li class="item">
                    <i class="fa ${isDone} complete" job="complete" id="${id}"></i>
                    <p class="text ${lineClass}">${text}</p>
                    <i class="fa fa-trash-o de" job="delete" id="${id}"></i> 
                </li>`;
    const position = 'beforeend'; // position е за долния метод, с него казваме къде искаме да добавим новия елемент

    list.insertAdjacentHTML(position, html); // insertAdjacentHTML служи за добавяне на нов елемент ВЪТРЕ в елемента,
                                            // който сме избрали като CHILD елемент
}


function completeToDo(element){
    element.classList.toggle(check); // .toggle служи за превключване на класовете(ако го има - го маха, ако не - го слага)
    element.classList.toggle(uncheck);
    element.parentNode.querySelector('.text').classList.toggle(lineThrough);
    
    if (LIST[element.id].done) {
        LIST[element.id].done = false;
    } else {
        LIST[element.id].done = true;
    }
}

function removeToDo(element) {
    element.parentNode.parentNode.removeChild(element.parentNode); // .parentNode избира "родителя" на селектирания елемент
    LIST[element.id].trash = true;                                // .removeChild() премахва CHILD елемент на избрания елемент
}

// 'keyup' е когато потребителя натисне и ПУСНЕ което и да е копче на клавиатурата
// event параметъра на функцията в случая е 'keyup', а .keycode == 13 е кодът на бутона ENTER
document.addEventListener('keyup', (event) => {
    if(event.keyCode == 13) {
        const text = input.value;

        if (text) {
            addToDo(text, id, false, false);
            LIST.push( // добавяне на новото 'to-do'(задача) в масива като обект, за да може да се работи после с него
                {
                    name: text,
                    id: id,
                    done: false,
                    trash: false
                }
            );

            localStorage.setItem('TODO', JSON.stringify(LIST)); // добавяне на елемента в локалното хранилище
        }
        input.value = ''; // премахване на текста в инпута 
        id++; // качваме id-то с 1
    }
});

list.addEventListener('click', (event) => {
    let element = event.target; // event.target е бутонът или елементът който натискаме
    const elementJob = event.target.attributes.job.value;

    if(elementJob == 'complete') { // проверяваме дали елементът който сме натиснали има атрибут с името 'job' и
        completeToDo(element);     // дали съответно job == complete или не
    } else if(elementJob == 'delete') {
        removeToDo(element);
    }

    localStorage.setItem('TODO', JSON.stringify(LIST));
});