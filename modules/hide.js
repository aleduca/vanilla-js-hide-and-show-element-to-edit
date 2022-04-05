
export default function hideAndShowLiElement(toHideElement, toShowElement, name, input){
    const toHide = document.querySelector(toHideElement);
    const toShow = document.querySelector(toShowElement);
    const inputEditValue = document.querySelector(input);
    const nameItem = document.querySelector(name);    

    if(inputEditValue && inputEditValue.value.length > 0){        
        nameItem.innerHTML = inputEditValue.value;
    }

    toHide.style.display = 'none';
    toShow.style.display = 'block';
}