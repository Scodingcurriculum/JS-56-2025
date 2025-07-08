function updateTimeAndGreeting() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const currentTime = `${hours}:${minutes}:${seconds}`;
    document.getElementById('timeDisplay').textContent = currentTime;

    let greeting;
    if (hours >= 5 && hours < 12) {
        greeting = "Good morning!";
    } else if (hours >= 12 && hours < 18) {
        greeting = "Good afternoon!";
    } else if (hours >= 18 && hours < 22) {
        greeting = "Good evening!";
    } else {
        greeting = "Good night!";
    }
    document.getElementById('greeting').textContent = greeting;
}

// Update the time and greeting every second
setInterval(updateTimeAndGreeting, 1000);

// Initialize the display
updateTimeAndGreeting();