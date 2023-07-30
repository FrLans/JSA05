// let a = [];
// for (let i = 0; i <= 4; i++){
//     a[i] = prompt("Nhập phần tử " + i)
//     while(a[i] == "" || a[i] == null){
//         a[i] = prompt("Nhập lại phần tử " + i);
//         if(a[i] != "" && a[i] != null){
//             break;
//         }
//     }
// }
// console.log(a)

// let b = []
// limit = Number(prompt("Nêu số thành viên trong gia đình bạn."))
// for(let i = 1; i <= limit; i++){
//     b[i - 1] = {
//         fullName: prompt("Nhập tên của thành viên " + i),
//         age: prompt("Nhập số tuổi của thành viên " + i)
//     }
//     while(b[i - 1].fullName == "" || b[i - 1].age == ""){
//         b[i - 1] = {
//         fullName: prompt("Thiếu thông tin của thành viên vừa rồi. Nhập lại tên của thành viên " + i),
//         age: prompt("Nhập lại tuổi của thành viên " + i)}
//         if(b[i - 1].fullName != "" && b[i - 1].age != ""){
//             break;}
//     }
// }
// console.log(b)

// function có đầu vào
// function sample(a, b){
//     console.log(String(a) + String(b))
// }
// sample(1, 2)

// //function return

// function sample2(c, d){
//     return "My name is " + c + ", I am " + d;
// }
// console.log(sample2(4, 5))

// Bài 1
function bai1(){
    a = Number(prompt("Nhập số thứ nhất:"))
    b = Number(prompt("Nhập số thứ hai:"))
    function cong(a, b){
        console.log(a + " + " + b + " = " + (a + b))
    }
    function tru(a, b){
        console.log(a + " - " + b + " = " + (a - b))
    }
    function nhan(a, b){
        console.log(a + " x " + b + " = " + (a * b))
    }
    function chia(a, b){
        console.log(a + " : " + b + " = " + (a / b))
    }
    let pheptinh = prompt("Nhập dấu +/-/x/: để lựa chọn phép tính")
    if(pheptinh == "+"){
        cong(a, b)
    } else if(pheptinh == "-"){
        tru(a, b)
    } else if(pheptinh == "x"){
        nhan(a, b)
    } else if(pheptinh == ":"){
        chia(a, b)
    } else{
        alert("Nhập sai phép tính, hãy thử lại.")
        window.location.reload()
    }
}

// Bài 1 cách 2
function bai1b(){
    let pheptinh = prompt("Nhập dấu +/-/x/: để lựa chọn phép tính")
    function cong(a, b){
        return a + b;
    }
    function tru(a, b){
        return a - b;
    }
    function nhan(a, b){
        return a * b;
    }
    function chia(a, b){
        return a / b;
    }

    if(pheptinh == "+"){
        let n1 = Number(prompt("Nhập số 1:"))
        let n2 = Number(prompt("Nhập số 2:"))
        let ans = cong(n1, n2)
        console.log(`Tổng hai số là ${n1} + ${n2} = ${ans}`)
    } else if(pheptinh == "-"){
        let n1 = Number(prompt("Nhập số 1:"))
        let n2 = Number(prompt("Nhập số 2:"))
        let ans = tru(n1, n2)
        console.log(`Hiệu hai số là ${n1} - ${n2} = ${ans}`)
    } else if(pheptinh == "x"){
        let n1 = Number(prompt("Nhập số 1:"))
        let n2 = Number(prompt("Nhập số 2:"))
        let ans = nhan(n1, n2)
        console.log(`Tích hai số là ${n1} x ${n2} = ${ans}`)
    } else if(pheptinh == ":"){
        let n1 = Number(prompt("Nhập số 1:"))
        let n2 = Number(prompt("Nhập số 2:"))
        let ans = chia(n1, n2)
        console.log(`Thương hai số là ${n1} : ${n2} = ${ans}`)
    } else{
        console.log("Nhập sai phép tính")
    }
}


// Bài 2
function bai2(){
    let b = []
    limit = Number(prompt("Nêu số thành viên trong gia đình bạn."))
    for(let i = 1; i <= limit; i++){
        b[i - 1] = {
            fullName: prompt("Nhập tên của thành viên " + i),
            age: prompt("Nhập số tuổi của thành viên " + i)
        }
        if(b[i - 1].age >= 60){
            console.log("Thành viên " + b[i - 1].fullName + " đã đến tuổi nghỉ hưu.")
        } else if (b[i - 1].age >= 55){
            console.log("Thành viên " + b[i - 1].fullName + " đã đến tuổi nghỉ hưu nếu họ là nữ, chưa nếu họ là nam.")
        } else{
            console.log("Thành viên " + b[i - 1].fullName + " chưa đến tuổi nghỉ hưu.")
        }
        while(b[i - 1].fullName == "" || b[i - 1].age == ""){
            b[i - 1] = {
            fullName: prompt("Thiếu thông tin của thành viên vừa rồi. Nhập lại tên của thành viên " + i),
            age: prompt("Nhập lại tuổi của thành viên " + i)}
            if(b[i - 1].fullName != "" && b[i - 1].age != ""){
                break;}
        }
    }
    console.log(b)
}

// Bài 2b - tìm tuổi nhỏ nhất
function bai2b(){
    let b = []
    limit = Number(prompt("Nêu số thành viên trong gia đình bạn."))
    for(let i = 1; i <= limit; i++){
        b[i - 1] = {
            fullName: prompt("Nhập tên của thành viên " + i),
            age: prompt("Nhập số tuổi của thành viên " + i)
        }
        while(b[i - 1].fullName == "" || b[i - 1].age == ""){
            b[i - 1] = {
            fullName: prompt("Thiếu thông tin của thành viên vừa rồi. Nhập lại tên của thành viên " + i),
            age: prompt("Nhập lại tuổi của thành viên " + i)}
            if(b[i - 1].fullName != "" && b[i - 1].age != ""){
                break;}
        }
    }
    let prevage = 999
    for(let j = 0; j < limit; j++){
        if(b[j].age < prevage){
            prevage = b[j].age
        }
    }
    console.log(`Số tuổi thấp nhất nhà là ${prevage}.`)
}

// Bài 2c - sắp xếp người theo thứ tự tăng dần
function bai2c(){
    let arrayPerson = [
        {
          name: "Vinh",
          age: 15,
        },
        {
          name: "Lâm",
          age: 14,
        },
        {
          name: "Đức Anh",
          age: 12,
        },
        {
          name: "Quý",
          age: 18,
        },
        {
          name: "Việt Anh",
          age: 1,
        },
        ];
    // for(i = 0; i < arrayPerson.length; i++){
    //     let lowestAge = 999;
    //     let lowestAgeHolder = -1;
    //     for(j = 0; j < arrayPerson.length; j++){
    //         if(arrayPerson[j].age < lowestAge){
    //             lowestAge = arrayPerson[j].age;
    //             lowestAgeHolder = j;
    //         }
    //     }
    //     for(k = 0; k < arrayPerson.length; k++){
    //         if(k == lowestAgeHolder){
    //             arrayPerson.push(arrayPerson[k])
    //             delete arrayPerson[k]
    //         }
    //     }
    // }
        for(let i = 0; i < arrayPerson.length; i++){
            for (let j = 0; j < arrayPerson.length; j++){
                if(arrayPerson[i].age < arrayPerson[j].age)
            }
        }
        // Lát cóp code của anh
    console.log(arrayPerson)
}
// Bài 3
function bai3(){
    let S = "1"
    for(let i = 2; i <= 20; i++){
        S = S + " " + String(i)
    }
    console.log(S);
}

// Bài 4
function bai4(){
    let a = Number(prompt("Nhập số a:"))
    let b = Number(prompt("Nhập số b:"))
    if(a <= b){
        for(i = a + 1; i < b; i++){
            console.log(i);
        }
    }
    else{
        for(i = b + 1; i < a; i++){
            console.log(i);
        }
    }
}

// Bài 5
function bai5() {
    let a = Number(prompt("Nhập số a:"))
    let b = Number(prompt("Nhập số b:"))
    let S = 0
    if(a <= b){
        for(i = a + 1; i < b; i++){
            S = S + i;
        }
    }
    else{
        for(i = b + 1; i < a; i++){
            S = S + i;
        }
    }
    console.log(S)
}
// Bài 6
function bai6(){
    let P = 1
    for(i = 1; i <= 5; i++){
        P = P*i
    }
    console.log(P)
}

choose = (prompt("Chọn bài muốn thấy (1-6), tồn tại 1b, 2b và 2c:"))
if(choose == "1b"){
    bai1b()
} else if(choose == "2b"){
    bai2b()
} else if(choose == "2c"){
    bai2c()
} else if(choose == 1){
    bai1()
} else if(choose == 2){
    bai2()
} else if(choose == 3){
    bai3()
} else if(choose == 4){
    bai4()
} else if(choose == 5){
    bai5()
} else if(choose == 6){
    bai6()
} else{
    alert("Nhập sai số bài")
    window.location.reload()
}