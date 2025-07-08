function speakMessage() {
    var message = document.getElementById("message").value;

    if (message.trim() === "") {
        alert("Please enter a message!");
        return;
    }

    // Prompt the user for the language
    var language = prompt("Please enter the language (English, French, Spanish):");

    var selectedVoice = "";
    if (language.toLowerCase() === "french") {
        selectedVoice = "French Female";
        alert("You have selected French. Please ensure your message is in French for accurate pronunciation.");
    } else if (language.toLowerCase() === "spanish")//Additional Activity
    {
        selectedVoice = "Spanish Female";
        alert("You have selected Spanish. Please ensure your message is in Spanish for accurate pronunciation.");
    } else if (language.toLowerCase() === "english") {
        selectedVoice = "UK English Female";  // You can use other voices like "US English Female" if needed
        alert("You have selected English. Please ensure your message is in English.");
    } else {
        alert("Sorry, we currently only support English, French, and Spanish.");
        return;
    }

    // Speak the message using the selected voice
    responsiveVoice.speak(message, selectedVoice);
}