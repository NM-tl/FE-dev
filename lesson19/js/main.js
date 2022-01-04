const block = document.querySelector(`.block`);
//
// const STEP = 100;
//
// const maxOffsetLeft = window.innerWidth - block.offsetWidth;
// const maxOffsetTop = window.innerHeight - block.offsetHeight;
//
// console.log(window.innerWidth, maxOffsetLeft)
//
// document.onkeydown = event => {
//     if(event.keyCode === 39){
//         let nextOffsetLeft = block.offsetLeft + STEP;
//
//         if(nextOffsetLeft > maxOffsetLeft){
//             block.style.left = `${parseInt(block.style.left) - STEP}px`;
//
//             block.classList.add(`bems`);
//             setTimeout(()=> block.classList.remove(`bems`), 1000);
//         } else{
//             block.style.left = !block.style.left ? `${STEP}px` : `${parseInt(block.style.left) + STEP}px`
//         }
//     }
// }

const Colors = ['red', 'blue', 'aqua', 'brown', 'aquamarine', 'green', 'purple', 'grey', 'black'];

setInterval(function (){
    const random = Math.floor(Math.random() * Colors.length);
    block.style.background = Colors[random];
}, 500)
