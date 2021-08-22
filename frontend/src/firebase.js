import firebase from 'firebase/app';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDtXAfP8JwUyFg_m4voG4BX2fREafgDjkE",
    authDomain: "proyecto-portafolio-react.firebaseapp.com",
    projectId: "proyecto-portafolio-react",
    storageBucket: "proyecto-portafolio-react.appspot.com",
    messagingSenderId: "317763603619",
    appId: "1:317763603619:web:f8cd7f3e8895bfd9c04316",
    measurementId: "G-K2WJ3TG39X"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()

export { auth, firebase }