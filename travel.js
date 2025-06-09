
$(function(){
    $("#header-placeholder").load("header.html");
});

$(function(){
    $("#footer-placeholder").load("footer.html");
});

$(function(){
    $("#tour-slider-placeholder").load("tour-slider.html");
});

window.onscroll = function() { scrollFunction()};

$(window).resize(function() {
    var width = $(window).width();
    var height = $(window).height();
    console.log('width : ',width)
    console.log('height : ',height)
    var t = false;
  })



function openLoginModal(){
    $("#login-modal-container").load("login.html", function() {
        document.getElementById('login-modal').style.display='block';
    })
}


function closeLoginModal(){
    document.getElementById('login-modal').style.display = 'none';
}

// window.onclick = function (event){
//     var loginModal = document.getElementById('login-modal');
//     loginModal.style.display = none;
// }



function loadTimeToVisit() {
    window.location.href = "time-to-visit.html";
}

function openSignIn(){
    window.location.href = "sign-up.html";
}

// best time to visit month by month tab
document.addEventListener("DOMContentLoaded", () => {
    const tabButtons = Array.from(document.getElementsByClassName("tab-button"));
    const tabPanes = Array.from(document.getElementsByClassName("tab-pane"));

    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            tabButtons.forEach(btn => btn.classList.remove("active"));
            tabPanes.forEach(pane => pane.classList.remove("active"));

            button.classList.add("active");

            const tabId = button.getAttribute("data-tab");
            const targetPane = document.getElementById(tabId);
            if(targetPane) {
                targetPane.classList.add("active");
            }
        })
    })
});


// booking form
document.addEventListener("DOMContentLoaded", () => {

    const urlParams =  new URLSearchParams(window.location.search);
    const tourId = urlParams.get('tour');
    const tourPrice = urlParams.get('price');
    // console.log(tourId, price);
    if (tourId) {
        const tour = document.getElementById('tour');
        tour.value = tourId;
    }

    if (tourPrice) {
        document.getElementById('price').value = tourPrice;
    }

   if(window.location.pathname.includes("booking.html")) {
    function showError(id, message){
        const errorElement =  document.getElementById(id);
        errorElement.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> ${message}`;
        errorElement.style.display = "block";
    }
    
    
    function hideError(id){
        const errorElement =  document.getElementById(id);
        errorElement.style.display = "none";
    }
    
    function validateName() {
        const name = document.getElementById("name").value.trim();
        const namePattern = /^[a-zA-Z\s]+$/;
        if(name===""){
            showError("name-error", "Please Enter Your Full Name");
        } else if (!namePattern.test(name)) {
            showError("name-error", "Name can only contain letters and spaces.");
        }
        else {
            hideError("name-error");
        }
    }
    
    function validateEmail() {
        const email = document.getElementById("email").value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(email===""){
            showError("email-error", "Please Enter Your Email");
        } else if (!emailPattern.test(email)) {
            showError("email-error", "Enter a valid email address.");
        }
        else {
            hideError("email-error");
        }
    }
    
    function validatePhone() {
        const phone = document.getElementById("phone").value.trim();
        const phonePattern = /^[0-9]{10,15}$/;
        if(phone===""){
            showError("phone-error", "Please Enter Your conatct number.");
            console.log('Please Enter Your conatct number.')
        } else if (!phonePattern.test(phone)) {
            showError("phone-error", "Enter a valid contact number (10-15 digits).");
        }
        else {
            hideError("phone-error");
        }
    }
    
    function validateBudget() {
        const budget = document.getElementById("budget").value.trim();
        if(isNaN(budget) || budget<=100){
            showError("budget-error", "Budget must be greater than £100");
        } 
        else {
            hideError("budget-error");
        }
    }
    
    function validateDate() {
        const date = document.getElementById("start-date").value.trim();
        if(!date){
            showError("date-error", "Please Enter the start date");
        } else {
            hideError("date-error");
        }
    }
    
    function validateAdults(){
        const adults = document.getElementById("guests").value.trim();
        console.log('adults', adults)
        const adultPattern = /^[0-9]+$/;
        if(adults === "" || adults === 0){
            showError("guests-error", "Please enter minimum 1 adult.")
        }
        else if(!adultPattern.test(adults))  {
            showError("guests-error", "Please enter a valid number.")
        } else if(parseInt(adults,10)>10)  {
            showError("guests-error", "Number of Adults can not exceed 10.")
        } else {
            hideError("guests-error");
        }
    }
    
    // function validatePayment(){
    //     let isSelected = false;
    //     const paymentMethod = document.querySelector('input[name="payment-method"]:checked');
    //     paymentMethod.forEach(input => {
    //         if(input.checked){
    //             isSelected = true;
    //         }
    //     })
    //     if(!isSelected){
    //         showError("payment-error", "Please select a payment method")
    //         return false;
    //     }
    //     else {
    //         hideError("payment-error");
    //         return true;
    //     }
    // }
    
    function validateChildren(){
        const children = document.getElementById("children").value.trim();
        const childrenPattern = /^[0-9]+$/;
        if(parseInt(children,10)<0){
            showError("children-error", "Please enter a valid number.")
        }
        else if(!childrenPattern.test(children))  {
            showError("children-error", "Please enter a valid number.")
        } else if(parseInt(children,10)>10)  {
            showError("children-error", "Number of Children can not exceed 10.")
        } else {
            hideError("children-error");
        }
    }
    
    function validateInfants(){
        const infants = document.getElementById("infants").value.trim();
        const infantsPattern = /^[0-9]+$/;
        if(parseInt(infants,10)<0){
            showError("infants-error", "Please enter a valid number.")
        }
        else if(!infantsPattern.test(infants))  {
            showError("infants-error", "Please enter a valid number.")
        } else if(parseInt(children,10)>10)  {
            showError("infants-error", "Number of infants can not exceed 10.")
        } else {
            hideError("infants-error");
        }
    }
    
    function validateHotelType(){
        const hotelType = document.getElementById("hotel-type").value.trim();
        if(hotelType === ""){
            showError("hotel-error", "Please select hotel type.")
        } else {
            hideError("hotel-error");
        }
    }
    
    
    document.getElementById("name").addEventListener("input", validateName);
    document.getElementById("email").addEventListener("input", validateEmail);
    document.getElementById("phone").addEventListener("input", validatePhone);
    document.getElementById("budget").addEventListener("input", validateBudget);
    document.getElementById("start-date").addEventListener("change", validateDate);
    document.getElementById("guests").addEventListener("input", () => {
        console.log("Input event detected on #guests");
        validateAdults();
    });

    document.getElementById("children").addEventListener("input", validateChildren);
    document.getElementById("infants").addEventListener("input", validateInfants);
    document.getElementById("hotel-type").addEventListener("change", validateHotelType);
    document.querySelector('input[name="payment-method"]:checked').addEventListener()

    document.getElementById("booking-form").addEventListener("submit", function(event){
        validateName();
        validateEmail();
        validatePhone();
        validateBudget();
        validateDate();
        validateAdults();
        validateChildren();
        validateInfants();
        validateHotelType();

        const errors = document.querySelectorAll(".error-msg");
        console.log('errors',errors)
        if(errors){
            for(let error of errors){
                if(error.style.display === "block"){
                    event.preventDefault();
                    return;
                }
            }
        }
        else {
            
            document.getElementById("booking-btn").disabled = false;
        }
        
    });
   }
});

