const usersElement = document.querySelector('#users');

usersElement.addEventListener('loaded', () => {
    const btnsAddToCart = document.querySelectorAll('#btn_add_to_cart');
    btnsAddToCart.forEach((btn) => {
        btn.addEventListener('click', (event) => {
            console.log(btn.getAttribute('data-id'));
        })
    })
});
