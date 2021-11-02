const amount = 100;
const monday = [
  ['Write a tutorial', 360],
  ['Some web development', 120],
];
const tuesday = [
  ['Keep writing that tutorial', 240],
  ['Some more web development', 360],
  ['A whole lot of nothing', 60],
];

const mondayTasks = [];
const tuesdayTasks = [];

// function modifyArr(arr, i, cur) {
//   arr.forEach((el, index, arr) => {
//     el[1] /= 60;
//     arr.push(el);
//   });
//   arr.map((el) => {
//     if (el[1] <= 2) {
//       el[1] *= amount;
//     }
//     return el;
//   });
// }
//
// modifyArr(mondayTasks);
//
// console.log(mondayTasks);


monday.forEach((el, index, arr) => {
  el[1] /= 60;
  mondayTasks.push(el);
});

mondayTasks.map((el, index, arr) => {
  if (el[1] <= 2) {
    el[1] *= amount;
  }
  return el;
  mondayTasks.push(el);
});

console.log(mondayTasks);

// const test = tuesday.reduce((acc, cur) => {
//   const hour = cur[1] / 60;
//
//   if (hour <= 2) {
//     // eslint-disable-next-line no-param-reassign
//     acc = [...acc, [...cur, hour * amount]];
//   }
//   return acc;
// }, []);
//
// console.log(test);
//
// const arr = [1, 2, 3, 4, 5];
//
// const ts = arr.reduce((acc, item) => acc + item, 0);
//
// console.log(ts);
