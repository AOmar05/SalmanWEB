// Function to display products
function displayProducts(products) {
    const productList = document.getElementById('products');
    productList.innerHTML = '';

    if (products.length === 0) {
        productList.innerHTML = '<p>No products found.</p>';
        return;
    }

    products.forEach(product => {
        const productItem = document.createElement('li');
        productItem.innerHTML = `
            <div class="product-details">
                <strong>${product.name}</strong><br>
                Product Number: ${product.number}<br>
                Description: ${product.description}<br>
                <strong class="price">Price: $${product.price}</strong><br>
                Contact: ${product.contact}
            </div>
        `;
        productList.appendChild(productItem);
    });
}

// Function to handle the search
function searchProducts() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const allProducts = JSON.parse(localStorage.getItem('products')) || [];
    
    // Filter products based on the query
    const filteredProducts = allProducts.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.number.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query) ||
        product.contact.toLowerCase().includes(query) ||
        product.price.toLowerCase().includes(query)  // Searching through price as well
    );

    displayProducts(filteredProducts);
}

// Call displayProducts on page load
window.onload = () => {
    const allProducts = JSON.parse(localStorage.getItem('products')) || [];
    displayProducts(allProducts);

    // Add event listener to search input
    document.getElementById('search-input').addEventListener('input', searchProducts);
};
