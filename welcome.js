// Welcome message handler - gets firstname from URL parameters
        document.addEventListener("DOMContentLoaded", () => {
            const welcomeMessage = document.getElementById("welcome-message");
            const urlParams = new URLSearchParams(window.location.search);
            const firstname = urlParams.get('firstname');

            // Display personalized welcome message if firstname exists
            if (welcomeMessage && firstname) {
                welcomeMessage.innerText = `Welcome, ${firstname}!`;
            } else if (welcomeMessage) {
                welcomeMessage.innerText = "Welcome to The World of Siega!"; // Default message
            }
        });

        // Add some interactivity - highlight active nav item
        document.addEventListener("DOMContentLoaded", () => {
            const currentPage = window.location.pathname.split("/").pop();
            const navItems = document.querySelectorAll('.nav-item');
            
            navItems.forEach(item => {
                // Remove active class from all items first
                item.classList.remove('active');
                // Add active class to current page
                if (item.getAttribute('href') === currentPage) {
                    item.classList.add('active');
                }
            });
        });
