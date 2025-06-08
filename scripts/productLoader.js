// after pageLoader.js gets product ID based on the product clicked on home page,
// productLoader.js will dynamically populate the product details 
// onto the product page

document.addEventListener('DOMContentLoaded', () => {
    const products = document.querySelectorAll('.main-product');
    products.forEach(product => {
        product.addEventListener('click', () => {
            const productId = product.getAttribute('data-id');
            localStorage.setItem('thisProductID', productId);
            // redirect to product page
            window.location.href = 'product.html'; // Redirect to product page
        });
    });
});