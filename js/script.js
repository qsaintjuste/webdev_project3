// Initialize and add the map
function initMap() {

  // Location (Chicago for example)
  const location = { lat: 41.8781, lng: -87.6298 };

  // Create the map
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: location,
  });

  // Add a marker
  const marker = new google.maps.Marker({
    position: location,
    map: map,
    title: "Chicago",
  });

const infoWindow = new google.maps.InfoWindow({
  content: "<h3>Chicago, IL</h3><p>One of my favorite cities.</p>"
});

marker.addListener("click", () => {
  infoWindow.open(map, marker);
});

}