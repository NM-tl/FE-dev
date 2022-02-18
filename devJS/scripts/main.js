const Data = [
    ["user1", "info1"],
    ["user2", "info2"]
]

const Users = [
    {name: "Alise", age: 20},
    {name: "Drew", age: 25},
    {name: "Mark", age: 24}
]

const Today = new Date();

const capitalize = str =>
    str.charAt(0).toUpperCase() + str.slice(1);

const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;

// const buildTd = (td) =>
//     `<td>${Array.isArray(td) ? td.join(separator) : td}</td>`;

// const buildTdList = (tds) =>
//     Array.isArray(tds) ? tds.map((i) => buildTd(i)).join("") : buildTd(tds);

let renderObject = (i) => {
    let optionsRender = Object.entries(i).map(([key, value]) => `${key}: ${value}`);
    return `<td>${optionsRender.join(' ')}</td>`;
};

console.log(renderObject(Users));

Array.prototype.renderList = function() {
    let Tr = this
        .map((item) => typeof item === 'object' ? `<tr>${renderObject(item)}</tr>` : `<tr>${item}</tr>`)
        .join('');

    return `${Tr}`
}

console.log(Users.renderList())

// const buildTrs = (tr) =>
//     `${Users.renderList(tr)}`;
//
// const buildTrList = (trs) =>
//     Array.isArray(trs) ? trs.map((i) => buildTrs(i)) : buildTrs(i);

function buildData (arr, str) {
    return `<section>
                <div class="secTable">
                    <h1>${capitalize(str)}: ${Today.toLocaleDateString('ru-RU')} </h1>
                    <table>${Users.renderList()}</table>
                </div>
            </section>`
}

document.body.style.backgroundColor = randomHex();
document.write(buildData(Users, "data info"));