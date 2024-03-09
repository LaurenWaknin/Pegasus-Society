  function isValidEmail(email) {
    // Simple email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function submitForm() {
    // Simple form validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Basic validation
    if (name.trim() === '') {
        alert('Please enter your name.');
        return;
    }

    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (subject.trim() === '') {
        alert('Please enter your message.');
        return;
    }

    if (message.trim() === '') {
        alert('Please enter your message.');
        return;
    }

    // Simulate a server request (you would replace this with your actual contact form submission)
    setTimeout(() => {
        // Display success message
        document.getElementById('contactForm').classList.add('hidden');
        document.getElementById('successMessage').classList.remove('hidden');
    }, 1000);
}
