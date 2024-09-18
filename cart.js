// script.js

// Get the cart items container
const cartItemsContainer = document.getElementById('cart-items');

// Get the total element
const totalElement = document.getElementById('total');

// Add event listeners to the cart items
cartItemsContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('quantity-btn')) {
    // Update the quantity and subtotal when the user clicks the quantity buttons
    const quantityInput = e.target.parentNode.querySelector('input');
    const quantity = parseInt(quantityInput.value);
    const price = parseFloat(e.target.parentNode.querySelector('.price').textContent);
    const subtotal = quantity * price;
    e.target.parentNode.querySelector('.subtotal').textContent = `$${subtotal.toFixed(2)}`;
    updateTotal();
  } else if (e.target.classList.contains('remove-btn')) {
    // Remove the item from the cart when the user clicks the remove button
    const cartItem = e.target.parentNode.parentNode;
    cartItem.remove();
    updateTotal();
  }
});

function updateTotal() {
  const cartItems = cartItemsContainer.querySelectorAll('.cart-item');
  let total = 0;
  cartItems.forEach((cartItem) => {
    const quantity = parseInt(cartItem.querySelector('input').value);
    const price = parseFloat(cartItem.querySelector('.price').textContent);
    total += quantity * price;
  });
  totalElement.textContent = `$${total.toFixed(2)}`;
}