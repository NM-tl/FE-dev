function bemsText(block) {
    if (block) {
        return block.insertAdjacentText("afterbegin", "БЭМС");
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const block = document.querySelector(`.block`);
    const maxOffsetLeft = window.innerWidth - block.offsetWidth;
    const maxOffsetTop = window.innerHeight - block.offsetHeight;
    const STEP = 20;
    const JUMP = 50;
    const initialWidth = block.offsetWidth
    const initialHeight = block.offsetHeight

    document.addEventListener('keydown', (event) => {

        if (event.code === 'ArrowRight') {
            const nextOffsetLeft = block.offsetLeft + STEP;

            if (nextOffsetLeft > maxOffsetLeft) {
                block.style.left = `${parseInt(block.style.left) - STEP * 2}px`;
                bemsText(block)

                block.classList.add(`bems`);
                setTimeout(() => block.classList.remove(`bems`), 1000);
                setTimeout(() => block.removeChild(block.firstChild), 1200);
            } else {
                block.style.left = !block.style.left ? `${STEP}px` : `${parseInt(block.style.left) + STEP}px`
            }
        }

        if (event.code === 'ArrowLeft') {
            const nextOffsetLeft = block.offsetLeft - STEP;

            if (nextOffsetLeft < 0) {
                block.style.left = `${parseInt(block.style.left) + STEP * 2}px`;
                bemsText(block)

                block.classList.add(`bems`);
                setTimeout(() => block.classList.remove(`bems`), 1000);
                setTimeout(() => block.removeChild(block.firstChild), 1200);
            } else {
                block.style.left = !block.style.left ? `${-STEP}px` : `${parseInt(block.style.left) - STEP}px`
            }
        }

        if (event.code === 'ArrowUp') {
            const nextOffsetTop = block.offsetTop - STEP;

            if (nextOffsetTop < 0) {
                block.style.top = `${parseInt(block.style.top) + STEP * 2}px`;
                bemsText(block)

                block.classList.add(`bems`);
                setTimeout(() => block.classList.remove(`bems`), 1000);
                setTimeout(() => block.removeChild(block.firstChild), 1200);
            } else {
                block.style.top = !block.style.top ? `${-STEP}px` : `${parseInt(block.style.top) - STEP}px`
            }
        }

        if (event.code === 'ArrowDown') {
            const nextOffsetTop = block.offsetTop + STEP;

            if (nextOffsetTop > maxOffsetTop) {
                block.style.top = `${parseInt(block.style.top) - STEP * 2}px`;
                bemsText(block)

                block.classList.add(`bems`);
                setTimeout(() => block.classList.remove(`bems`), 1000);
                setTimeout(() => block.removeChild(block.firstChild), 1200);
            } else {
                block.style.top = !block.style.top ? `${STEP}px` : `${parseInt(block.style.top) + STEP}px`
            }
        }

        if (event.code === 'Space') {
            block.style.top = !block.style.top ? `${-JUMP}px` : `${parseInt(block.style.top) - JUMP}px`
        }

        if (event.code === 'ControlLeft') {
            block.style.height = `${block.offsetHeight - block.offsetHeight * 0.4}px`;
            block.style.width = `${block.offsetWidth + block.offsetWidth / 4}px`;
        }
    })

    document.addEventListener('keyup', event => {
            if (event.code === 'ControlLeft') {
                block.style.height = `${initialHeight}px`;
                block.style.width = `${initialWidth}px`;
            }
            if (event.code === 'Space') {
                block.style.top = '0'
                block.style.left = '0'
            }
    })

})
