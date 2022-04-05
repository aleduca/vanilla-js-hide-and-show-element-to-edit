
const usersElement = document.querySelector('#users');

usersElement.addEventListener('loaded', () => {
    const btnsRemoveElement = document.querySelectorAll('#btn_remove_element');
    btnsRemoveElement.forEach((btn) => {
    btn.addEventListener('click', function(event) {  
        this.closest('li').remove();
    })
})

});