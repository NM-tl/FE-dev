const block = document.querySelector(`.block`);
const maxOffsetLeft = window.innerWidth - block.offsetWidth;
const maxOffsetTop = window.innerHeight - block.offsetHeight;
const STEP = 20;
const JUMP = 50;

document.onkeydown = event => {
    console.log(event)
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

        if(nextOffsetLeft < 0){
            block.style.left = `${parseInt(block.style.left) + STEP*2}px`;

            block.classList.add(`bems`);
            setTimeout(()=> block.classList.remove(`bems`), 1000);
        } else{
            block.style.left = !block.style.left ? `${-STEP}px` : `${parseInt(block.style.left) - STEP}px`
        }
    }

    if(event.keyCode === 38){
        let nextOffsetTop = block.offsetTop - STEP;

        if(nextOffsetTop < 0){
            block.style.top = `${parseInt(block.style.top) + STEP*2}px`;

            block.classList.add(`bems`);
            setTimeout(()=> block.classList.remove(`bems`), 1000);
        } else{
            block.style.top = !block.style.top ? `${-STEP}px` : `${parseInt(block.style.top) - STEP}px`
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
        block.style.top = !block.style.top ? `${-JUMP}px` : `${parseInt(block.style.top) - JUMP}px`
        setTimeout(()=> block.style.top = '', 1000);
    }

    if(event.keyCode === 17){
        block.offsetWidth += `${25}%`;
        // block.offsetHeight = `${parseInt(block.offsetHeight) - 40}%`;
        console.log(block.offsetWidth)
    }
}
console.log(block.offsetHeight)
console.log(block.offsetWidth)



// window.onresize = () => {
//     maxOffsetLeft(window.innerWidth);
//     maxOffsetTop(window.innerHeight);
//     console.log(window.innerWidth);
//     console.log(window.innerHeight);
// }
//
// const MOBILE = 375;
//
// block.onclick = () => {
//     if(window.innerWidth <= MOBILE){
//         console.log('mobile func');
//     } else{
//         console.log('desktop func');
//     }
// }
