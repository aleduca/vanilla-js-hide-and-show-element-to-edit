
const btnsRemoveElement = document.querySelectorAll('#btn_remove_element');

btnsRemoveElement.forEach((btn) => {
    btn.addEventListener('click', function(event) {  
        this.closest('li').remove();
    })
})