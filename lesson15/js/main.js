let kitchenProducts = [
    {
        type: 'grater',
        price: 10
    },
    {
        type: 'pastry-bag',
        price: 25
    },
    {
        type: 'scale',
        price: 5
    },
    {
        type: 'whisk',
        price: 15
    }
];

let devicesProducts = [
    {
        type: 'desktop',
        price: [100,1000]
    },
    {
        type: 'laptop',
        price: [50,1500]
    },
    {
        type: 'smartphone',
        price: [80,2000]
    },
    {
        type: 'tablet',
        price: [20,1300]
    }
];

let cosmeticsProducts = [
    {
        type: 'blush',
        price: 100
    },
    {
        type: 'eyeshadow',
        price: 50
    },
    {
        type: 'lipstick',
        price: 80
    },
    {
        type: 'nail-polish',
        price: 200
    },
    {
        type: 'perfume',
        price: 300,
    }
];


let Kitchen = {category: 'kitchen'}
let Devices = {category: 'devices'}
let Cosmetics = {category: 'cosmetics'}

let grater = Object.create(Kitchen);
grater.type = 'grater';
grater.price = 10;

let desktop = Object.create(Devices);
desktop.type = 'desktop';
desktop.price = [100,1000];

let blush = Object.create(Cosmetics);
blush.type = 'blush';
blush.price = 100;

console.log(grater);
console.log(desktop);
console.log(blush);