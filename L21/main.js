// geocode.js
let latitude, longitude;
const eventInfo = {
    quadrantids: "🌠 The Quadrantids peak in early January and are known for bright fireball meteors.",
    moonOccultation: "🌕 In January, the Moon will briefly pass in front of Mars, an occultation event visible in some regions.",
    supermoon: "🌝 A Supermoon occurs when the full Moon is closest to Earth, appearing larger and brighter.",
    solarEclipse: "🌞 A Total Solar Eclipse will be visible in parts of North America in April — the sky will darken during the day!",
    venusJupiter: "🌟 A rare conjunction where Venus and Jupiter appear very close together in the sky.",
    perseid: "🌠 The Perseid Meteor Shower in August is famous for fast, bright meteors and is great for stargazing.",
    blueMoon: "🌚 A Blue Moon is the second full moon in a single month — a rare and beautiful sight.",
    planetLineup: "🪐 Several planets align in the sky in a straight line — visible just before dawn.",
    geminids: "🌠 The Geminids are one of the most stunning meteor showers, peaking in mid-December.",
    winterSolstice: "❄️ The Winter Solstice marks the shortest day of the year and the beginning of winter in the Northern Hemisphere."
  };

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

function showDetails(eventKey) {
    document.getElementById("modal-text").innerText = eventInfo[eventKey];
    document.getElementById("eventModal").style.display = "block";
  }

  function closeModal() {
    document.getElementById("eventModal").style.display = "none";
  }

  // Close modal when clicking outside the modal content
  window.onclick = function(event) {
    const modal = document.getElementById("eventModal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }

  
function calculateAge() {
    const birthInput = document.getElementById('birthdate').value;
    const output = document.getElementById('output');

    if (!birthInput) {
      output.innerHTML = "⚠️ Please enter your birthdate.";
      return;
    }

    const birthDate = new Date(birthInput);
    const today = new Date();
    const ageInDays = Math.floor((today - birthDate) / (1000 * 60 * 60 * 24)); // ms ➔ days

    const planetYears = {
      Mercury: 88,
      Venus: 225,
      Earth: 365,
      Mars: 687,
      Jupiter: 4333,
      Saturn: 10759,
      Uranus: 30687,
      Neptune: 60190
    };

    let resultHTML = `<h2>🌎 Your Age on Different Planets:</h2><ul>`;

    for (const planet in planetYears) {
      const age = (ageInDays / planetYears[planet]).toFixed(2);
      resultHTML += `<li><strong>${planet}:</strong> ${age} years old</li>`;
    }

    resultHTML += `</ul>`;
    output.innerHTML = resultHTML;
  }

 