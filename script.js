// variable
// snake case, contohnya full_name
// camel case, contohnya fullName
{
    var name = "Admin Istr'ator"
    let age = 19
    const address = 'Jaka"rta'
    let isAdmin = true

    console.log("name:", name);
    console.log("age:", age);
    console.log("address:", address);

    console.log("typeof name:", typeof name);
    console.log("typeof age:", typeof age);
    // address = "Bandung"
    console.log("typeof address:", typeof address);
    console.log("typeof isAdmin:", typeof isAdmin);
}


let hobbies = ["swimming", "reading", "football"]
let userDetail = {
    name: "Admin",
    age: 21,
    hobby: hobbies,
    "add-ress": "Jakarta"
}

console.log("hobbies:", hobbies);
console.log("userDetail:", userDetail);

console.log("hobbies ke 2:", hobbies[1]);
console.log("age user:", userDetail["age"]);
console.log("age user:", userDetail.age);
console.log("add-ress user:", userDetail["add-ress"]);

hobbies[1] = "Playing Guitar"
console.log("hobbies ke 2:", hobbies[1]);
userDetail["add-ress"] = "Bogor"
console.log("add-ress user:", userDetail["add-ress"]);

hobbies.push("Listening Music")
console.log("hobbies:", hobbies);
userDetail.email = "a@a.com"
console.log("user:", userDetail);

let no1 = "umur saya " + ' adalah '
let no2 = "6"
let total = no1 + no2
console.log("Total:", total);

let umur = 21
umur += 2 // umur = umur + 2
console.log("umur:", umur);

// function
function sum(param1) {
    let no1 = param1 * 10 - 5
    console.log("total:", no1);
}
sum(5)
sum(4)
sum(6)

function sum2() {
    return 78
}
let valueSum2 = sum2()
console.log("sum2:", valueSum2);

// anonymous function
let sum3 = function (param) {
    return param * 3
}
console.log("sum3:", sum3(4));

// conditional
let checkNo = 4
/*
    == : check value
    === : check value & data type
 */
if (checkNo == "2")
    console.log("benar 2");
else if (checkNo == 3) {
    console.log("benar 3");
} else
    console.log("salah semua");

switch (checkNo) {
    case 2:
        console.log("switch 2");
        break;

    default:
        console.log("salah semua");
        break;
}

// loop
for (let index = 0; index < 5; index++) {
    console.log("index:", index);
}

for (let index = 0; index < hobbies.length; index++) {
    const hobby = hobbies[index];
    console.log("hobby:", hobby);
}

let index = 0
while (index < 5) {
    console.log("while index:", index);
    index++
}

console.clear()

// DOM manipulation
let navbar = document.querySelector(".submenu2")
let navbars = document.querySelectorAll(".submenu2")

console.log("navbar:", navbar);
console.log("navbars:", navbars);

navbar.innerText = "<a href='http://google.com'>Go to Goole</a>"
navbars[1].innerHTML = "<a href='http://google.com'>Go to Goole</a>"

let submenu = document.querySelector('.submenu')
submenu.innerHTML = `<div>
    <h1>ada</h1>
    <h2>oke</h2>
</div>`

navbar.style.backgroundColor = "red"
navbars[1].classList.add("bgBlack")
navbars[1].classList.remove("big")

function selectMenu(self) {
    let menus = document.querySelectorAll(".menu")
    for (let index = 0; index < menus.length; index++) {
        const menu = menus[index];
        menu.classList.remove("selected")
    }

    console.log(self);
    self.classList.add("selected")
    // console.log("clicked " + param + "!");
    // console.log(`clicked ${param}!`);
}

function clickButton() {
    const username = document.querySelector("#username")
    const password = document.form1.password
    console.log(username.value);
    console.log(password.value);
}

/**
 * Latihan:
 *      - Buatlah halaman login sebagai halaman utama ketika membuka laman web
 *      - Ketika login dengan user&password tertentu, maka redirect ke halaman yang kalian miliki
 *          - dihalaman yang sama
 *          - tanpa refresh
 */