// Load the contact form HTML into each placeholder
fetch('../pages/contact-form.html')
    .then(res => res.text())
    .then(html => {
        const placeholders = document.querySelectorAll('.contact-form-placeholder');

        placeholders.forEach((placeholder, index) => {
            const tempWrapper = document.createElement('div');
            tempWrapper.innerHTML = html;

            // Assign unique classes to avoid conflicts
            const form = tempWrapper.querySelector('form');
            const formContainer = tempWrapper.querySelector('.contact-form-container');
            const envelope = tempWrapper.querySelector('.envelope');
            const flap = tempWrapper.querySelector('.envelope-flap');
            const thankYou = tempWrapper.querySelector('.thank-you-message');

            // Ensure the logic works per instance
            form.addEventListener('submit', function (e) {
                e.preventDefault();

                // Animate flap and envelope
                envelope.style.zIndex = "3";
                flap.classList.add("closed");

                // Slide form away
                formContainer.style.transform = "translateY(-200%)";
                formContainer.style.opacity = "0";
                envelope.style.transform = "translateY(-200%)";

                // Hide envelope after animation
                setTimeout(() => {
                    envelope.style.opacity = "0";
                }, 300);

                // Show thank-you
                setTimeout(() => {
                    thankYou.classList.add("show");
                }, 1000);
            });

            // Clear placeholder and insert this form
            placeholder.innerHTML = '';
            placeholder.appendChild(tempWrapper);
        });
    })
    .catch(err => console.error("Failed to load contact form:", err));
