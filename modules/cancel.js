import hideAndShowLiElement from "./hide";
import { removeInterval } from "./intervals";

const usersElement = document.querySelector('#users');

usersElement.addEventListener('loaded', () => {
    const btnsCancelElement = document.querySelectorAll('#btn_cancel');

    btnsCancelElement.forEach((btn) => {
        btn.addEventListener('click', function(event) {  
            const id = btn.getAttribute('data-id');
            const counter = document.querySelector("#counter"+id);
            const btn_cancel = document.querySelector("#cancel"+id);

            removeInterval(id);
            btn_cancel.style.display = 'none';
            counter.textContent = '';
            const isBack = true;
            hideAndShowLiElement("#editLi"+id,"#listLi"+id,"#name"+id,"#input"+id, isBack);
        })
    })
})

