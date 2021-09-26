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
const r = 10;
const h = 20;

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

const Counter = getCounter();
console.log(Counter())
console.log(Counter())


// Optimization 

const Line = '-------------------';
const Star = '**************';

console.log(Star)
console.log('Task v3')
console.log(Line)
console.log('Обьем цилиндра с площадью основы S =', Math.PI, 'радиусом R =', 10, 'и высотой H =', 20, 'равен:')
console.log(Line)
console.log('V =', Math.PI * Math.pow(10, 2) * 20)
console.log(Line)
console.log('.end')