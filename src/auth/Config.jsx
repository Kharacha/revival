
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDo67icjxWCNDnwlvEpJsE2vmKqIu13FJA",
    authDomain: "revival-estates-login.firebaseapp.com",
    projectId: "revival-estates-login",
    storageBucket: "revival-estates-login.appspot.com",
    messagingSenderId: "442227475107",
    appId: "1:442227475107:web:1c98eb98594fce57993516",
    measurementId: "G-MKBXD256FN"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();


