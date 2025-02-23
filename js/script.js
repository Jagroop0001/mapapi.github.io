var map = L.map('map').setView([-0, 258.044], 3);
// L.marker([-0, 258.044]).addTo(map)
//     .bindPopup('A pretty CSS popup.<br> Easily customizable.')
//     .openPopup();

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

map.on('click', function (e) {
    var lat = e.latlng.lat;
    var lng = e.latlng.lng;
    document.getElementById("maplat").value = lat;
    document.getElementById("maplon").value = lng;
});

/*
document.addEventListener("contextmenu", function (e) {
    e.preventDefault(); // Disable right-click
});

document.addEventListener("keydown", function (e) {
    if (
        e.ctrlKey && (e.key === "u" || e.key === "U") || // Disable Ctrl+U (View Source)
        e.ctrlKey && e.shiftKey && (e.key === "i" || e.key === "I") || // Disable Ctrl+Shift+I (DevTools)
        e.ctrlKey && e.shiftKey && (e.key === "j" || e.key === "J") || // Disable Ctrl+Shift+J (Console)
        e.ctrlKey && (e.key === "s" || e.key === "S") || // Disable Ctrl+S (Save Page)
        e.key === "F12" // Disable F12 (DevTools)
    ) {
        e.preventDefault();
    }
});
*/