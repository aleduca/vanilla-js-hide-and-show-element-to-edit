import http from '../http';
import hideAndShowLiElement from './hide';
import { addInterval, removeInterval } from './intervals';

const usersElement = document.querySelector('#users');

usersElement.addEventListener('loaded', () => {
    const btnsSaveElement = document.querySelectorAll('#btn_save');
    btnsSaveElement.forEach((btn) => {
        btn.addEventListener('click', async function(event) {  
            try{
                const id = btn.getAttribute('data-id'); 
                const counter = document.querySelector("#counter"+id);
                const btn_cancel = document.querySelector("#cancel"+id);

                btn_cancel.style.display = 'block';
                
                let count = 3;
                counter.textContent = `Você tem ${count} segundos para cancelar essa ação`;    
                const interval = setInterval(() => {
                    counter.textContent = `Você tem ${count-=1} segundos para cancelar essa ação`;    
                    if(count === 0){
                        removeInterval(id);
                        save(id, counter);
                    }
                }, 1000);
                addInterval(id, interval);

                // console.log(data);
            }catch(error){
                console.log(error);
            }
        })
    })
});

async function save(id, counter){
    const messageUpdated = document.querySelector("#message"+id);
    const inputName = document.querySelector("#input"+id);

    const {data} = await http.put('/user/update',{
            id,
            firstName:inputName.value
        });

    if(data === 'updated'){
        messageUpdated.textContent = 'Atualizado com sucesso';
        hideAndShowLiElement("#editLi"+id,"#listLi"+id,"#name"+id,"#input"+id);
        counter.textContent = '';
        setTimeout(() => {
            messageUpdated.textContent = '';
            const isBack = true;
            hideAndShowLiElement("#editLi"+id,"#listLi"+id,"#name"+id,"#input"+id, isBack);
        }, 3000);
    }
}


