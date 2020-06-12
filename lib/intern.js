const Employee = require("./employee.js");

class Intern extends Employee{
    constructor(name, email, id, schoolAttended){
        super(name, email, id);
        this.school = schoolAttended;
        this.role="Intern" ;
    }
    getRole(){
        return this.role 
     }
     getSchool(){
         return this.school
     }
}

module.exports = Intern; 