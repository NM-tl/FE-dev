let price = 0;

let burger = prompt('Hamburger or Cheeseburger?')
burger = !burger ? 'No item here' : burger.toLowerCase().replaceAll(' ', '');

if(burger === 'hamburger'){
    price += 10;
} else if(burger === 'cheeseburger') {
    price += 15;
    let doubleCheese = confirm('Would you like double cheese?')
    if(doubleCheese === true) {
        price += 5;
    }
}

console.log(price)
console.log(burger)

let potato = confirm('Would you like potato?')

// while(potato === true){
//     size = prompt('Choose potato size: small/middle/big')
//     size = !size ? price += 0 : size.toLowerCase().replaceAll(' ', '');

//     if(size === 'small'){
//         price += 10;
//         break;
//     }else if(size === 'middle'){
//         price += 15;
//         break;
//     }else if(size === 'big'){
//         price += 20;
//         break;
//     }else{
//         price += 0;
//     }
// }

// debugger
// if (potato === true) {
//     while (potato) {
//         let size = prompt('Choose potato size: small/middle/big')
//  Почему тут возвращается к началу цикла при size === 0
//         size = !size ? price += 0 : size.toLowerCase().replaceAll(' ', '');
//         console.log(size)
//     }
//   
// }
//
// for(; potato === true;) {
//     let size = prompt('Choose potato size: small/middle/big')

//     if(size === 'small'){
//         price += 10;
//              break;
//          }else if(size === 'middle') {
//             price += 15;
//              break;
//          }else if(size === 'big') {
//             price += 20;
//              break;
//          }else {
//             price += 0;
//          }
// }

// size = !size ? 'No item here' : size.toLowerCase().replaceAll(' ', '');
// Как сделать метку на toStart - если size = !size

if(potato === true) {
    while(size = prompt('Choose potato size: small/middle/big')) {
        switch (size) {
            case 'small':
                size = 'small'
                price += 10;
                break;
            case 'middle':
                size = 'middle'
                price += 15;
                break;
            case 'big':
                size = 'big'
                price += 20;
                break;
            default:
                size = !size || null;
        }
    }
    size = size.toLowerCase().replaceAll(' ', '')
}

let sauce = confirm('Would you like sauce?')

// if(sauce === true){
//     let type = prompt(`Choose sauce: ketchup/mayonnaise`)
//     type = !type ? type = 'ketchup' : type.toLowerCase().replaceAll(' ', '')
//     price += 10; 
// }

if(sauce === true) {
    let type = prompt('Choose sauce: ketchup/mayonnaise')
    price += 10;
    
    switch (type) {
        case 'ketchup':
            type = 'ketchup'
            break;
        case 'mayonnaise':
            type = 'mayonnaise'
            break;
        default:
            type = !type ? type = 'ketchup' : type.toLowerCase().replaceAll(' ', '');
            break;
    }
}

document.write(`<h2>Your order:</h2>
<ul>
    <li>Bulka 🍔: ${burger} </li>
    <li>Potato 🍟: ${size} </li>
    <li>Sauce 🧂: ${type} </li>
</ul>
<p>Price: $ ${price} </p>
`);
