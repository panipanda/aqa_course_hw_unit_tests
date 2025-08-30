/*
  sortedByVowels
  Напишите функцию, которая принимает на вход массив слов и
  возвращает отсортированный массив по следующему критерию: количество гласных букв.
  Массив должен быть отсортирован по возрастанию количества гласных букв в слове.
 */

const words = [
  'umbrella',
  'apple',
  'ocean',
  'independent',
  'education',
  'elephant',
  'island',
  'universe',
  'environment',
  'queue',
];

function sortedByVowels(words) {
  const vowels = 'aeiou';
  const countVowels = (item) =>
    item.toLowerCase().split('').reduce((sum, ch) => sum + (vowels.includes(ch) ? 1 : 0), 0);
  return words.toSorted((a, b) => countVowels(a) - countVowels(b));
}

console.log(sortedByVowels(words));


export { sortedByVowels };
