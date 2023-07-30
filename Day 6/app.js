// let name = "Nguyen Danh Phuong"
// let splitfunction = name.split()
// console.log(splitfunction)

// let mang = "1 2 3 4 5 6 7 8 9 10"
// let splitfunction2 = mang.split(" ")
// console.log(splitfunction2)

let more = document.querySelector(".more")
let droplist = document.querySelector(".droplist")

droplist.addEventListener("mouseover", function(){
    droplist.style.display = "block"
    more.style.backgroundColor = "gainsboro"
    more.style.color = "black"    
})
droplist.addEventListener("mouseout", function(){
    droplist.style.display = "none"
    more.style.backgroundColor = "black"
    more.style.color = "white"    
})


more.addEventListener("mouseover", function(){
    droplist.style.display = "block"
    more.style.color = "black"
    more.style.backgroundColor = "gainsboro"
       
})
more.addEventListener("mouseout", function(){
    droplist.style.display = "none"
    more.style.color = "white"    
    more.style.backgroundColor = "black"

})


// setTimeout(function(){ // Dùng 1 lần
//     alert("Test")
// }, 3000) //3000 = 3s

// setInterval(function(){ // Lặp lần
//     alert("Test")
// }, 3000)

setInterval(function(){
    
}, 3000)