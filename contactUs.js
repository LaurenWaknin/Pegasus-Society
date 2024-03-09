  function submitForm() {
    // Simple form validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !subject || !message) {
      alert("Please fill in all fields");
      return;
    }

    // Assuming a successful submission for the sake of this example
    document.getElementById('contactForm').style.display = 'none';
    document.getElementById('confirmationMessage').style.display = 'block';
  }