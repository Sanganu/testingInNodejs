const EmployeeDB = require("./EmployeeDB");
class Employee{
    constructor(name,email){
        super()
        this.name =name;
        this.email = email;
    }
    getName(){
        return `${this.name}`
    }
    getId(){
        return this.id
    }
    getEmail(){
        return `<a href="mailto:${this.email}">${this.email}</a>`
    }
    getRole(){
        return "Employee"
    }
}

module.exports = Employee;
