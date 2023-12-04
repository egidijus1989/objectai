import form from "./form"

const renderForm = ()=>{
    let formElement = document.createElement('form');
    formElement.className = 'form-inline col-3';
    formElement.innerHTML=form();
    document.querySelector('.container').appendChild(formElement);
}

export default renderForm;