
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import {getFirestore } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";


// Web app's Firebase configuration
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
const auth = getAuth(app);
const db = getFirestore(app);

var tourName;
var price;

document.addEventListener('DOMContentLoaded', function() {
    const urlParams =  new URLSearchParams(window.location.search);
    const tourId = urlParams.get('tour');

    const tourDetails = {
        1:{
            title:"Discover Sri Lankan Beaches",
            image:'images/tour/beach-hikkaduwa.jpg',
            description:"Explore the beautiful Beaches of Sri Lanka with this 7-day tour package",
            highlights:["Relax on the clean shores of Hikkaduwa and Bentota." , "Explore the coral reefs and marine life through snorkeling." , "Experience the vibrant nightlife of the coastal towns." , "Visit the iconic Galle Fort, a UNESCO World Heritage Site." , "Witness stilt fishing in Weligama and a turtle hatchery visit." , "Taste fresh seafood delicacies by the beach."],
            itinerary: ["Day 1: Arrival in Colombo and Transfer to Hikkaduwa: Transfer to your beach hotel in Hikkaduwa after meeting your guide at the airport.", 
            "Day 2: Beach Exploration and Snorkeling - Spend the day exploring Hikkaduwa Beach.", "Unwind on the beach and take in your first sunset.", 
            "Day 3: Galle Fort and Coastal Adventures: Visit Galle Fort in the morning to learn about coral reefs and marine life. Take a lunch of seafood and explore the marketplaces. At Unawatuna Beach, unwind.", 
            "Day 4: Turtle Hatchery and Stilt Fishing: Visit Weligama to witness the distinctive stilt fisherman.", 
            "Day 5: Water Sports and Bentota River Safari: Travel to Bentota and take part in water sports including windsurfing and jet skiing. Embark on a Madu Ganga river safari.",
            "Day 6: Relaxation and Spa Day - Enjoy your resort's spa facilities and spend the day at leisure by the beach." , 
            "Day 7: Departure - After breakfast, transfer to the airport for your departure."],
            price:"550",
            gallery: [{src:'images/tour/hikkaduwa.jpg', name:'Hikkaduwa'},
                      {src:'images/tour/galle-fort.jpg', name:'Galle Fort'},
                      {src:'images/tour/bentota.jpg', name:'Bentota'},
                      {src:'images/tour/weligama.webp', name:'Weligama'},
                      {src:'images/tour/unawatuna.jpeg', name:'Unawatuna'},
                      {src:'images/tour/pinnawela.jpg', name:'Pinnawala'}
            ]
        },
        2:{
            title:"Cultural & Heritage Tour",
            image:'images/Anuradhapura.jpeg',
            description:"Rewind the history of Sri Lanka and explore the rich cultural heritage.",
            highlights:["Visit Anuradhapura, a UNESCO World Heritage Site", "Iconic Sigiriya Fortress aka Lion Rock", "Sacred City of Kandy and the Daladamaligawa - The temple of the Sacred Tooth Relic.","Ruins of ancient capital Polonnaruwa another UNESCO heritage site", "Wood craving and Kandyan Arts", "Taste the sri Lankan Authentic Cuisine", "Golden Cave - Dambulla Cave Temple"],
            itinerary: ["Day 1: Transportation to Anuradhapura and Arrival - When you arrive at the airport, you will meet your guide. Make your way to Anuradhapura and check into your lodging. Discover the Ruwanwelisaya Stupa, the Sacred Bodhi Tree, and other historical locations. Spend the night at an Anuradhapura heritage hotel.", 
            "Day 2: Dambulla and Sigiriya -Transfer to Sigiriya in the morning. Scale the Sigiriya Rock Fortress and take in the magnificent vistas from the summit. Visit the Dambulla Cave Temple in the afternoon, which is well-known for its elaborate murals and Buddha sculptures. Spend the night in a comfortable hotel close to Dambulla or Sigiriya.",
            "Day 3: Exploration of Polonnaruwa - See the well-preserved ruins of the ancient city of Polonnaruwa. Explore the Parakrama Samudra Reservoir, Lotus Pond, and the Gal Vihara. Explore local food options and crafts during your free evening. Spend the night at Polonnaruwa.",
            "Day 4: The Cultural Capital of Kandy - Transfer to Kandy in the morning. See the highly regarded Buddhist site known as the Temple of the Sacred Tooth Relic. In the evening, take in a cultural dance performance. Look for souvenirs at the local markets and Kandy Lake. Spend the night in a Kandy boutique hotel.",
            "Day 5: Leaving - After breakfast, make your way to the airport to depart or remain longer. If time permits, there is the option to visit the Pinnawala Elephant Orphanage along the way."],
            price:"400",
            gallery: [{src:'images/tour/anuradhapura.jpg', name:'Anuradhapura'},
                      {src:'images/tour/kandy-dalada.jpg', name:'Dalada Maligawa'},
                      {src:'images/tour/kandy-ambuluwela.jpg', name:'Ambuluwawa'},
                      {src:'images/tour/sigiriya.jpg', name:'Sigiriya'},
                      {src:'images/tour/polonnaruwa.jpg', name:'Polonnaruwa'}
            ]
        },
        3:{
            title:"Wildlife & Safari Yala",
            image:'images/tour/yala.jpg',
            description: 'Take a trip through beautiful wildlife of Sri Lanka, rich cultural history, and stunning natural scenery.',
            highlights:["Wildlife safaris at Yala and Udawalawe National Parks." , "Scenic train ride through the misty hills of Nuwara Eliya and Ella." , "Hike to Little Adam’s Peak for panoramic mountain views." , "Relax at Mirissa beach and spot whales on a boat safari." , "Explore the colonial charm of Galle Fort, a UNESCO World Heritage Site." , "Visit the Nine Arches Bridge, an iconic site in Ella."],
            itinerary: ["Day 1: Arrival in Colombo – Upon arrival into Colombo you will meet your guide and be transferred to Mirissa. Laze on the beach and watch a sunset evening.",
                        "Day 2: Whale watching at Mirissa Take the early morning boat safari for whale and dolphin watching. Go back to the hotel for a lazy afternoon.",
                        "Day 3: Udawalawe National Park — Drive to Udawalawe for a thrilling wildlife safari. Go to the Elephant Transit Home for a unique experience.",
                        "Day 4: Scenic Train Journey to Ella A beautiful train ride from Nanu Oya to Ella. Go to Little Adam’s Peak, with panoramic mountain views.", 
                        "Day 5: Explore Ella and Yala National Park — Visit the Nine Arches Bridge in Ella, then head to Yala.” Experience an evening safari at Yala for leopards and elephants.", 
                        "Day 6: Galle Fort & Departure - Explore the colonial beauty of Galle Fort, a UNESCO World Heritage site. Transfer back to Colombo."
                    ],
            price:"750",
            gallery: [{src:'images/tour/mirissa.jpg', name:'Mirissa Whale Watching'},
                      {src:'images/tour/Udawalawe National Park.jpg', name:'Udawalawe National Park'},
                      {src:'images/tour/ella train journey.webp', name:'Ella Train Journey'},
                      {src:'images/tour/yala park.jpg', name:'Yala Park'},
                      {src:'images/tour/galle fort.webp', name:'PoloGalle Fort'}
            ]
        },
        4:{
            title:"Adventure in the hill country",
            image:'images/tour/Nuwara-Eliya-Sri-Lanka.jpg',
            description:"Embark the thrilling adventure explore the tea plantations, beautiful waterfalls, and mountains etc.",
            highlights:["Witness the stunning greenery and mist-covered mountains of Sri Lanka’s hill country.", "Take a scenic train ride from Kandy to Ella, known as one of the world’s most beautiful train journeys.", "Explore tea plantations, visit colonial-era bungalows, and sip fresh Ceylon tea.", "Hike through lush trails leading to breathtaking viewpoints like Horton Plains and Adam’s Peak.", "Visit iconic temples, waterfalls, and charming villages."],
            itinerary: ["Day 1: Arrival in Colombo and transfer to Kandy. Explore the Temple of the Sacred Tooth Relic and stroll by Kandy Lake.",
                "Day 2: Kandy to Nuwara Eliya - Visit a tea plantation, take a guided tour of a tea factory, and enjoy a relaxing evening at Gregory Lake.",
                "Day 3: Horton Plains National Park - Embark on an early morning trek to World’s End for panoramic views and visit Baker’s Falls.",
                "Day 4: Nuwara Eliya to Ella - Take the scenic train journey through tunnels, tea gardens, and rolling hills. Relax in Ella town.",
                "Day 5: Ella Adventures - Hike to Little Adam’s Peak, visit the famous Nine Arches Bridge, and explore Ravana Falls.",
                "Day 6: Haputale and Lipton’s Seat - A day of breathtaking views and visits to the tea country of Sir Thomas Lipton.",
                "Day 7: Departure - Transfer back to Colombo for your onward journey."],
            price:"580",
            gallery: [{src:'images/tour/Yapahuwa.jpg', name:'Yapahuwa'},
                {src:'images/tour/tea estate.jpg', name:'Tea Estate'},
                {src:'images/tour/horton plains 1.jpg', name:'Horton Plains'},
                {src:'images/tour/adams peak.jpg', name:'Adams Peak'}
      ]
        },
        5:{
            title:"Adventures in Ella",
            image:'images/tour/ella.jpg',
            description:"Hike through the scenic trails and explore the braethtaking views of Ella and Haputale",
            highlights:["Discover the hidden charm of Ella, surrounded by green hills and tea plantations.",
                "Hike iconic trails, including Ella Rock and Little Adam’s Peak, for stunning sunrise views.",
                "Visit architectural marvels like the Nine Arches Bridge.",
                "Enjoy breathtaking waterfalls and serene picnic spots.",
                "Experience Ella’s laid-back cafes and local culture."
                ],
            itinerary: ["Day 1: Arrival in Colombo and transfer to Ella. Relax at your hotel surrounded by nature.",
                "Day 2: Little Adam’s Peak - An easy morning hike with rewarding views, followed by a visit to Nine Arches Bridge.",
                "Day 3: Ella Rock - Take a challenging but scenic hike to the summit for sweeping views. Visit Ravana Falls in the afternoon.",
                "Day 4: Visit Demodara Loop - Explore the unique railway engineering of Sri Lanka’s hill country.",
                "Day 5: Adventure Day - Try zip-lining at Flying Ravana Mega Zip Line and enjoy the adrenaline rush.",
                "Day 6: Tea Factory Tour - Visit a local tea estate and factory to learn about Ceylon tea production.",
                "Day 7: Departure - Transfer to Colombo for your flight back."],
            price:"520",
            gallery: [
                {src:'images/tour/Ella-Rock.jpg', name:'Ella-Rock'},
                {src:'images/tour/Nine Arches Bridge.jpg', name:'Nine Arches Bridge'},
                {src:'images/tour/Ravana Falls.jpg', name:'Ravana Falls'}
            ]
        },
        6:{
            title:"Road Trip in Scenic South",
            image:'images/Galle.jpeg',
            description:"Explore the southern cost and towns through the drive along like a local",
            highlights:["Embark on a thrilling road trip along Sri Lanka’s southern coastal belt.",
                "Discover golden beaches, charming fishing villages, and historical towns.",
                "Explore Galle Fort, a UNESCO World Heritage Site, and its colonial architecture.",
                "Enjoy exciting activities like whale watching, surfing, and exploring national parks.",
                "Taste fresh seafood and unwind on tropical beaches."
                ],
            itinerary: ["Day 1: Arrival in Colombo and drive to Bentota. Relax at the beach and enjoy a boat ride on the Madu Ganga river.",
                "Day 2: Bentota to Galle - Visit Galle Fort, explore the charming streets, and enjoy a seafood lunch by the beach.",
                "Day 3: Unawatuna - Spend the day at this beautiful beach, snorkeling and swimming in crystal-clear waters.",
                "Day 4: Mirissa - Experience whale watching in the early morning and relax at Mirissa’s vibrant beach cafes.",
                "Day 5: Yala National Park - Take an afternoon safari to spot leopards, elephants, and other wildlife.",
                "Day 6: Tangalle and Hiriketiya Beach - Unwind at quieter beaches and enjoy a laid-back day by the sea.",
                "Day 7: Departure - Drive back to Colombo for your flight, stopping at Matara for any final exploration."],
            price:"600",
            gallery: [{src:'images/tour/Parrot Rock - Mirissa.jpg', name:'Parrot Rock - Mirissa'},
                {src:'images/tour/Dalawella Beach.jpg', name:'Dalawella Beach'},
                {src:'images/tour/Bentota (2).jpg', name:'Bentota'}
      ]
        },
        7:{
            title:"Cultural Triangle Tour",
            image:'images/Polonnaruwa Vatadage - SriLanka.jpeg',
            description:"Explore the ancient cities and capitals of Sri Lanka and UNESCO heritage sites.",
            highlights:["Discover Sri Lanka’s ancient cities and UNESCO World Heritage Sites.",
                "Climb the iconic Sigiriya Rock Fortress for breathtaking panoramic views.",
                "Explore the sacred Dambulla Cave Temple adorned with colorful murals and statues.",
                "Visit the ancient city of Polonnaruwa with its impressive ruins and stone carvings.",
                "Witness the cultural and spiritual legacy of Anuradhapura, the first capital of Sri Lanka."
                ],
            itinerary: ["Day 1: Arrival in Colombo and transfer to Sigiriya. Relax and unwind at your hotel amidst serene nature.",
                "Day 2: Sigiriya Rock Fortress and Village Tour - Climb the Lion Rock and experience rural life with a traditional village lunch.",
                "Day 3: Dambulla Cave Temple and Polonnaruwa - Visit the ancient rock temple in Dambulla and explore the well-preserved ruins of Polonnaruwa.",
                "Day 4: Anuradhapura Exploration - Discover the sacred Sri Maha Bodhi tree, Ruwanwelisaya Stupa, and other iconic ruins of this ancient city.",
                "Day 5: Departure - After breakfast, transfer back to Colombo for your departure."],
            price:"£400",
            gallery: [{src:'images/tour/ANCIENT ANURADAPURA.jpg', name:'ANCIENT ANURADAPURA'},
                {src:'images/tour/Polonnaruwa - Sri Lanka.jpg', name:'Polonnaruwa - Sri Lanka'},
                {src:'images/tour/The Dambulla Cave Temple.jpg', name:'The Dambulla Cave Temple'}
      ]
        },
        8:{
            title:"Untouched the beauty of the Northern Sri Lanka - Jaffna & Beyond",
            image:'images/tour/jaffna-nallur.jpg',
            description:"Explore the rich heritage of Northern Sri Lanka including Jaffna and ancient temples.",
            highlights:["Explore the vibrant culture and heritage of Jaffna and its surrounding areas.",
                "Visit sacred Hindu temples and stunning coastal islands.",
                "Discover unique Tamil traditions, food, and music that reflect Northern Sri Lanka’s charm.",
                "Relax on the pristine beaches of Casuarina and Kankesanthurai.",
                "Experience a ferry ride to Nagadeepa Island, home to historic religious sites."
                ],
            itinerary: ["Day 1: Arrival in Jaffna - Transfer to your hotel and enjoy a local city tour covering Jaffna Fort and Nallur Kandaswamy Temple.",
                "Day 2: Islands of Jaffna - Take a boat ride to Nagadeepa Island and explore the serene temples and coastal views. Visit Casuarina Beach for sunset.",
                "Day 3: Point Pedro and Kankesanthurai - Explore the northernmost point of Sri Lanka, its quiet beaches, and colonial ruins.",
                "Day 4: Keerimalai Springs and Shopping - Enjoy a dip in the ancient healing springs and explore Jaffna’s local markets.",
                "Day 5: Departure - After breakfast, transfer to Colombo for your return flight."
                ],
            price:"420",
            gallery: [{src:'images/tour/Jaffna public library - SriLanka.jpg', name:'Jaffna Public Library'},
                {src:'images/tour/nagadeepa1.jpg', name:'Nagadeepa'},
                {src:'images/tour/pointpedro.jpg', name:'Pointpedro'}
      ]
        },
        9:{
            title:"Surfing the long beaches",
            image:'images/tour/arugambay.jpg',
            description:"Discover the beaches and cultural treasure captivated in the east coast of Sri Lanka.",
            highlights:["Ride the waves at some of Sri Lanka’s top surfing destinations, from beginner-friendly breaks to advanced swells.",
                "Experience the laid-back vibes of Arugam Bay and its golden coastline.",
                "Visit Weligama, the perfect surf spot for beginners with consistent, gentle waves.",
                "Discover hidden surf points in Hiriketiya, Mirissa, and beyond.",
                "Unwind on stunning beaches after a day of surfing, with seafood feasts and beachside cafes."
                ],
            itinerary: ["Day 1: Arrival in Arugam Bay - Transfer to your beachside resort and relax in Sri Lanka’s surf capital.",
                "Day 2: Surf Lessons - Begin your day with professional surf lessons tailored for beginners or surf independently at iconic surf breaks.",
                "Day 3: Exploring Weligama and Mirissa - Travel along the coast to Weligama, enjoy more surfing sessions, and visit Mirissa for whale watching.",
                "Day 4: Hiriketiya and Tangalle - Discover quieter beaches with hidden surf spots and relax with breathtaking ocean views.",
                "Day 5: Departure - Take in one last beachside sunrise before transferring back to Colombo for your return flight."
                ],
            price:"380",
            gallery: [{src:'images/tour/Hiriketiya Beach.jpg', name:'Hiriketiya Beach'},
                {src:'images/tour/Nilaweli Beach.jpg', name:'Nilaweli Beach'},
                {src:'images/tour/Weligama.jpg', name:'Weligama'}
      ]
        },
        10:{
            title:"Heartbeat of Sri Lanka - Colombo",
            image:'images/Port City Colombo.jpeg',
            description:"Uncover the vibrant modernity and history in Colombo",
            highlights:["Experience the modern charm and colonial elegance of Sri Lanka’s bustling capital city.",
                "Stroll along the scenic Galle Face Green for a relaxing sunset.",
                "Visit iconic landmarks like the Lotus Tower, Gangaramaya Temple, and Independence Memorial Hall.",
                "Explore Colombo’s diverse food scene, from street food to fine dining.",
                "Shop at upscale malls, local markets, and boutique stores for souvenirs."
                ],
            itinerary: ["Day 1: Arrival in Colombo - Check into your hotel and unwind before heading out to explore Galle Face Green and Pettah Market.",
                "Day 2: City Exploration - Visit Gangaramaya Temple, Lotus Tower, and Independence Square to experience Colombo’s highlights.",
                "Day 3: Shopping and Leisure - Explore modern malls like Colombo City Centre and local markets for unique souvenirs.",
                "Day 4: Food Tour and Departure - Indulge in Colombo’s famous street food before heading to the airport for your flight."
                ],
            price:"660",
            gallery: [{src:'images/tour/Lotus Tower.jpg', name:'Lotus Tower'},
                {src:'images/tour/Red Mosque Pettah.jpg', name:'Red Mosque Pettah'},
                {src:'images/tour/Gangaramaya temple.jpg', name:'Gangaramaya temple'}
      ]
        }
    };

    const tourDetail = tourDetails[tourId];
    if(tourDetail) {
        document.getElementById('tour-title').textContent = tourDetail.title;
        document.getElementById('tour-image').src= tourDetail.image;
        document.getElementById('tour-description').textContent = tourDetail.description;
        tourDetail.highlights.forEach(h => {
            document.getElementById('tour-highlights').innerHTML += `<li>${h}</li>`;
        });
        tourDetail.itinerary.forEach(i => {
            document.getElementById('tour-itinerary').innerHTML += `<li>${i}</li>`;
        });
        document.getElementById('tour-price').innerHTML = `<i class="fa-solid fa-money-bill"></i> Price: £${tourDetail.price}`;
        
        tourName = tourDetail.title;
        price = tourDetail.price;

        const galleryContainer = document.getElementById('gallery');
        if(tourDetail.gallery) {
            tourDetail.gallery.forEach( image => {
                const tourImageContainer = document.createElement('div');
                tourImageContainer.className = 'tour-image-container'

                const imgElement = document.createElement('img');
                imgElement.src = image.src;
                imgElement.alt = image.name;

                const overlayText = document.createElement('span');
                overlayText.className = 'tour-overlay-text';
                overlayText.textContent = image.name;
                
                tourImageContainer.appendChild(imgElement);
                tourImageContainer.appendChild(overlayText);
                galleryContainer.appendChild(tourImageContainer);
            })
        }
    }
});


document.addEventListener("DOMContentLoaded", () => {
    if (!auth) {
        console.error("Firebase Auth is not initialized. Check your Firebase configuration.");
        return;
    }

    const bookNowBtn = document.getElementById("book-now-btn");

    if (!bookNowBtn) {
        console.error("'book-now-btn' not found in the DOM.");
        return;
    }

    bookNowBtn.addEventListener("click", () => {
        console.log("Book Now button clicked");

        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("User is authenticated. Redirecting to the booking page...");
                var params = new URLSearchParams();
                params.append("tour", tourName);
                params.append("price", price);
                const bookingUrl = "booking.html?"+params.toString();
                window.location.href = bookingUrl;
            } else {
                alert("Please Login or Signup");
                window.location.href = "sign-up.html";
            }
        });
    });
});
