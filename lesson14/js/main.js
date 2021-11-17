const flowers = ['🪴', '🌷', '🌾', '🌺'];

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

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function renderObject(item) {
    let optionsRender = []
    for(let key in item){
        optionsRender.push(`${capitalizeFirstLetter(key)}: ${item[key]}`);
    }
    return `${optionsRender.join('<br>')}`;
}

Array.prototype.renderList = function(tagName='ul') {
    let LIs = this
        // .map(function(item){
        //     let inspect = typeof item === 'object' ? `<li>${renderObject(item)}</li>` : `<li>${item}</li>`;
        //     return inspect;
        // })
        .map(
            (item) => {let inspect = typeof item === 'object' ? `<li>${renderObject(item)}</li>` : `<li>${item}</li>`})
        .join('');

    return `<${tagName}>${LIs}</${tagName}>`
}

document.write(animals.renderList('ol'));
document.write(flowers.renderList());
