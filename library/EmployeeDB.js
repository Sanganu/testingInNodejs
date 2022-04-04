class EmployeeDB{
    constructor(){
        this.id = this.id++ || 1;
    }
    getTotalEmployee(){
        return `We have ${this.id}`
    }

}

module.exports = EmployeeDB;
