 // Function to get query parameters from URL
 function getQueryParams() {
    let params = {};
    let queryString = window.location.search.slice(1);
    queryString.split('&').forEach(function (param) {
        let [key, value] = param.split('=');
        params[key] = decodeURIComponent(value);
    });
    return params;
}

// Check query parameter to open the login form
document.addEventListener('DOMContentLoaded', (event) => {
    let params = getQueryParams();
    if (params.form === 'login') {
        document.querySelector('.login-form-container').classList.add('active');
    }

});

// Các lệnh chuyển đăng nhập đăng xuất
document.querySelector('#close-login-form').onclick = () => {
    document.querySelector('.login-form-container').classList.remove('active');
    window.location.href = 'index.html';
}

document.querySelector('#open-create-form').onclick = () => {
    document.querySelector('.create-form-container').classList.toggle('active');
}

document.querySelector('#close-create-form').onclick = () => {
    document.querySelector('.create-form-container').classList.remove('active');
    document.querySelector('.login-form-container').classList.remove('active');
    window.location.href = 'index.html';
}

document.querySelector('#turn-back-login').onclick = () => {
    document.querySelector('.create-form-container').classList.remove('active');
}
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Function to validate password
function validatePassword(password) {
    return password.length >= 6;
}
document.getElementById('login-form').addEventListener('click', function (event) {
    event.preventDefault();
    let email = document.getElementById('login-email').value;
    let password = document.getElementById('login-password').value;

    let emailError = document.getElementById('login-email-error');
    let passwordError = document.getElementById('login-password-error');

    let valid = true;

    // Validate email
    if (!validateEmail(email)) {
        emailError.textContent = 'Email không hợp lệ';
        valid = false;
    } else {
        emailError.textContent = '';
    }

    // Validate password
    if (!validatePassword(password)) {
        passwordError.textContent = 'Mật khẩu phải có ít nhất 6 ký tự';
        valid = false;
    } else {
        passwordError.textContent = '';
    }

    if (valid) {
        // If the form is valid, you can submit the form or perform further actions here
        // For example, you can use AJAX to submit the form data to the server without reloading the page
        alert('Form đăng nhập hợp lệ!');
        // You can uncomment the next line to actually submit the form
        // this.submit();
    }
});

document.getElementById('create-form').addEventListener('click', function (event) {
    event.preventDefault();
    let email = document.getElementById('create-email').value;
    let password = document.getElementById('create-password').value;

    let emailError = document.getElementById('create-email-error');
    let passwordError = document.getElementById('create-password-error');

    let valid = true;

    // Validate email
    if (!validateEmail(email)) {
        emailError.textContent = 'Email không hợp lệ';
        valid = false;
    } else {
        emailError.textContent = '';
    }

    // Validate password
    if (!validatePassword(password)) {
        passwordError.textContent = 'Mật khẩu phải có ít nhất 6 ký tự';
        valid = false;
    } else {
        passwordError.textContent = '';
    }

    if (valid) {
        // If the form is valid, you can submit the form or perform further actions here
        alert('Form tạo tài khoản hợp lệ!');
        // this.submit();
    }
});
function thongbao() {
    
}