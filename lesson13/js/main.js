obj = {
    x: 10,
    y: 20,
    inner: {
        x: 20,
        z: 30
    },
    foo2: {
        k: 23,
        p: 13
    }
}

newObj = {};

const convertV2 = (object, container) => Object.entries(object).reduce((acc, [key, value]) => {
    typeof value === 'object' ? convertV2(value, acc) : container ? container[key] = value : acc[key] = value

    return acc
}, {})


function convert(object) {
    Object.assign(newObj, obj)
    Object.assign(newObj, obj.inner)
    Object.assign(newObj, obj.foo2)
    delete newObj.inner
    delete newObj.foo2
    return newObj;
};

function convertV3(object) {
    const copied = {}

    for (let key in object) {
        if (typeof object[key] === 'object') {
            for (let second in object[key]) {
                copied[second] = object[key][second];
            }

        } else {
            copied[key] = object[key]
        }
    }

    return Object.assign({}, copied)
}

console.log(convert(obj));
console.log(convertV2(obj));
console.log(convertV3(obj));