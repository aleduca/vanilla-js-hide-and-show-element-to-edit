const btnsSaveElement = document.querySelectorAll('#btn_save');

btnsSaveElement.forEach((btn) => {
    btn.addEventListener('click', function(event) {  
        const id = btn.getAttribute('data-id');
        console.log('save');
    })
})