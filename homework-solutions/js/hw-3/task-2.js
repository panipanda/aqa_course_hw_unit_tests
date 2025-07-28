/*

Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
n + nn + nnn, где n не перемножаются, а конкатенируются

*/
let firstInput = 7; // Любое целое положительное число от 1 до 9
firstInput = String(firstInput); // Преобразуем в строку для конкатенации
let secondInput = firstInput + firstInput;
let thirdInput = firstInput + firstInput + firstInput;
console.log(Number(firstInput) + Number(secondInput) + Number(thirdInput));