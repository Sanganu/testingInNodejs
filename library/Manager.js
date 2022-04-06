const Employee = require("./Employee");
class Manager extends Employee {
    constructor(name, email, zoomlink) {
        super(name, email)
        this.zoomlink = zoomlink;
    }

    getZoomLink() {
        return this.zoomlink;
    }

    getRole() {
        return "Manager"
    }

    getId() {
        return `Manager #${this.id}`
    }
    getManagerTemplate() {
        return `
        <div class="flex justify-center bg-emerald-300">
  <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
    <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">${this.getId()}</h5>
    <p class="text-gray-700 text-base mb-4">
      ${this.getName()}
    </p>
    <p class="text-gray-700 text-base mb-4">
    Zoom Link:  ${this.getZoomLink()}
  </p>
  <p class="text-gray-700 text-base mb-4">
  Designation:    <span class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-400 text-white rounded-full">${this.getRole()}</span>
</p>
    <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">${this.getEmail()}</button>
  </div>
</div>
        `
    }
}

module.exports = Manager;