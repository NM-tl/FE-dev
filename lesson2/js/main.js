let price = 0;
const applePrice = 10; 
const orangePrice = 12; 
const kiwiPrice = 15;

let appleCount;
let orangeCount; 
let kiwiCount;



const choice = prompt('Do you want fruits?', 'Type "yes"😉');

function questionFruitPrice(fruit, price, fruitCount) {
    const fruitTooked = prompt(`Do you want ${fruit}?`);

    if (fruitTooked === 'yes') {
         fruitCount = prompt(`Enter count of ${fruit}`)

        if(!Number.isNaN(Number(fruitCount))){
            return Number(fruitCount) * price || 0;
        }
        return 0
    }
    return 0
}

if (choice === 'yes') {
    alert( `Ok, let's start! 😉` ); 


    const appleTooked = prompt(`Do you want 🍎?`);

    if (appleTooked === 'yes') {
        appleCount = prompt(`Enter count of 🍎`)

        if(!Number.isNaN(Number(appleCount))){
            price += Number(appleCount) * applePrice;
        }
    }
            
    const orangeTooked = prompt(`Do you want 🍊?`);

    if (orangeTooked === `yes`) {
        orangeCount = prompt(`Enter count of 🍊`) 

        if(Number.isNaN(Number(orangeCount))){
            price += Number(orangeCount) * orangePrice; 
        }
    }
    
    kiwiTooked = prompt(`Do you want 🥝?`);

    if (kiwiTooked === `yes`) {
        kiwiCount = prompt(`Enter count of 🥝`) 

        if(Number.isNaN(Number(kiwiCount))){
            price += Number(kiwiCount) * kiwiPrice; 
        }
    }
                 
} else {
  alert( `Oh, bye 😔` );
}


console.log(`totalPrice:`, price);


document.write(`
    <div class="cart">
        <div class="cart__info">
            <table>
                <tr class="cart__info header">
                    <td>🍴Product</td>
                    <td>💵Price:</td>
                </tr>
                <tr>
                    <td>🍎Apples <span class="product__amount">amount(${appleCount})</span></td>
                    <td>${applePrice}</td>
                </tr>
                <tr>
                    <td>🍊Oranges <span class="product__amount">amount(${orangeCount})</span></td>
                    <td>${orangePrice}</td>
                </tr>
                <tr>
                    <td>🥝Kiwi <span class="product__amount">amount(${kiwiCount})</span></td>
                    <td>${kiwiPrice}</td>
                </tr>
            </table>    
        </div>
        <div class="cart__total">
            <h1>🧾Final price is ${price}</h1>
        </div>
    </div>
`);