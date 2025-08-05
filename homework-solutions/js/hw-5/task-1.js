/**
 * Сложить строку с четными числами от 10 до 0, разделенными `-` в переменную evenNumbersResult.
 * Переменная для результата `evenNumbersResult` уже создана и содержит пустую строку.
 * Ожидаемый результат: '10-8-6-4-2-0'
 */

let evenNumbersResult = '';
for (let i = 10; i >= 0; i -= 2) { // loop from 10 to 0, decrementing by 2
  evenNumbersResult += i + (i > 0 ? '-' : ''); // add number and a dash if it's not the last number (ternary operator)
};
console.log(evenNumbersResult); // '10-8-6-4-2-0'


/**
 * Создать строку из 5 строк с увеличивающимся количеством смайликов ":)".
 * Переменная для результата `smilePatternResult` уже создана и содержит пустую строку.
 * Ожидаемый результат:
 * :)
 * :):)
 * :):):)
 * :):):):)
 * :):):):):)
 */

let smilePatternResult = '';
for (let i = 1; i <= 5; i++) {
  // i for the number of lines
  for (let j = 1; j <= i; j++) {
    smilePatternResult += ':)'; // add smiley for each line
  }
  if (i < 5) { // avoid adding a newline after the last line
    smilePatternResult += '\n'; // add a newline character after each row of smiles
  }
  }
console.log(smilePatternResult);


/**
 * Заменить все пробелы в переменной text на "1".
 * Переменная для результата `replaceSpacesWithOneResult` уже создана и содержит пустую строку.
 * Ожидаемый результат: 'Hello!1I1am1a1JS1student!'
 */
const text = 'Hello! I am a JS student!';
let replaceSpacesWithOneResult = '';
replaceSpacesWithOneResult = text.replace(/ /g, '1'); // replace all spaces with '1'
console.log(replaceSpacesWithOneResult); // 'Hello!1I1am1a1JS1student!'

module.exports = { evenNumbersResult, smilePatternResult, replaceSpacesWithOneResult };
