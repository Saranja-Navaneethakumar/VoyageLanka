import { initializeApp, getApp, getApps } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyBsOUFvdfQ1tM4yd3zDhqLp86czoPIMaqg",
    authDomain: "voyage-lanka.firebaseapp.com",
    projectId: "voyage-lanka",
    storageBucket: "voyage-lanka.firebasestorage.app",
    messagingSenderId: "903114166450",
    appId: "1:903114166450:web:dee7fc53de3a5a1c12b9ab"
};


const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const database = getDatabase(app);
const subscribe_ref = ref(database, "subscribe");


const hasError = false;


const subscribeForm = document.getElementById("subscribe");
    if(subscribeForm){
        subscribeForm.addEventListener("submit", handleSubscription);
    }

    const subscribeErrorMsg = document.getElementById("subscribe-error-msg");
    const subscribeSuccessMsg = document.getElementById("subscribe-success-msg");

    subscribeForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const firstname = document.getElementById("firstname").value.trim();
        const lastname = document.getElementById("lastname").value.trim();
        const email = document.getElementById("email").value.trim();

        document.getElementById("email").addEventListener("input", validateEmail);


        const subscribeData = {
            firstname: firstname,
            lastname: lastname,
            email: email
        }; 
        if(!hasError) {
            push(subscribe_ref, subscribeData)
            .then(() => {
                subscribeSuccessMsg.innerHTML = `<i class="fa-solid fa-check"></i>Thank you for subscribing us!`;
                subscribeErrorMsg.style.display = "none";
                subscribeSuccessMsg.style.display = "block";
                setTimeout(() => {
                    subscribeSuccessMsg.style.display = "none";
                }, 3000);
                subscribeForm.reset();
            })
            .catch((error) => {
                subscribeErrorMsg.innerHTML = `<i class="fa-solid fa-exclamation"></i>Subscibe unsuccessful, Try Again!`;
                subscribeErrorMsg.style.display = "block";
                subscribeSuccessMsg.style.display = "none";
            });
        }

        subscribeForm.reset();
    });
    
function handleSubscription(event){
    event.preventDefault();
}

function validateEmail() {
    const email = document.getElementById("email").value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(email===""){
        hasError = true;
        showError("contatct-email-error", "Please Enter Your Email");
    } else if (!emailPattern.test(email)) {
        hasError = true;
        showError("contatct-email-error", "Enter a valid email address.");
    }
    else {
        hideError("contatct-email-error");
    }
}

function showError(id, message){
    const errorElement =  document.getElementById(id);
    errorElement.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> ${message}`;
    errorElement.style.display = "block";
}


function hideError(id){
    const errorElement =  document.getElementById(id);
    errorElement.style.display = "none";
}