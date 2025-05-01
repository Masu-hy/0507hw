document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const loginBtn = document.querySelector('.login-btn');
    const signupBtn = document.querySelector('.signup-btn');
    const welcomeModal = document.getElementById('welcomeModal');
    const closeWelcomeModal = document.querySelector('.close-modal');
    const chatInput = document.querySelector('.chat-input');
    const loginModalBtn = document.querySelector('.login-modal-btn');
    const signupModalBtn = document.querySelector('.signup-modal-btn');
    const stayLoggedOut = document.querySelector('.stay-logged-in');
    const inputBtns = document.querySelectorAll('.input-btn');
    const voiceBtn = document.querySelector('.voice-btn');
    const featureBtns = document.querySelectorAll('.feature-btn');

    // Auto-resize textarea
    chatInput.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
    });

    // Show welcome modal automatically after a short delay
    setTimeout(function() {
        welcomeModal.style.display = 'flex';
    }, 1000);

    // Redirect to signup page
    function redirectToSignup() {
        window.location.href = 'signup.html';
    }

    // Login button redirects to signup
    loginBtn.addEventListener('click', redirectToSignup);

    // Welcome modal login button redirects to signup
    loginModalBtn.addEventListener('click', redirectToSignup);

    // Signup button redirects to signup page
    signupBtn.addEventListener('click', redirectToSignup);

    // Welcome modal signup button redirects to signup page
    signupModalBtn.addEventListener('click', redirectToSignup);

    // Make all input buttons redirect to signup
    inputBtns.forEach(button => {
        button.addEventListener('click', redirectToSignup);
    });

    // Make voice button redirect to signup
    voiceBtn.addEventListener('click', redirectToSignup);

    // Make all feature buttons redirect to signup
    featureBtns.forEach(button => {
        button.addEventListener('click', redirectToSignup);
    });

    // Make chat input click redirect to signup
    chatInput.addEventListener('click', redirectToSignup);

    // Make chat input enter key redirect to signup
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            redirectToSignup();
        }
    });

    // Close welcome modal
    closeWelcomeModal.addEventListener('click', function() {
        welcomeModal.style.display = 'none';
    });

    // Close modals when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === welcomeModal) {
            welcomeModal.style.display = 'none';
        }
    });

    // Stay logged out closes welcome modal
    stayLoggedOut.addEventListener('click', function() {
        welcomeModal.style.display = 'none';
    });
});