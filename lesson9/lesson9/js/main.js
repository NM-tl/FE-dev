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
  
  const getTd = (value, separator = '; ') =>
      `<td style="border: 1px solid black !important; padding: 5px;">${Array.isArray(value) ? value.join(separator) : value}</td>`;
  
  function getInfo(arr, str) {
    const TRs = [];
  
    for (let i = 0; i < arr.length; i++) {
      let td = '';
  
    for (let j = 0; j < arr[i].length; j++) {
      td += getTd(arr[i][j]);
    }
    TRs.push(`<tr style="border: 1px solid black !important;">${td}</tr>`);
   }
 
   return `<caption class="caption">${str} info</caption><table style="border-collapse: collapse; border: 1px solid black !important;">${TRs.join('')}</table>`;
 }
  
document.write(getInfo(animals, 'Animals'));
document.write(getInfo(food, 'Food'));
document.write(getInfo(universes, 'Universes'));