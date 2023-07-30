let input = document.querySelector("#name")
let btn = document.querySelector("button")
let num = 1

btn.addEventListener("click", function(){
    num = num + 1
    let cc = document.querySelector(".content_container")
    let itemDiv = document.createElement('div')
    let contentDiv = document.createElement('div')
    let p = document.createElement('p')
    p.innerText = num + ": "
    let span = document.createElement('span')
    span.innerText = input.value
    cc.appendChild(itemDiv)
    itemDiv.appendChild(contentDiv)
    contentDiv.appendChild(p)
    p.appendChild(span)
    console.log(input.value)
    input.value = ""
})

