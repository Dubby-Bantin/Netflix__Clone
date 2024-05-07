import { initializeApp } from "firebase/app";
import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

import { toast } from "react-toastify";
const firebaseConfig = {
    apiKey: "AIzaSyAmTqA6-5fU4wOwgyygxGJKObuCMY3aBGo",
    authDomain: "netflix-clone-316f6.firebaseapp.com",
    projectId: "netflix-clone-316f6",
    storageBucket: "netflix-clone-316f6.appspot.com",
    messagingSenderId: "137060306304",
    appId: "1:137060306304:web:82c7edcd7e7db0b7d40565"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (name, email, password) => {
    try {
        const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
        );
        const user = response.user;
        await addDoc(collection(db, "user"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,

        
        });
        toast.success("user successfully created");
    } catch (e) {
        toast.error(e.code.split('/')[1].split('-').join(' '));
    }
    };

    const logIn = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
        toast.error(e.code.split('/')[1].split('-').join(' '));
    }
};

const logOut = async () => signOut(auth);


export {auth, db, logIn, signUp, logOut};