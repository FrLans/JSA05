if (localStorage.getItem("LoginStatus") == null) {
  localStorage.setItem("LoginStatus", "0");
}

// Gọi biến
let lang = document.getElementById("lang");
let home = document.getElementById("home");
let about = document.getElementById("about");
let login = document.getElementById("login");
let booksite = document.getElementById("booksite");

let t1 = document.getElementById("t1");
let t2 = document.getElementById("t2");
let t3 = document.getElementById("t3");
let t4 = document.getElementById("t4");
let t5 = document.getElementById("t5");
let t6 = document.getElementById("t6");
let t7 = document.getElementById("t7");
// Thanh menu

// Ngôn ngữ
let currentLang = localStorage.getItem("Ngôn ngữ");
function en() {
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

  t1.innerText = "Our humble beginnings";
  t1.style.fontFamily = "Typo Round Regular Demo";

  t2.innerText = "Founded in Venice on December 1992 by Adamo Raffinato,";
  t4.innerText =
    "        was originally a modest, marginalized hotel that saw fewer than 200 visitors annually.";
  t5.innerText =
    "        However, as a result of major business adjustments in 2003, we were able to establish a reputation among our valued guests as an elegant and exquisite hotel brand.";
  t6.innerText = "Since then,";
  t7.innerText =
    "        has expanded overseas, with 12 locations across the world. To this day, we continue to provide our customers with noble experiences for at competitive costs that can not be found anywhere else.";
}

function vi() {
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

  t1.innerText = "Khởi đầu khiêm tốn của chúng tôi";
  t1.style.fontFamily = "SVN-Product Sans";
  t2.innerText =
    "Được thành lập tại Venice vào tháng 12 năm 1992 bởi Adamo Raffinato,";
  t4.innerText =
    "khởi điểm là một khách sạn không được chú ý, tiếp đón chưa tới 200 lượt khách mỗi năm.";
  t5.innerText =
    "Tuy nhiên, nhờ những sửa đổi mang tính đột phá về chính sách kinh doanh vào năm 2013, chúng tôi đã nhận được sự tín nhiệm của quý khách hàng, được tôn vinh là một chuỗi khách sạn cao cấp và sang trọng.";
  t6.innerText = "Tới nay,";
  t7.innerText =
    "đã mở rộng ra thị trường quốc tế, với 12 chi nhánh trên toàn cầu. Chúng tôi vẫn luôn nỗ lực để cung cấp cho quý khách những trải nghiệm quý phái với mức giá phải chăng, độc nhất vô nhị.";
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
