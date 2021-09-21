function selectMenu(selector) {
    let menus = document.querySelectorAll(".menu")
    for (let index = 0; index < menus.length; index++) {
        const menu = menus[index];
        menu.classList.remove("selected")
    }

    document.querySelector(`[data-menu='${selector}']`)?.classList.add("selected")
    changeContent(selector)
}

const changeContent = selector => {
    let menus = document.querySelectorAll("[data-section-content]")
    menus.forEach(menu => menu.classList.remove("show"))

    // if (document.querySelector(`[data-section-content='${selector}']`)) 
    //     document.querySelector(`[data-section-content='${selector}']`).classList.add("show")

    document.querySelector(`[data-section-content='${selector}']`)?.classList.add("show")
    if (selector === "user") showUser()
}

const addEvent = () => {
    document.addEventListener("click", e => {
        console.log(e);
        if (e.target.getAttribute("data-menu")) {
            const dataMenu = e.target.getAttribute("data-menu")
            // selectMenu("[data-menu='" + dataMenu + "']")
            selectMenu(dataMenu)
        }
    })
}

const showUser = () => {
    const userList = [{
        name: "Admin",
        age: 21
    }, {
        name: "User",
        age: 20
    }, {
        name: "Operator",
        age: 23
    }]

    const section = document.querySelector("[data-section-content='user']")

    section.innerHTML = ""
    userList.forEach(user => {
        // const text = document.createElement("h1")
        // text.innerText = user.name
        // section.appendChild(text)

        section.innerHTML += `<h1>${user.name}</h1>`
    })
}

const __init = () => {
    const a = "asdf"
    console.log("ghjk " + a + " ghjk")
    console.log(`ghjk ${a} ghjk`)

    addEvent()
    selectMenu("home")
}
__init()


// callback
const calc = (param1, cb) => {
    const tolongHitungDulu = 50 * param1
    return cb(tolongHitungDulu)
}
// callback
const calc2 = (cb) => {
    const tolongHitungDulu = 50 * 3
    return cb(tolongHitungDulu, 45, "asdf")
}

const sum = param1 => param1 ** 4
const dec = param1 => param1 ** 4 - 100

console.log(calc(3, sum))
console.log(calc(3, param => console.log(param)))
console.log(calc(3, dec))
console.log(calc2(dec))
calc2((param1, param2, param3) => {
    console.log(param1 ** 4 - 100)
    console.log(param2);
    console.log(param3);
})


// array methods
let users = ["satu", 2, "tiga", true]
console.warn("users:", users);

// tambah di akhir
users.push("tujuh7")
console.log("users:", users);

// tambah di awal
users.unshift(0)
console.log("users:", users);

// hapus di awal
users.shift()
console.log("users:", users);

// hapus di akhir
users.pop()
console.log("users:", users);

// hapus
users.splice(1, 2)
console.log("users:", users);

// update
users.splice(1, 0, "DUA")
console.log("users:", users);
users.splice(1, 1, 2)
console.log("users:", users);
users.splice(1, 3, "DIGANTI")
console.log("users:", users);
delete users[0]
console.log("users:", users);

const person = {
    name: "Admin",
    age: 21
}
console.warn(person);
person.address = "Jakarta"
console.log(person);
delete person.age
console.log(person);


users = [{
    name: "Admin",
    age: 21,
    address: "Jakarta"
}, {
    name: "User",
    age: 22,
    address: "Bogor"
}, {
    name: "Operator",
    age: 25,
    address: "Depok"
}]

console.table(users)
console.time("FOR")
for (let index = 0; index < users.length; index++) {
    const user = users[index];
    console.warn("index:", index)
    console.log("user:", user)
}
console.timeEnd("FOR")

console.time("FOREACH")
users.forEach((user, index) => {
    console.error("index:", index)
    console.log("user:", user)
})
console.timeEnd("FOREACH")

// ada yang beralamat di bogor ga?
let result = users.find(user => user.address === "Bogor")
console.log(result)

result = users.filter(user => user.age > 21)
console.table(result)

result = users.map((user, index) => {
    return `Nama user ke ${index + 1} adalah ${user.name}`
})
console.log(result)