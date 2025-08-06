/*
  У вас есть массив названий пицц вашего конкурента.
  Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив) 
  и набор названий пицц конкурента (массив), пицц которых нет у конкурента присвойте в переменную "resultUnique" (массив).
  Если все ваши пиццы есть у конкурента результатом будет "null" присвойте в переменную "resultNull".

  Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента
  Воспользуйтесь наборами пицц, что приведены ниже.

  Пиццы:
  const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
  const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
  const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
*/
let resultUnique = [];
let resultNull = null;
const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']; 
//const myPizzas = [...myPizzasT1, ...myPizzasT2];
const myPizzas = myPizzasT1.concat(myPizzasT2.filter(pizza => !myPizzasT1.includes(pizza)));
const competitorPizzasLower = competitorPizzas.map(pizza => pizza.toLowerCase());
const myPizzasLower = myPizzas.map(pizza => pizza.toLowerCase());
for (const pizza of myPizzasLower) {
    if (!competitorPizzasLower.includes(pizza)) {
        resultUnique.push(pizza);
    }
}
if (resultUnique.length === 0) {
    resultNull = 'null';
    console.log(resultNull);
} else {
    resultUnique = resultUnique.map(pizza => pizza.charAt(0).toUpperCase() + pizza.slice(1));
    console.log(resultUnique);
}

export { resultNull, resultUnique };
