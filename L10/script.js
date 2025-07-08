let correctAnswer;

function generateEquation() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const num3 = Math.floor(Math.random() * 10) + 1;
    const operations = ['+', '-', '*', '/'];
    const operation = operations[Math.floor(Math.random() * operations.length)];

    let equation;
    switch (operation) {
        case '+':
            equation = `${num1} + ${num2} = ? + ${num3}`;
            correctAnswer = num1 + num2 - num3;
            break;
        case '-':
            equation = `${num1} - ${num2} = ? - ${num3}`;
            correctAnswer = num1 - num2 + num3;
            break;
        case '*':
            equation = `${num1} * ${num2} = ? * ${num3}`;
            correctAnswer = Math.floor((num1 * num2) / num3); // Ensure integer result
            break;
        case '/':
            // Ensure num1 is divisible by num2 to avoid decimals
            const divisibleNum1 = num1 * num2;
            equation = `${divisibleNum1} / ${num2} = ? / ${num3}`;
            correctAnswer = Math.floor((divisibleNum1 / num2) * num3); // Ensure integer result
            break;
    }

    document.getElementById('equation').textContent = equation;
    document.getElementById('userInput').value = '';
    document.getElementById('feedback').textContent = '';
}

function checkAnswer() {
    const userInput = parseInt(document.getElementById('userInput').value, 10); // Ensure integer input
    if (userInput === correctAnswer) {
        document.getElementById('feedback').textContent = 'Correct! Well done!';
     //Additionally
        document.getElementById('feedback').style.color = 'green';
    } else {
        document.getElementById('feedback').textContent = `Incorrect. The correct answer is ${correctAnswer}.`;
      //Additionally
        document.getElementById('feedback').style.color = 'red';
    }
    setTimeout(generateEquation, 2000);
}

// Generate the first equation when the page loads
generateEquation();