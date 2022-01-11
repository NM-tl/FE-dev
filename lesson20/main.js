const block = document.querySelector(`.block`);
const maxOffsetLeft = window.innerWidth - block.offsetWidth;
const maxOffsetTop = window.innerHeight - block.offsetHeight;
const STEP = 20;
console.log(window.innerWidth, maxOffsetLeft)

document.onkeydown = event => {
    if(event.keyCode === 39){
        let nextOffsetLeft = block.offsetLeft + STEP;

        if(nextOffsetLeft > maxOffsetLeft){
            block.style.left = `${parseInt(block.style.left) - STEP*2}px`;

            block.classList.add(`bems`);
            setTimeout(()=> block.classList.remove(`bems`), 1000);
        } else{
            block.style.left = !block.style.left ? `${STEP}px` : `${parseInt(block.style.left) + STEP}px`
        }
    }

    if(event.keyCode === 37){
        let nextOffsetLeft = block.offsetLeft - STEP;

        if(nextOffsetLeft > maxOffsetLeft){
            block.style.left = `${parseInt(block.style.left) + STEP*2}px`;

            block.classList.add(`bems`);
            setTimeout(()=> block.classList.remove(`bems`), 1000);
        } else{
            block.style.left = !block.style.left ? `${STEP}px` : `${parseInt(block.style.left) - STEP}px`
        }
    }

    if(event.keyCode === 38){
        let nextOffsetTop = block.offsetTop - STEP;

        if(nextOffsetTop > maxOffsetTop){
            block.style.top = `${parseInt(block.style.top) + STEP*2}px`;

            block.classList.add(`bems`);
            setTimeout(()=> block.classList.remove(`bems`), 1000);
        } else{
            block.style.top = !block.style.top ? `${STEP}px` : `${parseInt(block.style.top) - STEP}px`
        }
    }

    if(event.keyCode === 40){
        let nextOffsetTop = block.offsetTop + STEP;

        if(nextOffsetTop > maxOffsetTop){
            block.style.top = `${parseInt(block.style.top) - STEP*2}px`;

            block.classList.add(`bems`);
            setTimeout(()=> block.classList.remove(`bems`), 1000);
        } else{
            block.style.top = !block.style.top ? `${STEP}px` : `${parseInt(block.style.top) + STEP}px`
        }
    }

    if(event.keyCode === 32){
        const Jump = 10;
        nextOffsetTop = `${parseInt(block.offsetTop) + Jump}px`;
        // setTimeout(()=> block.classList.remove(`bems`), 1000);
    }
}


// document.onkeydown = event => {
//     console.log(event);
// }


// window.addEventListener('keydown', (event) => {
//     const { style } = block;
//     switch (event.key) {
//         case 'ArrowUp': style.top = `${parseInt(style.top) - STEP}px`; break;
//         case 'ArrowDown': style.top = `${parseInt(style.top) + STEP}px`; break;
//         case 'ArrowLeft': style.left = `${parseInt(style.left) - STEP}px`; break;
//         case 'ArrowRight': style.left = `${parseInt(style.left) + STEP}px`; break;
//     }
// });
