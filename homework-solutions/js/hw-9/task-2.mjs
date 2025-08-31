/*
 1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters. 
     Объект должен иметь поля name (string) и age (number)
 2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }
 3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей НЕ МЛАДШЕ minAge // getCharactersByAge(40) => [{ 'name': 'Fred', 'age': 40 },{ 'name': 'Jack', 'age': 50 }]
 4. Напишите функцию updateCharacter(name, newCharacter). (Методом getCharacter(name) получаем ссыклку на нужного персонажа, а потом меняем ему данные)
 5. Напишите функцию для удаления персонажа removeCharacter(name) (Реализовать через splice, индекс персонажа искать методом findInxex)
 */

const characters = [
  { name: 'Barney', age: 35 },
  { name: 'Fred', age: 39 },
  { name: 'Jack', age: 49 },
];

function addCharacter(character) {
  if (typeof character.name !== 'string') {
    throw new Error('Name should be string');
  }
  if (typeof character.age !== 'number') {
    throw new Error('Age should be number');
  }
  characters.push(character);
}

function getCharacter(name) {
  return characters.find(ch => ch.name === name )
}

function getCharactersByAge(minAge) {
  if (typeof minAge !== 'number') {
    throw new Error('Age should be number');
  } 
  return characters.filter(ch => ch.age >= minAge )
}

function updateCharacter(name, newCharacter) {
  let findCaracter = getCharacter(name)
  findCaracter.name = newCharacter.name;
  findCaracter.age = newCharacter.age;
  return findCaracter
}

function removeCharacter(name) {
  const index = characters.findIndex(ch => ch.name === name);
  if (index !== -1) {
    characters.splice(index, 1);
    return true;
  }
  throw new Error(`Character with name "${name}" not found`);
}

export { characters, addCharacter, updateCharacter, getCharacter, getCharactersByAge, removeCharacter };