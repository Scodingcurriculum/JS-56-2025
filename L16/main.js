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

// main.js
function getSunriseSunset() 
{
    const results = document.getElementById('sunrise-sunset-results');

    if (latitude && longitude) {
        const date = new Date();
        const times = SunCalc.getTimes(date, latitude, longitude);
        const sunrise = times.sunrise.toLocaleTimeString();
        const sunset = times.sunset.toLocaleTimeString();
        
        const moonTimes = SunCalc.getMoonTimes(date, latitude, longitude);
        const moonrise = moonTimes.rise ? moonTimes.rise.toLocaleTimeString() : "No moonrise today";
        const moonset = moonTimes.set ? moonTimes.set.toLocaleTimeString() : "No moonset today";
        results.innerHTML = `<hr><p>Sunrise: ${sunrise}</p><p>Sunset: ${sunset}</p><p>Moonrise:${moonrise}</p><p>Moonset:${moonset}</p><hr>`;
    } else {
        results.innerHTML = `<p>Please enter a valid city name and get coordinates first.</p>`;
    }
}

