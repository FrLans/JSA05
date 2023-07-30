if (localStorage.getItem("LoginStatus") == null) {
  localStorage.setItem("LoginStatus", "0");
}

// Gọi biến
let book = document.getElementById("book");
let lang = document.getElementById("lang");
let home = document.getElementById("home");
let about = document.getElementById("about");
let login = document.getElementById("login");
let title = document.getElementById("title");
let subtitle = document.getElementById("subtitle");
let booksite = document.getElementById("booksite");

// Thanh menu

// Ngôn ngữ
let currentLang = localStorage.getItem("Ngôn ngữ");
function en() {
  book.innerText = "Start booking";
  lang.innerText = "Language";
  lang.style.fontFamily = "Typo Round Regular Demo";
  home.innerText = "Home";
  home.style.fontFamily = "Typo Round Regular Demo";
  about.innerText = "About us";
  about.style.fontFamily = "Typo Round Regular Demo";
  login.innerText = "Login";
  login.style.fontFamily = "Typo Round Regular Demo";
  booksite.innerText = "Book";
  booksite.style.fontFamily = "Typo Round Regular Demo";
}

function vi() {
  book.innerText = "Đặt phòng";
  lang.innerText = "Ngôn ngữ";
  lang.style.fontFamily = "SVN-Product Sans";
  home.innerText = "Trang chủ";
  home.style.fontFamily = "SVN-Product Sans";
  about.innerText = "Về chúng tôi";
  about.style.fontFamily = "SVN-Product Sans";
  login.innerText = "Đăng nhập";
  login.style.fontFamily = "SVN-Product Sans";
  booksite.innerText = "Đặt phòng";
  booksite.style.fontFamily = "SVN-Product Sans";
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
// Khác

book.addEventListener("click", function () {
  window.location.href = "/Final/Booking/booking.html";
});
