/*
Напишите дженерик-функцию getKeyByValue, которая принимает объект и значение, и возвращает ключ, соответствующий этому значению. 
Если значение не найдено, функция должна возвращать undefined.
Используйте keyof для типизации ключей объекта
*/

type Cat = {
  name: string;
  age: number;
};

const cat = {
  name: 'Alice',
  age: 10,
};

function getKeyByValue<T extends object, V>(user: T, value: V): keyof T | undefined {
  for (const key in cat) {
    if (cat[key] === value) {
      return key as keyof T;
    }
  }
  return undefined;
}

console.log(getKeyByValue(cat, 'Alice'));
console.log(getKeyByValue(cat, 'Marshmallow'));
console.log(getKeyByValue(cat, 10));