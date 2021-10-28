const animals = [
  ['🐭', 'mouse', 'Jerry'],
  ['🐹', 'hamster', 'Biscuit'],
  ['🐰', 'rabbit', 'Bugs'],
  ['🦊', 'fox', 'Mrs. Fox'],
  ['🐻', 'bear', 'Paddington'],
];

let food = [
    ['🍎','apple',10],
    ['🍐','pear',12],
    ['🍊','tangerine',15],
    ['🍋','lemon',5],
    ['🍌','banana',7]
];

let universes = [
    ['🖤', 'DC', ['Superman', 'Batman', 'Wonder Woman']],
    ['❤️', 'Marvel', ['Iron Man', 'the Hulk', 'Black Widow']]
]

function getInfo(arr, str) {
  const TRs = [];

  for (let i = 0; i < arr.length; i++) {
    let td = '';

    for (let j = 0; j < arr[i].length; j++) {
      td += `<td>${arr[i][j]}</td>`;

    //   if(arr[i][j].isArray())
    }

    TRs.push(`<tr>${td}</tr>`);
  }

  return `<caption>${str} info</caption><table>${TRs.join('')}</table>`;
}

document.write(getInfo(animals, 'Animals'));
document.write(getInfo(food, 'Food'));
document.write(getInfo(universes, 'Universes'));
console.log(universes);

// const sss = arr.map((i) => {
//   let td = '';
//   return `<tr>${i.map((j) => (td += `<td>${j}</td>`))}</tr>`;
// });
