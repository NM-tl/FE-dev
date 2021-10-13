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