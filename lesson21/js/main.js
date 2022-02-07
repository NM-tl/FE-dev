const userData = {
    'USD': 1000,
    'EUR': 900,
    'UAH': 15000,
    'BIF': 20000,
    'AOA': 100
}
const bankData = {
    'USD': {
        max: 3000,
        min: 100,
        img: '💵'
    },
    'EUR': {
        max: 1000,
        min: 50,
        img: '💶'
    },
    'UAH': {
        max: 0,
        min: 0,
        img: '💴'
    },
    'GBP': {
        max: 10000,
        min: 100,
        img: '💷'
    }
}

function getMoney(userData, bankData) {
    return new Promise(
        function (resolve, reject) {

            const answear = confirm("Посмотреть баланс на карте?")

            if (answear) {
                resolve(userData)
            } else {
                reject({userData, bankData})
            }

        }
    );
}

getMoney(userData, bankData).then(
    (data) => {
        let currency;

        while (!data[currency]) {
            currency = prompt("Choose currency, for cash out: ")
        }

        console.log(`Баланс составляет: ${data[currency]} ${currency}`)
    }
).catch(error => {
    let currency;


    while (!error?.userData[currency] || error?.bankData[currency]?.max === 0) {
        currency = prompt("Choose currency, for cash out: ")
    }

    const selectedCurrency = error?.userData[currency]
    const selectedBankCurrency = error?.bankData[currency]


    const money = prompt("Enter amount to withdraw")

    if (Number(money) > selectedCurrency || Number(money) > selectedBankCurrency?.max) {
        console.log(`Введенная сумма больше допустимой. Максимальная сумма снятия: ${selectedCurrency < selectedBankCurrency?.max ? selectedCurrency : selectedBankCurrency?.max}`)
    }

    if(Number(money) < selectedBankCurrency?.min){
        console.log(`Введенная сумма меньше допустимой. Минимальная сумма снятия: ${selectedBankCurrency?.min}`)
    }

    if(Number(money) <= selectedCurrency && Number(money) <= selectedBankCurrency.max && Number(money) >= selectedBankCurrency.min ){
        console.log(`Вот Ваши денежки ${money} ${currency} 💵`)
    }


}).finally(() => console.log('Спасибо, хорошего дня 😊'))

