import renderForm from "./modules/renderForm";
import renderUl from "./modules/renderUl";

class Product{
    constructor(name, price, year){
        this.name = name;
        this.price = price;
        this.year = year;
    }
    getFullProductData(){ //getter
        return [
            this.name,
            this.price,
            this.year
        ]
    }
    displayUI(){
        //Display user data in html list
        let ul = document.querySelector('.list-group');
        for(let i = 0; i < this.getFullProductData().length; i++){
            let li = document.createElement("li")
            li.textContent = `${this.getFullUserDate()[i]}`;
            ul.appendChild(li);
        }
    }
}
module.exports ={
    Product
}