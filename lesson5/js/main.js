let a = Number(prompt('Enter "A":'));

while (isNaN(a) || (!a && Number(a) !== 0)) {
    a = Number(prompt('Is not valid "A", enter another variant'));
}

console.log('Число "А":', a);

let b = Number(prompt('Enter "B":'));

while (isNaN(b) || b <= a) {
    b = Number(prompt('Is not valid "B" or b < a, enter another variant'));
}

console.log('Число "B":', b)

let h = Number(prompt('Enter step "H":'));

while (isNaN(h) || !h && h <= 0) {
    h = Number(prompt('Is not valid "H" or h = 0, enter another variant'))
}

console.log('Увеличение числа "А" на шаг числа "H":', h)

let sumOfFactorials = 0

for (let i = a; i <= b; i += h) {
    let factorial = i <= 0 ? 0 : 1

    for (let j = i; j > 0; j--) {
        factorial *= j
    }
    console.log('Факториал числа ' + i + '! = ' + factorial);

    sumOfFactorials += factorial;
}

console.log('Сумма факториалов = ' + sumOfFactorials);
