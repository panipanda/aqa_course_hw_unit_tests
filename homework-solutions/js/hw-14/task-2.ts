/*
Напишите функцию, реализующую метод массивов map(сам мэп юзать нельзя, надо написать кастомный:). Функция принимеют на вход массив и колбэк. Используйте дженерик типы. 
   Затипизировать надо саму функцию и коллбэк.
   Создать реализацию функции map, принимающую массив чисел 1-5, возвращающую новый массив, 
   где каждый каждый элемент - это элемент исходного массива умноженный на его индекс
   Пример:
   map([1,2,3,4,5], callback) => [0,2,6,12,20]
*/

type MapCallback<T, R> = (elem: T, i: number, array: T[]) => R;

function map<T, R>(array: T[], callback: MapCallback<T, R>): R[] {
  const newArr: R[] = [];
  for (let i = 0; i < array.length; i++) {
    const newElement = callback(array[i], i, array);
    newArr.push(newElement);
  }
  return newArr;
}

console.log(map([1, 2, 3, 4, 5], (el, i) => el * i));