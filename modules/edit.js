import hideAndShowLiElement from "./hide";

const btnsEditElement = document.querySelectorAll('#btn_edit_element');

btnsEditElement.forEach((btn) => {
    btn.addEventListener('click', function(event) {  
        const id = btn.getAttribute('data-id');
        hideAndShowLiElement("#listLi"+id,"#editLi"+id)
    })
})