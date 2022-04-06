const inquirer = require("inquirer");
const Manager = require("./library/Manager");
const Intern = require("./library/Intern");
const Engineer = require("./library/Engineer");

const employeeQuestions = [

    {
        type: "input",
        name: "employeename",
        message: "Enter Employee Name"
    },
    {
        type: "input",
        name: "employeeemail",
        message: "Enter Employee Email"
    },
    {
        type: "list",
        name: "roleselection",
        choices: [{ name: "Manager", value: 1 },
        { name: "Engineer", value: 2 },
        { name: "Intern", value: 3 }],
        message: "Select New Employee Category to add"
    },
    {
        type: "input",
        name: "zoomlink",
        message: "Enter Zoom Link ?",
        when: (userResponse) => (userResponse.roleselection === 1)
    },
    {
        type: "input",
        message: "Enter School Name",
        name: "school",
        when: (userResponse) => (userResponse.roleselection === 3)
    },
    {
        type: "input",
        message: "Enter Github Username ?",
        name: "github",
        when: (userResponse) => (userResponse.roleselection === 2)
    }
]


const getNewEmployeeDetails = () => {
    inquirer.prompt(employeeQuestions)
        .then(userResponse => {
            switch (userResponse.roleselection) {
                case 1:
                    newManager(userResponse);
                    break;
                case 2:
                    newEngineer(userResponse);
                    break;
                case 3:
                    newIntern(userResponse);
                    break;
                default:
                    getTeamHTML();
                    break;
            }
        });


}

const getMenu = () => {
    console.log("Welcome to New Hire System")
    inquirer.prompt([
        {
            type: "list",
            name: "optionselection",
            choices: [{ name: "Add New Employee", value: 1 },
            { name: "Exit App", value: 2 }],
            message: "Select New Employee Category to add"
        }

    ]).then(({ optionselection }) => {
        switch (optionselection) {
            case 1:
                getNewEmployeeDetails()
                break;
            default:
                getTeamHTML();
                break;
        }
    })
}

function newManager({employeename,employeeemail,zoomlink}){
     const newHire = new Manager(employeename,employeeemail,zoomlink);
     const template = newHire.getManagerTemplate()
     console.log("template" ,template)

 }

 function getTeamHTML(){
     console.log("HTML generate")
     process.exit(0)
 }
 getMenu()