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

function getInfo(arr, str) {
  const TRs = [];

  for (let i = 0; i < arr.length; i++) {
    let td = '';

    for (let j = 0; j < arr[i].length; j++) {
      td += `<td>${arr[i][j]}</td>`;

      TRs.push(`<tr>${td}</tr>`);
    }

    return `<caption>${str} info</caption><table>${TRs.join('')}</table>`;
  }
}

function deepCopeArray(arr) {
  return arr.map((item) => (Array.isArray(item) ? deepCopeArray(item) : item));
}

const test = deepCopeArray(universes);

test[0].push(1);

console.log(test);


//filter isArray \ for
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
console.log(universes);

document.write(getInfo(animals, 'Animals'));
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
