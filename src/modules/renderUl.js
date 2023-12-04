import ul from "./ul";

const renderUl = ()=>{
    let ulElement = document.createElement('div');
    ulElement.className = 'col-6';
    ulElement.innerHTML=ul();
    document.querySelector('.container').appendChild(ulElement);
}

export default renderUl;