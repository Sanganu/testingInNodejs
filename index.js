const inquirer = require("inquirer");
const Manager = require("./library/Manager");
const Intern = require("./library/Intern");
const Engineer = require("./library/Engineer");

const employeeQuestions = [

    {
      type:"input",
      name:"employeename",
      message:"Enter Employee Name"
    },
    {
        type:"input",
        name:"employeeemail",
        message:"Enter Employee Email"
    }
]


const getMenu = () => {
    inquirer.prompt([
        {
            type:"list",
            name:"userselection",
            choices:[{name:"Add New Manager",value:1},
            {name:"Add Engineer",value:2},
            {name:"Add Inter",value:3},
            {name:"Exit",value:4}],
            message:"Select New Employee Category to add"
        }
    ]).then(({userselection}) =>{
        switch(userselection){
            case "1":
               newManager();
               break;
            case "2":
                newEngineer();
                break;
            case "3":
                newIntern();
                break;
            default:
               getTeamHTML();
            break;     
         }
    })
}

function newManager(){

}