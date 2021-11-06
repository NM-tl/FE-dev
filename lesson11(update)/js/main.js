let amount = 100
let monday = [
  ['Write a tutorial',360],
  ['Some web development',120]
]
let tuesday = [
  ['Keep writing that tutorial',240],
  ['Some more web development',360],
  ['A whole lot of nothing',60]
]

let tasks = monday
  .concat(tuesday)
  .map(
    function(task){
      return task.slice();
    }
  )
  .map(
    function(task){
      task[1] /= 60; 
      return task;
    }
  )
  .filter(
    function(task){
      return task[1]<=2;
    }
  )
  .map(
    function(task){
      task.push(task[1]*amount);
      return task;
    }
  );

let price = tasks
  .reduce(
    function(sum, task){
      return sum + task[2];
    }, 0
  )

const taskInfo = ['Task name: ', 'Task duration: ', 'Task amount: $', 'Price: $'];

let TRs = tasks
  .map(
    function(task){
      return `<tr>
        <td><span class="label">${taskInfo[0]}</span>${task[0]}</td>
        <td><span class="label">${taskInfo[1]}</span>${task[1]} hours</td>
        <td><span class="label">${taskInfo[2]}</span>${task[2]}</td>
      </tr>`;
    }
  )
  .join(``);

document.write(`<table>
  <tbody>
    ${TRs}
  </tbody>
  <tfoot>
    <tr>
      <td colspan="3"><span class="label">${taskInfo[3]}</span>${price}</td>
    </tr>
  </tfoot>
</table>`);
