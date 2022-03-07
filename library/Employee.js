class Employee{
    constructor(name,email){
        this.name =name;
        this.id = this.id++ || 1;
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
