const Employee = require("./Employee");
class Manager extends Employee{
    constructor(name,id,email,zoomlink){
        super(name,id,email)
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