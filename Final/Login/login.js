if (localStorage.getItem("LoginStatus") == null) {
  localStorage.setItem("LoginStatus", "0");
}

// Gọi biến
let book = document.getElementById("book");
let lang = document.getElementById("lang");
let home = document.getElementById("home");
let about = document.getElementById("about");
let loginsite = document.getElementById("loginsite");
let booksite = document.getElementById("booksite");
let email = document.getElementById("email");
let pass = document.getElementById("pass");
let login = document.getElementById("login");
let signup = document.getElementById("signup");
let title = document.getElementById("title");

// Ngôn ngữ
let currentLang = localStorage.getItem("Ngôn ngữ");
function en() {
  lang.innerText = "Language";
  lang.style.fontFamily = "Typo Round Regular Demo";
  home.innerText = "Home";
  home.style.fontFamily = "Typo Round Regular Demo";
  about.innerText = "About us";
  about.style.fontFamily = "Typo Round Regular Demo";
  loginsite.innerText = "Login";
  loginsite.style.fontFamily = "Typo Round Regular Demo";
  booksite.innerText = "Book";
  booksite.style.fontFamily = "Typo Round Regular Demo";

  login.innerText = "Login";
  login.style.fontFamily = "Typo Round Regular Demo";
  signup.innerText = "Sign up";
  signup.style.fontFamily = "Typo Round Regular Demo";
  title.innerText = "Login/Sign up";
  title.style.fontFamily = "Best Valentina";
}

function vi() {
  lang.innerText = "Ngôn ngữ";
  lang.style.fontFamily = "SVN-Product Sans";
  home.innerText = "Trang chủ";
  home.style.fontFamily = "SVN-Product Sans";
  about.innerText = "Về chúng tôi";
  about.style.fontFamily = "SVN-Product Sans";
  loginsite.innerText = "Đăng nhập";
  loginsite.style.fontFamily = "SVN-Product Sans";
  booksite.innerText = "Đặt phòng";
  booksite.style.fontFamily = "SVN-Product Sans";

  login.innerText = "Đăng nhập";
  login.style.fontFamily = "SVN-Product Sans";
  signup.innerText = "Đăng ký";
  signup.style.fontFamily = "SVN-Product Sans";
  title.innerText = "Đăng nhập / Đăng ký";
  title.style.fontFamily = "SVN-Jonitha Script";
}

if (currentLang == null) {
  currentLang = "en";
  localStorage.setItem("Ngôn ngữ", "en");
} else if (currentLang == "en") {
  en();
} else {
  vi();
}

lang.addEventListener("click", function () {
  if (currentLang == "en") {
    vi();
    currentLang = "vi";
    localStorage.setItem("Ngôn ngữ", "vi");
  } else {
    en();
    currentLang = "en";
    localStorage.setItem("Ngôn ngữ", "en");
  }
});

signup.addEventListener("click", function () {
  if (email.value == "" || pass.value == "") {
    if (currentLang == "vi") {
      alert("Vui lòng điền đầy đủ thông tin.");
    } else {
      alert("Please fill in all information.");
    }
  } else if (email.value.search("@") == -1) {
    if (currentLang == "vi") {
      alert("Địa chỉ email không hợp lệ.");
    } else {
      alert("Invalid email address.");
    }
  } else if (pass.value.length < 8) {
    if (currentLang == "vi") {
      alert("Mật khẩu cần tối thiểu 8 kí tự");
    } else {
      alert("Password needs to have 8 or more letters.");
    }
  } else if (localStorage.getItem(email.value) != null) {
    if (currentLang == "vi") {
      alert("Email này đã có tài khoản.");
    } else {
      alert("This email has already been registered.");
    }
  } else {
    const user = {
      mail: email.value,
      password: pass.value,
    };
    localStorage.setItem(email.value, JSON.stringify(user));
    if (currentLang == "vi") {
      alert("Đăng kí tài khoản thành công!");
    } else {
      alert("Registered successfully!");
    }
  }
});

login.addEventListener("click", function () {
  if (localStorage.getItem("LoginStatus") == "1") {
    if (currentLang == "vi") {
      alert(
        "Bạn đã đăng nhập, vui lòng đăng xuất bằng cách nhấp chuột phải vào nút đăng nhập nếu muốn sử dụng tài khoản khác."
      );
    } else {
      alert(
        "You have already logged in. Should you want to use another account, please log out by right-clicking the login button."
      );
    }
  } else if (email.value == "" || pass.value == "") {
    if (currentLang == "vi") {
      alert("Vui lòng điền đầy đủ thông tin.");
    } else {
      alert("Please fill in all information.");
    }
  } else if (email.value.search("@") == -1) {
    if (currentLang == "vi") {
      alert("Địa chỉ email không hợp lệ.");
    } else {
      alert("Invalid email address.");
    }
  } else if (pass.value.length < 8) {
    if (currentLang == "vi") {
      alert("Mật khẩu cần tối thiểu 8 kí tự");
    } else {
      alert("Password needs to have 8 or more letters.");
    }
  } else if (localStorage.getItem(email.value) == null) {
    if (currentLang == "vi") {
      alert("Email này chưa có tài khoản.");
    } else {
      alert("This email has not been registered.");
    }
  } else {
    const user = JSON.parse(localStorage.getItem(email.value));
    if (user.mail === email.value && user.password === pass.value) {
      localStorage.setItem("LoginStatus", "1");
      if (currentLang == "vi") {
        alert("Đăng nhập thành công!");
      } else {
        alert("Logged in successfully!");
      }
    } else {
      if (currentLang == "vi") {
        alert("Vui lòng xem lại tên đăng nhập hoặc mật khẩu.");
      } else {
        alert("Please make sure your email and password are correct.");
      }
    }
  }
});

login.addEventListener("contextmenu", function () {
  if (localStorage.getItem("LoginStatus") == "1") {
    localStorage.setItem("LoginStatus", "0");
    if (currentLang == "vi") {
      alert("Đăng xuất thành công!");
    } else {
      alert("Logged out successfully!");
    }
  } else {
    if (currentLang == "vi") {
      alert("Bạn chưa đăng nhập nên không thể đăng xuất");
    } else {
      alert("You have not logged in, so you can not log out.");
    }
  }
});
