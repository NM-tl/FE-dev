const toInnerText = (item) => item.join(': ');

const sports = [
  ['skier', '⛷'],
  ['snowboarder', '🏂'],
  ['apple', '🍎'],
  ['hockey', '🏒'],
  ['ice skate', '⛸'],
  ['swimmer', '🏊'],
  ['surfer', '🏄‍'],
  ['watermelon', '🍉'],
  ['lemon', '🍋'],
  ['rowboat', '🚣'],
  ['bicyclist', '🚴‍'],
].map(toInnerText);

const summerSports = sports.slice(5);
const fruit1 = summerSports.splice(2, 2);

console.log('*** Summer sports ***');
summerSports.forEach((summer) => console.log(summer));

const winterSports = sports.slice(0, 5);
const fruit2 = winterSports.splice(2, 1);

console.log('\n\n' + '*** Winter sports ***');
winterSports.forEach((winter) => console.log(winter));

const fruits = fruit2.concat(fruit1);

console.log('\n\n' + '*** Fruits ***');
fruits.forEach((fruits) => console.log(fruits));
