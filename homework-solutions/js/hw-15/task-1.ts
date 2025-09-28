// 1.1

// 1. Создайте интерфейс IEmployee {name: string, salary: number, isManager: boolean } и объект QA: IEmployee

interface IEmployee {
  name: string;
  salary: number;
  isManager: boolean;
}
const QA: IEmployee = {
  name: 'Jane Doe',
  salary: 5000,
  isManager: false,
};

// 2. Создайте тип EmployeeKeys, который будет юнионом названий ключей IEmployee (использовать keyof)

type EmployeeKeys = keyof IEmployee;

// 3. Создайте тип QaKeys, который будет содержать лишь ключи объекта QA(использовать keyof и typeof)

type QaKeys = keyof typeof QA;

// 4. Создайте тип UserType из объекта QA (используйте typeof)

type UserType = typeof QA;

// 5. Создайте тип, в котором все поля интерфейса IEmployee будут необязательными

type PartialType = Partial<IEmployee>;

// 6. Создайте тип, который будет содержать поля name и salary из интерфейса IEmployee

type NameAndSalary = Pick<IEmployee, 'name' | 'salary'>;

// 7. Создайте тип, который будет держать все поля из интерфейса IEmployee, кроме isManager

type NameAndSalaryOmit = Omit<IEmployee, 'isManager'>;

// 8. Создайте тип, который будет содержать все поля из интерфейса IEmployee и сделает их неизменяемыми (readonly)

type ReadonlyFields = Readonly<IEmployee>;

// 9. Создайте объект с помощью Record, в ключах которого будут строки, а в значениях - ключи объекта QA (Используйте Record, keyof, typeof)

const recordObj: Record<string, QaKeys> = {};

// 1.2

/*
    1. Создайте интерфейс IVehicle:
  Методы:
    - getDetails(): string — возвращает информацию о транспортном средстве.
    - start(): string — возвращает строку "The vehicle is starting".
*/

interface IVehicle {
  getDetails(): string;
  start(): string;
}

/*
    2. Создайте абстрактный класс Vehicle, который имплементирует IVehicle:
  Реализуйте конструктор с полями:
    - make (строка)
    - model (строка)
  Добавьте методы:
    - start, возвращающего строку: "The vehicle {make} {model} is starting.".
    - Абстрактный метод getDetails, который нужно реализовать в классах-наследниках.
*/

abstract class Vehicle implements IVehicle {
  constructor(
    public make: string,
    public model: string,
  ) {}

  start(): string {
    return `The vehicle ${this.make} ${this.model} is starting`;
  }
  abstract getDetails(): string;
}

/*
    3. Создайте класс Car, который наследует Vehicle:
    - Добавляет поле year (число).
    - Реализует метода getDetails, возвращающего строку: "{make} {model}, {year}".
*/

class Car extends Vehicle {
  constructor(
    make: string,
    model: string,
    public year: number,
  ) {
    super(make, model);
  }

  getDetails(): string {
    return `${this.make} ${this.model}, ${this.year}`;
  }
}

// 4. Создайте объект класса Car и проверьте работоспособность

const myCar = new Car('Fiat', 'Panda', 2020);

console.log(myCar.start());
console.log(myCar.getDetails());