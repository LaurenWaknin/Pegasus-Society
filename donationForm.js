function isValidEmail(email) {
    // Simple email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const amount = document.getElementById('amount').value;

    // Basic validation
    if (name.trim() === '') {
        alert('Please enter your name.');
        return;
    }

    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (amount <= 0 || isNaN(amount)) {
        alert('Please enter a valid donation amount.');
        return;
    }

    // Simulate a server request (you would replace this with your actual donation process)
    setTimeout(() => {
        // Display success message
        document.getElementById('donationForm').classList.add('hidden');
        document.getElementById('successMessage').classList.remove('hidden');
    }, 1000);
}
