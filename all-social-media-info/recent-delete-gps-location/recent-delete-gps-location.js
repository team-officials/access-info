let map;
let marker;

// Function to initialize the map
function initMap() {
    // Default center of the map
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: { lat: 0, lng: 0 }
    });
}

// Function to handle the GPS locator
function getLocation() {
    // Show loading spinner while fetching location
    document.getElementById("loading").style.display = 'block';
    document.getElementById("status").innerText = 'Getting your location...';

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        document.getElementById("status").innerHTML = "Geolocation is not supported by this browser.";
    }
}

// Display the location on success
function showPosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    document.getElementById("status").innerHTML = "Your current location is:";
    document.getElementById("location").innerHTML = "Latitude: " + latitude + "<br>Longitude: " + longitude;

    // Set the map center to the new location
    var location = { lat: latitude, lng: longitude };
    map.setCenter(location);

    // Place a marker on the map
    if (marker) {
        marker.setMap(null); // Remove old marker
    }
    marker = new google.maps.Marker({
        position: location,
        map: map,
        title: 'You are here'
    });

    // Hide loading spinner
    document.getElementById("loading").style.display = 'none';
}

// Handle errors and show appropriate messages
function showError(error) {
    document.getElementById("loading").style.display = 'none';
    var errorMessage = '';
    switch (error.code) {
        case error.PERMISSION_DENIED:
            errorMessage = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            errorMessage = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            errorMessage = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            errorMessage = "An unknown error occurred.";
            break;
    }
    document.getElementById("status").innerHTML = errorMessage;
    document.getElementById("location").innerHTML = '';
}
