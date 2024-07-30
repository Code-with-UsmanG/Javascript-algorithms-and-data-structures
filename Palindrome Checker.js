document.getElementById('check-btn').addEventListener('click', function() {
    const inputText = document.getElementById('text-input').value;
    const resultElement = document.getElementById('result');

    if (inputText.trim() === "") {
        alert("Please input a value");
        return;
    }

    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedText = inputText
        .replace(/[^a-zA-Z0-9]/g, '') // Remove all non-alphanumeric characters
        .toLowerCase(); // Convert to lowercase

    // Check if the cleaned text is a palindrome
    const isPalindrome = cleanedText === cleanedText.split('').reverse().join('');

    // Display the result
    if (isPalindrome) {
        resultElement.textContent = `${inputText} is a palindrome`;
    } else {
        resultElement.textContent = `${inputText} is not a palindrome`;
    }
});
