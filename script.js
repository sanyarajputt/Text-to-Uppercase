// Get the input field, button, and output paragraph
const inputField = document.getElementById('input-text');
const convertBtn = document.getElementById('convert-btn');
const outputText = document.getElementById('output-text');

// Add an event listener to the button
convertBtn.addEventListener('click', () => {
    // Get the entered text
    const text = inputField.value;

    // Convert the text to uppercase
    const uppercaseText = text.toUpperCase();

    // Display the converted text
    outputText.textContent = uppercaseText;
});