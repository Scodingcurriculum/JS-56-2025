function caesarCipher(message, shift, encode=true) {
            const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            shift = encode ? shift : -shift; // reverse shift for decoding
            let result = '';
            
            for (let i = 0; i < message.length; i++) {
                let char = message[i];
                if (alphabet.includes(char.toUpperCase())) {
                    let index = alphabet.indexOf(char.toUpperCase());
                    let newIndex = (index + shift + 26) % 26;
                    result += alphabet[newIndex];
                } else {
                    result += char; // preserve non-alphabet characters
                }
            }
            return result;
        }

        function encodeMessage() {
            const message = document.getElementById('message').value.toUpperCase();
            const shift = parseInt(document.getElementById('shift').value);
            const encodedMessage = caesarCipher(message, shift, true);
            document.getElementById('result').textContent = 'Encoded Message: ' + encodedMessage;
        }

        function decodeMessage() {
            const message = document.getElementById('message').value.toUpperCase();
            const shift = parseInt(document.getElementById('shift').value);
            const decodedMessage = caesarCipher(message, shift, false);
            document.getElementById('result').textContent = 'Decoded Message: ' + decodedMessage;
        }