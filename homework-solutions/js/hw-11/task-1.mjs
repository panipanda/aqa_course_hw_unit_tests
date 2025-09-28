class Employee {
  #salary;

  constructor(firstName, lastName, profession, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.profession = profession;
    this.salary = salary;
  }

  get firstName() {
    return this._firstName;
  }
  
  set firstName(value) {
    if (typeof value !== 'string' || !value.trim()) {
      throw new Error('First name must be a non-empty string.');
    }
    this._firstName = value.trim();
  }
  
  get lastName() {
    return this._lastName;
  }
  
  set lastName(value) {
    if (typeof value !== 'string' || !value.trim()) {
      throw new Error('Last name must be a non-empty string.');
    }
    this._lastName = value.trim();
  }

  get profession() {
    return this._profession;
  }
  
  set profession(value) {
    if (typeof value !== 'string' || !value.trim()) {
      throw new Error('Profession must be a non-empty string.');
    }
    this._profession = value.trim();
  }

  get salary() {
    return this.#salary;
  }
  set salary(value) {
  if (typeof value !== 'number' || isNaN(value) || value < 0) {
    throw new Error('Salary must be a non-negative number.');
  }
  this.#salary = value;
}

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const emp1 = new Employee('John', 'Doe', 'Developer', 3000);
console.log(emp1.firstName); // "John"
emp1.salary = 3100;
console.log(emp1.salary); // 3100

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
      if (!(employee instanceof Employee)) {
        throw new Error('Incorrect argument.');
      }
      this.#employees.push(employee);
    }

    getInfo() {
      return `Компания: ${this._title}\nАдрес: ${this._address}\nКоличество сотрудников: ${this.#employees.length}`;
  }
}

export { Employee, Company };
