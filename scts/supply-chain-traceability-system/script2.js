// Dummy data for demonstration purposes
const blockchainData = {
    "12345": "Product ID: 12345\nOrigin: Farm A\nTransported via: Truck B\nStored at: Warehouse C\nCurrently available at: Store D",
    "67890": "Product ID: 67890\nOrigin: Farm X\nTransported via: Truck Y\nStored at: Warehouse Z\nCurrently available at: Store W"
};

// Event listener for form submission
document.getElementById('tracking-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get the product ID from the input field
    const productId = document.getElementById('product-id').value;
    const productName = document.getElementById('product-name').value;

    // Display the tracking result based on the entered product ID
    const resultDiv = document.getElementById('tracking-result');
    if (blockchainData[productId]) {
        resultDiv.textContent = blockchainData[productId];
        resultDiv.style.display = 'block';
    } else {
        resultDiv.textContent = "No data found for this product ID.";
        resultDiv.style.display = 'block';
    }
});

// Event listener for order form submission
document.getElementById('order-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get order details from the input fields
    const orderNumber = document.getElementById('order-number').value;
    const orderName = document.getElementById('order-name').value;
    const customerName = document.getElementById('customer-name').value;
    const orderDate = document.getElementById('order-date').value;

    // Simulate order processing (in a real scenario, this would involve server-side processing)
    const orderResultDiv = document.getElementById('order-result');
    orderResultDiv.textContent = `Order placed successfully! \nOrder Number: ${orderNumber}\nCustomer Name: ${customerName}\nOrder Date: ${orderDate}`;
    orderResultDiv.style.display = 'block';
});
