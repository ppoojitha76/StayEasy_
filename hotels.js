// Read offer from URL
const params = new URLSearchParams(window.location.search);
const offer = params.get("offer");
const city = params.get("city"); 

const hotelList = document.getElementById("hotelList");
const title = document.getElementById("resultTitle");

// Change title
if (offer === "GOA_SALE") {
    title.textContent = "Goa Hotels – Summer Sale";
} else if (city) {
    title.textContent = `Hotels in ${city}`;
} else {
    title.textContent = "Available Hotels";
}

//  Backend call
fetch(`http://127.0.0.1:5000/hotels?city=${city}`)
    .then(res => res.json())
    .then(data => {
        if (data.length === 0) {
            hotelList.innerHTML = "<p>No hotels found</p>";
            return;
        }

        data.forEach(hotel => {
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
    })
    .catch(err => {
        console.error("Backend error:", err);
        hotelList.innerHTML = "<p>Server error. Try again later.</p>";
    });

// Booking function
function bookHotel(hotelName) {
    window.location.href =
        `booking.html?hotel=${encodeURIComponent(hotelName)}`;
}





