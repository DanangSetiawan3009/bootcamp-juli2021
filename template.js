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