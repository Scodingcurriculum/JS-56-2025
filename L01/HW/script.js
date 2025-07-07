// JavaScript for real-time color change
function updateColor() {
    // Fetching the values from inputs
    let name = document.getElementById("nameInput").value;
    let chosenColor = document.getElementById("colorInput").value;

    // Changing the background color and greeting message
    document.body.style.backgroundColor = chosenColor;
    document.getElementById("greetingMessage").textContent = 
        "Hello, " + name + "! Your favorite color looks amazing!";
}