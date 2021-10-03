let price = 0;
const applePrice = 10; 
const orangePrice = 12; 
const kiwiPrice = 15;


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

document.write(`
    <div class="cart">
        <div class="cart__info">
            <table>
                <tr class="cart__info header">
                    <td>🍴Product</td>
                    <td>💵Price:</td>
                </tr>
                <tr>
                    <td>🍎Apples <span class="product__amount">amount()</span></td>
                    <td></td>
                </tr>
                <tr>
                    <td>🍊Oranges <span class="product__amount">amount()</span></td>
                    <td></td>
                </tr>
                <tr>
                    <td>🥝Kiwi <span class="product__amount">amount()</span></td>
                    <td></td>
                </tr>
            </table>    
        </div>
        <div class="cart__total">
            <h1>🧾Final price is </h1>
        </div>
    </div>
`);
