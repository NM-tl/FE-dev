// Ввести с клавиатуры a и b, где а меньше b (проверку написать кодом). Запустить цикл перебора от a до b с шагом h (ввод с клавиатуры). Посчитать сумму факториалов* чисел которые попадаются во время перебора.
// 1. Запрашиваем через prompt значение переменной a.
// 2. Запрашиваем через prompt значение переменной b, которое должно быть больше введенного a.
// 3. Запрашиваем через prompt значение переменной h, которая должна быть строго больше 0.
// 4. Запускаем цикл перебора чисел от a до b включительно, с шагом h. Для каждого числа в переборе считаем факториал и прибавляем его к переменной sumOfFactorials.

let a = Number(prompt('Enter "A":'));

while(isNaN(a) || !a){
    a = Number(prompt('Is not valid "A", enter another variant'));
};

console.log('Число "А":', a);

let b = Number(prompt('Enter "B":'));

while(isNaN(b) || b <= a){
    b = Number(prompt('Is not valid "B" or b < a, enter another variant'));
};

console.log('Число "B":', b)

let h = Number(prompt('Enter step "H":'));

while(isNaN(h) || !h && h <= 0){
    h = Number(prompt('Is not valid "H" or h = 0, enter another variant'))
}

console.log('Увеличение числа "А" на шаг числа "H":', h)

for (i = a, sumOfFactorials = 0; i <=  b; i += h) {
    for (j = 1, factorial = 1; j <= i; j++){
        factorial = factorial * j;
    }
    console.log('Факториал числа ' + i + '! = ' + factorial);
    sumOfFactorials += factorial;
}
    
console.log('Сумма факториалов = ' + sumOfFactorials);