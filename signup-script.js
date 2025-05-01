document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.signup-form');
    const socialBtns = document.querySelectorAll('.social-btn');

    // Redirect back to index.html when form is submitted
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('註冊功能將在這裡實現');
        // 實際應用中，這裡會處理表單提交
    });

    // Handle social login buttons
    socialBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            alert('社交登入功能將在這裡實現');
            // 實際應用中，這裡會處理社交登入
        });
    });
});