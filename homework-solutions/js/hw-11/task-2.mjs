class Employee {
  #salary;
  constructor(firstName, lastName, profession, salary) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._profession = profession;
    this.#salary = salary;
  }
  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }
  get profession() {
    return this._profession;
  }
  get salary() {
    return this.#salary;
  }
  set firstName(value) {
    if (typeof value !== 'string' || value.length < 2 || value.length > 50 || !/^[A-Za-z\s]+$/.test(value)) {
      throw new Error();
    }
    this._firstName = value;
  }

  set lastName(value) {
    if (typeof value !== 'string' || value.length < 2 || value.length > 50 || !/^[A-Za-z\s]+$/.test(value)) {
      throw new Error();
    }
    this._lastName = value;
  }

  set profession(value) {
    if (typeof value !== 'string' || value.trim() === '' || !/^[A-Za-z\s]+$/.test(value)) {
      throw new Error();
    }
    this._profession = value;
  }
  set salary(value) {
    if (typeof value !== 'number' || value <= 0 || isNaN(value) || value.length < 0 || value >= 10000) {
      throw new Error();
    }
    this.#salary = value;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Company {
  #employees;
  constructor(title, phone, address) {
    this._title = title;
    this._phone = phone;
    this._address = address;
    this.#employees = [];
  }
  get title() {
    return this._title;
  }

  get phone() {
    return this._phone;
  }
  get address() {
    return this._address;
  }

  getEmployees() {
    return [...this.#employees];
  }
  addEmployee(employee) {
    if (employee instanceof Employee) {
      this.#employees.push(employee);
    } else {
      throw new Error('invalid employee');
    }
  }
  getInfo() {
    return `Компания: ${this._title}\nАдрес: ${this._address}\nКоличество сотрудников: ${this.#employees.length}`;
  }
  findEmployeeByName(firstName) {
    let result = this.#employees.find((value, _index, _array) => value._firstName === firstName);
    if (!result) {
      throw new Error(`Сотрудник с именем "${firstName}" не найден`);
    }
    return result;
  }
  removeEmployee(firstName) {
    const employeeIndex = this.getEmployeeIndex(firstName);
    if (employeeIndex === -1) {
      throw new Error(`Сотрудник с именем "${firstName}" не найден`);
    }
    this.#employees.splice(employeeIndex, 1);
  }
  getEmployeeIndex(firstName) {
    let result = this.#employees.findIndex((value, index, array) => value._firstName === firstName);
    return result;
  }
  getTotalSalary() {
    if (!this.#employees) 0;
    return this.#employees.reduce(
      (previousValue, employee, _currentIndex, _array) => previousValue + employee.salary,
      0,
    );
  }
}

export { Employee, Company };