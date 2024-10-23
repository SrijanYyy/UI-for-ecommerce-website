const minusButton = document.querySelector('.minus');
const plusButton = document.querySelector('.plus');
const quantityInput = document.querySelector('.quantity input[type="text"]'); // Corrected selector

minusButton.addEventListener('click', () => {
    let currentValue = parseInt(quantityInput.value);
    if (!isNaN(currentValue) && currentValue > 1) { // Check if currentValue is a valid number
        quantityInput.value = currentValue - 1;
    }
});

plusButton.addEventListener('click', () => {
    let currentValue = parseInt(quantityInput.value);
    if (!isNaN(currentValue)) { // Check if currentValue is a valid number
        quantityInput.value = currentValue + 1;
    }
});


