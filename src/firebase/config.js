import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDY-Dv6vdmpzIko5W8hbnchYbZi01UIWv4",
    authDomain: "olx-clone-iitg-3e7e0.firebaseapp.com",
    projectId: "olx-clone-iitg-3e7e0",
    storageBucket: "olx-clone-iitg-3e7e0.appspot.com",
    messagingSenderId: "11544139243",
    appId: "1:11544139243:web:b1fcec0b513f18972a75ae",
    measurementId: "G-SWG6FWDSFM"
};

export const Firebase= firebase.initializeApp(firebaseConfig)//named export