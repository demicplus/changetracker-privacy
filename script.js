// ChangeTracker Privacy Policy - Interactive Features

// Back to Top Button
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Highlight current section in TOC
const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
};

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.toc a');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => {
                link.style.fontWeight = '500';
                link.style.color = 'var(--primary-dark)';
                if (link.getAttribute('href') === `#${entry.target.id}`) {
                    link.style.fontWeight = '700';
                    link.style.color = 'var(--primary-color)';
                }
            });
        }
    });
}, observerOptions);

sections.forEach(section => observer.observe(section));

// Copy email on click
document.querySelectorAll('a[href^="mailto:"]').forEach(emailLink => {
    emailLink.addEventListener('click', (e) => {
        const email = emailLink.textContent;
        if (navigator.clipboard) {
            navigator.clipboard.writeText(email).then(() => {
                // Show copied notification
                const originalText = emailLink.textContent;
                emailLink.textContent = '✓ Copied!';
                emailLink.style.color = 'var(--success)';
                
                setTimeout(() => {
                    emailLink.textContent = originalText;
                    emailLink.style.color = '';
                }, 2000);
            });
        }
    });
});

// Add fade-in animation to sections on scroll
const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
});

// Apply fade-in to all sections
sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeInObserver.observe(section);
});

// Print button functionality (optional)
function addPrintButton() {
    const printBtn = document.createElement('button');
    printBtn.textContent = '🖨️ Print';
    printBtn.style.cssText = `
        position: fixed;
        bottom: 90px;
        right: 30px;
        background: var(--success);
        color: white;
        border: none;
        padding: 12px 20px;
        border-radius: 25px;
        cursor: pointer;
        font-size: 14px;
        font-weight: 600;
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        transition: all 0.3s ease;
        z-index: 999;
    `;
    
    printBtn.addEventListener('click', () => {
        window.print();
    });
    
    printBtn.addEventListener('mouseenter', () => {
        printBtn.style.transform = 'translateY(-3px)';
        printBtn.style.boxShadow = '0 6px 12px rgba(0,0,0,0.3)';
    });
    
    printBtn.addEventListener('mouseleave', () => {
        printBtn.style.transform = 'translateY(0)';
        printBtn.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
    });
    
    document.body.appendChild(printBtn);
}

// Uncomment to add print button
// addPrintButton();

// Log page view (for analytics if needed)
console.log('Privacy Policy page loaded - ChangeTracker');
console.log('Last Updated: December 6, 2024');

