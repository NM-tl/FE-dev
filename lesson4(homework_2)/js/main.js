let price = 0;

let burger = prompt('Hamburger or Cheeseburger?')
burger = !burger ? 'No burger' : burger.toLowerCase().replaceAll(' ', '');

if(burger === 'hamburger'){
    price += 10;
} 

if(burger === 'cheeseburger') {
    price += 15;

    let doubleCheese = confirm('Would you like double cheese?')

    if(doubleCheese) {
        price += 5;
    }
}

let potato = confirm('Would you like potato?')

let size = 'small'

if(potato) {
    size = prompt('Choose potato size: small/middle/big')

    if(size === 'middle') {
        price += 15;
    }

    if(size === 'big') {
        price += 20;
    }

   if(!size || size === 'small') {
       price +=10
   }

   size = !size ? size = 'small' : size.toLowerCase().replaceAll(' ', '')
  
}

let sauce = confirm('Would you like sauce?')

let type

if(sauce) {
    type = prompt('Choose sauce: ketchup/mayonnaise')

    type = type && type.toLowerCase().replaceAll(' ', '')
    
    if(!type || type === 'ketchup' || type === 'mayonnaise') {
        price += 10;
    }
}

document.write(`<h2>Your order:</h2>
<ul>
    <li>Bulka 🍔: ${burger} </li>
    <li>Potato 🍟: ${size} </li>
    <li>Sauce 🧂: ${type || 'ketchup'} </li>
</ul>
<p>Price: $ ${price} </p>
`);
