function encodeMessage() {
            let input = document.getElementById("inputText").value;
            let reversed = input.split("").reverse().join("");
            let encoded = reversed.replace(/a/gi, "@")
                                  .replace(/e/gi, "3")
                                  .replace(/i/gi, "!")
                                  .replace(/o/gi, "0")
                                  .replace(/u/gi, "µ");
            document.getElementById("outputText").textContent = encoded;
        }

//Additional Activity
function decodeMessage() {
    let input = document.getElementById("inputText").value;
    let decoded = input.replace(/@/g, "a")
                       .replace(/3/g, "e")
                       .replace(/!/g, "i")
                       .replace(/0/g, "o")
                       .replace(/µ/g, "u");
       let reversed = decoded.split("").reverse().join("");
    document.getElementById("outputText").textContent = reversed;
}