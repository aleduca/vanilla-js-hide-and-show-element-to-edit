import http from '../http';

const usersElement = document.querySelector('#users');

usersElement.addEventListener('loaded', () => {
    const btnsRemoveElement = document.querySelectorAll('#btn_remove_element');
    btnsRemoveElement.forEach((btn) => {
    btn.addEventListener('click', async function(event) {  
        try{
            const id = btn.getAttribute('data-id');
            const messageUpdated = document.querySelector("#message"+id);
            const {data} = await http.delete('/user/destroy',{data:
                {id}
            });
            console.log(data);

            if(data === 'deleted'){
                messageUpdated.textContent = 'Deletado com sucesso';
                setTimeout(() => {
                    messageUpdated.textContent = '';
                    this.closest('li').remove();
                }, 3000);
            }

        }catch(error){
            console.log(error);
        }
    })
})

});