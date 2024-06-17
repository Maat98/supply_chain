document.addEventListener('DOMContentLoaded', function () {
    const orderForm = document.getElementById('order-form');
    const trackingForm = document.getElementById('tracking-form');
    const orderResult = document.getElementById('order-result');
    const trackingResult = document.getElementById('tracking-result');

    orderForm.addEventListener('submit', function (event) {
        event.preventDefault();
        
        const orderNumber = document.getElementById('order-number').value;
        const orderName = document.getElementById('order-name').value;
        const orderQuantity = document.getElementById('order-quantity(kgs)').value;
        const customerName = document.getElementById('customer-name').value;
        const phoneNumber = document.getElementById('phone-number').value;
        const deliveryLocation = document.getElementById('delivery-location').value;
        const orderDate = document.getElementById('order-date').value;
        
        const orderData = {
            orderNumber,
            orderName,
            orderQuantity,
            customerName,
            phoneNumber,
            deliveryLocation,
            orderDate
        };

        // Simulate saving order data to server
        setTimeout(() => {
            orderResult.innerHTML = `<p>Order placed successfully!</p>
                                     <p>Order Number: ${orderData.orderNumber}</p>
                                     <p>Order Name: ${orderData.orderName}</p>
                                     <p>Order Quantity: ${orderData.orderQuantity} kgs</p>
                                     <p>Customer Name: ${orderData.customerName}</p>
                                     <p>Phone Number: ${orderData.phoneNumber}</p>
                                     <p>Delivery Location: ${orderData.deliveryLocation}</p>
                                     <p>Order Date: ${orderData.orderDate}</p>`;
        }, 500);
    });

    trackingForm.addEventListener('submit', function (event) {
        event.preventDefault();
        
        const productId = document.getElementById('product-id').value;
        const productName = document.getElementById('product-name').value;
        
        // Simulate retrieving tracking data from server
        setTimeout(() => {
            trackingResult.innerHTML = `<p>Tracking Information:</p>
                                        <p>Product ID: ${productId}</p>
                                        <p>Product Name: ${productName}</p>
                                        <p>Status: In Transit</p>
                                        <p>Estimated Delivery: 3 days</p>`;
        }, 500);
    });

    const contactForm = document.querySelector('#contact form');
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Simulate sending contact message to server
        setTimeout(() => {
            alert(`Thank you for reaching out, ${name}! We have received your message and will get back to you at ${email} shortly.`);
            contactForm.reset();
        }, 500);
    });
});
