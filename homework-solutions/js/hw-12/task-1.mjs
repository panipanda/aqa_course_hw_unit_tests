/*
1. Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию, которая будет отрабатывать спустя 2 секунды после вызова delayTwoSeconds
2. Создайте переменную, в которую присвоите новый промис. Промис должен резолваться с числом 1. Обработайте промис методом .then и выведите результат
  его резолва в консоль
3. Создайте переменную, в которую присвоите новый промис. Промис должен реджектаться с "Promise failed". 
  Обработайте промис методом .catch и выведите результат его резолва в консоль
4. Создайте функцию promiseNumber, принимающую на вход число. Функция должна возвращать промис, резолвающий это число.
5. Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
  в консоль результаты работы каждого промиса через .then
6. Вызовите метод Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
  в консоль статус и результат каждого промиса через .then
7. Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch

*/

// 1
function delayTwoSeconds(callback) {
  setTimeout(callback, 2000);
}

delayTwoSeconds(() => console.log('2 seconds passed'));

// 2
const promiseOne = new Promise((resolve, reject) => {
  resolve(1);
});

promiseOne.then((number) => console.log(number));

// 3
const promiseTwo = new Promise((resolve, reject) => {
  reject('Promise failed');
});

promiseTwo.catch((fail) => console.log(fail));

// 4
const promiseNumber = (num) => {
    return new Promise((resolve, reject) => {
        resolve(num);
    });
};
promiseNumber(42).then((num) => console.log(num));

// 5
Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
  .then((results) => {
    results.forEach((result, index) => {
        console.log(`Promise ${index + 1} resolved with value: ${result}`);
    });
  });

// 6
Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
  .then((results) => {
    results.forEach((result, index) => {
        console.log(`Promise.allSettled ${index + 1} is ${result.status} with value: ${result.value}`);
    });
    });

// 7.1
async function promiseAll() {
    try {
        const results = await Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);
        results.forEach((result, index) => {
            console.log(`Async Promise ${index + 1} resolved with value: ${result}`);
        });
    }
    catch (error) {
        console.log('Error:', error);
    }
}
promiseAll();

// 7.2
async function promiseAllSettled() {
    try {
        const results = await Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);
        results.forEach((result, index) => {
            console.log(`Async Promise.allSettled ${index + 1} is ${result.status} with value: ${result.value}`);
        });
    }
    catch (error) {
        console.log('Error:', error);
    }
}
promiseAllSettled();



