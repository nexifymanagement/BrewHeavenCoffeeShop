
        // Mobile Menu Toggle
        const menuToggle = document.getElementById('mobile-menu');
        const navLinks = document.getElementById('nav-links');
        
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        
        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
        
        // Menu Category Navigation
        const categoryButtons = document.querySelectorAll('.menu-categories button');
        
        categoryButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Get the category to show
                const category = this.getAttribute('data-category');
                
                // Scroll to the selected section
                document.getElementById(category).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
        // Add shadow to header on scroll
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 50) {
                header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.boxShadow = 'none';
            }
        });
  