/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив содержащий все элементы переданных массивов.
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/
function mergeArrays(...arrays) {
  return [].concat(...arrays);
}
/*
  2. Divide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */
function devideBy(sentence) {
  if (typeof sentence !== 'string') sentence = String(sentence ?? '');

  // Разделяем по любым символам, которые НЕ буквы и НЕ цифры
  // \p{L} — любая буква (Unicode)
  // \p{N} — любая цифра
  const words = sentence.trim().split(/[^\p{L}\p{N}]+/u).filter(Boolean);

  if (!words.length) return '';

  const [first, ...rest] = words;

  const capitalization = (s) => {
    const chars = Array.from(s.toLowerCase());
    chars[0] = chars[0].toUpperCase();
    return chars.join('');
  };

  return [first.toLowerCase(), ...rest.map(capitalization)].join('_');
}

// let sentence = 'Как дела, хочешь пивка?';
// console.log(devideBy(sentence));
/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
      первые два числа которой являются 0 и 1, а каждое последующее за ними число
      является суммой двух предыдущих
    - Например fibonacci(8) //21
  */
function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  let firstNum = 0;
  let secondNum = 1;
  for (let i = 2; i <= n; i++) {
    const nextNum = firstNum + secondNum;
    firstNum = secondNum;
    secondNum = nextNum;
}
  return secondNum;
}

console.log(fibonacci(8)); // 21

export { mergeArrays, fibonacci, devideBy };
