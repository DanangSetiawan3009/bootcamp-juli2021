class Person {
    constructor() {
        this.name = "Admin"
    }

    getName() {
        return this.name
    }
}

class User extends Person {
    getPrivilege() {
        return "Administrator"
    }
}

const p = new User()
console.log(p.getName());
console.log(p.getPrivilege());

setTimeout(() => console.log("TIMEOUT"), 3000)
console.log("END");


// PROMISE

const prom = () => {
    const res = new Promise((resolve, reject) => {
        /*
        setTimeout(() => {
            console.warn("TIMEOUT");
            // resolve()
            // reject(new Error("Di REJECT"))
        }, 3000)
        */

        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => {
                console.table(json)
                resolve()
            })
            .catch(() => reject(new Error("Internal Server Error!!")))
    })
}
// prom()
/*
res
 .then(() => console.warn("END"))
 .catch(err => console.error("ERROR!!!!!", err))
 .finally(() => console.log("Di running kapan pun baik ketika error maupun tidak"))
*/

// async await
let users = []
const fn1 = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
}

const fn2 = async () => {
    // const res = await fetch('https://jsonplaceholder.typicode.com/users')
    // const res2 = await res.json()
    // console.log(res2);
    // return res2

    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
}

const paginationConfig = {
    dataPerPage: 5,
    currentPage: 0
}

const generateList = () => {
    const table = document.querySelector("table > tbody")

    /**
     *  halaman 1: 0 - 4
     *  halaman 2: 5 - 9, dst
     *  (1=0, 2=5, 3=10, ..., 7=30 (n-1)*5 )
     *  (1=1, 2=6, 3=11, ..., 7=31 (n-1)*5 + 1)
     */

    const totalData = users2.length

    /**
     if (paginationConfig.currentPage > 0) {
         const currentPage = paginationConfig.currentPage
     } else {
         const currentPage = 1
     }
     */
    const currentPage = (paginationConfig.currentPage > 0) ? paginationConfig.currentPage : 1

    let startNo = (currentPage - 1) * paginationConfig.dataPerPage
    const endNo = currentPage * paginationConfig.dataPerPage
    const dataSelected = users2.slice(
        startNo, // start index
        endNo // end index
    )

    table.innerHTML = ""
    dataSelected.forEach((user, idx) => {
        table.innerHTML += `
            <tr>
                <td width="20px">${startNo += 1}</td>
                <td width="200px">${user.name}</td>
                <td width="10px">${user.email}</td>
                <td>${user.address.city}</td>
            </tr>
        `
    });
    generatePagination(totalData, paginationConfig.dataPerPage, currentPage)
}

const generatePagination = (totalData, dataPerPage, currentPage) => {
    const pagination = document.querySelector('.pagination')
    pagination.innerHTML = ""
    for (let index = 1; index <= Math.ceil(totalData / dataPerPage); index++) {
        const selected = index === currentPage ? "selected" : ""
        pagination.innerHTML += `
            <div class="page-no ${selected}" onclick="goToPage(${index})">${index}</div>
        `
    }
}

const goToPage = page => {
    paginationConfig.currentPage = page
    generateList()
}

const callAPI = async () => {
    console.warn("diatas fn1");
    console.time("FN1")
    users = fn1()
    // console.log("user1 length:", users.length);
    console.log(users[0]);
    console.timeEnd("FN1")

    console.warn("diatas fn2");
    console.time("FN2")
    users2 = await fn2()
    console.log("user2 length:", users2.length);
    console.log(users2[0]);
    console.timeEnd("FN2")
    generateList()
}
callAPI()

/**
 * users -> album -> photo
 *       -> post -> comments
 *       -> todos
 *
 * Latihan:
 *      - Pertama kali reload halaman, ambil data user dari jsonplaceholder
 *      - tampilkan pada table user,
 *          - name
 *          - username
 *          - email
 *          - city (address)
 *      - tampilan table user ada action untuk edit dan delete
 *      - untuk menambah data (add), gunakan fitur registrasi
 *      - pagination, perhalaman 5 data
 */