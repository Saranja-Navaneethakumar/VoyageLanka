import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyBsOUFvdfQ1tM4yd3zDhqLp86czoPIMaqg",
    authDomain: "voyage-lanka.firebaseapp.com",
    databaseURL: "https://voyage-lanka-default-rtdb.firebaseio.com",
    projectId: "voyage-lanka",
    storageBucket: "voyage-lanka.firebasestorage.app",
    messagingSenderId: "903114166450",
    appId: "1:903114166450:web:dee7fc53de3a5a1c12b9ab"
};

const app_Signout = initializeApp(firebaseConfig);

const auth = getAuth(app_Signout);

const whenSignedIn = document.getElementById("whenSignedIn");
const whenSignedOut = document.getElementById("whenSignedOut");

const loginBtn = document.getElementById("login-Button");
const signOutBtn = document.getElementById("sign-out-Button");

loginBtn.onclick = () => openLoginModal();
signOutBtn.onclick = () => {
    if(auth.currentUser){
        signOut(auth);
        if( signOut(auth)) {
            alert("Sign out successfully")
        }
        
        setTimeout(()=> {
            window.location.href = "index.html";
        }, 1000);
    }
   else {
    alert("Please login first")
   }
}
