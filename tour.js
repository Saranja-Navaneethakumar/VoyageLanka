
let favourites = JSON.parse(localStorage.getItem('favourites')) || [];
const tours = [
    { id: 1, image: 'images/tour/beach-hikkaduwa.jpg', title: 'Discover Sri Lankan Beaches', description: 'Explore the beautiful Beaches of Sri Lanka with this 7-day tour package', link: 'tour-detail.html?tour=1' },
    { id: 2, image: 'images/Anuradhapura.jpeg', title: 'Cultural & Heritage Tour', description: 'Rewind the history of Sri Lanka and explore the rich cultural heritage.', link: 'tour-detail.html?tour=2' },
    { id: 3, image: 'images/tour/yala.jpg', title: 'Wildlife & Scenic Adventure', description: 'Take a trip through beautiful wildlife of Sri Lanka, rich cultural history, and stunning natural scenery.', link: 'tour-detail.html?tour=3' },
    { id: 4, image: 'images/tour/Nuwara-Eliya-Sri-Lanka.jpg', title: 'Adventure in the hill country', description: 'Embark the thrilling adventure explore the tea plantations, beautiful waterfalls, and mountains etc.', link: 'tour-detail.html?tour=4' },
    { id: 5, image: 'images/tour/ella.jpg', title: 'Adventures in Ella', description: 'Hike through the scenic trails and explore the braethtaking views of Ella and Haputale', link: 'tour-detail.html?tour=5' },
    { id: 6, image: 'images/Galle.jpeg', title: 'Road Trip in Scenic South', description: 'Explore the southern cost and towns through the  drive along like a local', link: 'tour-detail.html?tour=6' },
    { id: 7, image: 'images/Polonnaruwa Vatadage - SriLanka.jpeg', title: 'Cultural triangle Tour', description: 'Explore the ancient cities and capitals of Sri Lanka and UNESCO heritage sites.', link: 'tour-detail.html?tour=7' },
    { id: 8, image: 'images/tour/jaffna-nallur.jpg', title: 'Untouched the beauty of the Northern Sri Lanka - Jaffna & Beyond', description: 'Explore the rich heritage of Northern Sri Lanka including Jaffna and ancient temples.', link: 'tour-detail.html?tour=8' },
    { id: 9, image: 'images/tour/arugambay.jpg', title: 'Surfing the long beaches', description: 'Discover the beaches and cultural treasure captivated in the east coast of Sri Lanka.', link: 'tour-detail.html?tour=9' },
    { id: 10, image: 'images/Port City Colombo.jpeg', title: 'Heartbeat of Sri Lanka - Colombo', description: 'Uncover the vibrant modernity and history in Colombo', link: 'tour-detail.html?tour=10' }
];

const toursPerPage = 6;
let currentTourPage = 1;
const totalTourPages = Math.ceil(tours.length / toursPerPage);

const tourGrid = document.getElementById('tour-grid');
const tourPrevBtn = document.getElementById('tour-prev-btn')
const tourNextBtn = document.getElementById('tour-next-btn');
const tourPageInfo = document.getElementById('tour-page-info');

function getTours() {
    const startIndex = (currentTourPage - 1) * toursPerPage;
    const endIndex = startIndex + toursPerPage;

    tourGrid.innerHTML = '';

    const currentTours = tours.slice(startIndex, endIndex);
    currentTours.forEach(tour => {
        const tourCard = document.createElement('div');
        tourCard.classList.add('tour-card');
        tourCard.innerHTML = `
        <img src="${tour.image}" alt="${tour.title}">
        <h3>${tour.title}</h3>
        <p>${tour.description}</p>
        <div class="tour-card-actions">
            <a href="${tour.link}" class="learn-more-btn">Learn More</a>
            <button class="tour-btn-favourite" id="tour-btn-favourite" data-id=${tour.id}>
                <i class="fa-regular fa-heart"></i>
            </button>
        </div>`;
        tourGrid.appendChild(tourCard);
    });
    tourPageInfo.innerText = `Page ${currentTourPage} of ${totalTourPages}`;
    tourPrevBtn.disabled = currentTourPage === 1;
    tourNextBtn.disabled = currentTourPage === totalTourPages;

    addFavourite();
}

tourPrevBtn.addEventListener('click', () => {
    if (currentTourPage > 1) {
        currentTourPage--;
        getTours();
    }
});

tourNextBtn.addEventListener('click', () => {
    if (currentTourPage < totalTourPages) {
        currentTourPage++;
        getTours();
    }
});

getTours();

// Initialize favourites from localStorage


// Function Definitions
function addFavourite() {
    const fav_buttons = document.querySelectorAll(".tour-btn-favourite");
    fav_buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const tourId = Number(button.getAttribute("data-id"));
            const tour = tours.find(tour => {
                console.log(`Comparing tour ID ${tour.id} with tourId ${tourId}`);
                return tour.id === tourId
            });

            toggleFavourite(tour);
            updateFavButton(button, tourId);
        });
        const tourId = button.getAttribute("data-id");
        updateFavButton(button, tourId); // Ensure buttons are updated correctly
    });
}

function toggleFavourite(tour) {
    const index = favourites.findIndex(fav => fav.id === tour.id)
    if (index !== -1) {
        favourites.splice(index, 1);
    } else {
        favourites.push(tour);
    }
    saveFavourites();
}

function updateFavButton(button, tourId) {
    const icon = button.querySelector("i");
    const isFav = favourites.some(fav => fav.id === tourId);
    if (isFav) {
        icon.classList.remove("fa-regular");
        icon.classList.add("fa-solid");
        icon.style.color = "red";
    } else {
        icon.classList.remove("fa-solid");
        icon.classList.add("fa-regular");
        icon.style.color = "";
    }
}

function saveFavourites() {
    localStorage.setItem("favourites", JSON.stringify(favourites));
}
