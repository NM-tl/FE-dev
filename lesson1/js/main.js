console.log('**************')
console.log('Task v1')
console.log('--------------------')
console.log('Обьем цилиндра с площадью основы S =', Math.PI, 'радиусом R =', 10, 'и высотой H =', 20, 'равен:')
console.log('--------------------')
console.log('V =', Math.PI * Math.pow(10, 2) * 20)
console.log('-------------------')
console.log('.end')

console.log('**************')
console.log('Task v2')
console.log('--------------------')
const p = Math.PI;
let r = 10;
let h = 20;

console.log('Обьем цилиндра с площадью основы S =', String(p), 'радиусом R =', String(r), 'и высотой H =', String(h), 'равен:')
console.log('--------------------')
console.log('V =', p * Math.pow(r, 2) * h)
console.log('-------------------')
console.log('.end')

console.log('**************')
console.log('Немного посмотрел по замыканию и областяи видимости..')
function getCounter() {
    let count = 0;
    return function(){
        return count++;
    }
}

let counter = getCounter();
console.log(counter())
console.log(counter())