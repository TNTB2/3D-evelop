document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const formContainer = document.getElementById("form-container");
    const flap = document.getElementById("envelope-flap");
    const thankYou = document.getElementById("thank-you");
    const envelope = document.querySelector('.envelope');  // Select the envelope

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        envelope.style.zIndex = "3"; // or whatever value you need
        // Trigger flap close animation
        flap.classList.add("closed");

        // Move the form and envelope off screen
        formContainer.style.transform = "translateY(-200%)";
        formContainer.style.opacity = "0";
        envelope.style.transform = "translateY(-200%)"; // Move the envelope with the form

        // Show thank you envelope after delay
        setTimeout(() => {
            envelope.style.opacity = "0";;
        }, 300);

        // Show thank you envelope after delay
        setTimeout(() => {
            thankYou.classList.add("show");
        }, 1000);
    });
});
