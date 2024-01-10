//Задание №1

let a = prompt('Введите имя');
let b = +prompt('Введите год рождения');
let c = +prompt('Введите текуший год');

let res = function() {
    let d = c - b
    return d
}
alert(a);
alert('Ваш возраст ' + res());

//Задание №2

function rand(min,max) {
    return Math.floor(Math.random() * ( max + 1 - min ) + min)
}

let amount = +prompt('Введите кол-во примеров')

for(let i = 0; i < amount; i++) {
    let one = rand(1,10)
    let two = rand(1,10)
    let znak = rand(1,4)
    let answer = 0;
    if(znak == 1) {
        answer = one + two
        znak = '+'
    }else if(znak == 2) {
        answer = one - two
        znak = '-'
    }else if(znak == 3) {
        answer = one * two
        znak = '*'
    }else if(znak == 4) {
        answer = one / two
        znak = '/'
    }
    let primer = +prompt(one + znak + two + ' =')
    alert(answer == primer ? `Вы ввели верно ${primer}` : `Ваш ответ не верный ${primer} Правельный ответ ${answer}`);
    console.log('Все примеры: ' + one + znak + two);
    console.log('Ответы: ' + answer);
}
