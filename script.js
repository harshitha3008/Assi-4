document.getElementById("generateButton").addEventListener("click", function() {
    const minValue = parseInt(document.getElementById("minValue").value);
    const maxValue = parseInt(document.getElementById("maxValue").value);
    const resultElement = document.getElementById("result");

    if (isNaN(minValue) || isNaN(maxValue)) {
        resultElement.textContent = "Please enter valid numbers.";
        return;
    }

    if (minValue > maxValue) {
        resultElement.textContent = "Minimum value cannot be greater than maximum value.";
        return;
    }

    const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    resultElement.textContent = `Random Number: ${randomNumber}`;
});
