// Add event listeners to navigation links
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        // Add functionality to navigation links here
    });
});

// Add product cards dynamically
const productSection = document.querySelector('section');

// Sample product data
const products = [
    {
        name: 'Product 1',
        price: 10.99,
        image: 'product1.jpg',
    },
    {
        name: 'Product 2',
        price: 9.99,
        image: 'product2.jpg',
    },
    // Add more products here
];

products.forEach((product) => {
    const productCard = document.createElement('div');
    productCard.innerHTML = `
        <h3>${product.name}</h3>
        <p>Price: $${product.price}</p>
        <img src="${product.image}" alt="${product.name}">
    `;
    productSection.appendChild(productCard);
});