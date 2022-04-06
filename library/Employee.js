// const EmployeeDB = require("./EmployeeDB");
// class Employee extends EmployeeDB{
class Employee {
    static id = 0;
    constructor(name, email) {
        Employee.id = Employee.id+1;
        this.name = name;
        this.email = email;
        this.id = Employee.id
    }
    getName() {
        return `${this.name}`
    }
    getId() {
        return this.id
    }
    getEmail() {
        return `<a href="mailto:${this.email}">${this.email}</a>`
    }
    getRole() { 
        return "Employee"
    }
 
}

module.exports = Employee;
