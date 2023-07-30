let input = document.getElementById("input")
let output = document.getElementById("output")
input.addEventListener("keyup", function(){
    output.value = input.value.toUpperCase()
})