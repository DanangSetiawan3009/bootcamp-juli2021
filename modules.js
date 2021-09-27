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
    // console.log("user2 length:", users2.length);
    console.log(users2[0]);
    console.timeEnd("FN2")
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
 */