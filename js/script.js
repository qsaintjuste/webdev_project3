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

// ===== Dark Mode Toggle with Persistence =====

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("darkModeToggle");

  // Check saved preference
  const savedMode = localStorage.getItem("darkMode");

  if (savedMode === "enabled") {
    document.body.classList.add("dark-mode");
  }

  if (toggleButton) {
    toggleButton.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");

      // Save preference
      if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
      } else {
        localStorage.setItem("darkMode", "disabled");
      }
    });
  }
});