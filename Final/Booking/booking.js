if (localStorage.getItem("LoginStatus") == null) {
  localStorage.setItem("LoginStatus", "0");
}

// Gọi biến
let lang = document.getElementById("lang");
let home = document.getElementById("home");
let about = document.getElementById("about");
let login = document.getElementById("login");
let booksite = document.getElementById("booksite");

let ft = document.getElementById("filtertitle");
let lbnorthAmerica = document.getElementById("lbnorthAmerica");
let lbsouthAmerica = document.getElementById("lbsouthAmerica");
let lbasia = document.getElementById("lbasia");
let lbeurope = document.getElementById("lbeurope");
let lboceania = document.getElementById("lboceania");
let lbafrica = document.getElementById("lbafrica");
let lbclassic = document.getElementById("lbclassic");
let lbdisjointed = document.getElementById("lbdisjointed");
let lbdeluxe = document.getElementById("lbdeluxe");
let lbcruise = document.getElementById("lbcruise");
let lbbustle = document.getElementById("lbbustle");
let lbtranquil = document.getElementById("lbtranquil");
let lbstopfilter = document.getElementById("lbstopfilter");

let min = document.getElementById("min");
let max = document.getElementById("max");
let minout = document.getElementById("minout");
let maxout = document.getElementById("maxout");
let mintext = document.getElementById("mintext");
let maxtext = document.getElementById("maxtext");
let confirm1 = document.getElementById("confirm");
let search = document.getElementById("search");

let datestart = document.getElementById("datestart");
let dateend = document.getElementById("dateend");
let starttext = document.getElementById("starttext");
let endtext = document.getElementById("endtext");

// let nextmonth = document.getElementById("nextmonth");
// let prevmonth = document.getElementById("prevmonth");
// let calendar = document.getElementById("calendar");
// let calendar2 = document.getElementById("calendar2");

let berlin = document.getElementById("berlin");

let berlin1 = document.getElementById("berlin1");
let berlin2 = document.getElementById("berlin2");
let berlin3 = document.getElementById("berlin3");
let berlin4 = document.getElementById("berlin4");
let berlin5 = document.getElementById("berlin5");
let berlin6 = document.getElementById("berlin6");

let cairo = document.getElementById("cairo");

let cairo1 = document.getElementById("cairo1");
let cairo2 = document.getElementById("cairo2");
let cairo3 = document.getElementById("cairo3");
let cairo4 = document.getElementById("cairo4");
let cairo5 = document.getElementById("cairo5");
let cairo6 = document.getElementById("cairo6");

let capetown = document.getElementById("capetown");

let cape1 = document.getElementById("cape1");
let cape2 = document.getElementById("cape2");
let cape3 = document.getElementById("cape3");
let cape4 = document.getElementById("cape4");
let cape5 = document.getElementById("cape5");
let cape6 = document.getElementById("cape6");

let dubai = document.getElementById("dubai");

let dubai1 = document.getElementById("dubai1");
let dubai2 = document.getElementById("dubai2");
let dubai3 = document.getElementById("dubai3");
let dubai4 = document.getElementById("dubai4");
let dubai5 = document.getElementById("dubai5");
let dubai6 = document.getElementById("dubai6");

let halong = document.getElementById("halong");

let halo1 = document.getElementById("halo1");
let halo2 = document.getElementById("halo2");
let halo3 = document.getElementById("halo3");
let halo4 = document.getElementById("halo4");
let halo5 = document.getElementById("halo5");
let halo6 = document.getElementById("halo6");

let lasvegas = document.getElementById("lasvegas");

let las1 = document.getElementById("las1");
let las2 = document.getElementById("las2");
let las3 = document.getElementById("las3");
let las4 = document.getElementById("las4");
let las5 = document.getElementById("las5");
let las6 = document.getElementById("las6");

let paris = document.getElementById("paris");

let paris1 = document.getElementById("paris1");
let paris2 = document.getElementById("paris2");
let paris3 = document.getElementById("paris3");
let paris4 = document.getElementById("paris4");
let paris5 = document.getElementById("paris5");
let paris6 = document.getElementById("paris6");

let rio = document.getElementById("rio");

let rio1 = document.getElementById("rio1");
let rio2 = document.getElementById("rio2");
let rio3 = document.getElementById("rio3");
let rio4 = document.getElementById("rio4");
let rio5 = document.getElementById("rio5");
let rio6 = document.getElementById("rio6");

let rome = document.getElementById("rome");

let rome1 = document.getElementById("rome1");
let rome2 = document.getElementById("rome2");
let rome3 = document.getElementById("rome3");
let rome4 = document.getElementById("rome4");
let rome5 = document.getElementById("rome5");
let rome6 = document.getElementById("rome6");

let sydney = document.getElementById("sydney");

let syd1 = document.getElementById("syd1");
let syd2 = document.getElementById("syd2");
let syd3 = document.getElementById("syd3");
let syd4 = document.getElementById("syd4");
let syd5 = document.getElementById("syd5");
let syd6 = document.getElementById("syd6");

let tokyo1 = document.getElementById("tokyo1");
let tokyo2 = document.getElementById("tokyo2");
let tokyo3 = document.getElementById("tokyo3");
let tokyo4 = document.getElementById("tokyo4");
let tokyo5 = document.getElementById("tokyo5");
let tokyo6 = document.getElementById("tokyo6");

let ven1 = document.getElementById("ven1");
let ven2 = document.getElementById("ven2");
let ven3 = document.getElementById("ven3");
let ven4 = document.getElementById("ven4");
let ven5 = document.getElementById("ven5");
let ven6 = document.getElementById("ven6");

let cActive = document.getElementById("checkout");
let cDiv = document.getElementById("cDiv");
let c1 = document.getElementById("checkouttext1");
let c2 = document.getElementById("checkouttext2");
let c3 = document.getElementById("checkouttext3");
let c4 = document.getElementById("checkouttext4");
let c5 = document.getElementById("checkouttext5");
let c6 = document.getElementById("checkouttext6");
let c7 = document.getElementById("checkouttext7");
let cOwner = document.getElementById("cOwner");
let cNumber = document.getElementById("cNumber");
let cExpire = document.getElementById("cExpire");
let cCVC = document.getElementById("cCVC");
let cBtn = document.getElementById("checkoutreal");
let back = document.getElementById("back");

let berlinText1 = document.getElementById("berlinText1");
let berlinText2 = document.getElementById("berlinText2");
let berlinText3 = document.getElementById("berlinText3");
let berlinText4 = document.getElementById("berlinText4");
let berlinText5 = document.getElementById("berlinText5");
let berlinText6 = document.getElementById("berlinText6");
let berlinText7 = document.getElementById("berlinText7");
let berlinText8 = document.getElementById("berlinText8");
let berlinText9 = document.getElementById("berlinText9");
let berlinText10 = document.getElementById("berlinText10");
let berlinText11 = document.getElementById("berlinText11");
let berlinText12 = document.getElementById("berlinText12");
let berlinText13 = document.getElementById("berlinText13");
let berlinText14 = document.getElementById("berlinText14");
let berlinText15 = document.getElementById("berlinText15");
let berlinText16 = document.getElementById("berlinText16");
let berlinText17 = document.getElementById("berlinText17");
let berlinText18 = document.getElementById("berlinText18");
let berlinText19 = document.getElementById("berlinText19");
let berlinText20 = document.getElementById("berlinText20");
let berlinText21 = document.getElementById("berlinText21");
let berlinText22 = document.getElementById("berlinText22");
let berlinText23 = document.getElementById("berlinText23");
let berlinText24 = document.getElementById("berlinText24");
let berlinText25 = document.getElementById("berlinText25");
let berlinText26 = document.getElementById("berlinText26");

let cairoText1 = document.getElementById("cairoText1");
let cairoText2 = document.getElementById("cairoText2");
let cairoText3 = document.getElementById("cairoText3");
let cairoText4 = document.getElementById("cairoText4");
let cairoText5 = document.getElementById("cairoText5");
let cairoText6 = document.getElementById("cairoText6");
let cairoText7 = document.getElementById("cairoText7");
let cairoText8 = document.getElementById("cairoText8");
let cairoText9 = document.getElementById("cairoText9");
let cairoText10 = document.getElementById("cairoText10");
let cairoText11 = document.getElementById("cairoText11");
let cairoText12 = document.getElementById("cairoText12");
let cairoText13 = document.getElementById("cairoText13");
let cairoText14 = document.getElementById("cairoText14");
let cairoText15 = document.getElementById("cairoText15");
let cairoText16 = document.getElementById("cairoText16");
let cairoText17 = document.getElementById("cairoText17");
let cairoText18 = document.getElementById("cairoText18");
let cairoText19 = document.getElementById("cairoText19");
let cairoText20 = document.getElementById("cairoText20");

let capeText1 = document.getElementById("capeText1");
let capeText2 = document.getElementById("capeText2");
let capeText3 = document.getElementById("capeText3");
let capeText4 = document.getElementById("capeText4");
let capeText5 = document.getElementById("capeText5");
let capeText6 = document.getElementById("capeText6");
let capeText7 = document.getElementById("capeText7");
let capeText8 = document.getElementById("capeText8");
let capeText9 = document.getElementById("capeText9");
let capeText10 = document.getElementById("capeText10");
let capeText11 = document.getElementById("capeText11");
let capeText12 = document.getElementById("capeText12");
let capeText13 = document.getElementById("capeText13");
let capeText14 = document.getElementById("capeText14");
let capeText15 = document.getElementById("capeText15");
let capeText16 = document.getElementById("capeText16");
let capeText17 = document.getElementById("capeText17");
let capeText18 = document.getElementById("capeText18");
let capeText19 = document.getElementById("capeText19");
let capeText20 = document.getElementById("capeText20");
let capeText21 = document.getElementById("capeText21");
let capeText22 = document.getElementById("capeText22");
let capeText23 = document.getElementById("capeText23");
let capeText24 = document.getElementById("capeText24");
let capeText25 = document.getElementById("capeText25");
let capeText26 = document.getElementById("capeText26");

let dubaiText1 = document.getElementById("dubaiText1");
let dubaiText2 = document.getElementById("dubaiText2");
let dubaiText3 = document.getElementById("dubaiText3");
let dubaiText4 = document.getElementById("dubaiText4");
let dubaiText5 = document.getElementById("dubaiText5");
let dubaiText6 = document.getElementById("dubaiText6");
let dubaiText7 = document.getElementById("dubaiText7");
let dubaiText8 = document.getElementById("dubaiText8");
let dubaiText9 = document.getElementById("dubaiText9");
let dubaiText10 = document.getElementById("dubaiText10");
let dubaiText11 = document.getElementById("dubaiText11");
let dubaiText12 = document.getElementById("dubaiText12");
let dubaiText13 = document.getElementById("dubaiText13");
let dubaiText14 = document.getElementById("dubaiText14");
let dubaiText15 = document.getElementById("dubaiText15");
let dubaiText16 = document.getElementById("dubaiText16");
let dubaiText17 = document.getElementById("dubaiText17");
let dubaiText18 = document.getElementById("dubaiText18");
let dubaiText19 = document.getElementById("dubaiText19");
let dubaiText20 = document.getElementById("dubaiText20");
let dubaiText21 = document.getElementById("dubaiText21");
let dubaiText22 = document.getElementById("dubaiText22");
let dubaiText23 = document.getElementById("dubaiText23");
let dubaiText24 = document.getElementById("dubaiText24");
let dubaiText25 = document.getElementById("dubaiText25");
let dubaiText26 = document.getElementById("dubaiText26");

let haloText1 = document.getElementById("haloText1");
let haloText2 = document.getElementById("haloText2");
let haloText3 = document.getElementById("haloText3");
let haloText4 = document.getElementById("haloText4");
let haloText5 = document.getElementById("haloText5");
let haloText6 = document.getElementById("haloText6");
let haloText7 = document.getElementById("haloText7");
let haloText8 = document.getElementById("haloText8");
let haloText9 = document.getElementById("haloText9");
let haloText10 = document.getElementById("haloText10");
let haloText11 = document.getElementById("haloText11");
let haloText12 = document.getElementById("haloText12");
let haloText13 = document.getElementById("haloText13");
let haloText14 = document.getElementById("haloText14");
let haloText15 = document.getElementById("haloText15");
let haloText16 = document.getElementById("haloText16");
let haloText17 = document.getElementById("haloText17");
let haloText18 = document.getElementById("haloText18");
let haloText19 = document.getElementById("haloText19");
let haloText20 = document.getElementById("haloText20");
let haloText21 = document.getElementById("haloText21");
let haloText22 = document.getElementById("haloText22");
let haloText23 = document.getElementById("haloText23");
let haloText24 = document.getElementById("haloText24");
let haloText25 = document.getElementById("haloText25");
let haloText26 = document.getElementById("haloText26");

let lasText1 = document.getElementById("lasText1");
let lasText2 = document.getElementById("lasText2");
let lasText3 = document.getElementById("lasText3");
let lasText4 = document.getElementById("lasText4");
let lasText5 = document.getElementById("lasText5");
let lasText6 = document.getElementById("lasText6");
let lasText7 = document.getElementById("lasText7");
let lasText8 = document.getElementById("lasText8");
let lasText9 = document.getElementById("lasText9");
let lasText10 = document.getElementById("lasText10");
let lasText11 = document.getElementById("lasText11");
let lasText12 = document.getElementById("lasText12");
let lasText13 = document.getElementById("lasText13");
let lasText14 = document.getElementById("lasText14");
let lasText15 = document.getElementById("lasText15");
let lasText16 = document.getElementById("lasText16");
let lasText17 = document.getElementById("lasText17");
let lasText18 = document.getElementById("lasText18");
let lasText19 = document.getElementById("lasText19");
let lasText20 = document.getElementById("lasText20");
let lasText21 = document.getElementById("lasText21");
let lasText22 = document.getElementById("lasText22");
let lasText23 = document.getElementById("lasText23");
let lasText24 = document.getElementById("lasText24");
let lasText25 = document.getElementById("lasText25");
let lasText26 = document.getElementById("lasText26");

let parisText1 = document.getElementById("parisText1");
let parisText2 = document.getElementById("parisText2");
let parisText3 = document.getElementById("parisText3");
let parisText4 = document.getElementById("parisText4");
let parisText5 = document.getElementById("parisText5");
let parisText6 = document.getElementById("parisText6");
let parisText7 = document.getElementById("parisText7");
let parisText8 = document.getElementById("parisText8");
let parisText9 = document.getElementById("parisText9");
let parisText10 = document.getElementById("parisText10");
let parisText11 = document.getElementById("parisText11");
let parisText12 = document.getElementById("parisText12");
let parisText13 = document.getElementById("parisText13");
let parisText14 = document.getElementById("parisText14");
let parisText15 = document.getElementById("parisText15");
let parisText16 = document.getElementById("parisText16");
let parisText17 = document.getElementById("parisText17");
let parisText18 = document.getElementById("parisText18");
let parisText19 = document.getElementById("parisText19");
let parisText20 = document.getElementById("parisText20");
let parisText21 = document.getElementById("parisText21");
let parisText22 = document.getElementById("parisText22");
let parisText23 = document.getElementById("parisText23");
let parisText24 = document.getElementById("parisText24");
let parisText25 = document.getElementById("parisText25");
let parisText26 = document.getElementById("parisText26");

let rioText1 = document.getElementById("rioText1");
let rioText2 = document.getElementById("rioText2");
let rioText3 = document.getElementById("rioText3");
let rioText4 = document.getElementById("rioText4");
let rioText5 = document.getElementById("rioText5");
let rioText6 = document.getElementById("rioText6");
let rioText7 = document.getElementById("rioText7");
let rioText8 = document.getElementById("rioText8");
let rioText9 = document.getElementById("rioText9");
let rioText10 = document.getElementById("rioText10");
let rioText11 = document.getElementById("rioText11");
let rioText12 = document.getElementById("rioText12");
let rioText13 = document.getElementById("rioText13");
let rioText14 = document.getElementById("rioText14");
let rioText15 = document.getElementById("rioText15");
let rioText16 = document.getElementById("rioText16");
let rioText17 = document.getElementById("rioText17");
let rioText18 = document.getElementById("rioText18");
let rioText19 = document.getElementById("rioText19");
let rioText20 = document.getElementById("rioText20");
let rioText21 = document.getElementById("rioText21");
let rioText22 = document.getElementById("rioText22");
let rioText23 = document.getElementById("rioText23");
let rioText24 = document.getElementById("rioText24");
let rioText25 = document.getElementById("rioText25");
let rioText26 = document.getElementById("rioText26");

let romeText1 = document.getElementById("romeText1");
let romeText2 = document.getElementById("romeText2");
let romeText3 = document.getElementById("romeText3");
let romeText4 = document.getElementById("romeText4");
let romeText5 = document.getElementById("romeText5");
let romeText6 = document.getElementById("romeText6");
let romeText7 = document.getElementById("romeText7");
let romeText8 = document.getElementById("romeText8");
let romeText9 = document.getElementById("romeText9");
let romeText10 = document.getElementById("romeText10");
let romeText11 = document.getElementById("romeText11");
let romeText12 = document.getElementById("romeText12");
let romeText13 = document.getElementById("romeText13");
let romeText14 = document.getElementById("romeText14");
let romeText15 = document.getElementById("romeText15");
let romeText16 = document.getElementById("romeText16");
let romeText17 = document.getElementById("romeText17");
let romeText18 = document.getElementById("romeText18");
let romeText19 = document.getElementById("romeText19");
let romeText20 = document.getElementById("romeText20");
let romeText21 = document.getElementById("romeText21");
let romeText22 = document.getElementById("romeText22");
let romeText23 = document.getElementById("romeText23");
let romeText24 = document.getElementById("romeText24");
let romeText25 = document.getElementById("romeText25");
let romeText26 = document.getElementById("romeText26");

let sydText1 = document.getElementById("sydText1");
let sydText2 = document.getElementById("sydText2");
let sydText3 = document.getElementById("sydText3");
let sydText4 = document.getElementById("sydText4");
let sydText5 = document.getElementById("sydText5");
let sydText6 = document.getElementById("sydText6");
let sydText7 = document.getElementById("sydText7");
let sydText8 = document.getElementById("sydText8");
let sydText9 = document.getElementById("sydText9");
let sydText10 = document.getElementById("sydText10");
let sydText11 = document.getElementById("sydText11");
let sydText12 = document.getElementById("sydText12");
let sydText13 = document.getElementById("sydText13");
let sydText14 = document.getElementById("sydText14");
let sydText15 = document.getElementById("sydText15");
let sydText16 = document.getElementById("sydText16");
let sydText17 = document.getElementById("sydText17");
let sydText18 = document.getElementById("sydText18");
let sydText19 = document.getElementById("sydText19");
let sydText20 = document.getElementById("sydText20");
let sydText21 = document.getElementById("sydText21");
let sydText22 = document.getElementById("sydText22");
let sydText23 = document.getElementById("sydText23");
let sydText24 = document.getElementById("sydText24");
let sydText25 = document.getElementById("sydText25");
let sydText26 = document.getElementById("sydText26");

//
minout.value = min.value;
min.oninput = function () {
  minout.value = this.value;
};
minout.oninput = function () {
  min.value = this.value;
};

maxout.value = max.value;
max.oninput = function () {
  maxout.value = this.value;
};
maxout.oninput = function () {
  max.value = this.value;
};

// Ngôn ngữ
let currentLang = localStorage.getItem("Ngôn ngữ");
function en() {}

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

  ft.innerText = "Bộ lọc khách sạn";
  ft.style.fontFamily = "SVN-Product Sans";

  lbnorthAmerica.innerText = "Bắc Mỹ            ";
  lbnorthAmerica.style.fontFamily = "SVN-Product Sans";
  lbsouthAmerica.innerText = "Nam Mỹ         ";
  lbsouthAmerica.style.fontFamily = "SVN-Product Sans";
  lbasia.innerText = "Châu Á";
  lbasia.style.fontFamily = "SVN-Product Sans";
  lbeurope.innerText = "Châu Âu         ";
  lbeurope.style.fontFamily = "SVN-Product Sans";
  lboceania.innerText = "Châu Úc        ";
  lboceania.style.fontFamily = "SVN-Product Sans";
  lbafrica.innerText = "Châu Phi";
  lbafrica.style.fontFamily = "SVN-Product Sans";

  lbclassic.innerText = "Cổ điển           ";
  lbclassic.style.fontFamily = "SVN-Product Sans";
  lbdisjointed.innerText = "Căn riêng     ";
  lbdisjointed.style.fontFamily = "SVN-Product Sans";
  lbdeluxe.innerText = "Cao cấp";
  lbdeluxe.style.fontFamily = "SVN-Product Sans";

  lbcruise.innerText = "Du thuyền    ";
  lbcruise.style.fontFamily = "SVN-Product Sans";
  lbbustle.innerText = "Náo nhiệt      ";
  lbbustle.style.fontFamily = "SVN-Product Sans";
  lbtranquil.innerText = "Yên bình";
  lbtranquil.style.fontFamily = "SVN-Product Sans";
  lbstopfilter.innerText = "  Tắt bộ lọc ";
  lbstopfilter.style.fontFamily = "SVN-Product Sans";

  mintext.innerText = "Giá tối thiểu ($/đêm)";
  mintext.style.fontFamily = "SVN-Product Sans";
  maxtext.innerText = "Giá tối đa ($/đêm)";
  maxtext.style.fontFamily = "SVN-Product Sans";

  starttext.innerText = "Ngày đặt phòng:";
  starttext.style.fontFamily = "SVN-Product Sans";
  endtext.innerText = "Ngày trả phòng: ";
  endtext.style.fontFamily = "SVN-Product Sans";
  confirm1.innerText = "Xác nhận";
  search.innerText = "Tìm kiếm";

  berlin1.innerText = "Berlin, Đức";
  berlin1.style.fontFamily = "SVN-Product Sans";
  berlin2.innerText = "- Số phòng:        280";
  berlin2.style.fontFamily = "SVN-Product Sans";
  berlin3.innerText = "- Loại k. sạn:     Cổ điển";
  berlin3.style.fontFamily = "SVN-Product Sans";
  berlin4.innerText = "- Loại phòng:   Đơn, 2 Giường, Suite";
  berlin4.style.fontFamily = "SVN-Product Sans";
  berlin5.innerText = "- Địa chỉ:              18 Zufällige Straße";
  berlin5.style.fontFamily = "SVN-Product Sans";
  berlin6.innerText = "- Đ. dây nóng: +49 900-3-082103";
  berlin6.style.fontFamily = "SVN-Product Sans";

  cairo1.innerText = "Cairo, Ai Cập";
  cairo1.style.fontFamily = "SVN-Product Sans";
  cairo2.innerText = "- Số phòng:        45";
  cairo2.style.fontFamily = "SVN-Product Sans";
  cairo3.innerText = "- Loại k. sạn:     Căn riêng";
  cairo3.style.fontFamily = "SVN-Product Sans";
  cairo4.innerText = "- Loại phòng:   Bungalow, Biệt thự";
  cairo4.style.fontFamily = "SVN-Product Sans";
  cairo5.innerText = "- Địa chỉ:              224-228 Paleisweg";
  cairo5.style.fontFamily = "SVN-Product Sans";
  cairo6.innerText = "- Đ. dây nóng: +27 21-339-3014";
  cairo6.style.fontFamily = "SVN-Product Sans";

  cape1.innerText = "Cape Town, Nam Phi";
  cape1.style.fontFamily = "SVN-Product Sans";
  cape2.innerText = "- Số phòng:        170";
  cape2.style.fontFamily = "SVN-Product Sans";
  cape3.innerText = "- Loại k. sạn:     Cao cấp";
  cape3.style.fontFamily = "SVN-Product Sans";
  cape4.innerText = "- Loại phòng:   Suite, Tổng thống, Kề bể bơi";
  cape4.style.fontFamily = "SVN-Product Sans";
  cape5.innerText = "- Địa chỉ:              1 Sharie Almisriiyn";
  cape5.style.fontFamily = "SVN-Product Sans";
  cape6.innerText = "- Đ. dây nóng: +20 2-3025-3403";
  cape6.style.fontFamily = "SVN-Product Sans";

  dubai1.innerText = "Dubai, Các Tiểu vương quốc Ả Rập TN";
  dubai1.style.fontFamily = "SVN-Product Sans";
  dubai2.innerText = "- Số phòng:        520";
  dubai2.style.fontFamily = "SVN-Product Sans";
  dubai3.innerText = "- Loại k. sạn:     Cao cấp";
  dubai3.style.fontFamily = "SVN-Product Sans";
  dubai4.innerText = "- Loại phòng:   Mini Suite, Suite, Tổng thống";
  dubai4.style.fontFamily = "SVN-Product Sans";
  dubai5.innerText = "- Địa chỉ:              47B Sharie Alearab";
  dubai5.style.fontFamily = "SVN-Product Sans";
  dubai6.innerText = "- Đ. dây nóng: +971 04-239-2411";
  dubai6.style.fontFamily = "SVN-Product Sans";

  halo1.innerText = "Hạ Long, Việt Nam";
  halo1.style.fontFamily = "SVN-Product Sans";
  halo2.innerText = "- Số phòng:        80";
  halo2.style.fontFamily = "SVN-Product Sans";
  halo3.innerText = "- Loại k. sạn:     Du thuyền";
  halo3.style.fontFamily = "SVN-Product Sans";
  halo4.innerText = "- Loại phòng:   Trong, Ban công, Suite";
  halo4.style.fontFamily = "SVN-Product Sans";
  halo5.innerText = "- Địa chỉ:              140 Hoàng Phúc Lam";
  halo5.style.fontFamily = "SVN-Product Sans";
  halo6.innerText = "- Đ. dây nóng: +84 912-253-231";
  halo6.style.fontFamily = "SVN-Product Sans";

  las1.innerText = "Las Vegas, Hoa Kỳ";
  las1.style.fontFamily = "SVN-Product Sans";
  las2.innerText = "- Số phòng:        260";
  las2.style.fontFamily = "SVN-Product Sans";
  las3.innerText = "- Loại k. sạn:     Cổ điển";
  las3.style.fontFamily = "SVN-Product Sans";
  las4.innerText = "- Loại phòng:   Đơn, Đôi, Mini Suite";
  las4.style.fontFamily = "SVN-Product Sans";
  las5.innerText = "- Địa chỉ:              38 Norville Boulevard";
  las5.style.fontFamily = "SVN-Product Sans";
  las6.innerText = "- Đ. dây nóng: +1 702-593-9037";
  las6.style.fontFamily = "SVN-Product Sans";

  paris1.innerText = "Paris, Pháp";
  paris1.style.fontFamily = "SVN-Product Sans";
  paris2.innerText = "- Số phòng:        300";
  paris2.style.fontFamily = "SVN-Product Sans";
  paris3.innerText = "- Loại k. sạn:     Cổ điển";
  paris3.style.fontFamily = "SVN-Product Sans";
  paris4.innerText = "- Loại phòng:   Đơn, 2 Giường, Suite";
  paris4.style.fontFamily = "SVN-Product Sans";
  paris5.innerText = "- Địa chỉ:              418 Belle Rue";
  paris5.style.fontFamily = "SVN-Product Sans";
  paris6.innerText = "- Đ. dây nóng: +33 1-20-49-23-48";
  paris6.style.fontFamily = "SVN-Product Sans";

  rio1.innerText = "Rio de Janeiro, Brazil";
  rio1.style.fontFamily = "SVN-Product Sans";
  rio2.innerText = "- Số phòng:        130";
  rio2.style.fontFamily = "SVN-Product Sans";
  rio3.innerText = "- Loại k. sạn:     Cổ điển";
  rio3.style.fontFamily = "SVN-Product Sans";
  rio4.innerText = "- Loại phòng:   Đơn, Đôi, Kề bể bơi";
  rio4.style.fontFamily = "SVN-Product Sans";
  rio5.innerText = "- Địa chỉ:              92A Endereço Falso";
  rio5.style.fontFamily = "SVN-Product Sans";
  rio6.innerText = "- Đ. dây nóng: +55 955-436-6949";
  rio6.style.fontFamily = "SVN-Product Sans";

  rome1.innerText = "Rome, Ý";
  rome1.style.fontFamily = "SVN-Product Sans";
  rome2.innerText = "- Số phòng:        290";
  rome2.style.fontFamily = "SVN-Product Sans";
  rome3.innerText = "- Loại k. sạn:     Cổ điển";
  rome3.style.fontFamily = "SVN-Product Sans";
  rome4.innerText = "- Loại phòng:   Đơn, 2 Giường, Suite";
  rome4.style.fontFamily = "SVN-Product Sans";
  rome5.innerText = "- Địa chỉ:              200 Viale dei Funghi";
  rome5.style.fontFamily = "SVN-Product Sans";
  rome6.innerText = "- Đ. dây nóng: +39 331-9238-9016";
  rome6.style.fontFamily = "SVN-Product Sans";

  syd1.innerText = "Sydney, Úc";
  syd1.style.fontFamily = "SVN-Product Sans";
  syd2.innerText = "- Số phòng:        105";
  syd2.style.fontFamily = "SVN-Product Sans";
  syd3.innerText = "- Loại k. sạn:     Du thuyền";
  syd3.style.fontFamily = "SVN-Product Sans";
  syd4.innerText = "- Loại phòng:   Trong, Ban công, Suite";
  syd4.style.fontFamily = "SVN-Product Sans";
  syd5.innerText = "- Địa chỉ:              49 Victorian Seaside";
  syd5.style.fontFamily = "SVN-Product Sans";
  syd6.innerText = "- Đ. dây nóng: +61 428-384-388";
  syd6.style.fontFamily = "SVN-Product Sans";

  tokyo1.innerText = "Tokyo, Nhật Bản";
  tokyo1.style.fontFamily = "SVN-Product Sans";
  tokyo2.innerText = "- Số phòng:        65";
  tokyo2.style.fontFamily = "SVN-Product Sans";
  tokyo3.innerText = "- Loại k. sạn:     Căn riêng";
  tokyo3.style.fontFamily = "SVN-Product Sans";
  tokyo4.innerText = "- Loại phòng:   Bungalow";
  tokyo4.style.fontFamily = "SVN-Product Sans";
  tokyo5.innerText = "- Địa chỉ:              18 Attakai Mura";
  tokyo5.style.fontFamily = "SVN-Product Sans";
  tokyo6.innerText = "- Đ. dây nóng: +81 3-8223-3902";
  tokyo6.style.fontFamily = "SVN-Product Sans";

  ven1.innerText = "Venice, Ý";
  ven1.style.fontFamily = "SVN-Product Sans";
  ven2.innerText = "- Số phòng:        220";
  ven2.style.fontFamily = "SVN-Product Sans";
  ven3.innerText = "- Loại k. sạn:     Cao cấp";
  ven3.style.fontFamily = "SVN-Product Sans";
  ven4.innerText = "- Loại phòng:   Đơn, Tổng thống, Kề bể bơi";
  ven4.style.fontFamily = "SVN-Product Sans";
  ven5.innerText = "- Địa chỉ:              4 Luce del Giorno";
  ven5.style.fontFamily = "SVN-Product Sans";
  ven6.innerText = "- Đ. dây nóng: +39 235-6538-1073";
  ven6.style.fontFamily = "SVN-Product Sans";

  c1.innerText =
    "Bạn đã đặt phòng N/A từ ngày N/A tới N/A với giá tiền là N/A mỗi đêm";
  c1.style.fontFamily = "SVN-Product Sans";
  c2.innerText =
    "Sau khi xác nhận mọi thông tin là chính xác, vui lòng điền thông tin thẻ ngân hàng dưới đây để thanh toán:";
  c2.style.fontFamily = "SVN-Product Sans";
  c3.innerText = "Chủ tài khoản:";
  c3.style.fontFamily = "SVN-Product Sans";
  c4.innerText = "Số thẻ ngân hàng:";
  c4.style.fontFamily = "SVN-Product Sans";
  c5.innerText = "Ngày hết hạn thẻ:";
  c5.style.fontFamily = "SVN-Product Sans";
  c6.innerText = "Mã bảo mật thẻ:";
  c6.style.fontFamily = "SVN-Product Sans";
  c7.innerText = "Bạn có thể tạo tài khoản để tự động điền biểu mẫu trên";
  c7.style.fontFamily = "SVN-Product Sans";

  cOwner.style.fontFamily = "SVN-Product Sans";
  cNumber.style.fontFamily = "SVN-Product Sans";
  cExpire.style.fontFamily = "SVN-Product Sans";
  cCVC.style.fontFamily = "SVN-Product Sans";

  cActive.innerText = "Thanh toán";
  cBtn.innerText = "Thanh toán";
  back.innerText = "Quay lại";

  berlinText1.style.fontFamily = "SVN-Product Sans";
  berlinText2.style.fontFamily = "SVN-Product Sans";
  berlinText3.style.fontFamily = "SVN-Product Sans";
  berlinText4.style.fontFamily = "SVN-Product Sans";
  berlinText5.style.fontFamily = "SVN-Product Sans";
  berlinText6.style.fontFamily = "SVN-Product Sans";
  berlinText7.style.fontFamily = "SVN-Product Sans";
  berlinText8.style.fontFamily = "SVN-Product Sans";
  berlinText9.style.fontFamily = "SVN-Product Sans";
  berlinText10.style.fontFamily = "SVN-Product Sans";
  berlinText11.style.fontFamily = "SVN-Product Sans";
  berlinText12.style.fontFamily = "SVN-Product Sans";
  berlinText13.style.fontFamily = "SVN-Product Sans";
  berlinText14.style.fontFamily = "SVN-Product Sans";
  berlinText15.style.fontFamily = "SVN-Product Sans";
  berlinText16.style.fontFamily = "SVN-Product Sans";
  berlinText17.style.fontFamily = "SVN-Product Sans";
  berlinText18.style.fontFamily = "SVN-Product Sans";
  berlinText19.style.fontFamily = "SVN-Product Sans";
  berlinText20.style.fontFamily = "SVN-Product Sans";
  berlinText21.style.fontFamily = "SVN-Product Sans";
  berlinText22.style.fontFamily = "SVN-Product Sans";
  berlinText23.style.fontFamily = "SVN-Product Sans";
  berlinText24.style.fontFamily = "SVN-Product Sans";
  berlinText25.style.fontFamily = "SVN-Product Sans";
  berlinText26.style.fontFamily = "SVN-Product Sans";

  berlinText2.style.fontSize = "20px";
  berlinText3.style.fontSize = "20px";
  berlinText4.style.fontSize = "20px";
  berlinText5.style.fontSize = "20px";
  berlinText6.style.fontSize = "20px";
  berlinText7.style.fontSize = "20px";
  berlinText8.style.fontSize = "20px";
  berlinText9.style.fontSize = "18px";
  berlinText10.style.fontSize = "17px";
  berlinText11.style.fontSize = "17px";
  berlinText12.style.fontSize = "17px";
  berlinText13.style.fontSize = "17px";
  berlinText14.style.fontSize = "16px";
  berlinText15.style.fontSize = "18px";
  berlinText16.style.fontSize = "17px";
  berlinText17.style.fontSize = "17px";
  berlinText18.style.fontSize = "17px";
  berlinText19.style.fontSize = "17px";
  berlinText20.style.fontSize = "16px";
  berlinText21.style.fontSize = "18px";
  berlinText22.style.fontSize = "17px";
  berlinText23.style.fontSize = "17px";
  berlinText24.style.fontSize = "17px";
  berlinText25.style.fontSize = "17px";
  berlinText26.style.fontSize = "16px";

  cairoText1.style.fontFamily = "SVN-Product Sans";
  cairoText2.style.fontFamily = "SVN-Product Sans";
  cairoText3.style.fontFamily = "SVN-Product Sans";
  cairoText4.style.fontFamily = "SVN-Product Sans";
  cairoText5.style.fontFamily = "SVN-Product Sans";
  cairoText6.style.fontFamily = "SVN-Product Sans";
  cairoText7.style.fontFamily = "SVN-Product Sans";
  cairoText8.style.fontFamily = "SVN-Product Sans";
  cairoText9.style.fontFamily = "SVN-Product Sans";
  cairoText10.style.fontFamily = "SVN-Product Sans";
  cairoText11.style.fontFamily = "SVN-Product Sans";
  cairoText12.style.fontFamily = "SVN-Product Sans";
  cairoText13.style.fontFamily = "SVN-Product Sans";
  cairoText14.style.fontFamily = "SVN-Product Sans";
  cairoText15.style.fontFamily = "SVN-Product Sans";
  cairoText16.style.fontFamily = "SVN-Product Sans";
  cairoText17.style.fontFamily = "SVN-Product Sans";
  cairoText18.style.fontFamily = "SVN-Product Sans";
  cairoText19.style.fontFamily = "SVN-Product Sans";
  cairoText20.style.fontFamily = "SVN-Product Sans";

  cairoText2.style.fontSize = "20px";
  cairoText3.style.fontSize = "20px";
  cairoText4.style.fontSize = "20px";
  cairoText5.style.fontSize = "20px";
  cairoText6.style.fontSize = "20px";
  cairoText7.style.fontSize = "20px";
  cairoText8.style.fontSize = "20px";
  cairoText9.style.fontSize = "18px";
  cairoText10.style.fontSize = "17px";
  cairoText11.style.fontSize = "17px";
  cairoText12.style.fontSize = "17px";
  cairoText13.style.fontSize = "17px";
  cairoText14.style.fontSize = "16px";
  cairoText15.style.fontSize = "18px";
  cairoText16.style.fontSize = "17px";
  cairoText17.style.fontSize = "17px";
  cairoText18.style.fontSize = "17px";
  cairoText19.style.fontSize = "17px";
  cairoText20.style.fontSize = "16px";

  capeText1.style.fontFamily = "SVN-Product Sans";
  capeText2.style.fontFamily = "SVN-Product Sans";
  capeText3.style.fontFamily = "SVN-Product Sans";
  capeText4.style.fontFamily = "SVN-Product Sans";
  capeText5.style.fontFamily = "SVN-Product Sans";
  capeText6.style.fontFamily = "SVN-Product Sans";
  capeText7.style.fontFamily = "SVN-Product Sans";
  capeText8.style.fontFamily = "SVN-Product Sans";
  capeText9.style.fontFamily = "SVN-Product Sans";
  capeText10.style.fontFamily = "SVN-Product Sans";
  capeText11.style.fontFamily = "SVN-Product Sans";
  capeText12.style.fontFamily = "SVN-Product Sans";
  capeText13.style.fontFamily = "SVN-Product Sans";
  capeText14.style.fontFamily = "SVN-Product Sans";
  capeText15.style.fontFamily = "SVN-Product Sans";
  capeText16.style.fontFamily = "SVN-Product Sans";
  capeText17.style.fontFamily = "SVN-Product Sans";
  capeText18.style.fontFamily = "SVN-Product Sans";
  capeText19.style.fontFamily = "SVN-Product Sans";
  capeText20.style.fontFamily = "SVN-Product Sans";
  capeText21.style.fontFamily = "SVN-Product Sans";
  capeText22.style.fontFamily = "SVN-Product Sans";
  capeText23.style.fontFamily = "SVN-Product Sans";
  capeText24.style.fontFamily = "SVN-Product Sans";
  capeText25.style.fontFamily = "SVN-Product Sans";
  capeText26.style.fontFamily = "SVN-Product Sans";

  capeText2.style.fontSize = "20px";
  capeText3.style.fontSize = "20px";
  capeText4.style.fontSize = "20px";
  capeText5.style.fontSize = "20px";
  capeText6.style.fontSize = "20px";
  capeText7.style.fontSize = "20px";
  capeText8.style.fontSize = "20px";
  capeText9.style.fontSize = "18px";
  capeText10.style.fontSize = "17px";
  capeText11.style.fontSize = "17px";
  capeText12.style.fontSize = "17px";
  capeText13.style.fontSize = "17px";
  capeText14.style.fontSize = "16px";
  capeText15.style.fontSize = "18px";
  capeText16.style.fontSize = "17px";
  capeText17.style.fontSize = "17px";
  capeText18.style.fontSize = "17px";
  capeText19.style.fontSize = "17px";
  capeText20.style.fontSize = "16px";
  capeText21.style.fontSize = "18px";
  capeText22.style.fontSize = "17px";
  capeText23.style.fontSize = "17px";
  capeText24.style.fontSize = "17px";
  capeText25.style.fontSize = "17px";
  capeText26.style.fontSize = "16px";

  dubaiText1.style.fontFamily = "SVN-Product Sans";
  dubaiText2.style.fontFamily = "SVN-Product Sans";
  dubaiText3.style.fontFamily = "SVN-Product Sans";
  dubaiText4.style.fontFamily = "SVN-Product Sans";
  dubaiText5.style.fontFamily = "SVN-Product Sans";
  dubaiText6.style.fontFamily = "SVN-Product Sans";
  dubaiText7.style.fontFamily = "SVN-Product Sans";
  dubaiText8.style.fontFamily = "SVN-Product Sans";
  dubaiText9.style.fontFamily = "SVN-Product Sans";
  dubaiText10.style.fontFamily = "SVN-Product Sans";
  dubaiText11.style.fontFamily = "SVN-Product Sans";
  dubaiText12.style.fontFamily = "SVN-Product Sans";
  dubaiText13.style.fontFamily = "SVN-Product Sans";
  dubaiText14.style.fontFamily = "SVN-Product Sans";
  dubaiText15.style.fontFamily = "SVN-Product Sans";
  dubaiText16.style.fontFamily = "SVN-Product Sans";
  dubaiText17.style.fontFamily = "SVN-Product Sans";
  dubaiText18.style.fontFamily = "SVN-Product Sans";
  dubaiText19.style.fontFamily = "SVN-Product Sans";
  dubaiText20.style.fontFamily = "SVN-Product Sans";
  dubaiText21.style.fontFamily = "SVN-Product Sans";
  dubaiText22.style.fontFamily = "SVN-Product Sans";
  dubaiText23.style.fontFamily = "SVN-Product Sans";
  dubaiText24.style.fontFamily = "SVN-Product Sans";
  dubaiText25.style.fontFamily = "SVN-Product Sans";
  dubaiText26.style.fontFamily = "SVN-Product Sans";

  dubaiText2.style.fontSize = "20px";
  dubaiText3.style.fontSize = "20px";
  dubaiText4.style.fontSize = "20px";
  dubaiText5.style.fontSize = "20px";
  dubaiText6.style.fontSize = "20px";
  dubaiText7.style.fontSize = "20px";
  dubaiText8.style.fontSize = "20px";
  dubaiText9.style.fontSize = "18px";
  dubaiText10.style.fontSize = "17px";
  dubaiText11.style.fontSize = "17px";
  dubaiText12.style.fontSize = "17px";
  dubaiText13.style.fontSize = "17px";
  dubaiText14.style.fontSize = "16px";
  dubaiText15.style.fontSize = "18px";
  dubaiText16.style.fontSize = "17px";
  dubaiText17.style.fontSize = "17px";
  dubaiText18.style.fontSize = "17px";
  dubaiText19.style.fontSize = "17px";
  dubaiText20.style.fontSize = "16px";
  dubaiText21.style.fontSize = "18px";
  dubaiText22.style.fontSize = "17px";
  dubaiText23.style.fontSize = "17px";
  dubaiText24.style.fontSize = "17px";
  dubaiText25.style.fontSize = "17px";
  dubaiText26.style.fontSize = "16px";

  haloText1.style.fontFamily = "SVN-Product Sans";
  haloText2.style.fontFamily = "SVN-Product Sans";
  haloText3.style.fontFamily = "SVN-Product Sans";
  haloText4.style.fontFamily = "SVN-Product Sans";
  haloText5.style.fontFamily = "SVN-Product Sans";
  haloText6.style.fontFamily = "SVN-Product Sans";
  haloText7.style.fontFamily = "SVN-Product Sans";
  haloText8.style.fontFamily = "SVN-Product Sans";
  haloText9.style.fontFamily = "SVN-Product Sans";
  haloText10.style.fontFamily = "SVN-Product Sans";
  haloText11.style.fontFamily = "SVN-Product Sans";
  haloText12.style.fontFamily = "SVN-Product Sans";
  haloText13.style.fontFamily = "SVN-Product Sans";
  haloText14.style.fontFamily = "SVN-Product Sans";
  haloText15.style.fontFamily = "SVN-Product Sans";
  haloText16.style.fontFamily = "SVN-Product Sans";
  haloText17.style.fontFamily = "SVN-Product Sans";
  haloText18.style.fontFamily = "SVN-Product Sans";
  haloText19.style.fontFamily = "SVN-Product Sans";
  haloText20.style.fontFamily = "SVN-Product Sans";
  haloText21.style.fontFamily = "SVN-Product Sans";
  haloText22.style.fontFamily = "SVN-Product Sans";
  haloText23.style.fontFamily = "SVN-Product Sans";
  haloText24.style.fontFamily = "SVN-Product Sans";
  haloText25.style.fontFamily = "SVN-Product Sans";
  haloText26.style.fontFamily = "SVN-Product Sans";

  haloText2.style.fontSize = "20px";
  haloText3.style.fontSize = "20px";
  haloText4.style.fontSize = "20px";
  haloText5.style.fontSize = "20px";
  haloText6.style.fontSize = "20px";
  haloText7.style.fontSize = "20px";
  haloText8.style.fontSize = "20px";
  haloText9.style.fontSize = "18px";
  haloText10.style.fontSize = "17px";
  haloText11.style.fontSize = "17px";
  haloText12.style.fontSize = "17px";
  haloText13.style.fontSize = "17px";
  haloText14.style.fontSize = "16px";
  haloText15.style.fontSize = "18px";
  haloText16.style.fontSize = "17px";
  haloText17.style.fontSize = "17px";
  haloText18.style.fontSize = "17px";
  haloText19.style.fontSize = "17px";
  haloText20.style.fontSize = "16px";
  haloText21.style.fontSize = "18px";
  haloText22.style.fontSize = "17px";
  haloText23.style.fontSize = "17px";
  haloText24.style.fontSize = "17px";
  haloText25.style.fontSize = "17px";
  haloText26.style.fontSize = "16px";

  lasText1.style.fontFamily = "SVN-Product Sans";
  lasText2.style.fontFamily = "SVN-Product Sans";
  lasText3.style.fontFamily = "SVN-Product Sans";
  lasText4.style.fontFamily = "SVN-Product Sans";
  lasText5.style.fontFamily = "SVN-Product Sans";
  lasText6.style.fontFamily = "SVN-Product Sans";
  lasText7.style.fontFamily = "SVN-Product Sans";
  lasText8.style.fontFamily = "SVN-Product Sans";
  lasText9.style.fontFamily = "SVN-Product Sans";
  lasText10.style.fontFamily = "SVN-Product Sans";
  lasText11.style.fontFamily = "SVN-Product Sans";
  lasText12.style.fontFamily = "SVN-Product Sans";
  lasText13.style.fontFamily = "SVN-Product Sans";
  lasText14.style.fontFamily = "SVN-Product Sans";
  lasText15.style.fontFamily = "SVN-Product Sans";
  lasText16.style.fontFamily = "SVN-Product Sans";
  lasText17.style.fontFamily = "SVN-Product Sans";
  lasText18.style.fontFamily = "SVN-Product Sans";
  lasText19.style.fontFamily = "SVN-Product Sans";
  lasText20.style.fontFamily = "SVN-Product Sans";
  lasText21.style.fontFamily = "SVN-Product Sans";
  lasText22.style.fontFamily = "SVN-Product Sans";
  lasText23.style.fontFamily = "SVN-Product Sans";
  lasText24.style.fontFamily = "SVN-Product Sans";
  lasText25.style.fontFamily = "SVN-Product Sans";
  lasText26.style.fontFamily = "SVN-Product Sans";

  lasText2.style.fontSize = "20px";
  lasText3.style.fontSize = "20px";
  lasText4.style.fontSize = "20px";
  lasText5.style.fontSize = "20px";
  lasText6.style.fontSize = "20px";
  lasText7.style.fontSize = "20px";
  lasText8.style.fontSize = "20px";
  lasText9.style.fontSize = "18px";
  lasText10.style.fontSize = "17px";
  lasText11.style.fontSize = "17px";
  lasText12.style.fontSize = "17px";
  lasText13.style.fontSize = "17px";
  lasText14.style.fontSize = "16px";
  lasText15.style.fontSize = "18px";
  lasText16.style.fontSize = "17px";
  lasText17.style.fontSize = "17px";
  lasText18.style.fontSize = "17px";
  lasText19.style.fontSize = "17px";
  lasText20.style.fontSize = "16px";
  lasText21.style.fontSize = "18px";
  lasText22.style.fontSize = "17px";
  lasText23.style.fontSize = "17px";
  lasText24.style.fontSize = "17px";
  lasText25.style.fontSize = "17px";
  lasText26.style.fontSize = "16px";

  parisText1.style.fontFamily = "SVN-Product Sans";
  parisText2.style.fontFamily = "SVN-Product Sans";
  parisText3.style.fontFamily = "SVN-Product Sans";
  parisText4.style.fontFamily = "SVN-Product Sans";
  parisText5.style.fontFamily = "SVN-Product Sans";
  parisText6.style.fontFamily = "SVN-Product Sans";
  parisText7.style.fontFamily = "SVN-Product Sans";
  parisText8.style.fontFamily = "SVN-Product Sans";
  parisText9.style.fontFamily = "SVN-Product Sans";
  parisText10.style.fontFamily = "SVN-Product Sans";
  parisText11.style.fontFamily = "SVN-Product Sans";
  parisText12.style.fontFamily = "SVN-Product Sans";
  parisText13.style.fontFamily = "SVN-Product Sans";
  parisText14.style.fontFamily = "SVN-Product Sans";
  parisText15.style.fontFamily = "SVN-Product Sans";
  parisText16.style.fontFamily = "SVN-Product Sans";
  parisText17.style.fontFamily = "SVN-Product Sans";
  parisText18.style.fontFamily = "SVN-Product Sans";
  parisText19.style.fontFamily = "SVN-Product Sans";
  parisText20.style.fontFamily = "SVN-Product Sans";
  parisText21.style.fontFamily = "SVN-Product Sans";
  parisText22.style.fontFamily = "SVN-Product Sans";
  parisText23.style.fontFamily = "SVN-Product Sans";
  parisText24.style.fontFamily = "SVN-Product Sans";
  parisText25.style.fontFamily = "SVN-Product Sans";
  parisText26.style.fontFamily = "SVN-Product Sans";

  parisText2.style.fontSize = "20px";
  parisText3.style.fontSize = "20px";
  parisText4.style.fontSize = "20px";
  parisText5.style.fontSize = "20px";
  parisText6.style.fontSize = "20px";
  parisText7.style.fontSize = "20px";
  parisText8.style.fontSize = "20px";
  parisText9.style.fontSize = "18px";
  parisText10.style.fontSize = "17px";
  parisText11.style.fontSize = "17px";
  parisText12.style.fontSize = "17px";
  parisText13.style.fontSize = "17px";
  parisText14.style.fontSize = "16px";
  parisText15.style.fontSize = "18px";
  parisText16.style.fontSize = "17px";
  parisText17.style.fontSize = "17px";
  parisText18.style.fontSize = "17px";
  parisText19.style.fontSize = "17px";
  parisText20.style.fontSize = "16px";
  parisText21.style.fontSize = "18px";
  parisText22.style.fontSize = "17px";
  parisText23.style.fontSize = "17px";
  parisText24.style.fontSize = "17px";
  parisText25.style.fontSize = "17px";
  parisText26.style.fontSize = "16px";

  rioText1.style.fontFamily = "SVN-Product Sans";
  rioText2.style.fontFamily = "SVN-Product Sans";
  rioText3.style.fontFamily = "SVN-Product Sans";
  rioText4.style.fontFamily = "SVN-Product Sans";
  rioText5.style.fontFamily = "SVN-Product Sans";
  rioText6.style.fontFamily = "SVN-Product Sans";
  rioText7.style.fontFamily = "SVN-Product Sans";
  rioText8.style.fontFamily = "SVN-Product Sans";
  rioText9.style.fontFamily = "SVN-Product Sans";
  rioText10.style.fontFamily = "SVN-Product Sans";
  rioText11.style.fontFamily = "SVN-Product Sans";
  rioText12.style.fontFamily = "SVN-Product Sans";
  rioText13.style.fontFamily = "SVN-Product Sans";
  rioText14.style.fontFamily = "SVN-Product Sans";
  rioText15.style.fontFamily = "SVN-Product Sans";
  rioText16.style.fontFamily = "SVN-Product Sans";
  rioText17.style.fontFamily = "SVN-Product Sans";
  rioText18.style.fontFamily = "SVN-Product Sans";
  rioText19.style.fontFamily = "SVN-Product Sans";
  rioText20.style.fontFamily = "SVN-Product Sans";
  rioText21.style.fontFamily = "SVN-Product Sans";
  rioText22.style.fontFamily = "SVN-Product Sans";
  rioText23.style.fontFamily = "SVN-Product Sans";
  rioText24.style.fontFamily = "SVN-Product Sans";
  rioText25.style.fontFamily = "SVN-Product Sans";
  rioText26.style.fontFamily = "SVN-Product Sans";

  rioText2.style.fontSize = "20px";
  rioText3.style.fontSize = "20px";
  rioText4.style.fontSize = "20px";
  rioText5.style.fontSize = "20px";
  rioText6.style.fontSize = "20px";
  rioText7.style.fontSize = "20px";
  rioText8.style.fontSize = "20px";
  rioText9.style.fontSize = "18px";
  rioText10.style.fontSize = "17px";
  rioText11.style.fontSize = "17px";
  rioText12.style.fontSize = "17px";
  rioText13.style.fontSize = "17px";
  rioText14.style.fontSize = "16px";
  rioText15.style.fontSize = "18px";
  rioText16.style.fontSize = "17px";
  rioText17.style.fontSize = "17px";
  rioText18.style.fontSize = "17px";
  rioText19.style.fontSize = "17px";
  rioText20.style.fontSize = "16px";
  rioText21.style.fontSize = "18px";
  rioText22.style.fontSize = "17px";
  rioText23.style.fontSize = "17px";
  rioText24.style.fontSize = "17px";
  rioText25.style.fontSize = "17px";
  rioText26.style.fontSize = "16px";

  romeText1.style.fontFamily = "SVN-Product Sans";
  romeText2.style.fontFamily = "SVN-Product Sans";
  romeText3.style.fontFamily = "SVN-Product Sans";
  romeText4.style.fontFamily = "SVN-Product Sans";
  romeText5.style.fontFamily = "SVN-Product Sans";
  romeText6.style.fontFamily = "SVN-Product Sans";
  romeText7.style.fontFamily = "SVN-Product Sans";
  romeText8.style.fontFamily = "SVN-Product Sans";
  romeText9.style.fontFamily = "SVN-Product Sans";
  romeText10.style.fontFamily = "SVN-Product Sans";
  romeText11.style.fontFamily = "SVN-Product Sans";
  romeText12.style.fontFamily = "SVN-Product Sans";
  romeText13.style.fontFamily = "SVN-Product Sans";
  romeText14.style.fontFamily = "SVN-Product Sans";
  romeText15.style.fontFamily = "SVN-Product Sans";
  romeText16.style.fontFamily = "SVN-Product Sans";
  romeText17.style.fontFamily = "SVN-Product Sans";
  romeText18.style.fontFamily = "SVN-Product Sans";
  romeText19.style.fontFamily = "SVN-Product Sans";
  romeText20.style.fontFamily = "SVN-Product Sans";
  romeText21.style.fontFamily = "SVN-Product Sans";
  romeText22.style.fontFamily = "SVN-Product Sans";
  romeText23.style.fontFamily = "SVN-Product Sans";
  romeText24.style.fontFamily = "SVN-Product Sans";
  romeText25.style.fontFamily = "SVN-Product Sans";
  romeText26.style.fontFamily = "SVN-Product Sans";

  romeText2.style.fontSize = "20px";
  romeText3.style.fontSize = "20px";
  romeText4.style.fontSize = "20px";
  romeText5.style.fontSize = "20px";
  romeText6.style.fontSize = "20px";
  romeText7.style.fontSize = "20px";
  romeText8.style.fontSize = "20px";
  romeText9.style.fontSize = "18px";
  romeText10.style.fontSize = "17px";
  romeText11.style.fontSize = "17px";
  romeText12.style.fontSize = "17px";
  romeText13.style.fontSize = "17px";
  romeText14.style.fontSize = "16px";
  romeText15.style.fontSize = "18px";
  romeText16.style.fontSize = "17px";
  romeText17.style.fontSize = "17px";
  romeText18.style.fontSize = "17px";
  romeText19.style.fontSize = "17px";
  romeText20.style.fontSize = "16px";
  romeText21.style.fontSize = "18px";
  romeText22.style.fontSize = "17px";
  romeText23.style.fontSize = "17px";
  romeText24.style.fontSize = "17px";
  romeText25.style.fontSize = "17px";
  romeText26.style.fontSize = "16px";

  sydText1.style.fontFamily = "SVN-Product Sans";
  sydText2.style.fontFamily = "SVN-Product Sans";
  sydText3.style.fontFamily = "SVN-Product Sans";
  sydText4.style.fontFamily = "SVN-Product Sans";
  sydText5.style.fontFamily = "SVN-Product Sans";
  sydText6.style.fontFamily = "SVN-Product Sans";
  sydText7.style.fontFamily = "SVN-Product Sans";
  sydText8.style.fontFamily = "SVN-Product Sans";
  sydText9.style.fontFamily = "SVN-Product Sans";
  sydText10.style.fontFamily = "SVN-Product Sans";
  sydText11.style.fontFamily = "SVN-Product Sans";
  sydText12.style.fontFamily = "SVN-Product Sans";
  sydText13.style.fontFamily = "SVN-Product Sans";
  sydText14.style.fontFamily = "SVN-Product Sans";
  sydText15.style.fontFamily = "SVN-Product Sans";
  sydText16.style.fontFamily = "SVN-Product Sans";
  sydText17.style.fontFamily = "SVN-Product Sans";
  sydText18.style.fontFamily = "SVN-Product Sans";
  sydText19.style.fontFamily = "SVN-Product Sans";
  sydText20.style.fontFamily = "SVN-Product Sans";
  sydText21.style.fontFamily = "SVN-Product Sans";
  sydText22.style.fontFamily = "SVN-Product Sans";
  sydText23.style.fontFamily = "SVN-Product Sans";
  sydText24.style.fontFamily = "SVN-Product Sans";
  sydText25.style.fontFamily = "SVN-Product Sans";
  sydText26.style.fontFamily = "SVN-Product Sans";

  sydText2.style.fontSize = "20px";
  sydText3.style.fontSize = "20px";
  sydText4.style.fontSize = "20px";
  sydText5.style.fontSize = "20px";
  sydText6.style.fontSize = "20px";
  sydText7.style.fontSize = "20px";
  sydText8.style.fontSize = "20px";
  sydText9.style.fontSize = "18px";
  sydText10.style.fontSize = "17px";
  sydText11.style.fontSize = "17px";
  sydText12.style.fontSize = "17px";
  sydText13.style.fontSize = "17px";
  sydText14.style.fontSize = "16px";
  sydText15.style.fontSize = "18px";
  sydText16.style.fontSize = "17px";
  sydText17.style.fontSize = "17px";
  sydText18.style.fontSize = "17px";
  sydText19.style.fontSize = "17px";
  sydText20.style.fontSize = "16px";
  sydText21.style.fontSize = "18px";
  sydText22.style.fontSize = "17px";
  sydText23.style.fontSize = "17px";
  sydText24.style.fontSize = "17px";
  sydText25.style.fontSize = "17px";
  sydText26.style.fontSize = "16px";

  // Dịch
  berlinText1.innerText = "Berlin, Đức";
  berlinText2.innerText = "- Tổng số phòng:          280";
  berlinText3.innerText = "- Loại khách sạn:          Cổ điển";
  berlinText4.innerText =
    "- Cơ sở vật chất:            Hồ bơi, Sky Bar, Bữa sáng Buffet cho Suite";
  berlinText5.innerText =
    "- Địa danh lân cận:      Bức tường Berlin, Đài tưởng niệm Holocaust";
  berlinText6.innerText =
    "- Địa chỉ:                              18 Zufällige Straße";
  berlinText7.innerText = "- Đường dây nóng:     +49 900-3-082103";
  berlinText8.innerText =
    "- Múi giờ:                             UTC +2 / Giờ mùa hè Trung Âu";

  cairoText1.innerText = "Cairo, Ai Cập";
  cairoText2.innerText = "- Tổng số phòng:          45";
  cairoText3.innerText = "- Loại khách sạn:          Căn riêng";
  cairoText4.innerText =
    "- Cơ sở vật chất:            Hồ bơi, Bar hồ bơi, Bãi đỗ xe";
  cairoText5.innerText =
    "- Địa danh lân cận:      Kim tự tháp, Nhà thờ và công viên Al-Azhar";
  cairoText6.innerText =
    "- Địa chỉ:                              1 Sharie Almisriiyn";
  cairoText7.innerText = "- Đường dây nóng:     +20 2-3025-3403";
  cairoText8.innerText =
    "- Múi giờ:                             UTC +3 / Giờ mùa hè Đông Âu";

  capeText1.innerText = "Cape Town, Nam Phi";
  capeText2.innerText = "- Tổng số phòng:          170";
  capeText3.innerText = "- Loại khách sạn:          Cao cấp";
  capeText4.innerText = "- Cơ sở vật chất:            Hồ bơi, Sky Bar, Gym";
  capeText5.innerText =
    "- Địa danh lân cận:      Núi Bàn, Vườn Bách thảo Kirstenbosch";
  capeText6.innerText =
    "- Địa chỉ:                              224-228 Paleisweg";
  capeText7.innerText = "- Đường dây nóng:     +27 21-339-3014";
  capeText8.innerText =
    "- Múi giờ:                             UTC +2 / Giờ chuẩn Nam Phi";

  dubaiText1.innerText = "Dubai,  Các Tiểu vương quốc Ả Rập TN";
  dubaiText2.innerText = "- Tổng số phòng:          520";
  dubaiText3.innerText = "- Loại khách sạn:          Cao cấp";
  dubaiText4.innerText =
    "- Cơ sở vật chất:            Hồ bơi, Sky Bar, Gym, Spa, Thư viện";
  dubaiText5.innerText =
    "- Địa danh lân cận:      Burj Khalifa, Palm Jumeirah, Khung Dubai";
  dubaiText6.innerText =
    "- Địa chỉ:                              47B Sharie Alearab";
  dubaiText7.innerText = "- Đường dây nóng:     +971 04-239-2411";
  dubaiText8.innerText =
    "- Múi giờ:                             UTC +4 / Giờ chuẩn vùng Vịnh";

  haloText1.innerText = "Hạ Long, Việt Nam";
  haloText2.innerText = "- Tổng số phòng:          80";
  haloText3.innerText = "- Loại khách sạn:          Du thuyền";
  haloText4.innerText =
    "- Cơ sở vật chất:            Bar, Spa, Thuyền chèo, Giá đã kèm bữa ăn";
  haloText5.innerText = "- Địa danh lân cận:      Vịnh Hạ Long";
  haloText6.innerText =
    "- Địa chỉ:                              140 Hoàng Phúc Lam";
  haloText7.innerText = "- Đường dây nóng:     +84 912-253-231";
  haloText8.innerText =
    "- Múi giờ:                             UTC +7 / Giờ Đông Dương";

  lasText1.innerText = "Las Vegas, Hoa Kỳ";
  lasText2.innerText = "- Tổng số phòng:          260";
  lasText3.innerText = "- Loại khách sạn:          Cổ điển";
  lasText4.innerText = "- Cơ sở vật chất:            Hồ bơi, Sky Bar, Gym";
  lasText5.innerText = "- Địa danh lân cận:      Khu Bellagio, Đường Fremont";
  lasText6.innerText =
    "- Địa chỉ:                              38 Norville Boulevard";
  lasText7.innerText = "- Đường dây nóng:     +1 702-593-9037";
  lasText8.innerText =
    "- Múi giờ:                             UTC -7 / Giờ Ánh sáng ngày Thái Bình Dương";

  parisText1.innerText = "Paris, Pháp";
  parisText2.innerText = "- Tổng số phòng:          300";
  parisText3.innerText = "- Loại khách sạn:          Cổ điển";
  parisText4.innerText = "- Cơ sở vật chất:            Bar, Gym, Thư viện";
  parisText5.innerText =
    "- Địa danh lân cận:      Tháp Eiffel, Bảo tàng Louvre, Nhà thờ Đức Bà";
  parisText6.innerText =
    "- Địa chỉ:                              418 Belle Rue";
  parisText7.innerText = "- Đường dây nóng:     +33 1-20-49-23-48";
  parisText8.innerText =
    "- Múi giờ:                             UTC +2 / Giờ mùa hè Trung Âu";

  rioText1.innerText = "Rio de Janeiro, Brazil";
  rioText2.innerText = "- Tổng số phòng:          130";
  rioText3.innerText = "- Loại khách sạn:          Cổ điển";
  rioText4.innerText = "- Cơ sở vật chất:            Hồ bơi, Gym, Spa";
  rioText5.innerText =
    "- Địa danh lân cận:      Tượng Chúa Kitô Cứu Thế, Rừng Tijuca";
  rioText6.innerText =
    "- Địa chỉ:                              92A Endereço Falso";
  rioText7.innerText = "- Đường dây nóng:     +55 955-436-6949";
  rioText8.innerText =
    "- Múi giờ:                             UTC -3 / Giờ Brazil";

  romeText1.innerText = "Rome, Ý";
  romeText2.innerText = "- Tổng số phòng:          290";
  romeText3.innerText = "- Loại khách sạn:          Cổ điển";
  romeText4.innerText =
    "- Cơ sở vật chất:            Sky Bar, Nhà hàng trên cao";
  romeText5.innerText =
    "- Địa danh lân cận:      Đấu trường LM, Đền Pantheon, Vương cung";
  romeText6.innerText =
    "- Địa chỉ:                              200 Viale dei Funghi";
  romeText7.innerText = "- Đường dây nóng:     +39 331-9238-9016";
  romeText8.innerText =
    "- Múi giờ:                             UTC +2 / Giờ mùa hè Trung Âu";

  sydText1.innerText = "Sydney, Úc";
  sydText2.innerText = "- Tổng số phòng:          105";
  sydText3.innerText = "- Loại khách sạn:          Du thuyền";
  sydText4.innerText =
    "- Cơ sở vật chất:           Thư viện, Gym, Spa, Nhà hàng";
  sydText5.innerText =
    "- Địa danh lân cận:      Nhà hát Opera Sydney, Cầu cảng Sydney";
  sydText6.innerText =
    "- Địa chỉ:                              49 Victorian Seaside";
  sydText7.innerText = "- Đường dây nóng:     +61 428-384-388";
  sydText8.innerText =
    "- Múi giờ:                             UTC +10 / Giờ chuẩn Đông Úc";

  berlinText9.innerText = "Phòng đơn";
  berlinText10.innerText = "Dành cho: 1-2 người";
  berlinText11.innerText = "Số phòng: 120";
  berlinText12.innerText = "Giá: $35/đêm";
  berlinText13.innerText = "Mở: Quanh năm";
  berlinText14.innerText = "Chọn";
  berlinText15.innerText = "Phòng đôi (2 Giường đơn)";
  berlinText16.innerText = "Dành cho: 2 người";
  berlinText17.innerText = "Số phòng: 80";
  berlinText18.innerText = "Giá: $58/đêm";
  berlinText19.innerText = "Mở: Quanh năm";
  berlinText20.innerText = "Chọn";
  berlinText21.innerText = "Suite (1 G. đơn + 2 G. đôi)";
  berlinText22.innerText = "Dành cho: 5-7 người";
  berlinText23.innerText = "Số phòng: 80";
  berlinText24.innerText = "Giá: $219/đêm";
  berlinText25.innerText = "Mở: Quanh năm";
  berlinText26.innerText = "Chọn";

  cairoText9.innerText = "Bungalow";
  cairoText10.innerText = "Dành cho: 3-4 người";
  cairoText11.innerText = "Số phòng: 30";
  cairoText12.innerText = "Giá: $84/đêm";
  cairoText13.innerText = "Mở: Quanh năm";
  cairoText14.innerText = "Chọn";
  cairoText15.innerText = "Biệt thự";
  cairoText16.innerText = "Dành cho: 5-7 người";
  cairoText17.innerText = "Số phòng: 15";
  cairoText18.innerText = "Giá: $219/đêm";
  cairoText19.innerText = "Mở: Quanh năm";
  cairoText20.innerText = "Chọn";

  capeText9.innerText = "Suite (2 Giường đôi)";
  capeText10.innerText = "Dành cho: 4-5 người";
  capeText11.innerText = "Số phòng: 70";
  capeText12.innerText = "Giá: $152/đêm";
  capeText13.innerText = "Mở: Quanh năm";
  capeText14.innerText = "Chọn";
  capeText15.innerText = "Suite Tổng thống";
  capeText16.innerText = "Dành cho: 6-8 người";
  capeText17.innerText = "Số phòng: 35";
  capeText18.innerText = "Giá: $363/đêm";
  capeText19.innerText = "Mở: Quanh năm";
  capeText20.innerText = "Chọn";
  capeText21.innerText = "Kề bể bơi (G. đôi + Bể bơi riêng)";
  capeText22.innerText = "Dành cho: 2-3 người";
  capeText23.innerText = "Số phòng: 65";
  capeText24.innerText = "Giá: $45/đêm";
  capeText25.innerText = "Mở: Đã bán hết";
  capeText26.innerText = "Chọn";

  dubaiText9.innerText = "Mini Suite (1 G. đơn + 1 G. đôi)";
  dubaiText10.innerText = "Dành cho: 3-4 người";
  dubaiText11.innerText = "Số phòng: 140";
  dubaiText12.innerText = "Giá: $84/đêm";
  dubaiText13.innerText = "Mở: Quanh năm";
  dubaiText14.innerText = "Chọn";
  dubaiText15.innerText = "Suite (3 Giường đôi)";
  dubaiText16.innerText = "Dành cho: 6-8 người";
  dubaiText17.innerText = "Số phòng: 300";
  dubaiText18.innerText = "Giá: $219/đêm";
  dubaiText19.innerText = "Mở: Quanh năm";
  dubaiText20.innerText = "Chọn";
  dubaiText21.innerText = "Suite Tổng thống";
  dubaiText22.innerText = "Dành cho: 6-8 người";
  dubaiText23.innerText = "Số phòng: 80";
  dubaiText24.innerText = "Giá: $363/đêm";
  dubaiText25.innerText = "Mở: Quanh năm";
  dubaiText26.innerText = "Chọn";

  haloText9.innerText = "Khoang trong (2 Giường đơn)";
  haloText10.innerText = "Dành cho: 2 người";
  haloText11.innerText = "Số phòng: 40";
  haloText12.innerText = "Giá: $84/đêm";
  haloText13.innerText = "Mở: Chỉ trong tháng 5";
  haloText14.innerText = "Chọn";
  haloText15.innerText = "Ban công (1 Giường đôi)";
  haloText16.innerText = "Dành cho: 2-3 người";
  haloText17.innerText = "Số phòng: 25";
  haloText18.innerText = "Giá: $109/đêm";
  haloText19.innerText = "Mở: Chỉ trong tháng 5";
  haloText20.innerText = "Chọn";
  haloText21.innerText = "Suite (2 Giường đôi)";
  haloText22.innerText = "Dành cho: 4-5 người";
  haloText23.innerText = "Số phòng: 15";
  haloText24.innerText = "Giá: $152/đêm";
  haloText25.innerText = "Mở: Chỉ trong tháng 5";
  haloText26.innerText = "Chọn";

  lasText9.innerText = "Phòng đơn";
  lasText10.innerText = "Dành cho: 1 người";
  lasText11.innerText = "Số phòng: 70";
  lasText12.innerText = "Giá: $35/đêm";
  lasText13.innerText = "Mở: Quanh năm";
  lasText14.innerText = "Chọn";
  lasText15.innerText = "Phòng giường đôi";
  lasText16.innerText = "Dành cho: 2-3 người";
  lasText17.innerText = "Số phòng: 150";
  lasText18.innerText = "Giá: $58/đêm";
  lasText19.innerText = "Mở: Quanh năm";
  lasText20.innerText = "Chọn";
  lasText21.innerText = "Mini Suite (1 G. đơn + 1 G. đôi)";
  lasText22.innerText = "Dành cho: 3-4 người";
  lasText23.innerText = "Số phòng: 40";
  lasText24.innerText = "Giá: $84/đêm";
  lasText25.innerText = "Mở: Quanh năm";
  lasText26.innerText = "Chọn";

  parisText9.innerText = "Phòng đơn";
  parisText10.innerText = "Dành cho: 1-2 người";
  parisText11.innerText = "Số phòng: 100";
  parisText12.innerText = "Giá: $35/đêm";
  parisText13.innerText = "Mở: Quanh năm";
  parisText14.innerText = "Chọn";
  parisText15.innerText = "Phòng đôi (2 Giường đơn)";
  parisText16.innerText = "Dành cho: 2-3 người";
  parisText17.innerText = "Số phòng: 130";
  parisText18.innerText = "Giá: $58/đêm";
  parisText19.innerText = "Mở: Quanh năm";
  parisText20.innerText = "Chọn";
  parisText21.innerText = "Suite (1 G. đơn + 2 G. đôi)";
  parisText22.innerText = "Dành cho: 5-7 người";
  parisText23.innerText = "Số phòng: 70";
  parisText24.innerText = "Giá: $219/đêm";
  parisText25.innerText = "Mở: Quanh năm";
  parisText26.innerText = "Chọn";

  rioText9.innerText = "Phòng đơn";
  rioText10.innerText = "Dành cho: 1 người";
  rioText11.innerText = "Số phòng: 50";
  rioText12.innerText = "Giá: $35/đêm";
  rioText13.innerText = "Mở: Quanh năm";
  rioText14.innerText = "Chọn";
  rioText15.innerText = "Phòng đôi (2 Giường đơn)";
  rioText16.innerText = "Dành cho: 2-3 người";
  rioText17.innerText = "Số phòng: 130";
  rioText18.innerText = "Giá: $58/đêm";
  rioText19.innerText = "Mở: Quanh năm";
  rioText20.innerText = "Chọn";
  rioText21.innerText = "Suite (1 G. đơn + 2 G. đôi)";
  rioText22.innerText = "Dành cho: 5-7 người";
  rioText23.innerText = "Số phòng: 70";
  rioText24.innerText = "Giá: $219/đêm";
  rioText25.innerText = "Mở: Quanh năm";
  rioText26.innerText = "Chọn";

  romeText9.innerText = "Phòng đơn";
  romeText10.innerText = "Dành cho: 1-2 người";
  romeText11.innerText = "Số phòng: 140";
  romeText12.innerText = "Giá: $35/đêm";
  romeText13.innerText = "Mở: Quanh năm";
  romeText14.innerText = "Chọn";
  romeText15.innerText = "Phòng đôi (2 Giường đơn)";
  romeText16.innerText = "Dành cho: 2-3 người";
  romeText17.innerText = "Số phòng: 100";
  romeText18.innerText = "Giá: $58/đêm";
  romeText19.innerText = "Mở: Quanh năm";
  romeText20.innerText = "Chọn";
  romeText21.innerText = "Suite (4 Giường đơn)";
  romeText22.innerText = "Dành cho: 4-6 người";
  romeText23.innerText = "Số phòng: 50";
  romeText24.innerText = "Giá: $109/đêm";
  romeText25.innerText = "Mở: Quanh năm";
  romeText26.innerText = "Chọn";

  sydText9.innerText = "Khoang trong (1 Giường đôi)";
  sydText10.innerText = "Dành cho: 2-3 người";
  sydText11.innerText = "Số phòng: 50";
  sydText12.innerText = "Giá: $45/đêm";
  sydText13.innerText = "Mở: Chỉ trong tháng 10";
  sydText14.innerText = "Chọn";
  sydText15.innerText = "Ban công (1 Giường đôi)";
  sydText16.innerText = "Dành cho: 2-3 người";
  sydText17.innerText = "Số phòng: 40";
  sydText18.innerText = "Giá: $58/đêm";
  sydText19.innerText = "Mở: Chỉ trong tháng 10";
  sydText20.innerText = "Chọn";
  sydText21.innerText = "Suite (2 Giường đôi)";
  sydText22.innerText = "Dành cho: 4-5 người";
  sydText23.innerText = "Số phòng: 15";
  sydText24.innerText = "Giá: $152/đêm";
  sydText25.innerText = "Mở: Chỉ trong tháng 10";
  sydText26.innerText = "Chọn";
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

// Date
let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1;
let yyyy = today.getFullYear();

if (dd <= 9) {
  dd = "0" + dd;
}
if (mm <= 9) {
  mm = "0" + mm;
}
today = yyyy + "-" + mm + "-" + dd;
datestart.setAttribute("min", today);
dateend.setAttribute("min", today);

// Confirm + Search by Price
datestart.value = localStorage.getItem("Start");
dateend.value = localStorage.getItem("End");
confirm1.addEventListener("click", function () {
  if (
    datestart.value >= today &&
    dateend.value <= "2024-12-31" &&
    datestart.value < dateend.value
  ) {
    localStorage.setItem("Start", datestart.value);
    localStorage.setItem("End", dateend.value);
  } else if (currentLang == "vi") {
    alert("Giá trị không hợp lệ.");
  } else {
    alert("Invalid value.");
  }
});

let selectbtn = document.querySelectorAll('[selectbtn="yes"]');
selectbtn.forEach(function (select) {
  select.addEventListener("click", function () {
    if (
      localStorage.getItem("Start") == null ||
      localStorage.getItem("End") == null
    ) {
      if (currentLang == "vi") {
        alert("Hãy xác nhận ngày trước.");
      } else {
        alert("Please confirm your dates first.");
      }
    } else {
      localStorage.setItem(
        "Booked Price",
        this.parentElement.getAttribute("price")
      );
      localStorage.setItem(
        "Booked Room",
        this.parentElement.getAttribute("roomname")
      );
      if (currentLang == "vi") {
        alert(
          "Đặt phòng thành công! Lưu ý: bạn chỉ có thể đặt một phòng mỗi lần thanh toán."
        );
      } else {
        alert(
          "Booked successfully! Notice: you can only book one room at a time."
        );
      }
    }
  });
});

let halobtn = document.querySelectorAll('[avabtn="halo"]');
halobtn.forEach(function (halo) {
  halo.addEventListener("click", function () {
    console.log(localStorage.getItem("Start"));
    if (
      localStorage.getItem("Start") == null ||
      localStorage.getItem("End") == null
    ) {
      if (currentLang == "vi") {
        alert("Hãy xác nhận ngày trước.");
      } else {
        alert("Please confirm your dates first.");
      }
    } else if (
      localStorage.getItem("Start").charAt(6) != "5" ||
      localStorage.getItem("End").charAt(6) != "5"
    ) {
      if (currentLang == "vi") {
        alert("Địa điểm này chỉ nhận đặt phòng vào tháng 5.");
      } else {
        alert("This location can only be booked on May.");
      }
    } else {
      localStorage.setItem(
        "Booked Price",
        this.parentElement.getAttribute("price")
      );
      localStorage.setItem(
        "Booked Room",
        this.parentElement.getAttribute("roomname")
      );
      if (currentLang == "vi") {
        alert(
          "Đặt phòng thành công! Lưu ý: bạn chỉ có thể đặt một phòng mỗi lần thanh toán."
        );
      } else {
        alert(
          "Booked successfully! Notice: you can only book one room at a time."
        );
      }
    }
  });
});

let sydneybtn = document.querySelectorAll('[avabtn="sydney"]');
sydneybtn.forEach(function (sydney) {
  sydney.addEventListener("click", function () {
    console.log(localStorage.getItem("Start"));
    if (
      localStorage.getItem("Start") == null ||
      localStorage.getItem("End") == null
    ) {
      if (currentLang == "vi") {
        alert("Hãy xác nhận ngày trước.");
      } else {
        alert("Please confirm your dates first.");
      }
    } else if (
      localStorage.getItem("Start").charAt(6) != "0" ||
      localStorage.getItem("End").charAt(6) != "0"
    ) {
      if (currentLang == "vi") {
        alert("Địa điểm này chỉ nhận đặt phòng vào tháng 10.");
      } else {
        alert("This location can only be booked on October.");
      }
    } else {
      localStorage.setItem(
        "Booked Price",
        this.parentElement.getAttribute("price")
      );
      localStorage.setItem(
        "Booked Room",
        this.parentElement.getAttribute("roomname")
      );
      if (currentLang == "vi") {
        alert(
          "Đặt phòng thành công! Lưu ý: bạn chỉ có thể đặt một phòng mỗi lần thanh toán."
        );
      } else {
        alert(
          "Booked successfully! Notice: you can only book one room at a time."
        );
      }
    }
  });
});

let p35 = document.querySelectorAll('[price="35"]');
let p45 = document.querySelectorAll('[price="45"]');
let p58 = document.querySelectorAll('[price="58"]');
let p84 = document.querySelectorAll('[price="84"]');
let p109 = document.querySelectorAll('[price="109"]');
let p152 = document.querySelectorAll('[price="152"]');
let p219 = document.querySelectorAll('[price="219"]');
let p363 = document.querySelectorAll('[price="363"]');

function recolor() {
  p35.forEach(function (dest) {
    dest.style.filter = "grayscale(0)";
  });
  p45.forEach(function (dest) {
    dest.style.filter = "grayscale(0)";
  });
  p58.forEach(function (dest) {
    dest.style.filter = "grayscale(0)";
  });
  p84.forEach(function (dest) {
    dest.style.filter = "grayscale(0)";
  });
  p109.forEach(function (dest) {
    dest.style.filter = "grayscale(0)";
  });
  p152.forEach(function (dest) {
    dest.style.filter = "grayscale(0)";
  });
  p219.forEach(function (dest) {
    dest.style.filter = "grayscale(0)";
  });
  p363.forEach(function (dest) {
    dest.style.filter = "grayscale(0)";
  });
  berlin.style.filter = "grayscale(0)";
  cairo.style.filter = "grayscale(0)";
  capetown.style.filter = "grayscale(0)";
  dubai.style.filter = "grayscale(0)";
  halong.style.filter = "grayscale(0)";
  lasvegas.style.filter = "grayscale(0)";
  paris.style.filter = "grayscale(0)";
  rio.style.filter = "grayscale(0)";
  rome.style.filter = "grayscale(0)";
  sydney.style.filter = "grayscale(0)";
}
search.addEventListener("click", function () {
  recolor();
  if (max.value < 45) {
    p45.forEach(function (dest) {
      dest.style.filter = "grayscale(1)";
    });
    p58.forEach(function (dest) {
      dest.style.filter = "grayscale(1)";
    });
    p84.forEach(function (dest) {
      dest.style.filter = "grayscale(1)";
    });
    p109.forEach(function (dest) {
      dest.style.filter = "grayscale(1)";
    });
    p152.forEach(function (dest) {
      dest.style.filter = "grayscale(1)";
    });
    p219.forEach(function (dest) {
      dest.style.filter = "grayscale(1)";
    });
    p363.forEach(function (dest) {
      dest.style.filter = "grayscale(1)";
    });
    cairo.style.filter = "grayscale(1)";
    capetown.style.filter = "grayscale(1)";
    dubai.style.filter = "grayscale(1)";
    halong.style.filter = "grayscale(1)";
    sydney.style.filter = "grayscale(1)";
    if (min.value > 35) {
      p35.forEach(function (dest) {
        dest.style.filter = "grayscale(1)";
      });
      berlin.style.filter = "grayscale(1)";
      cairo.style.filter = "grayscale(1)";
      capetown.style.filter = "grayscale(1)";
      dubai.style.filter = "grayscale(1)";
      halong.style.filter = "grayscale(1)";
      lasvegas.style.filter = "grayscale(1)";
      paris.style.filter = "grayscale(1)";
      rio.style.filter = "grayscale(1)";
      rome.style.filter = "grayscale(1)";
      sydney.style.filter = "grayscale(1)";
    }
  } else if (max.value < 58) {
    cairo.style.filter = "grayscale(1)";
    capetown.style.filter = "grayscale(1)";
    dubai.style.filter = "grayscale(1)";
    halong.style.filter = "grayscale(1)";

    p58.forEach(function (dest) {
      dest.style.filter = "grayscale(1)";
    });
    p84.forEach(function (dest) {
      dest.style.filter = "grayscale(1)";
    });
    p109.forEach(function (dest) {
      dest.style.filter = "grayscale(1)";
    });
    p152.forEach(function (dest) {
      dest.style.filter = "grayscale(1)";
    });
    p219.forEach(function (dest) {
      dest.style.filter = "grayscale(1)";
    });
    p363.forEach(function (dest) {
      dest.style.filter = "grayscale(1)";
    });
    if (min.value > 35) {
      p35.forEach(function (dest) {
        dest.style.filter = "grayscale(1)";
      });
      berlin.style.filter = "grayscale(1)";
      cairo.style.filter = "grayscale(1)";
      capetown.style.filter = "grayscale(1)";
      dubai.style.filter = "grayscale(1)";
      halong.style.filter = "grayscale(1)";
      lasvegas.style.filter = "grayscale(1)";
      paris.style.filter = "grayscale(1)";
      rio.style.filter = "grayscale(1)";
      rome.style.filter = "grayscale(1)";
    }
    if (min.value > 45) {
      p45.forEach(function (dest) {
        dest.style.filter = "grayscale(1)";
      });
      berlin.style.filter = "grayscale(1)";
      cairo.style.filter = "grayscale(1)";
      capetown.style.filter = "grayscale(1)";
      dubai.style.filter = "grayscale(1)";
      halong.style.filter = "grayscale(1)";
      lasvegas.style.filter = "grayscale(1)";
      paris.style.filter = "grayscale(1)";
      rio.style.filter = "grayscale(1)";
      rome.style.filter = "grayscale(1)";
      sydney.style.filter = "grayscale(1)";
    }
  } else if (max.value < 84) {
    p84.forEach(function (dest) {
      dest.style.filter = "grayscale(1)";
    });
    p109.forEach(function (dest) {
      dest.style.filter = "grayscale(1)";
    });
    p152.forEach(function (dest) {
      dest.style.filter = "grayscale(1)";
    });
    p219.forEach(function (dest) {
      dest.style.filter = "grayscale(1)";
    });
    p363.forEach(function (dest) {
      dest.style.filter = "grayscale(1)";
    });

    cairo.style.filter = "grayscale(1)";
    capetown.style.filter = "grayscale(1)";
    dubai.style.filter = "grayscale(1)";
    halong.style.filter = "grayscale(1)";

    if (min.value > 35) {
      p35.forEach(function (dest) {
        dest.style.filter = "grayscale(1)";
      });
      cairo.style.filter = "grayscale(1)";
      capetown.style.filter = "grayscale(1)";
      dubai.style.filter = "grayscale(1)";
      halong.style.filter = "grayscale(1)";
    }
    if (min.value > 45) {
      p45.forEach(function (dest) {
        dest.style.filter = "grayscale(1)";
      });
      berlin.style.filter = "grayscale(1)";
      cairo.style.filter = "grayscale(1)";
      capetown.style.filter = "grayscale(1)";
      dubai.style.filter = "grayscale(1)";
      halong.style.filter = "grayscale(1)";
    }
    if (min.value > 58) {
      p58.forEach(function (dest) {
        dest.style.filter = "grayscale(1)";
      });
      berlin.style.filter = "grayscale(1)";
      cairo.style.filter = "grayscale(1)";
      capetown.style.filter = "grayscale(1)";
      dubai.style.filter = "grayscale(1)";
      halong.style.filter = "grayscale(1)";
      lasvegas.style.filter = "grayscale(1)";
      paris.style.filter = "grayscale(1)";
      rio.style.filter = "grayscale(1)";
      rome.style.filter = "grayscale(1)";
      sydney.style.filter = "grayscale(1)";
    }
  } else if (max.value < 109) {
    p109.forEach(function (dest) {
      dest.style.filter = "grayscale(1)";
    });
    p152.forEach(function (dest) {
      dest.style.filter = "grayscale(1)";
    });
    p219.forEach(function (dest) {
      dest.style.filter = "grayscale(1)";
    });
    p363.forEach(function (dest) {
      dest.style.filter = "grayscale(1)";
    });
    capetown.style.filter = "grayscale(1)";
    if (min.value > 35) {
      p35.forEach(function (dest) {
        dest.style.filter = "grayscale(1)";
      });
    }
    if (min.value > 45) {
      p45.forEach(function (dest) {
        dest.style.filter = "grayscale(1)";
      });
    }
    if (min.value > 58) {
      p58.forEach(function (dest) {
        dest.style.filter = "grayscale(1)";
      });
      berlin.style.filter = "grayscale(1)";
      capetown.style.filter = "grayscale(1)";
      paris.style.filter = "grayscale(1)";
      rio.style.filter = "grayscale(1)";
      rome.style.filter = "grayscale(1)";
      sydney.style.filter = "grayscale(1)";
    }
    if (min.value > 84) {
      p84.forEach(function (dest) {
        dest.style.filter = "grayscale(1)";
      });
      berlin.style.filter = "grayscale(1)";
      cairo.style.filter = "grayscale(1)";
      capetown.style.filter = "grayscale(1)";
      dubai.style.filter = "grayscale(1)";
      halong.style.filter = "grayscale(1)";
      lasvegas.style.filter = "grayscale(1)";
      paris.style.filter = "grayscale(1)";
      rio.style.filter = "grayscale(1)";
      rome.style.filter = "grayscale(1)";
      sydney.style.filter = "grayscale(1)";
    }
  } else if (max.value < 152) {
    p152.forEach(function (dest) {
      dest.style.filter = "grayscale(1)";
    });
    p219.forEach(function (dest) {
      dest.style.filter = "grayscale(1)";
    });
    p363.forEach(function (dest) {
      dest.style.filter = "grayscale(1)";
    });
    capetown.style.filter = "grayscale(1)";
    if (min.value > 35) {
      p35.forEach(function (dest) {
        dest.style.filter = "grayscale(1)";
      });
    }
    if (min.value > 45) {
      p45.forEach(function (dest) {
        dest.style.filter = "grayscale(1)";
      });
    }
    if (min.value > 58) {
      p58.forEach(function (dest) {
        dest.style.filter = "grayscale(1)";
      });
      berlin.style.filter = "grayscale(1)";
      capetown.style.filter = "grayscale(1)";
      paris.style.filter = "grayscale(1)";
      sydney.style.filter = "grayscale(1)";
    }
    if (min.value > 84) {
      p84.forEach(function (dest) {
        dest.style.filter = "grayscale(1)";
      });
      berlin.style.filter = "grayscale(1)";
      cairo.style.filter = "grayscale(1)";
      capetown.style.filter = "grayscale(1)";
      dubai.style.filter = "grayscale(1)";
      lasvegas.style.filter = "grayscale(1)";
      paris.style.filter = "grayscale(1)";
      sydney.style.filter = "grayscale(1)";
    }
    if (min.value > 109) {
      p109.forEach(function (dest) {
        dest.style.filter = "grayscale(1)";
      });
      berlin.style.filter = "grayscale(1)";
      cairo.style.filter = "grayscale(1)";
      capetown.style.filter = "grayscale(1)";
      dubai.style.filter = "grayscale(1)";
      halong.style.filter = "grayscale(1)";
      lasvegas.style.filter = "grayscale(1)";
      paris.style.filter = "grayscale(1)";
      rio.style.filter = "grayscale(1)";
      rome.style.filter = "grayscale(1)";
      sydney.style.filter = "grayscale(1)";
    }
  } else if (max.value < 219) {
    p219.forEach(function (dest) {
      dest.style.filter = "grayscale(1)";
    });
    p363.forEach(function (dest) {
      dest.style.filter = "grayscale(1)";
    });
    if (min.value > 35) {
      p35.forEach(function (dest) {
        dest.style.filter = "grayscale(1)";
      });
    }
    if (min.value > 45) {
      p45.forEach(function (dest) {
        dest.style.filter = "grayscale(1)";
      });
    }
    if (min.value > 58) {
      p58.forEach(function (dest) {
        dest.style.filter = "grayscale(1)";
      });
      berlin.style.filter = "grayscale(1)";
      paris.style.filter = "grayscale(1)";
    }
    if (min.value > 84) {
      p84.forEach(function (dest) {
        dest.style.filter = "grayscale(1)";
      });
      berlin.style.filter = "grayscale(1)";
      cairo.style.filter = "grayscale(1)";
      dubai.style.filter = "grayscale(1)";
      lasvegas.style.filter = "grayscale(1)";
      paris.style.filter = "grayscale(1)";
    }
    if (min.value > 109) {
      p109.forEach(function (dest) {
        dest.style.filter = "grayscale(1)";
      });
      berlin.style.filter = "grayscale(1)";
      cairo.style.filter = "grayscale(1)";
      dubai.style.filter = "grayscale(1)";
      lasvegas.style.filter = "grayscale(1)";
      paris.style.filter = "grayscale(1)";
      rio.style.filter = "grayscale(1)";
      rome.style.filter = "grayscale(1)";
    }
    if (min.value > 152) {
      p152.forEach(function (dest) {
        dest.style.filter = "grayscale(1)";
      });
      berlin.style.filter = "grayscale(1)";
      cairo.style.filter = "grayscale(1)";
      capetown.style.filter = "grayscale(1)";
      dubai.style.filter = "grayscale(1)";
      halong.style.filter = "grayscale(1)";
      lasvegas.style.filter = "grayscale(1)";
      paris.style.filter = "grayscale(1)";
      rio.style.filter = "grayscale(1)";
      rome.style.filter = "grayscale(1)";
      sydney.style.filter = "grayscale(1)";
    }
  } else if (max.value < 363) {
    p363.forEach(function (dest) {
      dest.style.filter = "grayscale(1)";
    });
    if (min.value > 35) {
      p35.forEach(function (dest) {
        dest.style.filter = "grayscale(1)";
      });
    }
    if (min.value > 45) {
      p45.forEach(function (dest) {
        dest.style.filter = "grayscale(1)";
      });
    }
    if (min.value > 58) {
      p58.forEach(function (dest) {
        dest.style.filter = "grayscale(1)";
      });
    }
    if (min.value > 84) {
      p84.forEach(function (dest) {
        dest.style.filter = "grayscale(1)";
      });
      lasvegas.style.filter = "grayscale(1)";
    }
    if (min.value > 109) {
      p109.forEach(function (dest) {
        dest.style.filter = "grayscale(1)";
      });
      lasvegas.style.filter = "grayscale(1)";
      rio.style.filter = "grayscale(1)";
      rome.style.filter = "grayscale(1)";
    }
    if (min.value > 152) {
      p152.forEach(function (dest) {
        dest.style.filter = "grayscale(1)";
      });
      capetown.style.filter = "grayscale(1)";
      halong.style.filter = "grayscale(1)";
      lasvegas.style.filter = "grayscale(1)";
      rio.style.filter = "grayscale(1)";
      rome.style.filter = "grayscale(1)";
      sydney.style.filter = "grayscale(1)";
    }
    if (min.value > 219) {
      p219.forEach(function (dest) {
        dest.style.filter = "grayscale(1)";
      });
      berlin.style.filter = "grayscale(1)";
      cairo.style.filter = "grayscale(1)";
      capetown.style.filter = "grayscale(1)";
      dubai.style.filter = "grayscale(1)";
      halong.style.filter = "grayscale(1)";
      lasvegas.style.filter = "grayscale(1)";
      paris.style.filter = "grayscale(1)";
      rio.style.filter = "grayscale(1)";
      rome.style.filter = "grayscale(1)";
      sydney.style.filter = "grayscale(1)";
    }
  } else if (max.value == 363) {
    if (min.value > 35) {
      p35.forEach(function (dest) {
        dest.style.filter = "grayscale(1)";
      });
    }
    if (min.value > 45) {
      p45.forEach(function (dest) {
        dest.style.filter = "grayscale(1)";
      });
    }
    if (min.value > 58) {
      p58.forEach(function (dest) {
        dest.style.filter = "grayscale(1)";
      });
    }
    if (min.value > 84) {
      p84.forEach(function (dest) {
        dest.style.filter = "grayscale(1)";
      });
      lasvegas.style.filter = "grayscale(1)";
    }
    if (min.value > 109) {
      p109.forEach(function (dest) {
        dest.style.filter = "grayscale(1)";
      });
      lasvegas.style.filter = "grayscale(1)";
      rio.style.filter = "grayscale(1)";
      rome.style.filter = "grayscale(1)";
    }
    if (min.value > 152) {
      p152.forEach(function (dest) {
        dest.style.filter = "grayscale(1)";
      });
      halong.style.filter = "grayscale(1)";
      lasvegas.style.filter = "grayscale(1)";
      rio.style.filter = "grayscale(1)";
      rome.style.filter = "grayscale(1)";
      sydney.style.filter = "grayscale(1)";
    }
    if (min.value > 219) {
      p219.forEach(function (dest) {
        dest.style.filter = "grayscale(1)";
      });
      berlin.style.filter = "grayscale(1)";
      cairo.style.filter = "grayscale(1)";
      halong.style.filter = "grayscale(1)";
      lasvegas.style.filter = "grayscale(1)";
      paris.style.filter = "grayscale(1)";
      rio.style.filter = "grayscale(1)";
      rome.style.filter = "grayscale(1)";
      sydney.style.filter = "grayscale(1)";
    }
  }
});

// Pages
let berlinPage = document.getElementById("berlinPage");
let berlinTrue = document.getElementById("berlinTrue");
let berlinOff = document.getElementById("berlinOff");
berlinPage.addEventListener("click", function () {
  berlinTrue.style.display = "flex";
});
berlinOff.addEventListener("click", function () {
  berlinTrue.style.display = "none";
});

let cairoPage = document.getElementById("cairoPage");
let cairoTrue = document.getElementById("cairoTrue");
let cairoOff = document.getElementById("cairoOff");
cairoPage.addEventListener("click", function () {
  cairoTrue.style.display = "flex";
});
cairoOff.addEventListener("click", function () {
  cairoTrue.style.display = "none";
});

let capePage = document.getElementById("capePage");
let capeTrue = document.getElementById("capeTrue");
let capeOff = document.getElementById("capeOff");
capePage.addEventListener("click", function () {
  capeTrue.style.display = "flex";
});
capeOff.addEventListener("click", function () {
  capeTrue.style.display = "none";
});

let dubaiPage = document.getElementById("dubaiPage");
let dubaiTrue = document.getElementById("dubaiTrue");
let dubaiOff = document.getElementById("dubaiOff");
dubaiPage.addEventListener("click", function () {
  dubaiTrue.style.display = "flex";
});
dubaiOff.addEventListener("click", function () {
  dubaiTrue.style.display = "none";
});

let haloPage = document.getElementById("haloPage");
let haloTrue = document.getElementById("haloTrue");
let haloOff = document.getElementById("haloOff");
haloPage.addEventListener("click", function () {
  haloTrue.style.display = "flex";
});
haloOff.addEventListener("click", function () {
  haloTrue.style.display = "none";
});

let lasPage = document.getElementById("lasPage");
let lasTrue = document.getElementById("lasTrue");
let lasOff = document.getElementById("lasOff");
lasPage.addEventListener("click", function () {
  lasTrue.style.display = "flex";
});
lasOff.addEventListener("click", function () {
  lasTrue.style.display = "none";
});

let parisPage = document.getElementById("parisPage");
let parisTrue = document.getElementById("parisTrue");
let parisOff = document.getElementById("parisOff");
parisPage.addEventListener("click", function () {
  parisTrue.style.display = "flex";
});
parisOff.addEventListener("click", function () {
  parisTrue.style.display = "none";
});

let rioPage = document.getElementById("rioPage");
let rioTrue = document.getElementById("rioTrue");
let rioOff = document.getElementById("rioOff");
rioPage.addEventListener("click", function () {
  rioTrue.style.display = "flex";
});
rioOff.addEventListener("click", function () {
  rioTrue.style.display = "none";
});

let romePage = document.getElementById("romePage");
let romeTrue = document.getElementById("romeTrue");
let romeOff = document.getElementById("romeOff");
romePage.addEventListener("click", function () {
  romeTrue.style.display = "flex";
});
romeOff.addEventListener("click", function () {
  romeTrue.style.display = "none";
});

let sydneyPage = document.getElementById("sydneyPage");
let sydneyTrue = document.getElementById("sydneyTrue");
let sydneyOff = document.getElementById("sydneyOff");
sydneyPage.addEventListener("click", function () {
  sydneyTrue.style.display = "flex";
});
sydneyOff.addEventListener("click", function () {
  sydneyTrue.style.display = "none";
});

function unavailable() {
  if (currentLang == "en") {
    alert("This location is currently being reconstructed.");
  } else {
    alert("Cơ sở này đang được cải tạo lại.");
  }
}

let tokyoPage = document.getElementById("tokyoPage");
let venPage = document.getElementById("venPage");
tokyoPage.addEventListener("click", unavailable);
venPage.addEventListener("click", unavailable);

// Filter
let placeNorthAmerica = document.querySelectorAll('[place1="northAmerica"]');
let placeSouthAmerica = document.querySelectorAll('[place1="southAmerica"]');
let placeAsia = document.querySelectorAll('[place1="asia"]');
let placeEurope = document.querySelectorAll('[place1="europe"]');
let placeOceania = document.querySelectorAll('[place1="oceania"]');
let placeAfrica = document.querySelectorAll('[place1="africa"]');

let northAmericaCheck = document.getElementById("northAmerica");
northAmericaCheck.addEventListener("click", function () {
  if (northAmericaCheck.checked == true) {
    placeNorthAmerica.forEach(function (northAmerica) {
      northAmerica.style.display = "block";
    });
    placeSouthAmerica.forEach(function (southAmerica) {
      southAmerica.style.display = "none";
    });
    placeAsia.forEach(function (asia) {
      asia.style.display = "none";
    });
    placeEurope.forEach(function (europe) {
      europe.style.display = "none";
    });
    placeOceania.forEach(function (oceania) {
      oceania.style.display = "none";
    });
    placeAfrica.forEach(function (africa) {
      africa.style.display = "none";
    });
  }
});

let southAmericaCheck = document.getElementById("southAmerica");
southAmericaCheck.addEventListener("click", function () {
  if (southAmericaCheck.checked == true) {
    placeNorthAmerica.forEach(function (northAmerica) {
      northAmerica.style.display = "none";
    });
    placeSouthAmerica.forEach(function (southAmerica) {
      southAmerica.style.display = "block";
    });
    placeAsia.forEach(function (asia) {
      asia.style.display = "none";
    });
    placeEurope.forEach(function (europe) {
      europe.style.display = "none";
    });
    placeOceania.forEach(function (oceania) {
      oceania.style.display = "none";
    });
    placeAfrica.forEach(function (africa) {
      africa.style.display = "none";
    });
  }
});

let asiaCheck = document.getElementById("asia");
asiaCheck.addEventListener("click", function () {
  if (asiaCheck.checked == true) {
    placeNorthAmerica.forEach(function (northAmerica) {
      northAmerica.style.display = "none";
    });
    placeSouthAmerica.forEach(function (southAmerica) {
      southAmerica.style.display = "none";
    });
    placeAsia.forEach(function (asia) {
      asia.style.display = "block";
    });
    placeEurope.forEach(function (europe) {
      europe.style.display = "none";
    });
    placeOceania.forEach(function (oceania) {
      oceania.style.display = "none";
    });
    placeAfrica.forEach(function (africa) {
      africa.style.display = "none";
    });
  }
});

let europeCheck = document.getElementById("europe");
europeCheck.addEventListener("click", function () {
  if (europeCheck.checked == true) {
    placeNorthAmerica.forEach(function (northAmerica) {
      northAmerica.style.display = "none";
    });
    placeSouthAmerica.forEach(function (southAmerica) {
      southAmerica.style.display = "none";
    });
    placeAsia.forEach(function (asia) {
      asia.style.display = "none";
    });
    placeEurope.forEach(function (europe) {
      europe.style.display = "block";
    });
    placeOceania.forEach(function (oceania) {
      oceania.style.display = "none";
    });
    placeAfrica.forEach(function (africa) {
      africa.style.display = "none";
    });
  }
});

let oceaniaCheck = document.getElementById("oceania");
oceaniaCheck.addEventListener("click", function () {
  if (oceaniaCheck.checked == true) {
    placeNorthAmerica.forEach(function (northAmerica) {
      northAmerica.style.display = "none";
    });
    placeSouthAmerica.forEach(function (southAmerica) {
      southAmerica.style.display = "none";
    });
    placeAsia.forEach(function (asia) {
      asia.style.display = "none";
    });
    placeEurope.forEach(function (europe) {
      europe.style.display = "none";
    });
    placeOceania.forEach(function (oceania) {
      oceania.style.display = "block";
    });
    placeAfrica.forEach(function (africa) {
      africa.style.display = "none";
    });
  }
});

let africaCheck = document.getElementById("africa");
africaCheck.addEventListener("click", function () {
  if (africaCheck.checked == true) {
    placeNorthAmerica.forEach(function (northAmerica) {
      northAmerica.style.display = "none";
    });
    placeSouthAmerica.forEach(function (southAmerica) {
      southAmerica.style.display = "none";
    });
    placeAsia.forEach(function (asia) {
      asia.style.display = "none";
    });
    placeEurope.forEach(function (europe) {
      europe.style.display = "none";
    });
    placeOceania.forEach(function (oceania) {
      oceania.style.display = "none";
    });
    placeAfrica.forEach(function (africa) {
      africa.style.display = "block";
    });
  }
});

let placeClassic = document.querySelectorAll('[place2="classic"]');
let placeDisjointed = document.querySelectorAll('[place2="disjointed"]');
let placeDeluxe = document.querySelectorAll('[place2="deluxe"]');
let placeCruise = document.querySelectorAll('[place2="cruise"]');

let classicCheck = document.getElementById("classic");
classicCheck.addEventListener("click", function () {
  if (classicCheck.checked == true) {
    placeClassic.forEach(function (classic) {
      classic.style.display = "block";
    });
    placeDisjointed.forEach(function (disjointed) {
      disjointed.style.display = "none";
    });
    placeDeluxe.forEach(function (deluxe) {
      deluxe.style.display = "none";
    });
    placeCruise.forEach(function (cruise) {
      cruise.style.display = "none";
    });
  }
});

let disjointedCheck = document.getElementById("disjointed");
disjointedCheck.addEventListener("click", function () {
  if (disjointedCheck.checked == true) {
    placeClassic.forEach(function (classic) {
      classic.style.display = "none";
    });
    placeDisjointed.forEach(function (disjointed) {
      disjointed.style.display = "block";
    });
    placeDeluxe.forEach(function (deluxe) {
      deluxe.style.display = "none";
    });
    placeCruise.forEach(function (cruise) {
      cruise.style.display = "none";
    });
  }
});

let deluxeCheck = document.getElementById("deluxe");
deluxeCheck.addEventListener("click", function () {
  if (deluxeCheck.checked == true) {
    placeClassic.forEach(function (classic) {
      classic.style.display = "none";
    });
    placeDisjointed.forEach(function (disjointed) {
      disjointed.style.display = "none";
    });
    placeDeluxe.forEach(function (deluxe) {
      deluxe.style.display = "block";
    });
    placeCruise.forEach(function (cruise) {
      cruise.style.display = "none";
    });
  }
});

let cruiseCheck = document.getElementById("cruise");
cruiseCheck.addEventListener("click", function () {
  if (cruiseCheck.checked == true) {
    placeClassic.forEach(function (classic) {
      classic.style.display = "none";
    });
    placeDisjointed.forEach(function (disjointed) {
      disjointed.style.display = "none";
    });
    placeDeluxe.forEach(function (deluxe) {
      deluxe.style.display = "none";
    });
    placeCruise.forEach(function (cruise) {
      cruise.style.display = "block";
    });
  }
});

let placeBustle = document.querySelectorAll('[place3="bustle"]');
let placeTranquil = document.querySelectorAll('[place3="tranquil"]');

let bustleCheck = document.getElementById("bustle");
bustleCheck.addEventListener("click", function () {
  if (bustleCheck.checked == true) {
    placeBustle.forEach(function (bustle) {
      bustle.style.display = "block";
    });
    placeTranquil.forEach(function (tranquil) {
      tranquil.style.display = "none";
    });
  }
});
let tranquilCheck = document.getElementById("tranquil");
tranquilCheck.addEventListener("click", function () {
  if (tranquilCheck.checked == true) {
    placeBustle.forEach(function (bustle) {
      bustle.style.display = "none";
    });
    placeTranquil.forEach(function (tranquil) {
      tranquil.style.display = "block";
    });
  }
});

let allDest = document.querySelectorAll('[class="dest"]');
let stopFilter = document.getElementById("stopfilter");
stopFilter.addEventListener("click", function () {
  if (stopFilter.checked == true) {
    allDest.forEach(function (dest) {
      dest.style.display = "block";
    });
  }
});

back.addEventListener("click", function () {
  cDiv.style.display = "none";
});
cActive.addEventListener("click", function () {
  if (
    localStorage.getItem("Start") == null ||
    localStorage.getItem("End") == null ||
    localStorage.getItem("Booked Price") == null ||
    localStorage.getItem("Booked Room") == null
  ) {
    if (currentLang == "vi") {
      alert("Bạn chưa hoàn tất việc đặt phòng.");
    } else {
      alert("You have not finished booking.");
    }
  } else {
    cDiv.style.display = "block";
    if (
      localStorage.getItem("LoginStatus") == "1" &&
      localStorage.getItem("Owner") != null
    ) {
      cOwner.value = localStorage.getItem("Owner");
      cNumber.value = localStorage.getItem("Number");
      cExpire.value = localStorage.getItem("Expire");
      cCVC.value = localStorage.getItem("CVC");
      if (currentLang == "vi") {
        c7.innerText = "Biểu mẫu này đã được tự động điền do bạn có tài khoản";
      } else {
        c7.innerText =
          "This form has been auto-filled because you have logged in";
      }
    }
    if (currentLang == "vi") {
      c1.innerText =
        "Bạn đã đặt một phòng " +
        localStorage.getItem("Booked Room") +
        " từ ngày " +
        localStorage.getItem("Start") +
        " tới " +
        localStorage.getItem("End") +
        " với giá tiền là " +
        "$" +
        localStorage.getItem("Booked Price") +
        " mỗi đêm";
    } else {
      c1.innerText =
        "You have booked a " +
        localStorage.getItem("Booked Room") +
        " from " +
        localStorage.getItem("Start") +
        " to " +
        localStorage.getItem("End") +
        " for the price of " +
        "$" +
        localStorage.getItem("Booked Price") +
        " per night";
    }
  }
});

cBtn.addEventListener("click", function () {
  if (
    localStorage.getItem("Start") == null ||
    localStorage.getItem("End") == null ||
    localStorage.getItem("Booked Price") == null ||
    localStorage.getItem("Booked Room") == null
  ) {
    if (currentLang == "vi") {
      alert("Bạn chưa hoàn tất việc đặt phòng.");
    } else {
      alert("You have not finished booking.");
    }
  } else {
    if (
      cNumber.value.length != 19 ||
      cExpire.value.length != 7 ||
      cCVC.value.length != 3
    ) {
      if (currentLang == "vi") {
        alert("Hãy điền đầy đủ và đúng định dạng các thông tin thanh toán.");
      } else {
        alert(
          "Please fill in your credit card information in the provided format."
        );
      }
    } else {
      if (
        Number(
          String(cExpire.value.charAt(3)) +
            String(cExpire.value.charAt(4)) +
            String(cExpire.value.charAt(5)) +
            String(cExpire.value.charAt(6))
        ) < 2024
      ) {
        if (currentLang == "vi") {
          alert(
            "Thẻ ngân hàng của bạn cần có giá trị sử dụng tới ít nhất là tháng 1 năm  2024."
          );
        } else {
          alert("Your card must be usable to at least January, 2024.");
        }
      } else {
        if (localStorage.getItem("LoginStatus") == "1") {
          localStorage.setItem("Owner", cOwner.value);
          localStorage.setItem("Number", cNumber.value);
          localStorage.setItem("Expire", cExpire.value);
          localStorage.setItem("CVC", cCVC.value);
        }
        if (currentLang == "vi") {
          alert(
            "Thanh toán thành công! Cảm ơn và xin chúc quý khách có một kì nghỉ vui vẻ tại The Grandiose Hotel."
          );
        } else {
          alert(
            "Successfully paid! Thank you! May you have a wonderful vacation at The Grandiose Hotel."
          );
        }
      }
    }
  }
});
