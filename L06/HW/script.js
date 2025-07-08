// Main function to check friendship score
        function checkFriendship() {
            let name1 = document.getElementById("name1").value.toLowerCase();
            let name2 = document.getElementById("name2").value.toLowerCase();

            // Call the function to calculate score
            let score = calculateFriendshipScore(name1, name2);
            
            // Display the friendship score
            document.getElementById("scoreResult").innerText = 
                "🎯 Your Friendship Score: " + score + "%";
        }

        // Function to calculate friendship score
        function calculateFriendshipScore(name1, name2) {
            let score = 0;

            for (let i = 0; i < name1.length; i++) {
                if (name2.includes(name1[i])) {
                    score += 10; // Increase score for each matching letter
                }
            }
            // Limiting score to 100% max
            if (score > 100) {
                score = 100;
            }
            return score;
        }