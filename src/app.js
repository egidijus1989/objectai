import { User } from "./class/user";
import { Student } from "./class/students";

import renderForm from "./modules/renderForm";
import renderUl from "./modules/renderUl";


const user1 = new User("Jonas", "jonas@gmail.com");
user1.setRole("admin");
user1.setDepartment("IT");
console.log(user1.getFullUserDate());
user1.displayUI();

const student1 = new Student('Karolis', 'karolis@gmail.com', "JS");
console.log(student1)

renderForm()
renderUl()