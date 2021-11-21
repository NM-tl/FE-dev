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
        price: [100, 1000]
    },
    {
        type: 'laptop',
        price: [50, 1500]
    },
    {
        type: 'smartphone',
        price: [80, 2000]
    },
    {
        type: 'tablet',
        price: [20, 1300]
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

function RenderObjectProto(type, price, currency, picture) {
    this.type = type;
    this.price = `${currency}${price}`;
    this.picture = picture;
}

let grater = new RenderObjectProto('Grater', 10, '$', 'assets/images/kitchen/grater.svg');
let pastryBog = new RenderObjectProto('Pastry-Bog', 25, '$','assets/images/kitchen/pastry-bag.svg');
let scale = new RenderObjectProto('Scale', 5, '$','assets/images/kitchen/scale.svg');
let whisk = new RenderObjectProto('Whisk', 15, '$','assets/images/kitchen/whisk.svg');

let desktop = new RenderObjectProto('Desktop', devicesProducts[0].price.join('-'), '$', 'assets/images/devices/desktop.svg');
let laptop = new RenderObjectProto('Laptop', devicesProducts[1].price.join('-'), '$','assets/images/devices/laptop.svg');
let smartphone = new RenderObjectProto('Smartphone', devicesProducts[2].price.join('-'), '$','assets/images/devices/smartphone.svg');
let tablet = new RenderObjectProto('Tablet', devicesProducts[3].price.join('-'), '$','assets/images/devices/tablet.svg');

let blush = new RenderObjectProto('Blush', 10, '$', 'assets/images/cosmetics/blush.svg');
let eyeshadow = new RenderObjectProto('Eyeshadow', 10, '$', 'assets/images/cosmetics/eyeshadow.svg');
let lipstick = new RenderObjectProto('Lipstick', 10, '$', 'assets/images/cosmetics/lipstick.svg');
let nailPolish = new RenderObjectProto('Nail-polish', 10, '$', 'assets/images/cosmetics/nail-polish.svg');
let perfume = new RenderObjectProto('Perfume', 10, '$', 'assets/images/cosmetics/perfume.svg');

let capitalizeFirstLetter = (str) => str[0].toUpperCase() + str.slice(1);

let objectToArr = (item) => {
    const itemsRender = Object.entries(item).map(([key, value]) => `<p><span class="property">${capitalizeFirstLetter(key)}:</span> ${value}</p>`);

    return itemsRender.join('')
};

const list = (...items) => {
    return items.reduce((acc, {picture, ...rest }) => {
        acc += `
    <div class="item">
        <div class="item__icon"><img class="icon" src=${picture} alt="image"></div>
        <div class="item__info">${objectToArr(rest)}</div>
    </div>
  `
        return acc
    }, '')
}

document.write(`
<div class="wrapper">
    <div class="list">
        <div class="list__name">${capitalizeFirstLetter(Object.keys(Kitchen)[0])}: ${Kitchen.category}</div>
            <div class="list__items">${list(grater, pastryBog, scale, whisk)}</div>       
    </div>
    <div class="list">
        <div class="list__name">${capitalizeFirstLetter(Object.keys(Devices)[0])}: ${Devices.category}</div>
            <div class="list__items">${list(desktop, laptop, smartphone, tablet)}</div>
    </div>
    <div class="list">
        <div class="list__name">${capitalizeFirstLetter(Object.keys(Cosmetics)[0])}: ${Cosmetics.category}</div>
            <div class="list__items">${list(blush, eyeshadow, lipstick, nailPolish, perfume)}</div>
    </div>
</div>
`)
