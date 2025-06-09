import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBsOUFvdfQ1tM4yd3zDhqLp86czoPIMaqg",
    authDomain: "voyage-lanka.firebaseapp.com",
    projectId: "voyage-lanka",
    storageBucket: "voyage-lanka.firebasestorage.app",
    messagingSenderId: "903114166450",
    appId: "1:903114166450:web:dee7fc53de3a5a1c12b9ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const loginForm = document.getElementById("login-form");
// const loginModal = loginModal.querySelector("#login-modal");
const emailInput = document.getElementById("login-email");
const passwordInput = document.getElementById("login-password");
const loginErrorMsg = document.getElementById("login-error-msg");
const loginSuccessMsg = document.getElementById("login-success-msg");
const loginLoader = document.getElementById("login-loader");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
   
    let hasError = false;
    loginErrorMsg.style.display = "none";
    loginSuccessMsg.style.display = "none";

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();


    if (!email || !password) {
        hasError = true;
        loginErrorMsg.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> All fields are required!`;
        loginErrorMsg.style.display = "block";
        return;
    }
    if (!isValidEmail(email)) {
        hasError = true;
        loginErrorMsg.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> Please enter valid email address!`;
        loginErrorMsg.style.display = "block";
        return;
    }
    if (!isValidPassword(password)) {
        hasError = true;
        loginErrorMsg.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> Password must be at least 8 characters include an uppercase, a number, and a special character!`;
        loginErrorMsg.style.display = "block";
        return;
    }

    loginLoader.style.display = "block";

    let isSignedIn = localStorage.getItem('isSignedIn') || false;
    // firebase signin authentication
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
                loginLoader.style.display = "none";
                loginSuccessMsg.innerHTML = `<i class="fa-solid fa-check"></i>Log in Successful!`;
                loginSuccessMsg.style.display = "block";
                localStorage.setItem('isSignedIn', true)

                setTimeout(()=> {
                    window.location.href = "index.html";
                }, 1000);
        })
        .catch((error) => {
            loginLoader.style.display = "none";
            loginErrorMsg.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> ${error.message}`;
            loginErrorMsg.style.display = "block";
        });
});

function isValidEmail(email) {
    const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegEx.test(email);
}

function isValidPassword(password) {
    const passwordRegEx = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegEx.test(password);
}

function closeLoginModal(){
    document.getElementById('login-modal').style.display = 'none';
}

