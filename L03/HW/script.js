function calculateInterest() {
            // Get input values
            var principal = parseFloat(document.getElementById('principal').value);
            var rate = parseFloat(document.getElementById('rate').value);
            var time = parseFloat(document.getElementById('time').value);

            // Calculate simple interest
            var simpleInterest = (principal * rate * time) / 100;

            // Display result
            document.getElementById('result').textContent = simpleInterest.toFixed(2);
        }