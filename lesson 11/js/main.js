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

function arrModify(arr, salary = amount) {
  const array = [];
  const hour = 60;

  arr.forEach((el) => {
    const [task, minute] = el;
    const time = minute / hour;

    if (time <= 2) {
      array.push([task, time, time * salary]);
    }
  });

  return array;
}

const newArr = arrModify(monday).concat(arrModify(tuesday));

const salary = (...arrays) => {
  const concated = arrays.reduce((acc, cur) => acc.concat(cur), []);

  return concated.reduce((acc, curr) => acc + (curr[2] || 0), 0);
};

const mySalary = salary(arrModify(monday), arrModify(tuesday));

const taskInfo = ['Task name: ', 'Task duration: ', 'Task amount: $', 'Total amount: $'];

const buildTd = (td, taskName) =>
  `<td><span class="label">${taskName ? `${taskName}` : ''}</span>${td}</td>`;

const buildTdList = (tds, tasks = taskInfo) =>
  tds.map((item, index) => buildTd(item, tasks[index])).join('');

const buildTr =
  (tasks = taskInfo) =>
  (tr, index, array) =>
    `<tr>${buildTdList(
      tr,
      index + 1 === array.length ? tasks.slice(-1) : tasks,
    )}</tr>`;

const buildTrList = (trs, tasks = taskInfo) => trs.map(buildTr(tasks));

function buildForm(arr) {
  return `<table>${buildTrList([...arr, [mySalary]]).join('')}</table>`;
}

document.write(`${buildForm(newArr)}`);