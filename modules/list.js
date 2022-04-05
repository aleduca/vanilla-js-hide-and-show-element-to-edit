import getUsers from './users';

const usersElement = document.querySelector('#users');

async function render(){
    try{    
    let usersHTML = '<ul>';
        const users = await getUsers();
        users.forEach((user, index) => {
            usersHTML+= `
                <li id="listLi${user.id}">
                    <span id="name${user.id}">${user.firstName}</span>
                    <button id="btn_add_to_cart" data-id="${user.id}">Add to cart</button>
                    <button id="btn_remove_element" data-id="${index}">Remove</button>
                    <button id="btn_edit_element" data-id="${user.id}">Edit</button>
                </li>

                <span id="message${user.id}"></span>
                <li id="editLi${user.id}" style="display:none;">
                    <input id="input${user.id}" value="${user.firstName}" />
                    <button id="btn_back" data-id="${user.id}">Back</button>
                    <button id="btn_save" data-id="${user.id}">Save</button>
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