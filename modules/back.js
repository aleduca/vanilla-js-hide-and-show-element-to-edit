import hideAndShowLiElement from "./hide";

const usersElement = document.querySelector('#users');

usersElement.addEventListener('loaded', () => {
    const btnsBackElement = document.querySelectorAll('#btn_back');

    btnsBackElement.forEach((btn) => {
        btn.addEventListener('click', function(event) {  
            const id = btn.getAttribute('data-id');
            const isBack = true;
            hideAndShowLiElement("#editLi"+id,"#listLi"+id,"#name"+id,"#input"+id, isBack);
        })
    })
})

