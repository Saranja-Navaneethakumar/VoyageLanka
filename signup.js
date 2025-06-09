import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

//web app's Firebase configuration
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


const emailInput=document.getElementById("email");
const passwordInput=document.getElementById("password");
const confirmpasswordInput=document.getElementById("confirm-password");
const signUp = document.getElementById("signup-btn");


signUp.addEventListener("click", function(event) {
    event.preventDefault();
    const auth = getAuth();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const confirmpassword = confirmpasswordInput.value.trim();

    let hasError = false;
    hideError();
    hideSuccess();

    if(!email || !password || !confirmpassword){
        hasError = true;
        showError("All fields are required!");
        return;
    }
    if(!isValidEmail(email)){
        hasError = true;
        showError("Please enter valid email address");
        return;
    }
    if(!isValidPassword(password)){
        hasError = true;
        showError("Password must be at least 8 characters include an uppercase, a number, and a special character");
        return;
    }

    if(password !== confirmpassword) {
        hasError = true;
        showError("Password & Confirm password mismatch.");
        return;
    }
 
    showLoader();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed up 
        if(!hasError) {
            hideLoader();
            const user = userCredential.user;
            showSuccess("Account created successfully!");
            window.location.href = "index.html";
        }
        
    })
    .catch((error) => {
        hideLoader();
        const errorCode = error.code;
        const errorMessage = error.message;
        showError(errorMessage);
    });


    
});

function isValidEmail(email){
    const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegEx.test(email);
}

function isValidPassword(password) {
    const passwordRegEx =  /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegEx.test(password);
}

function showError(message){
    const errorElement =  document.getElementById("signup-error-msg");
    errorElement.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> ${message}`;
    errorElement.style.display = "block";
}

function showSuccess(message){
    const successElement =  document.getElementById("signup-success-msg");
    successElement.innerHTML = `<i class="fa-solid fa-check"></i> ${message}`;
    successElement.style.display = "block";
}


function hideError(){
    const errorElement =  document.getElementById("signup-error-msg");
    errorElement.style.display = "none";
}

function hideSuccess(){
    const successElement =  document.getElementById("signup-success-msg");
    successElement.style.display = "none";
}

// loader
function showLoader() {
    const loader = document.getElementById("signup-loader");
    loader.style.display = "block";
}

function hideLoader() {
    const loader = document.getElementById("signup-loader");
    loader.style.display = "none";
}

