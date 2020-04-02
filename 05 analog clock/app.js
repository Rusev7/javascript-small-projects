const deg = 6; // на какви градуси да се завърта 
const hr = document.querySelector('#hr');   // часовете
const mn = document.querySelector('#mn');   // минутите
const sc = document.querySelector('#sc');   // секундите

// .querySelector('') взема елемент по негов таг, клас или id като го селектирате така,
// както селектирате елементите в CSS
// в случая вземам дадените елементи по id, така че ги избирам чрез #имеНаid
// ако е клас ще е '.имеНаКлас'

setInterval(() => {
    let day = new Date();   // взема цялата дата (може да пробвате да я console.log())
    let hh = day.getHours() * 30;   // взема часовете (умножава се по 30 за да може градусите да съвпадат с часа)
    let mm = day.getMinutes() * deg; // взема минутите 
    let ss = day.getSeconds() * deg; // взема секундите

    hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`; // .style.transform - бута CSS стилизирането на transform
                                                          // атрибута, deg е мерната единица за градуси
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
})

// setInterval е вграден метод в JS и извършва някаква функция за опредлен интервал 
// от време 
// () => { code } - това е по-прекия начин за написване на функция, която извикваме веднъж
// function() { code } - това е другия начин

// Проекта е взет от клип от YouTube - канала е Online Tutorials
// https://www.youtube.com/watch?v=94TKO4eKfIA - ако някой иска да го гледа
