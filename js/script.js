const hireBtn = document.getElementById("hireBtn");

hireBtn.addEventListener("click", () => {
    alert("Thank you for your interest!");
});
const form = document.getElementById('contactForm');

form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevents the page from refreshing

    // Hide the form and show a message
    form.innerHTML = `<h3>Thanks for reaching out!</h3>
                      <p>We'll get back to you within 24 hours.</p>`;
});