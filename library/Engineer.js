const Employee = require("./Employee");
class Engineer extends Employee{
    constructor(name,email,github){
        super(name,email)
        this.github = github;
    }
    getGithub(){
        return `<a href="https://github.com/${this.github}">GithubProfile</a>`
    }
    getRole(){
        return "Engineer"
    }
    getId(){
        return `Engineer #${this.id}`
    }
    
}

module.exports = Engineer;