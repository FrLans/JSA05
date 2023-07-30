let s = "phuong"
// s.indexOf("n"): tìm xem n ở đâu trong s
// Nếu ko có thì ra -1, có nhiều ra cái đầu, đếm từ 0, case-sensitive
let pos = s.indexOf("");
console.log(pos)

let input = document.querySelector("input")
let btn = document.querySelector("button")
let kq = document.querySelector("h1")

input.addEventListener("keyup", function(){
    let valcheck = input.value.toLowerCase()
    let valog = "hello"
    pos = valog.indexOf(valcheck)
    if (pos >= 0){
        kq.innerText = "Kết quả: Có"
    }
    else{kq.innerText = "Kết quả: Không có"}
})