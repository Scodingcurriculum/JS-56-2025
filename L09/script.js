// Array of color themes
const themes = [
  {
    backgroundColor: "#f0f0f0",
    textColor: "#333",
    buttonColor: "#007BFF",
    borderColor: "#333",
  },
  {
    backgroundColor: "#1e272e",
    textColor: "#ffffff",
    buttonColor: "#ffa801",
    borderColor: "#ffa801",
  },
  {
    backgroundColor: "#f7f1e3",
    textColor: "#2c2c54",
    buttonColor: "#34ace0",
    borderColor: "#34ace0",
  },
  {
    backgroundColor: "#ffcccc",
    textColor: "#990000",
    buttonColor: "#660000",
    borderColor: "#990000",
  },
];

// Current theme index
let currentThemeIndex = 0;

/*Additional Activity: Change the picture in here*/
// Randomly select a theme when the page loads
window.onload = function () {
    currentThemeIndex = Math.floor(Math.random() * themes.length);
    applyTheme(themes[currentThemeIndex]);
};


// Function to apply a theme
function applyTheme(theme) {
  document.body.style.backgroundColor = theme.backgroundColor;
  document.getElementById("title").style.color = theme.textColor;
  document.getElementById("text").style.color = theme.textColor;
  document.getElementById("image").style.borderColor = theme.borderColor;
  const button = document.getElementById("nextTheme");
  button.style.backgroundColor = theme.buttonColor;
  button.style.borderColor = theme.borderColor;
}

// Change to the next theme
function nextTheme() {
  currentThemeIndex = (currentThemeIndex + 1) % themes.length;
  applyTheme(themes[currentThemeIndex]);
}

// Add event listener to the button
document.getElementById("nextTheme").addEventListener("click", nextTheme);

// Apply the first theme on load
applyTheme(themes[currentThemeIndex]);