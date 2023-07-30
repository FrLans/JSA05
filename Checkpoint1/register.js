let nutdangki = document.getElementById('dangki');
let tk = document.getElementById('email');
let mk = document.getElementById('pass');
let name = document.getElementById('name');

function kiemTra(){
    if(tk.value == "" || mk.value == "" || name.value == ""){
        alert("Vui lòng điền đầy đủ thông tin để đăng kí.")
    }
    else if (String(mk.value).length < 8){
        alert("Mật khẩu cần tối thiểu 8 kí tự.")
    }
    else{
        alert("Thành công!")
        localStorage.setItem("Email", JSON.stringify(tk.value))
        localStorage.setItem("Mật khẩu", JSON.stringify(mk.value))
        localStorage.setItem("Tên", JSON.stringify(name.value))
        tk.value = ""
        mk.value = ""
        name.value = ""
    }
    
}
nutdangki.addEventListener("click", kiemTra)