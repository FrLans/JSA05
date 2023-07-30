let h = document.getElementById("h");
let m = document.getElementById("m");
let s = document.getElementById("s");
let d = document.getElementById("d");

let date = new Date();
let h1 = date.getHours();
let m1 = date.getMinutes();
let s1 = date.getSeconds();
if (s1 <= 9) {
  s.innerText = "0" + s1;
} else {
  s.innerText = s1;
}
if (m1 <= 9) {
  m.innerText = "0" + m1;
} else {
  m.innerText = m1;
}
if (h1 <= 9) {
  h.innerText = "0" + h1;
} else {
  h.innerText = h1;
}

let d1 = date.getDay();
if (d1 == 0) {
  d.innerText = "SU";
} else if (d1 == 1) {
  d.innerText = "MO";
} else if (d1 == 2) {
  d.innerText = "TU";
} else if (d1 == 3) {
  d.innerText = "WE";
} else if (d1 == 4) {
  d.innerText = "TH";
} else if (d1 == 5) {
  d.innerText = "FR";
} else if (d1 == 6) {
  d.innerText = "SA";
}

// a.substring(0, 1): Lấy phần tử 0.
// localStorage.setItem("Giờ", h1);
// localStorage.setItem("Phút", m1);
// localStorage.setItem("Giây", s1);

setInterval(function () {
  let date = new Date();
  h1 = date.getHours();
  m1 = date.getMinutes();
  s1 = date.getSeconds();
  if (s1 <= 9) {
    s.innerText = "0" + s1;
  } else {
    s.innerText = s1;
  }
  if (m1 <= 9) {
    m.innerText = "0" + m1;
  } else {
    m.innerText = m1;
  }
  if (h1 <= 9) {
    h.innerText = "0" + h1;
  } else {
    h.innerText = h1;
  }

  //   s1 = Number(s1) + 1;
  //   localStorage.setItem("Giây", s1);
  //   if (s1 <= 9) {
  //     s.innerText = "0" + String(s1);
  //   } else if (s1 != 60) {
  //     s.innerText = String(s1);
  //   } else {
  //     s1 = 0;
  //     s.innerText = "00";
  //     m1 = Number(m1) + 1;
  //     localStorage.setItem("Phút", m1);
  //     if (m1 <= 9) {
  //       m.innerText = "0" + String(m1);
  //     } else if (m1 != 60) {
  //       m.innerText = String(m1);
  //     } else {
  //       m1 = 0;
  //       m.innerText = "00";
  //       h1 = Number(h1) + 1;
  //       localStorage.setItem("Giờ", h1);
  //       if (h1 <= 9) {
  //         h1.innerText = "0" + String(h1);
  //       } else if (h1 != 24) {
  //         h1.innerText = String(h1);
  //       } else {
  //         h1 = 0;
  //         h.innerText = "00";
  //       }
  //     }
  //   }
}, 1000);
