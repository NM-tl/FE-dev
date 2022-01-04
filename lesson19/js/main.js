// С помощью функции setInterval, каждые пол секунды меняем цвет квадрата на любой рандомный цвет.
// Можно сформировать массив с цветами и с него брать рандомное значение.
// Можно написать функцию, которая будет возвращать строку `rgb(color_1, color_2, color_3)`, в которой color_1, color_2, color_3 это рандомное значение в диапазоне от 0 до 255 включительно.
// С помощью функции setInterval, каждую секунду перемещаем квадрат на любое место в пределах body. Для этого квадрату задаем рандомные значения свойств left и top. Квадрат не должен выходить за пределы body.



const block = document.querySelector(`.block`);

const maxOffsetLeft = window.innerWidth - block.offsetWidth;
const maxOffsetTop = window.innerHeight - block.offsetHeight;

console.log(window.innerWidth, maxOffsetLeft)

const Move = 5;

// window.onload = event => {

//     let nextOffsetLeft = block.offsetLeft + Move;       
    
//     block.style.marginLeft = `${parseInt(block.marginLeft) - Move}px`;

//     setInterval(function (){
//         block.style.marginLeft = !block.marginLeft ? `${Move}px` : `${parseInt(block.marginLeft) + Move}px`
//     }, 1000)
    

//     console.dir(block.offsetWidth)
// }

const Colors = ['red', 'blue', 'aqua', 'brown', 'aquamarine', 'green', 'purple', 'grey', 'black'];

setInterval(function (){
    const random = Math.floor(Math.random() * Colors.length);
    block.style.background = Colors[random];
}, 500)

setInterval(function (){
    block.style.left = `${parseInt(block.style.left) + Move}px`
}, 1000)

console.log(block.offsetHeight)
console.log(block.offsetWidth)
