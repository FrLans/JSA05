// Thêm vào localStorage (key, value)
localStorage.setItem("name", "Phương123")

// Lấy dữ liệu qua key
let nameFromLocalStorage = localStorage.getItem("name")
console.log(nameFromLocalStorage)

// Xóa key
let btn = document.querySelector("button");
btn.addEventListener("click", function(){
    localStorage.removeItem("name")
})

let student = {
    id: 1,
    name: "Phương",
    age: 22,
};

let t = JSON.stringify(student)
console.log(t)
// Khi set value dạng object/array vào localStorage thì cần JSON.stringify()
localStorage.setItem("StudentOfMindX", t)

let getValue = localStorage.getItem("StudentOfMindX")
console.log(getValue);

// let car = {
//     name: "Toyota",
//     color: "Red",
//     price: "$5000",
// }
// localStorage.setItem("car", JSON.stringify(car))
// console.log(localStorage.getItem("car"))
//                                                         // JSON.parse khôi phục lại obj đã bị stringify
// console.log(JSON.parse(localStorage.getItem("car")))

let inputName = document.querySelector("#name")
let inputColor = document.querySelector("#color")
let inputPrice = document.querySelector("#price")

let check = JSON.parse(localStorage.getItem("car"));
if (check == null){
let carCount = 0
let carArray = []
localStorage.setItem("car", JSON.stringify(carArray))
alert("Lần đầu vào, thiết lập")
window.location.reload()
} else {
let carArray = JSON.parse(localStorage.getItem("car"));
let carCount = carArray.length

let btnSave = document.getElementById("btn2")
btnSave.addEventListener("click", function(){
    if (inputName.value != "" && inputColor.value != "" && inputPrice != ""){
        carArray[carCount] = {
            color: "",
            name: "",
            price: "",
        }
        carArray[carCount].color = inputColor.value
        carArray[carCount].name = inputName.value
        carArray[carCount].price = inputPrice.value
        console.log(carArray)
        localStorage.setItem("car", JSON.stringify(carArray))
        carCount = carCount + 1;
        inputName.value = "";
        inputColor.value = "#000000";
        inputPrice.value = ""
    } else{
        alert("Chưa nhập đủ thông tin")
        inputName.value = "";
        inputColor.value = "#000000";
        inputPrice.value = ""
    }
})
}


// Nháp
        // let theLocalStorage = JSON.parse(localStorage.getItem("car"))
        // theLocalStorage.name = inputName.value
        // inputName.value = ""
        // theLocalStorage.color = inputColor.value
        // inputColor.value = ""
        // theLocalStorage.price = inputPrice.value
        // inputPrice.value = ""
        // localStorage.setItem("car", JSON.stringify(theLocalStorage))
        
        // let carInput = {
        //     name: inputName.value,
        //     color: inputColor.value,
        //     price: inputPrice.value,
        // };
        // keyName = "car" + carCount
        // localStorage.setItem(String(keyName), JSON.stringify(carInput))
        // nameName = "name" + carCount
        // colorName = "color" + carCount
        // priceName = "price" + carCount
        // let theLocalStorage = JSON.parse(localStorage.getItem("car"))
        // theLocalStorage = {
        //     nameName: String(inputName.value),
        //     colorName: String(inputColor.value),
        //     priceName: String(inputPrice.value),
        // }
        // localStorage.setItem("car", JSON.stringify(theLocalStorage))
        //  = {
            // color: "",
            // name: "",
            // price: "",
        // }
        // .color = inputColor.value
        // .name = inputName.value
        // .price = inputPrice.value
        // carArray.push()