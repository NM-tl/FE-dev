const animals = [
  ['🐭', 'mouse', 'Jerry'],
  ['🐹', 'hamster', 'Biscuit'],
  ['🐰', 'rabbit', 'Bugs'],
  ['🦊', 'fox', 'Mrs. Fox'],
  ['🐻', 'bear', 'Paddington'],
];

const food = [
  ['🍎', 'apple', 10],
  ['🍐', 'pear', 12],
  ['🍊', 'tangerine', 15],
  ['🍋', 'lemon', 5],
  ['🍌', 'banana', 7],
];

const universes = [
  ['🖤', 'DC', ['Superman', 'Batman', 'Wonder Woman']],
  ['❤️', 'Marvel', ['Iron Man', 'the Hulk', 'Black Widow']],
];

const buildTd = (td, separator = '; ') =>
  `<td>${Array.isArray(td) ? td.join(separator) : td}</td>`;

const buildTdList = (tds) =>
  Array.isArray(tds) ? tds.map((item) => buildTd(item)).join('') : buildTd(tds);

const buildTr = (tr) => `<tr>${buildTdList(tr)}</tr>`;

const buildTrList = (trs) =>
  Array.isArray(trs) ? trs.map((item) => buildTr(item)) : buildTr(trs);

function buildForm(arr, str) {
  return `<caption>${str} info</caption><table>${buildTrList(arr).join(
    '',
  )}</table>`;
}

console.log(buildForm(universes), 'Test');

// function deepCopeArray(arr) {
//   return arr.map((item) => (Array.isArray(item) ? deepCopeArray(item) : item));
// }

// filter isArray \ for
// function copiedArray(arr) {
//   const newArr = [];
//
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       newArr.push(copiedArray(arr[i]));
//     } else {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }
// copiedArray(universes);

// const copiedArr = newArr;
document.write(buildForm(animals, 'Test'));
document.write(buildForm(food, 'Food'));
document.write(buildForm(universes, 'Universes'));

// const sss = arr.map((i) => {
//   let td = '';
//   return `<tr>${i.map((j) => (td += `<td>${j}</td>`))}</tr>`;
// });

// let arr = [
// 	[1,2,3,[[true,false],'dog']],
// 	[4,5,6],
// 	7
// ];
//
// function copiedArray(arr){ // [true,false]
// 	let newArr = [];
//
// 	for(let i=0; i<arr.length; i++){
// 		if(Array.isArray(arr[i])){
// 			newArr.push( copiedArray(arr[i]) ); // [1,2,3]
// 		} else{
// 			newArr.push(arr[i]);
// 		}
// 	}
//
// 	return newArr;
// }
//
// let copyOfArr = copiedArray(arr);
//
// console.log(arr);
// console.log(copyOfArr);



// var


const animals = [
  ['🐭', 'mouse', 'Jerry'],
  ['🐹', 'hamster', 'Biscuit'],
  ['🐰', 'rabbit', 'Bugs'],
  ['🦊', 'fox', 'Mrs. Fox'],
  ['🐻', 'bear', 'Paddington'],
];

const food = [
  ['🍎', 'apple', 10],
  ['🍐', 'pear', 12],
  ['🍊', 'tangerine', 15],
  ['🍋', 'lemon', 5],
  ['🍌', 'banana', 7],
];

const universes = [
  ['🖤', 'DC', ['Superman', 'Batman', 'Wonder Woman']],
  ['❤️', 'Marvel', ['Iron Man', 'the Hulk', 'Black Widow']],
];

const getTd = (value, separator = '; ') =>
    `<td>${Array.isArray(value) ? value.join(separator) : value}</td>`;

function getInfo(arr, str) {
  const TRs = [];

  for (let i = 0; i < arr.length; i++) {
    let td = '';

    for (let j = 0; j < arr[i].length; j++) {
      td += getTd(arr[i][j]);
    }
    TRs.push(`<tr>${td}</tr>`);
  }

  return `<caption>${str} info</caption><table>${TRs.join('')}</table>`;
}

console.log(getInfo(universes), 'Test');

// function deepCopeArray(arr) {
//   return arr.map((item) => (Array.isArray(item) ? deepCopeArray(item) : item));
// }

// filter isArray \ for
// function copiedArray(arr) {
//   const newArr = [];
//
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       newArr.push(copiedArray(arr[i]));
//     } else {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }
// copiedArray(universes);

// const copiedArr = newArr;
document.write(getInfo(animals, 'Test'));
document.write(getInfo(food, 'Food'));
document.write(getInfo(universes, 'Universes'));

// const sss = arr.map((i) => {
//   let td = '';
//   return `<tr>${i.map((j) => (td += `<td>${j}</td>`))}</tr>`;
// });

// let arr = [
// 	[1,2,3,[[true,false],'dog']],
// 	[4,5,6],
// 	7
// ];
//
// function copiedArray(arr){ // [true,false]
// 	let newArr = [];
//
// 	for(let i=0; i<arr.length; i++){
// 		if(Array.isArray(arr[i])){
// 			newArr.push( copiedArray(arr[i]) ); // [1,2,3]
// 		} else{
// 			newArr.push(arr[i]);
// 		}
// 	}
//
// 	return newArr;
// }
//
// let copyOfArr = copiedArray(arr);
//
// console.log(arr);
// console.log(copyOfArr);
