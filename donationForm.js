function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const amount = document.getElementById('amount').value;

    // Basic validation
    if (name.trim() === '' || email.trim() === '' || amount <= 0) {
        alert('Please fill in all fields with valid information.');
        return;
    }

    // Simulate a server request (you would replace this with your actual donation process)
    setTimeout(() => {
        // Display success message
        document.getElementById('donationForm').classList.add('hidden');
        document.getElementById('successMessage').classList.remove('hidden');
    }, 1000);
}
