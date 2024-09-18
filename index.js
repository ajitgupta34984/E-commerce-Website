document.addEventListener('DOMContentLoaded', () => {
    const cart = [];

    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const product = event.target.closest('.product');
            const productId = product.getAttribute('data-id');
            const productName = product.getAttribute('data-name');
            const productPrice = product.getAttribute('data-price');

            const cartItem = {
                id: productId,
                name: productName,
                price: productPrice,
                quantity: 1
            };

            const existingItem = cart.find(item => item.id === productId);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push(cartItem);
            }

            console.log('Cart:', cart);
            alert(`${productName} has been added to the cart.`);
        });
    });
});
