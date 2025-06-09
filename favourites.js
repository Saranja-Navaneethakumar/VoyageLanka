let favourites = JSON.parse(localStorage.getItem('favourites')) || [];


function saveFavourites() {
    localStorage.setItem("favourites", JSON.stringify(favourites));
}

const favGrid = document.getElementById("fav-grid");
function loadFavourites() {
    const savedFavourites = JSON.parse(localStorage.getItem('favourites'));

    favGrid.innerHTML = ``;
    if (savedFavourites.length === 0) {
        favGrid.innerHTML = `<p> No favourite tours added yet.</p>`;
        return
    }
    savedFavourites.forEach(tour => {
        const favCard = document.createElement('div');
        favCard.classList.add('fav-card');
        favCard.innerHTML = `
                <img src="${tour.image}" alt="${tour.title}">
                <h3>${tour.title}</h3>
                <p>${tour.description}</p>
                <div class="fav-card-actions">
                    <a href="${tour.link}" class="learn-more-btn">Learn More</a>
                    <button class="fav-remove-btn" id="fav-remove-btn" data-id=${tour.id}>
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>`;
        favGrid.appendChild(favCard);
    });
    removeFavourites();
}

function removeFavourites() {
    const removeBtns = document.querySelectorAll('.fav-remove-btn');
    removeBtns.forEach((button) => {
        button.addEventListener('click', () => {
            const tourId = parseInt(button.getAttribute('data-id'), 10);
            favourites = favourites.filter((tour) => tour.id !== tourId )
            saveFavourites();
            loadFavourites();
        })
    })
}

loadFavourites();
