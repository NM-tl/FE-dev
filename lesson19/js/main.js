const block = document.querySelector(`.block`);
let xPosition = 10;
let yPosition = 10;
let xSpeed = 4;
let ySpeed = 4;
const FPS = 60;

// const Colors = ['red', 'blue', 'aqua', 'brown', 'aquamarine', 'green', 'purple', 'grey', 'black'];
//
// setInterval(function (){
//     const random = Math.floor(Math.random() * Colors.length);
//     block.style.background = Colors[random];
// }, 1000)

setInterval(
    function RandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        block.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    }, 1000
)

function Moving(){
    block.style.left = xPosition + 'px';
    block.style.top = yPosition + 'px';
}

setInterval(() =>{
    if(xPosition + block.clientWidth >= window.innerWidth || xPosition <= 0){
        xSpeed = -xSpeed;
    }

    if(yPosition + block.clientHeight >= window.innerHeight || yPosition <= 0){
        ySpeed = -ySpeed;
    }

    xPosition += xSpeed;
    yPosition += ySpeed;
    Moving();
}, 1000/FPS)

block.onclick = function() {
    alert('Im caught 🙃');
}