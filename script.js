// variable
// snake case, contohnya full_name
// camel case, contohnya fullName
{
    let name = "Admin Istr'ator"
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

// perbandingan arrow function tanpa parameter
// konvensional fn
function fn1() {
    console.log("ini fn1");
    return 1
}

// anonymous fn
const fn2 = function () {
    console.log("ini fn2");
    return 2
}

// arrow fn
const fn3 = () => { // kurawal sebagai function 
    console.log("ini fn3");
    return 3
}

// perbandingan arrow function dengan parameter
// anonymous dengan 1 param
const fn21 = function (param1) {
    console.log("ini fn21", param1);
    return 2
}
// anonymous dengan 2 param
const fn22 = function (param1, param2) {
    console.log("ini fn21", param1, param2);
    return 2
}

// arrow fn dengan return implisit
const fn4 = () => 4
// arrow fn dengan 1 param
const fn41 = param1 => 4 + param1
// arrow fn dengan 2 param
const fn42 = (param1, param2) => 4 + param1 + param2
// arrow fn dengan 2 param dan return object
const fn43 = (param1, param2) => ({ // kurawal sebagai return object
    param1,
    paramKe2: param2
})

console.log(fn1())
console.log(fn2())
console.log(fn21("99999"))
console.log(fn22("88888", 11111))
console.log(fn3())
console.log(fn4())
console.log(fn41(90))
console.log(fn42(88888, 11111))
console.log(fn43(88888, 11111))


// object & array destructuring
const user = { // 0xff
    name: "admin", // 0xf1
    age: 21,
    address: "Jakarta",
    hobby: ["Football", "Swimming", "Listening Music", "Fishing"]
}

const name1 = user.name
const age1 = user.age

const { name, age, ...otherKey } = user
console.log("name:", name);
console.log("age:", age);
console.log("key:", otherKey);
console.log({ ...user });

const [hobby1, hobby2, ...otherHobby] = user.hobby
console.log("hobby1", hobby1);
console.log("hobby2", hobby2);
console.log("otherhobby", otherHobby);

const userDetail2 = {
    name: user.name,
    age: user.age,
    address: "Bogor",
    hobby: user.hobby,
}

const userDetail3 = { ...user, address: "Depok" }
console.log("user", user);
console.log("userDetail", userDetail2);
console.log("userDetail", userDetail3);

const fn5 = () => {
    return ["A", "B"]
}
const [ret1, ret2] = fn5()
console.log("A", ret1);
console.log("B", ret2);

// this
class Person {
    age = 21

    tmo = () => {
        console.warn(this);

        // assign sebuah variable
        const self = this
        setTimeout(function () {
            console.log("============== tmo1");
            console.log(this);
            console.error(self);
        }, 1000)

        // binding function
        setTimeout(function () {
            console.log("============== tmo2");
            console.log(this);
        }.bind(this), 1000)

        // arrow function
        setTimeout(() => {
            console.log("============== tmo3");
            console.log(this);
        }, 1000)
    }
}
const P = new Person()
P.tmo()

/**
 * Latihan:
 *      - Buatlah halaman login sebagai halaman utama ketika membuka laman web
 *      - Ketika login dengan user&password tertentu, maka redirect ke halaman yang kalian miliki
 *          - dihalaman yang sama
 *          - tanpa refresh
 *
 * Latihan:
 *      - Buatlah tampilan register, yang memiliki field sebagai berikut:
 *          - nama
 *          - username
 *          - password
 *          - jenis kelamin (radio)
 *          - agama (dropdown list) - select-option
 *          - hobby (check box)
 *          - alamat
 *      - Buatlah tampilan list user yang sudah register
 *      - Buat pagination/halaman:
 *          - 1 halaman menampilkan 5 data
 */