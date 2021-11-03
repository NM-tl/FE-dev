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

const mondayTime = [];
const mondayAmount = [];
const tuesdayTime = [];
const tuesdayAmount = [];

let mondayTime = monday.map(
    function (el, index, arr){
      const hour = el[1] / 2;
      mondayTime.push(el[1]);
    }
)
console.log(mondayTime);


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
