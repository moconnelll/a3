document.addEventListener('DOMContentLoaded', () => {
    // get product data-IDs from JS localStorage
    // https://www.w3schools.com/jsref/prop_win_localstorage.asp
    const productID = localStorage.getItem('thisProductID');
    if (!productID) {
        // debugging, can remove
        console.error('Product ID not found');
        return;
    }

    // find product in product array of objects (products.js)
    // use .find() array method to find product in products.js with matching ID nums
    const product = products.find(p => p.id === parseInt(productID));
    if (!product) {
        // debugging, can remove
        console.error('Product not found');
        return;
    }

    // using querySelectors to dynamically populate the product page
    // based on the product clicked on home page (as above)
    document.querySelector('.product-title').textContent = product.name;
    document.querySelector('.product-author').textContent = product.authors;
    // appending $ to start of price (to format an int as a price!)
    document.querySelector('.product-price').textContent = `${product.price}`;
    document.querySelector('.product-image img').src = product.image;
    console.log('Image path:', product.image);
    document.querySelector('.product-image img').alt = product.name;
    document.querySelector('.product-description').textContent = product.description;
}
);