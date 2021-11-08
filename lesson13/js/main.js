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


const covertV2 = (object, container) => Object.entries(object).reduce((acc, [key, value]) => {
    typeof value === 'object' ? covertV2(value, acc) : container ? container[key] = value : acc[key] = value

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

convert(obj)

console.log(covertV2(obj))

// let arr = Object.keys(obj).map(function (key) { return obj[key]; });
// console.log(arr);

function convert3(object) {
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

const ee = convert3(obj);

console.log(ee)