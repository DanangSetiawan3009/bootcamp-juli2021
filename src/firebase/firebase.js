import { initializeApp } from "firebase/app"
import {
    getAuth,
    createUserWithEmailAndPassword
} from "firebase/auth"



const configFirebase = {
    apiKey: "AIzaSyAC6MT_WYrrkk_09gnzqFkEcoM9C_xVRkw",
    authDomain: "project01-juli21.firebaseapp.com",
    projectId: "project01-juli21",
    storageBucket: "project01-juli21.appspot.com",
}

class Firebase {
    constructor() {
        initializeApp(configFirebase)

        this.auth = getAuth()
    }

    createUser = obj => {
        return createUserWithEmailAndPassword(
            this.auth, obj.email, obj.password
        )
    }
}

export default Firebase