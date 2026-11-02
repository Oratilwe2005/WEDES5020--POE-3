/**
 * The Boys Thrive Foundation - Main JavaScript
 * Handles interactivity, form validations, filters, and UI enhancements.
 */

document.addEventListener('DOMContentLoaded', () => {
    initMobileNav();
    initActiveNav();
    initFAQAccordions();
    initLiveSearch();
    initFormHandlers();
    initBackToTop();
    initMoodCheckIn();
});

/**
 * 1. Mobile Navigation Menu Toggle
 */
function initMobileNav() {
    const header = document.querySelector('header');
    if (!header) return;

    // Check if mobile toggle already exists, if not, create it
    let toggleBtn = header.querySelector('.mobile-menu-toggle');
    const nav = header.querySelector('nav');

    if (!toggleBtn && nav) {
        toggleBtn = document.createElement('button');
        toggleBtn.className = 'mobile-menu-toggle';
        toggleBtn.innerHTML = '&#9776;'; // Hamburger icon
        toggleBtn.setAttribute('aria-label', 'Toggle Navigation Menu');
        
        // Insert before nav
        header.insertBefore(toggleBtn, nav);

        toggleBtn.addEventListener('click', () => {
            nav.classList.toggle('nav-open');
        });
    }
}

/**
 * 2. Highlight Active Navigation Link Automatically
 */
function initActiveNav() {
    const currentLocation = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentLocation) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

/**
 * 3. FAQ Accordion Functionality
 */
function initFAQAccordions() {
    const faqItems = document.querySelectorAll('.faq-item, .accordion-item');
    if (faqItems.length === 0) return;

    faqItems.forEach(item => {
        const question = item.querySelector('h4, .faq-question');
        const answer = item.querySelector('p, .faq-answer');

        if (question && answer) {
            question.style.cursor = 'pointer';
            question.title = 'Click to expand/collapse';
            
            // Optional: collapse by default or keep open. Let's add smooth toggle classes.
            question.addEventListener('click', () => {
                const isExpanded = item.classList.toggle('expanded');
                if (isExpanded) {
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                } else {
                    answer.style.maxHeight = null;
                }
            });
        }
    });
}

/**
 * 4. Live Search Filter for Resources or Gallery
 */
function initLiveSearch() {
    const searchInput = document.querySelector('#resourceSearch, #liveSearch');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase().trim();
        const cards = document.querySelectorAll('.resource-card, .gallery-card');

        cards.forEach(card => {
            const text = card.textContent.toLowerCase();
            if (text.includes(term)) {
                card.style.display = '';
                card.style.animation = 'fadeIn 0.4s ease';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

/**
 * 5. Professional Form Handling with Toast Notifications
 */
function initFormHandlers() {
    const forms = document.querySelectorAll('form');
    if (forms.length === 0) return;

    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Basic validation check
            const requiredFields = form.querySelectorAll('[required]');
            let isValid = true;

            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = '#e53e3e';
                } else {
                    field.style.borderColor = '#cbd5e0';
                }
            });

            if (!isValid) {
                showToast('Please fill in all required fields.', 'error');
                return;
            }

            // Simulate successful submission
            showToast('Thank you! Your submission has been received successfully.', 'success');
            form.reset();
        });
    });
}

/**
 * Custom Toast Notification Popup
 */
function showToast(message, type = 'success') {
    // Remove existing toast if any
    const existingToast = document.querySelector('.toast-notification');
    if (existingToast) existingToast.remove();

    const toast = document.createElement('div');
    toast.className = `toast-notification toast-${type}`;
    toast.textContent = message;

    // Inline styling for professional floating alert
    Object.assign(toast.style, {
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        backgroundColor: type === 'success' ? '#319795' : '#e53e3e',
        color: '#ffffff',
        padding: '12px 24px',
        borderRadius: '8px',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.2)',
        zIndex: '9999',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        fontWeight: '600',
        transition: 'all 0.3s ease',
        opacity: '0',
        transform: 'translateY(20px)'
    });

    document.body.appendChild(toast);

    // Fade in
    setTimeout(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateY(0)';
    }, 10);

    // Fade out after 4 seconds
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(20px)';
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}

/**
 * 6. Smooth Back-to-Top Button
 */
function initBackToTop() {
    const btn = document.createElement('button');
    btn.className = 'back-to-top';
    btn.innerHTML = '&uarr;';
    btn.setAttribute('aria-label', 'Scroll to top');

    Object.assign(btn.style, {
        position: 'fixed',
        bottom: '30px',
        left: '30px',
        backgroundColor: '#1a365d',
        color: '#ffffff',
        border: 'none',
        borderRadius: '50%',
        width: '45px',
        height: '45px',
        fontSize: '20px',
        cursor: 'pointer',
        display: 'none',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        zIndex: '999',
        transition: 'background-color 0.3s ease'
    });

    btn.addEventListener('mouseover', () => btn.style.backgroundColor = '#319795');
    btn.addEventListener('mouseout', () => btn.style.backgroundColor = '#1a365d');

    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btn.style.display = 'flex';
        } else {
            btn.style.display = 'none';
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/**
 * 7. Interactive Daily Mood Check-In Widget (Optional helper)
 */
function initMoodCheckIn() {
    const container = document.querySelector('#mood-checkin-container');
    if (!container) return;

    container.innerHTML = `
        <div style="background: #ffffff; padding: 2rem; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); text-align: center; margin: 2rem 0;">
            <h3 style="color: #1a365d; margin-bottom: 0.5rem;">How are you feeling today?</h3>
            <p style="color: #4a5568; margin-bottom: 1.5rem; font-size: 0.95rem;">Select how your day is going for instant encouragement or guidance.</p>
            <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;" id="mood-btns">
                <button class="mood-btn" data-mood="great" style="padding: 0.6rem 1.2rem; border: 2px solid #319795; background: #e6fffa; color: #234e52; border-radius: 20px; font-weight: 600; cursor: pointer;">⚡ Energized & Ready</button>
                <button class="mood-btn" data-mood="okay" style="padding: 0.6rem 1.2rem; border: 2px solid #2b6cb0; background: #ebf8ff; color: #2b6cb0; border-radius: 20px; font-weight: 600; cursor: pointer;">🌱 Managing / Steady</button>
                <button class="mood-btn" data-mood="heavy" style="padding: 0.6rem 1.2rem; border: 2px solid #dd6b20; background: #fffaf0; color: #9c4221; border-radius: 20px; font-weight: 600; cursor: pointer;">🌧️ Feeling Heavy / Stressed</button>
            </div>
            <div id="mood-response" style="margin-top: 1.5rem; font-style: italic; color: #2d3748; min-height: 30px;"></div>
        </div>
    `;

    const moodBtns = container.querySelectorAll('.mood-btn');
    const responseBox = container.querySelector('#mood-response');

    const responses = {
        great: "Awesome! Keep that positive momentum going, and consider sharing your energy with a friend today.",
        okay: "That's completely fine. Take things one step at a time, and remember you're doing great.",
        heavy: "Thank you for acknowledging it. Remember you don't have to carry it alone—reach out to our mentors or check our resources."
    };

    moodBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const mood = btn.getAttribute('data-mood');
            responseBox.textContent = responses[mood];
            moodBtns.forEach(b => b.style.opacity = '0.6');
            btn.style.opacity = '1';
            btn.style.transform = 'scale(1.05)';
        });
    });
}