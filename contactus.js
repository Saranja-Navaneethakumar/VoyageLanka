import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";

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
const database = getDatabase(app);
const contactUs_ref = ref(database, "contactUs");
const hasError = false;

document.addEventListener("DOMContentLoaded", () => {
    const contactUsForm = document.getElementById("cont-Form");

    const contactErrorMsg = document.getElementById("contact-error-msg");
    const contactSuccessMsg = document.getElementById("contact-success-msg");

    contactUsForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const country = document.getElementById("country").value.trim();
        const contact = document.getElementById("contact").value.trim();
        const message = document.getElementById("message").value.trim();

        document.getElementById("email").addEventListener("input", validateEmail);
        document.getElementById("contact").addEventListener("input", validatePhone);


        const contactUsData = {
            name: name,
            email: email,
            country: country,
            contact: contact,
            message: message
        }; 
        if(!hasError) {
            push(contactUs_ref, contactUsData)
            .then(() => {
                contactSuccessMsg.innerHTML = `<i class="fa-solid fa-check"></i>Thank you for contacting us!`;
                contactErrorMsg.style.display = "none";
                contactSuccessMsg.style.display = "block";
                setTimeout(() => {
                    contactSuccessMsg.style.display = "none";
                }, 3000);
                contactUsForm.reset();
            })
            .catch((error) => {
                contactErrorMsg.innerHTML = `<i class="fa-solid fa-exclamation"></i>Contact us unsuccessful!`;
                contactErrorMsg.style.display = "block";
                contactSuccessMsg.style.display = "none";
            });
        }

        contactUsForm.reset();
    });
});



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

function validatePhone() {
    const phone = document.getElementById("phone").value.trim();
    const phonePattern = /^[0-9]{10,15}$/;
    if(phone===""){
        hasError = true;
        showError("contact-phone-error", "Please Enter Your conatct number.");
        console.log('Please Enter Your conatct number.')
    } else if (!phonePattern.test(phone)) {
        hasError = true;
        showError("contact-phone-error", "Enter a valid contact number (10-15 digits).");
    }
    else {
        hideError("contact-phone-error");
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