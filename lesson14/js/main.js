const flowers = ['🌷', '🌾', '🌺'];

const animals = [
    {
        name: 'dog',
        icon: '🐶'
    },
    {
        name: 'cat',
        icon: '🐱'
    },
    {
        name: 'hamster',
        icon: '🐹'
    },
    {
        name: 'rabbit',
        icon: '🐰'
    }
];

let capitalizeFirstLetter = (str) => str[0].toUpperCase() + str.slice(1);

let renderObject = (item) => {
    let optionsRender = Object.entries(item).map(([key, value]) => `${capitalizeFirstLetter(key)}: ${value}`);
    return `${optionsRender.join('<br>')}`;
};

Array.prototype.renderList = function(tagName='ul') {
    let LIs = this
        .map((item) => typeof item === 'object' ? `<li>${renderObject(item)}</li>` : `<li>${item}</li>`)
        .join('');

    return `<${tagName}>${LIs}</${tagName}>`
}

document.write(animals.renderList('ol'));
document.write(flowers.renderList());