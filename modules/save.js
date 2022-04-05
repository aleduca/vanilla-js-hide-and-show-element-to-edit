import http from '../http';
import hideAndShowLiElement from './hide';

const usersElement = document.querySelector('#users');

usersElement.addEventListener('loaded', () => {
    const btnsSaveElement = document.querySelectorAll('#btn_save');
    btnsSaveElement.forEach((btn) => {
        btn.addEventListener('click', async function(event) {  
            try{
                const id = btn.getAttribute('data-id'); 
                const inputName = document.querySelector("#input"+id);
                const messageUpdated = document.querySelector("#message"+id);

                const {data} = await http.post('/user/update',{
                    id,
                    firstName:inputName.value
                });

                if(data === 'updated'){
                    messageUpdated.textContent = 'Atualizado com sucesso';
                    hideAndShowLiElement("#editLi"+id,"#listLi"+id,"#name"+id,"#input"+id);
                    setTimeout(() => {
                        messageUpdated.textContent = '';
                    }, 3000);
                }

                console.log(data);
            }catch(error){
                console.log(error);
            }
        })
    })
});


