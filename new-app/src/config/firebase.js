import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc, addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
const firebaseApp = initializeApp({
    apiKey: "AIzaSyCY_1nirEcQfUg-KZ3jphWbweFJRb8-zE4",
    authDomain: "hackathon-kskl.firebaseapp.com",
    projectId: "hackathon-kskl",
    storageBucket: "hackathon-kskl.appspot.com",
    messagingSenderId: "236140603911",
    appId: "1:236140603911:web:1f924e5a26d565a724d8a2"
});

const auth = getAuth();
const db = getFirestore();
const storage = getStorage(firebaseApp);

export {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    db,
    doc,
    setDoc,
    getDoc,
    addDoc,
    collection,
    getDocs,
    query,
    where,
    ref,
    uploadBytes,
    getDownloadURL
};