$(document).ready(function(){
    const  destinations = [
        {
            id: 1,
            name: "Nuwara Eliya",
            description:"A revered destination for pilgrims, renowned for its breathtaking vistas and spiritual importance.",
            image: {src:"images/tour/Nuwaraeliya.jpg", name:"Nuwara Eliya"},
            
        },
        {
            id: 2,
            name: "Colombo",
            description:"A busting capital of Sri Lanka, is a mix of modern urban life & rich colonial history. You can enjoy the upsacel malls and also colonial forts in one place.",
            image: {src:"images/tour/colombo.jpeg", name:"Colombo"},
            
        },
        {
            id:3,
            name: "Hatton",
            description:"Nestled in the heart of Sri Lanka’s tea country, Hatton is a serene destination surrounded by rolling hills, lush tea plantations, and colonial estates. Perfect for nature lovers and adventurers.",
            image: {src:"images/tour/hatton.jpg", name:"Hatton"},
            
        },
        {
            id: 4,
            name: "Galle",
            description:"Galle is a charming coastal city with a blend of colonial architecture, vibrant streets, and seaside beauty. It’s a UNESCO World Heritage Site rich in history and culture.",
            image: {src:"images/tour/galle.jpg", name:"Galle"},
            
        },
        {
            id: 5,
            name: "Jaffna",
            description:"Jaffna, located in the northernmost part of Sri Lanka, is a cultural gem with Tamil heritage, historic temples, and stunning coastal spots.",
            image: {src:"images/tour/jaffna.jpg", name:"Jaffna"}
            
        },
        {
            id: 6,
            name: "Kandy",
            description:"The cultural capital of Sri Lanka, Kandy, is a picturesque city surrounded by hills and lakes. It’s home to temples, cultural shows, and colonial charm.",
            image: {src:"images/tour/Kandy.jpg", name:"Nuwara Eliya"},
            
        },
        {
            id: 7,
            name: "Sigiriya",
            description:"Sigiriya is one of Sri Lanka’s most iconic landmarks, featuring the majestic Sigiriya Rock Fortress, ancient gardens, and breathtaking views.",
            image: {src:"images/tour/Sigiriya.jpg", name:"Nuwara Eliya"},
            
        },
        {
            id: 8,
            name: "Anuradhapura",
            description:"Anuradhapura is an ancient city rich in history and spirituality, with centuries-old ruins, temples, and reservoirs.",
            image: {src:"images/tour/Anuradhapura 1.jpg", name:"Nuwara Eliya"},
           
        },
        {
            id: 9,
            name: "Dhambulla",
            description:"Dambulla is home to Sri Lanka’s largest and best-preserved cave temple complex, surrounded by stunning landscapes.",
            image: {src:"images/tour/Dambulla.jpg", name:"Dambulla"},
            
        },
        {
            id: 10,
            name: "Trincomalee",
            description:"Trincomalee is a stunning coastal town known for its pristine beaches, crystal-clear waters, and cultural sites.",
            image: {src:"images/tour/trincomalee.jpg", name:"Nuwara Eliya"}
        }
    ];

    const destinationList =  document.getElementById("destination-list");
    destinations.forEach(destination => {
        const destinationItem = document.createElement("div");
        destinationItem.className = "destination-item";
        destinationItem.setAttribute("data-id", destination.id);
        // destinationItem.id = destination.id;
        destinationItem.innerHTML = `
            <img src="${destination.image.src}" alt="${destination.image.name}">
            <p>${destination.name}</p>`;
            destinationList.appendChild(destinationItem);
    });


   
    
    // =====================destination-detail page====================================
    $(document).on("click", ".destination-item", function(){
        const destinationId = $(this).data("id");
        const destination = destinations.find(d=> d.id === destinationId);
        if(destination){
            window.location.href = `destination-detail.html?destinationId=${destinationId}`;
        } 
    });
    

});