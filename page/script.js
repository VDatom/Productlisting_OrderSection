const moq = 1000; // Minimum Order Quantity
const orderMultiple = 200; // Order Multiple
const stock = 5000; // Available Stock
const quantityInput = document.getElementById('quantity-input');
const errorMessage = document.getElementById('error-message');
const buyNowBtn = document.getElementById('buy-now-btn');

// Pre-fill input with MOQ
quantityInput.value = moq;

// Initial validation on page load
validateQuantity(parseInt(quantityInput.value, 10));

// Event listener for quantity input
quantityInput.addEventListener('input', () => {
  const enteredQuantity = parseInt(quantityInput.value, 10);
  validateQuantity(enteredQuantity);
});

function validateQuantity(enteredQuantity) {
  if (isNaN(enteredQuantity) || enteredQuantity <= 0) {
    // Invalid input
    errorMessage.textContent = 'Please enter a valid quantity.';
    buyNowBtn.disabled = true;
  } else if (enteredQuantity < moq) {
    // Quantity less than MOQ
    errorMessage.textContent = `Minimum ${moq} quantity required.`;
    buyNowBtn.disabled = true;
  } else if ((enteredQuantity - moq) % orderMultiple !== 0) {
    // Not a multiple of orderMultiple
    errorMessage.textContent = `Quantity must be a multiple of ${orderMultiple} after MOQ (${moq}).`;
    buyNowBtn.disabled = true;
  } else if (enteredQuantity > stock) {
    // Exceeds available stock
    errorMessage.textContent = `If you want more than available (${stock}), please request a quote or contact sales.`;
    buyNowBtn.disabled = true;
  } else {
    // Valid input
    errorMessage.textContent = '';
    buyNowBtn.disabled = false;
  }
}
