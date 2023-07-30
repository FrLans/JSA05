// Bài 1:
let h1 = document.querySelector("h1")
let input = document.querySelector("input")
let btn = document.querySelector("button")

btn.addEventListener("click", function(){
    let a = Number(input.value)
    let b = 1
    if (a > 170){
        alert("Giá trị quá lớn so với máy tính")
    }
    if (a > 0 && Number.isInteger(a) == true){
        for (i = 1; i <= a; i++){
            b = b*i
        }
        h1.innerText = "Giai thừa của " + a + " là: " + b;
    } else {alert("Giá trị không thỏa mãn")}
    input.value = ""
    a = 0
})

// Bài 2:
let inputb2 = document.getElementById("ib2")
let btnb2 = document.getElementById("bb2")
let outputb2 = document.getElementById("outputb2")

btnb2.addEventListener("click", function(){
    let h = Number(inputb2.value)
    let trig = ""
    // Kiểm tra chiều cao h có phải số nguyên dương ko
    if (h > 0 && Number.isInteger(h) == true){
    // i là hàng của hình tam giác
        for(let i = 1; i <= h; i++){
            if(i == 1){
            // Vòng lặp để cho dòng đầu thụt vào, tạo tam giác cân. h - i khoảng cách là do thử nghiệm ở đoạn dưới
                for(let j = 1; j <= h - i; j++){
            // Dấu cách bình thường không chạy được code của em nên em dùng ký tự tàng hình này. Anh có thể thử thay nó bằng dấu cách để xem bug
                    trig = trig + " "
                }
            // Viết ra ngôi sao duy nhất của hàng đầu rồi xuống dòng
                trig = trig + "* " + "\n"
            } else if(i != h){
            // Thụt đầu dòng theo cách tương tự
                for(let k = 1; k <= h - i; k++){
                    trig = trig + " "
                }
            // Viết ngôi sao bên trái sau khi thụt xong
                trig = trig + "* "
            // Cách giữa hai ngôi sao hai bên, 2*(i - 2) cũng được rút ra ở phần thử nghiệm bên dưới
                for(let l = 1; l <= 2*(i - 2); l++){
                    trig = trig + " "
                }
            // Viết ngôi sao bên phải rồi xuống dòng
                trig = trig + "* " + "\n"
            } else if(i == h){
            // Tại hàng cuối, in ra mọi ký tự đều là *
                for(let m = 1; m <= h; m++){
                    trig = trig + "* "
                }
            }
        }
        outputb2.innerText = trig
    }
    else{alert("Chiều cao không hợp lệ")}
})

// *

//  *
// * *

//   *
//  * *
// * * *

//    *
//   * *
//  *   *
// * * * *

//     *
//    * *
//   *   *
//  *     *
// * * * * *

//      *
//     *0*
//    * 2 *
//   *  4  *
//  *   6   *
// * * * * * *

// Coi "* " là 1 ký tự
// Số ký tự đáy = Cao
// Cách đầu vào = Cao - line
// Xen giữa = 2.(line - 2)