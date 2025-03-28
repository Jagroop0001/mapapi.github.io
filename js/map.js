///////////////////////////////////////////////
// Map code starts here
///////////////////////////////////////////////
var map = L.map('map').setView([39.8283, -98.5795], 4);  // Default view set to USA coordinates

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add Geosearch control
const search = new window.GeoSearch.GeoSearchControl({
    provider: new window.GeoSearch.OpenStreetMapProvider(),
    style: 'bar',
    showMarker: true,
    showPopup: true,
    keepResult: true,
    autoClose: true,
});

map.addControl(search);

// Listen for map clicks to update lat/lon fields
map.on('click', function (event) {
    var lat = event.latlng.lat;
    var lng = event.latlng.lng;

    document.getElementById('maplat').value = lat;
    document.getElementById('maplon').value = lng;
});

///////////////////////////////////////////////
// Map code ends here
///////////////////////////////////////////////
