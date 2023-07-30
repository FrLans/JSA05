let h1Element = document.getElementById("name")
console.log(h1Element.innerText)
h1Element.innerText = "Test"

let listElement = document.getElementsByTagName("li")

for (i = 0; i < listElement.length; i++){
    console.log(listElement[i].innerText)
}

let classElement = document.getElementsByClassName("C")
console.log(classElement)

let h1Created = document.createElement("h1")
h1Created.innerText = "Hà Nội"
h1Created.style.color = "red"
document.body.appendChild(h1Created)

let btn = document.querySelector("#btn")
let btn2 = document.querySelector("#btn2")
let btn3 = document.querySelector("#btn3")
let box = document.getElementById("box")

btn.addEventListener('click', function(){
    a = prompt("Chọn màu")
    box.style.backgroundColor = a
})

btn2.addEventListener("click", function(){
    if(box.style.display == "block"){
        box.style.display = "none"
    } else {box.style.display = "block"}
})

btn3.addEventListener("click", function(){
    if(box.style.borderRadius == "0%"){
        box.style.borderRadius = "100%";
    } else {box.style.borderRadius = "0%"}
})