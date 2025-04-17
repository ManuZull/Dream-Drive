function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const fullName = document.getElementById('full-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const address = document.getElementById('delivery-address').value.trim();
    const shippingMethod = document.getElementById('shipping-method').value;
    const cardInfo = document.getElementById('card-info').value.trim();
    const expirationDate = document.getElementById('expiration-date').value.trim();
    const securityCode = document.getElementById('security-code').value.trim();
    const paymentMethod = document.getElementById('payment-method').value;

    // Validate the form fields
    if (!fullName || !email || !address || !shippingMethod || !cardInfo || !expirationDate || !securityCode || !paymentMethod) {
        alert('Please fill out all fields before submitting.');
        return false; // Prevent navigation
    }

    // If all fields are filled, proceed to the success alert and redirection
    alert('Success! Your purchase has been completed.');
    window.location.href = '../sites/sended.html'; // Adjust path as needed
}
