let input = document.querySelector("#name");
let btn = document.querySelector("button");
let containerContent = document.querySelector(".container_content");
let count = 0;

let firstGetToDoList = JSON.parse(localStorage.getItem("toDoList"))
if (firstGetToDoList == null){
  localStorage.setItem("toDoList", JSON.stringify([]))
  window.location.reload()
} else {
  // Lặp các giá trị để render dữ liệu
  for(let i = 0; i < firstGetToDoList.length; i++){
    let divItem = document.createElement("div");
    divItem.className = "item";
    divItem.innerHTML = 
    `<span>${firstGetToDoList[i].id}</span>

    <div class="content">
    <p>${firstGetToDoList[i].valueList}</p>
    </div>
    <div onclick="remove(event)" class="remove">
      X
    </div>`;
    
    containerContent.appendChild(divItem);
  }

// Them ten vao list
btn.addEventListener("click", () => {

  // Gan count bang so divItem hien co
  var itemNumber = document.querySelectorAll(".item");
  count = itemNumber.length + 1;

  // if length = 0 thì count = 1, ko thì chạy lệnh sau ":"
  if (input.value != null && input.value != "") {
    let divItem = document.createElement("div");
    divItem.className = "item";
    divItem.innerHTML = 
    `<span>${count}</span>

    <div class="content">
    <p>${input.value}</p>
    </div>
    <div onclick="remove(event)" class="remove">
      X
    </div>`;
    
    containerContent.appendChild(divItem);
    
    // Cong don so thu tu

    let newList = {
      id: firstGetToDoList.length + 1,
      valueList: input.value,
  }
  firstGetToDoList.push(newList);
  localStorage.setItem("toDoList", JSON.stringify(firstGetToDoList))
    input.value = "";
  }


  this.event.target.parentElement.remove(); //this.event.target để lấy ra button vừa tương tác
  var span = document.querySelectorAll(".item span");
  for (let i = 0; i < span.length; i++) {
    span[i].innerHTML = i + 1;
  }
});

//Ask enter
//Ham xoa ten
function remove(){
  this.event.target.parentElement.remove(); //this.event.target để lấy ra button vừa tương tác
  var span = document.querySelectorAll(".item span");
  for (let i = 0; i < span.length; i++) {
    span[i].innerHTML = i + 1;
  }
  
}
}