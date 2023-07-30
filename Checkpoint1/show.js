let xem = document.getElementById('xem')
let email = document.getElementById('email');
let mk = document.getElementById('mk');
let name = document.getElementById('name');

xem.addEventListener("click", function(){
    if (localStorage.getItem("Email") != null && localStorage.getItem("Mật khẩu") != null && localStorage.getItem("Tên") != null){
    email.innerText = localStorage.getItem("Email")
    mk.innerText = localStorage.getItem("Mật khẩu")
    name.innerText = localStorage.getItem("Tên")
    } else {alert("Chưa đăng ký thông tin")}
})