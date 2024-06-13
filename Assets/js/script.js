let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

// các lệnh chuyển đăng nhập đăng xuất

//ấn nút đăng nhâp để mở form đăng nhập
document.querySelector('#login-btn').onclick = () =>{
    document.querySelector('.login-form-container').classList.toggle('active');
}

//ấm biểu tượng thoát để rời form đăng nhập
document.querySelector('#close-login-form').onclick = () =>{
    document.querySelector('.login-form-container').classList.remove('active');
}

//ấn để tạo tài khoản để mở form tạo tài khoản 
document.querySelector('#open-create-form').onclick = () =>{
    document.querySelector('.create-form-container').classList.toggle('active');
}

//ấm biểu tượng thoát để rời form tạo tài khoản
document.querySelector('#close-create-form').onclick = () =>{
    document.querySelector('.create-form-container').classList.remove('active');
    document.querySelector('.login-form-container').classList.remove('active');
}

//  ấn trở về form đăng nhập
document.querySelector('#turn-back-login').onclick = () =>{
    document.querySelector('.create-form-container').classList.remove('active');
}


menu.oncroll = () =>{

    if(window.scrollY > 0 ) {
        document.querySelector('header').classList.add('active');
    } else {
        document.querySelector('header').classList.remove('active');
    }

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

menu.onload = () =>{

    if(window.scrollY > 0 ) {
        document.querySelector('header').classList.add('active');
    } else {
        document.querySelector('header').classList.remove('active');
    }

}
