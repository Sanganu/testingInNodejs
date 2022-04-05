const Employee = require("./Employee");
class Manager extends Employee{
    constructor(name,email,zoomlink){
        super(name,email)
        this.zoomlink = zoomlink;
    }
    getZoomLink(){
        return this.zoomlink;
    }
    getRole(){
        return "Manager"
    }
}

module.exports = Manager;