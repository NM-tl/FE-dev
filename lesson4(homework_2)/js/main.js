// Необходимо запросить у юзера товары с меню и вывести в body список со всеми выбранными продуктами и общую сумму заказа.
// 1. Запрашиваем у юзера вид булки `Hamburger or Cheeseburger`.
// 1.1. Если юзер вводит `Hamburger`, то к общей стоимости заказа прибавляем $10.
// 1.2 Если юзер вводит `Cheeseburger`, то к общей стоимости заказа прибавляем $15.
// 1.2.1 Предлагаем пользователю добавить Double cheese `Would you like double cheese?`.
// 1.2.1.1 Если пользователь соглашается на Double cheese, то к общей стоимости заказа прибавляем $5.
// 2. Предлагаем пользователю добавить к заказу картошку `Would you like potato?`.
// 2.1. Если пользователь соглашается на картошку, то предлагаем ему выбрать ее размер `Choose potato size: small/middle/big`:
// 2.1.1 Если юзер вводит 'small', или пустую строку, или нажимает Отмена, то к общей стоимости заказа прибавляем $10. То есть, значение 'small' для картошки является значением по умолчанию.
// 2.1.2 Если юзер вводит 'middle', то к общей стоимости заказа прибавляем $15. 
// 2.1.3 Если юзер вводит 'big', то к общей стоимости заказа прибавляем $20. 
// 3. Предлагаем пользователю добавить к заказу соус `Would you like sauce?`.
// 3.1. Если пользователь соглашается на соус, то предлагаем ему выбрать его тип `Choose sauce: ketchup/mayonnaise`:
// 3.1.1 Вне зависимости от выбранного типа соуса, или если пользователь оставляет пустую строку, или нажимает Отмена, к общей стоимости заказа прибавляем $10. Дефолтное название типа соуса: ketchup.

let price = 0;

let burger = prompt('Hamburger or Cheeseburger?')
burger = !burger || '' ? 'No item here' : burger.trim();

if(burger === 'Hamburger'){
    price += 10;
} else if(burger === 'Cheeseburger'){
    price += 15;
    doubleCheese = confirm('Would you like double cheese?')
console.log(burger)
    if(doubleCheese === true){
        price += 5;
    }
}

// Тут думал все сделать через цикл но как-то не пошло. Получается мне нужно при каждой итерации брейкать? 
// Как это можно переписать нормально с проверкой на пустое значение или отмену?

let potato = confirm('Would you like potato?')

while(potato === true){
    size = prompt('Choose potato size: small/middle/big')
    size = !size || '' ? price += 0 : size.trim();

    if(size === 'small'){
        price += 10;
        break;
    }else if(size === 'middle'){
        price += 15;
        break;
    }else if(size === 'big'){
        price += 20;
        break;
    }else{
        price += 0;
    }
}

// Тут не получилось сделать проверку, если отмена или пустая строка - type = 'ketchup'

let sauce = confirm('Would you like sauce?')

if(sauce === true){
    type = prompt(`Choose sauce: ketchup/mayonnaise`)
    // type = !type || '' ? type = 'ketchup' : type.trim()
    price += 10; 
}


document.write(`<h2>Your order:</h2>
<ul>
    <li>Bulka 🍔: ${burger} </li>
    <li>Potato 🍟: ${size} </li>
    <li>Sauce 🧂: ${type} </li>
</ul>

<p>Price: $ ${price} </p>
`);
