const books = [
    {
        id:1,
        name:'Book1'
    },
    {
        id:2,
        name:'Book2'
    },
    {
        id:3,
        name:'Book3'
    },
    {
        id:4,
        name:'Book4'
    }
]

const booksElement = document.querySelector('#books');

function render(){
    let booksHTML = '<ul>';
    books.forEach((book, index) => {
        booksHTML+= `
            <li id="listLi${book.id}">
                <span id="name${book.id}">${book.name}</span>
                <button id="btn_add_to_cart" data-id="${book.id}">Add to cart</button>
                <button id="btn_remove_element" data-id="${index}">Remove</button>
                <button id="btn_edit_element" data-id="${book.id}">Edit</button>
            </li>

            <li id="editLi${book.id}" style="display:none;">
                <input id="input${book.id}" value="${book.name}" />
                <button id="btn_back" data-id="${book.id}">Back</button>
                <button id="btn_save" data-id="${book.id}">Save</button>
            </li>
        `
    })
    booksHTML+= '</ul>';

    booksElement.innerHTML = booksHTML;
}


render();