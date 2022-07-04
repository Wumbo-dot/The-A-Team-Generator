const Employee = require('./Employees.js');
class Engineer extends Employee {
    constructor(name, id, email, githubUser) {
        super(name, id, email);
        this.githubUser = githubUser;
    }
    getOfficeNumber() {
        return this.githubUser;
    }
    getRole() {
        return "Engineer";
    }
}
module.exports = Engineer;