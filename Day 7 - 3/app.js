let tra = document.querySelector("input");
let li1 = document.getElementById("li1");
let li2 = document.getElementById("li2");
let li3 = document.getElementById("li3");
let li4 = document.getElementById("li4");
let li5 = document.getElementById("li5");
let li6 = document.getElementById("li6");
let li7 = document.getElementById("li7");

tra.addEventListener("keyup", function () {
  let valcheck = tra.value.toLowerCase();

  let text1 = "mojito";
  let text2 = "blue hawaii";
  let text3 = "gin";
  let text4 = "wine";
  let text5 = "b52";
  let text6 = "coffee";
  let text7 = "tea";

  let check1 = text1.indexOf(valcheck);
  let check2 = text2.indexOf(valcheck);
  let check3 = text3.indexOf(valcheck);
  let check4 = text4.indexOf(valcheck);
  let check5 = text5.indexOf(valcheck);
  let check6 = text6.indexOf(valcheck);
  let check7 = text7.indexOf(valcheck);

  if (check1 == -1) {
    li1.style.display = "none";
  } else {
    li1.style.display = "block";
  }

  if (check2 == -1) {
    li2.style.display = "none";
  } else {
    li2.style.display = "block";
  }

  if (check3 == -1) {
    li3.style.display = "none";
  } else {
    li3.style.display = "block";
  }

  if (check4 == -1) {
    li4.style.display = "none";
  } else {
    li4.style.display = "block";
  }

  if (check5 == -1) {
    li5.style.display = "none";
  } else {
    li5.style.display = "block";
  }

  if (check6 == -1) {
    li6.style.display = "none";
  } else {
    li6.style.display = "block";
  }

  if (check7 == -1) {
    li7.style.display = "none";
  } else {
    li7.style.display = "block";
  }
});
