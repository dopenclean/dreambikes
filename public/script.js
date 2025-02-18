document.addEventListener("DOMContentLoaded", function () {
    const text = "by Mahdi";
    const typingText = document.getElementById("typing-text");
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            typingText.textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, 150);
        } else {
            setTimeout(() => {
                eraseEffect();
            }, 2000);
        }
    }

    function eraseEffect() {
        if (index > 0) {
            typingText.textContent = text.substring(0, index - 1);
            index--;
            setTimeout(eraseEffect, 100);
        } else {
            setTimeout(typeEffect, 500);
        }
    }

    setTimeout(typeEffect, 500);
});

document.addEventListener("DOMContentLoaded", function () {
    const bikeInfoBox = document.getElementById("bike-info");

    if (bikeInfoBox) {
        bikeInfoBox.style.display = "block";

        window.history.pushState(null, "", "/submit");

        document.addEventListener("click", function (event) {
            if (!bikeInfoBox.contains(event.target)) {
                bikeInfoBox.style.animation = "fadeOut 0.3s ease-in-out";
                
                setTimeout(() => {
                    bikeInfoBox.style.display = "none";
                    window.history.pushState(null, "", "/"); // Reset URL to /
                }, 300);
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("currentYear").textContent = new Date().getFullYear();
});

// Loader animation
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".image-button");
    const loader = document.getElementById("loader");
    const body = document.body; // Select body instead of html

    buttons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent instant form submission

            loader.style.display = "block";
            body.classList.add("dimmed-background"); // Apply background dimming effect
            
            // Small delay before form submission
            setTimeout(() => {
                event.target.closest("form").submit();
            }, 300); // Prevent flashing effect
        });
    });

    // Restore background when page loads again
    window.addEventListener("pageshow", function () {
        loader.style.display = "none";
        body.classList.remove("dimmed-background");
    });
});

// buy me coffee
document.addEventListener("DOMContentLoaded", function () {
    const coffeeBtn = document.getElementById("coffee-btn");
    const coffeeMenu = document.querySelector(".coffee-menu");

    coffeeBtn.addEventListener("click", function () {
        coffeeMenu.classList.toggle("active");
    });
});



