///////////////////////////////////////////////
// text convertor starts here
///////////////////////////////////////////////
const userInput = document.getElementById('userinput');
const finalOutput = document.getElementById('finaloutput');
const errorMsg = document.getElementById('error');

// Function to update the final output
function updateOutput(value) {
    finalOutput.innerText = value;
    errorMsg.innerText = '';  // Clear any previous error message
}

// Function to handle the input validation and show error message
function handleEmptyInput() {
    if (userInput.value.trim() === '') {
        errorMsg.innerText = 'Please enter a value in the input field.';
        finalOutput.innerText = '';  // Clear the final output if input is empty
        return true;
    }
    return false;
}

// Uppercase
document.getElementById('upper').addEventListener('click', function() {
    if (!handleEmptyInput()) {
        let upperCaseValue = userInput.value.toUpperCase();
        updateOutput(upperCaseValue);
    }
});

// Lowercase
document.getElementById('lower').addEventListener('click', function() {
    if (!handleEmptyInput()) {
        let lowerCaseValue = userInput.value.toLowerCase();
        updateOutput(lowerCaseValue);
    }
});

// Capitalize Each Word
document.getElementById('capitaleach').addEventListener('click', function() {
    if (!handleEmptyInput()) {
        let capitalizeEachWord = userInput.value
            .split(' ') // Split the input by spaces to handle each word separately
            .map(word => {
                return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            })
            .join(' '); // Join the words back with a space
        updateOutput(capitalizeEachWord);
    }
});

// Copy to Clipboard functionality
finalOutput.addEventListener('click', function() {
    // Get the text content of the final output
    const textToCopy = finalOutput.innerText;

    if (textToCopy.trim() !== '') {
        // Use the Clipboard API to copy the text
        navigator.clipboard.writeText(textToCopy)
            .then(function() {
                // Optional: Show a success message after copying
                alert("Copied to clipboard!");
            })
            .catch(function(err) {
                // Handle error if clipboard operation fails
                console.error("Failed to copy: ", err);
            });
    } else {
        alert("Nothing to copy. Please enter some text first.");
    }
});


///////////////////////////////////////////////
// text convertor ends here
///////////////////////////////////////////////









