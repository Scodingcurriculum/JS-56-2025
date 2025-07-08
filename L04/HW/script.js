function generateAsciiCodes() {
            // Get input string value
            const inputString = document.getElementById("inputString").value;
            
            // Convert string to ASCII codes
            const asciiCodes = inputString.split("").map(char => char.charCodeAt(0));

            // Display result
            document.getElementById("result").innerHTML = "ASCII Codes: " + asciiCodes.join(", ");
        }