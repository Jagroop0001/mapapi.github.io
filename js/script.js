async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  const myLatlng = { lat: -1.363, lng: 258.044 };
  const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 3,
      center: myLatlng,
  });

  let infoWindow = new google.maps.InfoWindow({
      content: "Click anywhere to get automatic location",
      position: myLatlng,
  });

  infoWindow.open(map);
  map.addListener("click", (mapsMouseEvent) => {
      const latLng = mapsMouseEvent.latLng.toJSON();
      const lat = latLng.lat;
      const lng = latLng.lng;

      document.getElementById("maplat").value = lat;
      document.getElementById("maplon").value = lng;

      // Close the current InfoWindow.
      infoWindow.close();

      // Create a new InfoWindow.
      // infoWindow = new google.maps.InfoWindow({
      //     position: mapsMouseEvent.latLng,
      // });

      // infoWindow.setContent(`Latitude: ${lat}<br>Longitude: ${lng}`);
      // infoWindow.open(map);
  });
}
initMap();




///////////////////////////////
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
