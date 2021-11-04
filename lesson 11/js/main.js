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

const TRs = (array) =>
  array
    .map(
      (el) => `
        <tr>
            <td><span class="label">Task name:</span> ${el[0]}</td>
            <td><span class="label">Taks duration:</span> ${el[1]}h</td>
            <td><span class="label">Task amount:</span> $${el[2]}</td>
        </tr>
`,
    )
    .join('');

document.write(`
    <table>
        <th>
            ${TRs(newArr)}
            <tr>
                <td><span class="label">Total amount:</span> ${mySalary}$</td>
            </tr>
        </th>
    </table>    
`);