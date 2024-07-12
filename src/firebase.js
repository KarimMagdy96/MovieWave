import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAPi9QypMBOuBRWTWP8fC7dtBrg60q89is",
  authDomain: "authproject-78a35.firebaseapp.com",
  projectId: "authproject-78a35",
  storageBucket: "authproject-78a35.appspot.com",
  messagingSenderId: "375541126979",
  appId: "1:375541126979:web:9e8281d02786689f84c1f6",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
