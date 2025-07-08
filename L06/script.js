// Function to analyze sentiment using arrays
        function analyzeSentiment() {
            let sentence = document.getElementById("sentenceInput").value.toLowerCase();
            let positiveWords = ["happy", "joy", "love", "fun", "great"];
            let negativeWords = ["sad", "angry", "bad", "upset", "terrible"];

            let positiveCount = countMatches(sentence, positiveWords);
            let negativeCount = countMatches(sentence, negativeWords);

            // Display result based on the word count
            if (positiveCount > negativeCount) {
                document.getElementById("result").innerText = "😊 The sentence sounds Happy!";
            } else if (negativeCount > positiveCount) {
                document.getElementById("result").innerText = "😞 The sentence sounds Sad!";
            } else {
                document.getElementById("result").innerText = "😐 The sentence feels Neutral.";
            }

            // Call the positivity score calculator directly (not on button click)
          //Additional activity
            calculatePositivityScore(positiveCount, negativeCount);
        }

        // Function to count matches from an array
        function countMatches(sentence, wordList) {
            let count = 0;
            for (let i = 0; i < wordList.length; i++) {
                if (sentence.includes(wordList[i])) {
                    count++;
                }
            }
            return count;
        }

      //Additional Activity
        // Function to calculate positivity score
        function calculatePositivityScore(positiveCount, negativeCount) {
            let positivityScore = positiveCount - negativeCount;
            document.getElementById("scoreResult").innerText = 
                "🌟 Positivity Score: " + positivityScore;
        }