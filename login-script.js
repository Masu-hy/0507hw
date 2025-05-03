document.addEventListener('DOMContentLoaded', function() {
    // 獲取DOM元素
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const loginSuccess = document.getElementById('loginSuccess');
    const togglePassword = document.getElementById('togglePassword');

    // 社交登入元素
    const googleLoginBtn = document.getElementById('googleLogin');
    const microsoftLoginBtn = document.getElementById('microsoftLogin');
    const appleLoginBtn = document.getElementById('appleLogin');
    const socialLoginModal = document.getElementById('socialLoginModal');
    const closeSocialModal = document.getElementById('closeSocialModal');
    const socialLoginForm = document.getElementById('socialLoginForm');
    const socialLoginLogo = document.getElementById('socialLoginLogo');
    const socialLoginTitle = document.getElementById('socialLoginTitle');
    const socialLoginBtn = document.querySelector('.social-login-btn');

    // 切換密碼可見性
    if (togglePassword) {
        togglePassword.addEventListener('click', function() {
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                togglePassword.innerHTML = '<i class="fa-regular fa-eye-slash"></i>';
            } else {
                passwordInput.type = 'password';
                togglePassword.innerHTML = '<i class="fa-regular fa-eye"></i>';
            }
        });
    }

    // 表單提交
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const email = emailInput.value.trim();
            const password = passwordInput.value;
            let isValid = true;

            // 驗證電子郵件
            if (!email) {
                emailError.textContent = '請輸入電子郵件地址';
                isValid = false;
            } else if (!isValidEmail(email)) {
                emailError.textContent = '請輸入有效的電子郵件地址';
                isValid = false;
            } else {
                emailError.textContent = '';
            }

            // 驗證密碼
            if (!password) {
                passwordError.textContent = '請輸入密碼';
                isValid = false;
            } else {
                passwordError.textContent = '';
            }

            if (!isValid) return;

            // 顯示釣魚警告
            loginForm.style.display = 'none';
            document.querySelector('.login-link').style.display = 'none';
            document.querySelector('.divider').style.display = 'none';
            document.querySelector('.social-login').style.display = 'none';
            document.querySelector('.footer-links').style.display = 'none';
            loginSuccess.style.display = 'block';
        });
    }

    // 社交登入按鈕
    if (googleLoginBtn) {
        googleLoginBtn.addEventListener('click', function() {
            openSocialLoginModal('Google', 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg', '#4285F4');
        });
    }

    if (microsoftLoginBtn) {
        microsoftLoginBtn.addEventListener('click', function() {
            openSocialLoginModal('Microsoft', 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg', '#00A4EF');
        });
    }

    if (appleLoginBtn) {
        appleLoginBtn.addEventListener('click', function() {
            openSocialLoginModal('Apple', 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg', '#000000');
        });
    }

    // 關閉社交登入彈窗
    if (closeSocialModal) {
        closeSocialModal.addEventListener('click', function() {
            socialLoginModal.style.display = 'none';
        });
    }

    // 點擊彈窗外部關閉彈窗
    window.addEventListener('click', function(event) {
        if (event.target === socialLoginModal) {
            socialLoginModal.style.display = 'none';
        }
    });

    // 社交登入表單提交
    if (socialLoginForm) {
        socialLoginForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // 關閉彈窗
            socialLoginModal.style.display = 'none';

            // 顯示釣魚警告
            loginForm.style.display = 'none';
            document.querySelector('.login-link').style.display = 'none';
            document.querySelector('.divider').style.display = 'none';
            document.querySelector('.social-login').style.display = 'none';
            document.querySelector('.footer-links').style.display = 'none';
            loginSuccess.style.display = 'block';
        });
    }

    // 返回首頁按鈕
    const backToHomeBtn = document.getElementById('backToHomeBtn');
    if (backToHomeBtn) {
        backToHomeBtn.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }

    // 輔助函數
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function openSocialLoginModal(provider, logoUrl, buttonColor) {
        socialLoginLogo.src = logoUrl;
        socialLoginTitle.textContent = provider;
        socialLoginBtn.style.backgroundColor = buttonColor;
        socialLoginBtn.textContent = `使用 ${provider} 登入`;
        socialLoginModal.style.display = 'flex';
    }
});