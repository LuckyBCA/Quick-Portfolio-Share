// Portfolio JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('active');
        });
    }
    
    // Back to Top Button
    const backToTopBtn = document.getElementById('backToTop');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('show');
                backToTopBtn.classList.remove('hidden');
            } else {
                backToTopBtn.classList.remove('show');
                backToTopBtn.classList.add('hidden');
            }
        });
        
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.offsetTop;
                const offsetPosition = elementPosition - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (mobileMenu) {
                    mobileMenu.classList.add('hidden');
                    mobileMenu.classList.remove('active');
                }
            }
        });
    });
    
    // Animate progress bars when they come into view
    const progressBars = document.querySelectorAll('.progress-fill');
    
    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.style.width;
                entry.target.style.width = '0';
                setTimeout(() => {
                    entry.target.style.width = width;
                }, 300);
            }
        });
    }, { threshold: 0.5 });
    
    progressBars.forEach(bar => {
        progressObserver.observe(bar);
    });
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                navbar.style.backdropFilter = 'blur(10px)';
            } else {
                navbar.style.backgroundColor = '#ffffff';
                navbar.style.backdropFilter = 'none';
            }
        });
    }
    
    // Active navigation link highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    const highlightNavLink = () => {
        let current = '';
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                current = sectionId;
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    };
    
    window.addEventListener('scroll', highlightNavLink);
    
    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Basic validation
            if (!name || !email || !subject || !message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }
            
            // Simulate form submission
            showNotification('Message sent successfully!', 'success');
            contactForm.reset();
        });
    }
    
    // Scroll animations for cards
    const animateOnScroll = () => {
        const cards = document.querySelectorAll('.service-card, .tool-card, .certification-card, .package-card');
        
        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });
        
        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            cardObserver.observe(card);
        });
    };
    
    animateOnScroll();
    
    // Typing animation for hero text
    const typeWriter = (element, texts, speed = 100) => {
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        
        const type = () => {
            const currentText = texts[textIndex];
            
            if (isDeleting) {
                element.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                element.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }
            
            let typeSpeed = speed;
            
            if (isDeleting) {
                typeSpeed = speed / 2;
            }
            
            if (!isDeleting && charIndex === currentText.length) {
                typeSpeed = 2000; // Pause at end
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                typeSpeed = 500; // Pause before next text
            }
            
            setTimeout(type, typeSpeed);
        };
        
        type();
    };
    
    // Initialize typing animation if element exists
    const typingElement = document.getElementById('typingText');
    if (typingElement) {
        const texts = ['Full Stack Developer', 'AI Specialist', 'UI/UX Designer', 'Problem Solver'];
        typeWriter(typingElement, texts);
    }
});

// Utility functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(300px);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    // Set background color based on type
    switch (type) {
        case 'success':
            notification.style.backgroundColor = '#16a34a';
            break;
        case 'error':
            notification.style.backgroundColor = '#dc2626';
            break;
        default:
            notification.style.backgroundColor = '#2563eb';
    }
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(300px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Function to render tools section
function renderTools() {
    const toolsContainer = document.getElementById('toolsContainer');
    if (!toolsContainer) return;
    
    // Check if portfolioManager is available
    if (typeof portfolioManager === 'undefined') {
        console.warn('PortfolioManager not loaded, using fallback data');
        return;
    }
    
    const tools = portfolioManager.getTools();
    toolsContainer.innerHTML = tools.map(tool => `
        <div class="tool-card">
            <div class="flex items-center mb-4">
                <img src="assets/img/logos/${tool.logo}" alt="${tool.name}" class="w-12 h-12 mr-4">
                <div class="flex-1">
                    <h3 class="font-bold">${tool.name}</h3>
                    <p class="text-xs text-gray-500">${tool.category}</p>
                </div>
            </div>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${tool.proficiency}%"></div>
            </div>
            <div class="mt-2 text-right text-sm font-medium">${tool.proficiency}%</div>
        </div>
    `).join('');
}

// Function to render certifications section
function renderCertifications() {
    const certificationsContainer = document.getElementById('certificationsContainer');
    if (!certificationsContainer) return;
    
    // Check if portfolioManager is available
    if (typeof portfolioManager === 'undefined') {
        console.warn('PortfolioManager not loaded, using fallback data');
        return;
    }
    
    const certifications = portfolioManager.getCertifications();
    certificationsContainer.innerHTML = certifications.map(cert => `
        <div class="certification-card text-center">
            <img src="assets/img/logos/${cert.logo}" alt="${cert.issuer}" class="certification-logo mx-auto">
            <h3 class="certification-title">${cert.title}</h3>
            <p class="certification-issuer">${cert.issuer}</p>
            <p class="certification-date">${cert.date}</p>
            <p class="text-sm text-gray-600 mt-2">${cert.description}</p>
            ${cert.credentialId ? `<p class="text-xs text-gray-500 mt-1">ID: ${cert.credentialId}</p>` : ''}
            ${cert.verificationUrl && cert.verificationUrl !== '#' ? `
                <a href="${cert.verificationUrl}" target="_blank" class="inline-block mt-2 text-primary hover:text-blue-700 text-sm">
                    <i class="fas fa-external-link-alt mr-1"></i> Verify
                </a>
            ` : ''}
        </div>
    `).join('');
}

// Function to add new tools (for backward compatibility)
function addTool(tool) {
    if (typeof portfolioManager !== 'undefined') {
        portfolioManager.addTool(tool);
        renderTools();
    }
}

// Function to add new certification (for backward compatibility)
function addCertification(certification) {
    if (typeof portfolioManager !== 'undefined') {
        portfolioManager.addCertification(certification);
        renderCertifications();
    }
}
