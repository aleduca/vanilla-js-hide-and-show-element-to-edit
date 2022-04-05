import getUsers from './users';

const usersElement = document.querySelector('#users');

async function render(){
    try{    
    let usersHTML = '<ul>';
        const users = await getUsers();
        users.forEach((user, index) => {
            usersHTML+= `
               
                <span id="message${user.id}"></span>
                <li id="listLi${user.id}">
                    <span id="name${user.id}">${user.firstName}</span>
                    <button class="btn btn-danger btn-sm" id="btn_remove_element" data-id="${user.id}"><i class="fa-solid fa-trash"></i> Remove</button>
                    <button class="btn btn-success btn-sm" id="btn_edit_element" data-id="${user.id}"><i class="fa-solid fa-pen-to-square"></i> Edit</button>
                </li>

                <li id="editLi${user.id}" style="display:none;">
                    <input id="input${user.id}" value="${user.firstName}" />
                    <button class="btn btn-info btn-sm" id="btn_back" data-id="${user.id}"><i class="fa-solid fa-arrow-left-long"></i> Back</button>
                    <button class="btn btn-success btn-sm" id="btn_save" data-id="${user.id}"><i class="fa-solid fa-check"></i> Save</button>
                </li>
            `
        })
        usersHTML+= '</ul>';

        const event = new CustomEvent('loaded');
        usersElement.innerHTML = usersHTML;
        usersElement.dispatchEvent(event);
    }catch(error){
        console.log(error);
    }
}


render();