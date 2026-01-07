
function openLogin() {
    document.getElementById("loginModal").style.display = "flex";
}

function closeLogin() {
    document.getElementById("loginModal").style.display = "none";
}

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("Fill all fields");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return;
    }

    alert("Login successful (demo)");
    closeLogin();
}


const params = new URLSearchParams(window.location.search);

const city = params.get("city");
const checkin = params.get("checkin");
const checkout = params.get("checkout");
const guests = params.get("guests");

document.getElementById("resultTitle").textContent =
    `Hotels in ${city}`;

    const hotels = [
    { name: "StayEasy Grand", city: "Goa", price: 3200 },
    { name: "City Comfort Inn", city: "Goa", price: 2100 },
    { name: "Urban Nest", city: "Delhi", price: 2800 }
];

const list = document.getElementById("hotelList");

hotels
    .filter(h => h.city.toLowerCase() === city.toLowerCase())
    .forEach(hotel => {
        const card = document.createElement("div");
        card.className = "hotel-card";
        card.innerHTML = `
            <h3>${hotel.name}</h3>
            <p>₹${hotel.price} / night</p>
            <button onclick="bookHotel('${hotel.name}')">
                Book Now
            </button>
        `;
        list.appendChild(card);
    });

function bookHotel(name) {
    window.location.href = `booking.html?hotel=${name}`;

}
