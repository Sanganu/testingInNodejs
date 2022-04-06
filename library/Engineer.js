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
    getEngineerTemplate() {
        return `
        <div class="flex justify-center bg-yellow-300">
  <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
    <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">${this.getId()}</h5>
    <p class="text-gray-700 text-base mb-4">
      ${this.getName()}
    </p>
    <p class="text-gray-700 text-base mb-4">
    Zoom Link:  ${this.getGithub()}
  </p>
  <p class="text-gray-700 text-base mb-4">
  Designation:  ${this.getRole()}
</p>
    <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">${this.getEmail()}</button>
  </div>
</div>
        `
    }
    
}

module.exports = Engineer;