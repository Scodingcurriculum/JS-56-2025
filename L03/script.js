function calculateDistance() {
  // Get the selected medium's speed of sound in miles per second
  const speedOfSound = parseFloat(document.getElementById("medium").value);
  // Get the input time in seconds (round trip time for the echo)
  const time = parseFloat(document.getElementById("time").value);
  // Validate the input time to ensure it's a positive number
  if (isNaN(time) || time <= 0) {
    document.getElementById("result").textContent = 
      "Please enter a valid positive time value.";
    return;
  }

  
  // Calculate the one-way distance using the formula:
  // Distance = (Speed of Sound × Time) / 2
  // We divide by 2 because the time includes both the trip to the object and back
  const distance = (speedOfSound * time) / 2;
  // Display the result in miles, rounded to two decimal places
  document.getElementById("result").textContent = 
    `The object is approximately ${distance.toFixed(2)} miles away.`;
}