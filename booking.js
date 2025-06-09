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
const booking_ref = ref(database, "bookings");

function validatePayment() {
    let isSelected = false;
    const paymentMethod = document.querySelector('input[name="payment-method"]:checked');
    paymentMethod.forEach(input => {
        if (input.checked) {
            isSelected = true;
        }
    })
    if (!isSelected) {
        showError("payment-error", "Please select a payment method")
        return false;
    }
    else {
        hideError("payment-error");
        return true;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const bookingForm = document.getElementById("booking-form");
    const bookingErrorMsg = document.getElementById("booking-error-msg");
    const bookingSuccessMsg = document.getElementById("booking-success-msg");

    bookingForm.addEventListener("submit", (event) => {
        event.preventDefault();
        if (!validatePayment) {
            event.preventDefault();
        }
        else {
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const budget = document.getElementById("budget").value.trim();
            const date = document.getElementById("date").value.trim();
            const adults = document.getElementById("guests").value.trim();
            const children = document.getElementById("children").value.trim();
            const infants = document.getElementById("infants").value.trim();
            const hotelType = document.getElementById("hotel-type").value.trim();
            const tour = document.getElementById("tour").value.trim();
            const price = document.getElementById("price").value.trim();
            const requests = document.getElementById("requests").value.trim();
            const paymentMethod = document.querySelector('input[name="payment-method"]:checked').value;

            const bookingData = {
                name: name,
                email: email,
                phone: phone,
                budget: budget,
                start_date: date,
                adults: adults,
                children: children,
                infants: infants,
                hotelType: hotelType,
                tour: tour,
                price: price,
                requests: requests,
                paymentMethod: paymentMethod
            };

            push(booking_ref, bookingData)
                .then(() => {
                    bookingSuccessMsg.innerHTML = `<i class="fa-solid fa-check"></i>Booked Successful!`;
                    bookingErrorMsg.style.display = "none";
                    bookingSuccessMsg.style.display = "block";
                    setTimeout(() => {
                        bookingSuccessMsg.style.display = "none";
                    }, 1500);
                    bookingForm.reset();
                })
                .catch((error) => {
                    console.error('Error adding booking:', error);
                    bookingErrorMsg.innerHTML = `<i class="fa-solid fa-exclamation"></i>Booking uncompleted!`;
                    bookingErrorMsg.style.display = "block";
                    bookingSuccessMsg.style.display = "none";
                });
        }


    });
});