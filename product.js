const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const product = button.closest('.product-section');
        const productName = product.querySelector('.product-info h1').innerText;
        const productPrice = product.querySelector('.price span').innerText;

        addToCart(productName, productPrice);
    });
});

function addToCart(productName, productPrice) {
    const cart = document.querySelector('.cart');
    const cartItems = cart.querySelector('.cart-items');

    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productNameElement = document.createElement('span');
    productNameElement.innerText = productName;

    const productPriceElement = document.createElement('span');
    productPriceElement.innerText = productPrice;

    productInfo.appendChild(productNameElement);
    productInfo.appendChild(productPriceElement);

    const removeButton = document.createElement('button');
    removeButton.classList.add('remove-button');
    removeButton.innerText = 'Remove';

    removeButton.addEventListener('click', () => {
        cartItem.remove();
    });

    cartItem.appendChild(productInfo);
    cartItem.appendChild(removeButton);

    cartItems.appendChild(cartItem);
}