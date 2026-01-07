// Read offer from URL
const params = new URLSearchParams(window.location.search);
const offer = params.get("offer");

// Dummy hotel data
const hotels = [
    { name: "StayEasy Goa Resort", city: "Goa", price: 3500 },
    { name: "Beach View Hotel", city: "Goa", price: 2800 },
    { name: "City Comfort Delhi", city: "Delhi", price: 3000 },
    { name: "Business Stay Bangalore", city: "Bangalore", price: 3200 },
    { name: "Sri Venkateswara Stay", city: "Tirupati", price: 2500 },
    { name: "Balaji Residency", city: "Tirupati", price: 1800 },
    { name: "Goa Beach Resort", city: "Goa", price: 3500 },
    { name: "Hotel Bliss Tirupati", city: "Tirupati", price: 2200},
    { name: "Pai Viceroy Tirupati", city: "Tirupati", price: 3200},
    { name: "Hotel PLR Grand",city: "Tirupati",price: 2000}
];

const hotelList = document.getElementById("hotelList");
const title = document.getElementById("resultTitle");

// Change title based on offer
if (offer === "GOA_SALE") {
    title.textContent = "Goa Hotels – Summer Sale";
} else if (offer === "FIRST_BOOKING") {
    title.textContent = "First Booking Special";
} else if (offer === "WEEKEND") {
    title.textContent = "Weekend Special Hotels";
} else if (offer === "BUSINESS") {
    title.textContent = "Business Travel Hotels";
}

// Show hotels
hotels.forEach(hotel => {
    const card = document.createElement("div");
    card.className = "hotel-card";

    card.innerHTML = `
        <h3>${hotel.name}</h3>
        <p>₹${hotel.price} / night</p>
        <button onclick="bookHotel('${hotel.name}')">
            Book Now
        </button>
    `;

    hotelList.appendChild(card);
});

// Booking function
function bookHotel(hotelName) {
    window.location.href = `booking.html?hotel=${hotelName}`;
}





