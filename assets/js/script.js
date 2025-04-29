// "Hire Me" button functionality
document.getElementById("hireMeButton").addEventListener("click", function () {
  window.location.href = "mailto:aditya.jagtap@example.com?subject=Hiring Inquiry&body=Hello Aditya, I would like to discuss a project!";
});

// Attach form validation and submission (NEW)
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); 

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const successMessage = document.getElementById("successMessage");

    if (!name || !email || !message) {
        alert("Please fill out all fields.");
        return;
    }

    const mailtoLink = `mailto:aditya.jagtap@example.com?subject=Contact From ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AFrom: ${encodeURIComponent(email)}`;

    window.location.href = mailtoLink;

    successMessage.style.display = "block";
});
