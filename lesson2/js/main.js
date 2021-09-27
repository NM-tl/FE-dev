let price = 0;
const applePrice = 10; 
const orangePrice = 12; 
const kiwiPrice = 15;


let choice = prompt(`Do you want fruits?`, `Type "yes"😉`);

if (choice == `yes`) {
  alert( `Ok, let's start! 😉` );
  let appleTooked = prompt(`Do you want 🍎?`);
    if (appleTooked == `yes`) {
        var appleCount = prompt(`Enter count of 🍎`)
        var appleResult = +appleCount + applePrice;
        }
            let orangeTooked = prompt(`Do you want 🍊?`);
            if (orangeTooked == `yes`) {
                var orangeCount = prompt(`Enter count of 🍊`) 
                var orangeResult = +orangeCount + orangePrice; 
            }
                let kiwiTooked = prompt(`Do you want 🥝?`);
                if (kiwiTooked == `yes`) {
                    var kiwiCount = prompt(`Enter count of 🥝`) 
                    var kiwiResult = +kiwiCount + kiwiPrice; 
                }           
} else {
  alert( `Oh, bye 😔` );
}

TotalPrice = appleResult + orangeResult + kiwiResult;
console.log(`totalPrice:`,TotalPrice);

let shopCart = [appleResult, orangeResult, kiwiResult];
console.log(`applePrice:`, shopCart[0]);
console.log(`orangePrice:`,shopCart[1]);
console.log(`kiwiPrice:`,shopCart[2]);


document.write(`
    <div class="cart">
        <div class="cart-info">
            <table>
                <tr>
                    <td>🍴Product</td>
                    <td>💵Price:</td>
                </tr>
                <tr>
                    <td>🍎Apples <span class="product-amount">amount(${appleCount})</span></td>
                    <td>${shopCart[0]}</td>
                </tr>
                <tr>
                    <td>🍊Oranges <span class="product-amount">amount(${orangeCount})</span></td>
                    <td>${shopCart[1]}</td>
                </tr>
                <tr>
                    <td>🥝Kiwi <span class="product-amount">amount(${kiwiCount})</span></td>
                    <td>${shopCart[2]}</td>
                </tr>
            </table>    
        </div>
        <div class="cart-total">
            <h1>🧾${TotalPrice}</h1>
        </div>
    </div>
`);