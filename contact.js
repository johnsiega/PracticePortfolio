 // Contact configuration - Easy to customize
        const contactConfig = {
            email: "cedie@siegaworld.com", // Change to your actual email
            location: "Mandaluyong City, Metro Manila, Philippines",
            availability: "Freelance Projects, Collaborations, Full-time Opportunities",
            socialLinks: {
                github: "https://github.com/johnsiega", // Add your GitHub
                linkedin: "https://linkedin.com/in/yourusername", // Add your LinkedIn
                twitter: "https://twitter.com/yourusername", // Add your Twitter
                discord: "https://discord.gg/yourinvite" // Add your Discord
            }
        };

        // Update contact information
        function updateContactInfo() {
            document.getElementById('contact-email').textContent = contactConfig.email;
            document.getElementById('contact-email').href = `mailto:${contactConfig.email}`;
            document.getElementById('contact-location').textContent = contactConfig.location;
            document.getElementById('contact-availability').textContent = contactConfig.availability;
            
            // Update social links
            document.getElementById('github-link').href = contactConfig.socialLinks.github;
            document.getElementById('linkedin-link').href = contactConfig.socialLinks.linkedin;
            document.getElementById('twitter-link').href = contactConfig.socialLinks.twitter;
            document.getElementById('discord-link').href = contactConfig.socialLinks.discord;
        }

        // Handle form submission
        function handleFormSubmit(event) {
            event.preventDefault();
            
            const submitBtn = document.getElementById('submit-btn');
            const statusMessage = document.getElementById('status-message');
            const form = document.getElementById('contact-form');
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // Show loading state
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
            
            // Simulate form submission (you'll replace this with actual backend logic)
            setTimeout(() => {
                // For now, just show success message and log data
                console.log('Form submitted:', formData);
                
                // Show success message
                statusMessage.className = 'status-message status-success';
                statusMessage.textContent = 'Message sent successfully! I\'ll get back to you soon. 🚀';
                statusMessage.style.display = 'block';
                
                // Reset form
                form.reset();
                
                // Reset button
                submitBtn.disabled = false;
                submitBtn.textContent = 'Send Message 🚀';
                
                // Hide status message after 5 seconds
                setTimeout(() => {
                    statusMessage.style.display = 'none';
                }, 5000);
                
            }, 2000); // 2 second delay to simulate network request
            
            /*
            IMPLEMENTATION NOTE FOR MVC/CRUD:
            
            Replace the setTimeout above with actual fetch request:
            
            fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    // Show success message
                } else {
                    // Show error message
                }
            })
            .catch(error => {
                // Handle error
            });
            */
        }

        // Initialize page
        document.addEventListener('DOMContentLoaded', function() {
            updateContactInfo();
            
            // Add form submit listener
            document.getElementById('contact-form').addEventListener('submit', handleFormSubmit);
            
            // Set active nav item
            const currentPage = window.location.pathname.split("/").pop();
            const navItems = document.querySelectorAll('.nav-item');
            
            navItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href') === currentPage) {
                    item.classList.add('active');
                }
            });
        });

        /*
        CUSTOMIZATION GUIDE:
        
        1. Update contactConfig object with your real information
        2. Replace social media links with your actual profiles  
        3. For MVC/CRUD backend integration:
           - Replace the setTimeout in handleFormSubmit with actual API call
           - Create backend endpoint to handle form submissions
           - Add validation and error handling
           - Store messages in database for admin review
        
        4. Optional enhancements:
           - Add email notification when form is submitted
           - Add admin panel to view/manage contact messages
           - Add spam protection (captcha/rate limiting)
           - Add file upload functionality for project briefs
        */
