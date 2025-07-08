// geocode.js
let latitude, longitude;
function geocodeAddress() {
    const address = document.getElementById('city').value;
    const latitudeLabel = document.getElementById('latitude');
    const longitudeLabel = document.getElementById('longitude');
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${address}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                const location = data[0];
                latitude = location.lat;
                longitude = location.lon;
                latitudeLabel.textContent = latitude;
                longitudeLabel.textContent = longitude;
            } else {
                latitudeLabel.textContent = "Not found";
                longitudeLabel.textContent = "Not found";
            }
        })
        .catch(error => {
            latitudeLabel.textContent = "Error";
            longitudeLabel.textContent = "Error";
            console.error('Error:', error);
        });
}


