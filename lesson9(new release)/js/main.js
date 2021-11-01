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
  return `<caption><b>${str} info</b></caption><table>${buildTrList(arr).join(
    '',
  )}</table>`;
}

document.write(buildForm(animals, 'Animals'));
document.write(buildForm(food, 'Food'));
document.write(buildForm(universes, 'Universes'));
