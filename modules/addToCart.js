const btnsAddToCart = document.querySelectorAll('#btn_add_to_cart');

btnsAddToCart.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        console.log(btn.getAttribute('data-id'));
    })
})
