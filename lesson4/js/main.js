let result = 0;
 
let q1 = prompt('Сколько будет 2+2?');

while(isNaN(q1) || !q1) {
	q1 = prompt('Введите ответ числом: "Сколько будет 2+2?"')
}

result = (q1 === '4') ? result += 20 : result += 0;

let q2 = confirm('Солнце встает на востоке?');

result = (q2 === true) ? result +=20 : result += 0;

let q3 = prompt('Сколько будет 5 / 0 ?');

while(isNaN(q3) || !q3) {
	q3 = prompt('Введите ответ числом: "Сколько будет 5 / 0 ?"')
}

result = (q3 === '0') ? result +=20 : result += 0;

let q4 = prompt('Какого цвета небо?');

while(q4 === '') {
	q4 = prompt('Какого цвета небо?')
}

q4 = !q4 ? '' : q4.toLowerCase().replaceAll(' ', '');

if(q4 === 'голубого') {
	result += 20;
} else {
	switch (q4) {
		case 'синего':
			result += 20;
			break;

		case 'голубое':
			result += 20;
			break;

		default:
			result += 0;
		break;
	}
}

let q5 = prompt('Какой правильный ответ на главный вопрос жизни, вселенной и всего такого.');

while(isNaN(q5) || !q5) {
	q5 = prompt('Введите ответ числом: "Какой правильный ответ на главный вопрос жизни, вселенной и всего такого."')
}

result = (q5 === '42') ? result +=20 : result += 0;

alert(`Ваш результат ${result} очков!`);
