let users = [
    ["john","red",5,["ball", "book", "pen"]],
    ["becky","blue",10,["tape", "backpack", "pen"]],
    ["susy","red",55,["ball", "eraser", "pen"]],
    ["tyson","green",1,["book", "pen"]],
];

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

let usersModify = [];

users
    .forEach(
        function (user) {
            let userName = user.slice();
            usersModify.push(capitalizeFirstLetter(userName[0]) + '!');
        }
    );

let usersQuestion = users
    .map(
            function (user) {
            return capitalizeFirstLetter(user[0]) + '?';
        }
    );

let usersFiltered = users
    .filter(
        function (user) {
            return user[1] === 'red';
        }
    );

let total = usersFiltered
    .reduce(
        function (acc, user) {
            acc += user[2];
            return acc
        }, 0
    );



redTeam = usersFiltered
    .map(
        function (redteam) {
            return `<td>${capitalizeFirstLetter(redteam[0])}</td>`
        }
    ).join('');


document.write(`
    <table>
        <tbody>
           <tr><td>${usersModify.join('')}</td></tr>
           <tr><td>${usersQuestion.join('')}</td></tr>
        </tbody>
        <tfoot>
            <tr>${redTeam}</tr>
            <tr><td>Final summ: ${total}</td></tr>   
        </tfoot>
       
    </table>
`)