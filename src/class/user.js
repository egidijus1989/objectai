
class User{
    constructor(name, email){ // constructor
        this.name = name;
        this.email = email;
    }
    setRole(role){ //setter
        this.role = role;
    }
    setDepartment(department){ //setter
        this.department = department;
    }
    getUserprofile(){ //getter
        return [
            this.name,
            this.email
        ]
    }
    getFullUserDate(){ //getter
        return [
            this.name,
            this.email,
            this.role,
            this.department
        ]
    }
    displayUI(){
        //Display user data in html list
        let ul = document.querySelector('.list');
        for(let i = 0; i < this.getFullUserDate().length; i++){
            let li = document.createElement("li")
            li.textContent = `${this.getFullUserDate()[i]}`;
            ul.appendChild(li);
        }
    }
}
module.exports ={
    User
}