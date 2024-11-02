// Hardcoded password (for demo purposes)
const correctPassword = '12345';

// Handle login
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const enteredPassword = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (enteredPassword === correctPassword) {
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('catalog-section').style.display = 'block';
    } else {
        errorMessage.textContent = 'Incorrect password. Please try again.';
        errorMessage.style.display = 'block';
    }
});

// Function to save product in localStorage
function saveProduct(name, number, description, price, contact) {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    products.push({ name, number, description, price, contact });
    localStorage.setItem('products', JSON.stringify(products));
}

// Handle product form submission
document.getElementById('product-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('product-name').value;
    const number = document.getElementById('product-number').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;
    const contact = document.getElementById('contact').value;

    if (name && number && price) {
        saveProduct(name, number, description, price, contact);

        const productList = document.getElementById('products');
        const productItem = document.createElement('li');

        productItem.innerHTML = `
            <div class="product-details">
                <strong>${name}</strong><br>
                Product Number: ${number}<br>
                Description: ${description}<br>
                <strong class="price">Price: $${price}</strong><br>
                Contact: ${contact}
            </div>
            <div class="actions">
                <button onclick="deleteProduct(this)">Delete</button>
            </div>
        `;

        productList.appendChild(productItem);
        this.reset();
    } else {
        alert('Product Name, Product Number, and Price are required.');
    }
});
