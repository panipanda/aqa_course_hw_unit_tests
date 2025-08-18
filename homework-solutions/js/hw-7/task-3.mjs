/*
  digitalRoot
  Напишите рекурсивную функцию, которая принимает на вход число и складывает его цифры. 
  Если сумма получилась больше 9 - снова сложите цифры.
  И так пока, сумма не станет меньше либо равной 9. 
  После окончания сложений возвращает полученное число.
  Например при подаче числа 19 (1+9=10>9, потому 1+0=1) выводится 1

*/

function digitalRoot(number) {
  if (typeof number !== 'number' || number < 0) {
    return 'invalid input';
  }
  if (number < 10) {
    return number;
  }
  function sumDigits(num) {
    if (num === 0) {
      return 0;
    }
    return num % 10 + sumDigits(Math.floor(num / 10));
  }
  const sum = sumDigits(number);
  return digitalRoot(sum);
}
export { digitalRoot };
