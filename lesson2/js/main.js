let price = 0;
const applePrice = 10; 
const orangePrice = 12; 
const kiwiPrice = 15;

let appleCount;
let orangeCount; 
let kiwiCount;



const choice = prompt('Do you want fruits?', 'Type "yes"๐');

if (choice === 'yes') {
    alert( "Ok, let's start! ๐" ); 

    const appleTooked = prompt('Do you want ๐?');

    if (appleTooked === 'yes') {
        appleCount = prompt('Enter count of ๐')

        if(!Number.isNaN(Number(appleCount))){
            price += Number(appleCount) * applePrice;
        }
    }
            
    const orangeTooked = prompt('Do you want ๐?');

    if (orangeTooked === 'yes') {
        orangeCount = prompt('Enter count of ๐') 
        
        if(!Number.isNaN(Number(orangeCount))){
            price += Number(orangeCount) * orangePrice; 
        }    
    }
    
    kiwiTooked = prompt('Do you want ๐ฅ?');

    if (kiwiTooked === 'yes') {
        kiwiCount = prompt('Enter count of ๐ฅ') 

        if(!Number.isNaN(Number(kiwiCount))){
            price += Number(kiwiCount) * kiwiPrice; 
        }
    }
                 
} else {
  alert('Oh, bye ๐');
}

document.write(`
    <div class="cart">
        <div class="cart__info">
            <table>
                <tr class="cart__info header">
                    <td>๐ดProduct</td>
                    <td>๐ตPrice:</td>
                </tr>
                <tr>
                    <td>๐Apples <span class="product__amount">amount(${appleCount})</span></td>
                    <td>${applePrice}</td>
                </tr>
                <tr>
                    <td>๐Oranges <span class="product__amount">amount(${orangeCount})</span></td>
                    <td>${orangePrice}</td>
                </tr>
                <tr>
                    <td>๐ฅKiwi <span class="product__amount">amount(${kiwiCount})</span></td>
                    <td>${kiwiPrice}</td>
                </tr>
            </table>    
        </div>
        <div class="cart__total">
            <h1>๐งพFinal price is ${price}</h1>
        </div>
    </div>
`);