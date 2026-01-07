const params = new URLSearchParams(window.location.search);
const hotel = params.get("hotel");

document.getElementById("hotelName").textContent =
    hotel || "No hotel selected";

function confirmBooking() {
    alert("Booking confirmed successfully ");
}
