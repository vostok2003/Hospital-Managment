// Function to validate name
function validateName() {
    var nameInput = document.getElementById('name');
    var nameValue = nameInput.value.trim();
    if (nameValue === '') {
        alert('Please enter your name');
        nameInput.focus();
        return false;
    }
    return true;
}

// Function to validate phone number
function validatePhone() {
    var phoneInput = document.getElementById('phone');
    var phoneValue = phoneInput.value.trim();
    var phoneRegex = /^\d{10}$/; // Assuming phone number format is 10 digits
    if (!phoneRegex.test(phoneValue)) {
        alert('Please enter a valid phone number');
        phoneInput.focus();
        return false;
    }
    return true;
}

// Function to validate email
function validateEmail() {
    var emailInput = document.getElementById('email');
    var emailValue = emailInput.value.trim();
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation regex
    if (!emailRegex.test(emailValue)) {
        alert('Please enter a valid email address');
        emailInput.focus();
        return false;
    }
    return true;
}

// Function to validate the whole form
function validateForm() {
    return validateName() && validatePhone() && validateEmail();
}

// Attach validation functions to form submission
document.querySelector('form').addEventListener('submit', function(event) {
    if (!validateForm()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});
