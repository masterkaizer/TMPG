const Employee = require("./employee.js");

class Engineer extends Employee{
    constructor(name, email, id, gitHubUsername){
        super(name, email, id);
        this.github = gitHubUsername;
        this.role="Engineer";

    }
    getRole(){
       return this.role 
    }
    getGithub(){
        return this.github
    }
}

module.exports = Engineer; 