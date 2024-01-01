// Get references to the buttons
const optionButtons = document.querySelectorAll('.myButtonContainer button[id^="option"]');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');

// Function to handle option button clicks
function handleOptionClick(event) {
    // Access the clicked button's text content (you may set your logic for handling the click)
    const selectedOption = event.target.textContent;
    // Perform actions based on the selected option
    console.log(`Selected option: ${selectedOption}`);
    // Add your logic here for handling selected options
}

// Add event listeners to option buttons
optionButtons.forEach(button => {
    button.addEventListener('click', handleOptionClick);
});

// Function to handle Start button click
function handleStartClick() {
    // Add logic to start the quiz or timer
    console.log('Quiz started!');
    // Add your logic here for starting the quiz
}

// Function to handle Stop button click
function handleStopClick() {
    // Add logic to stop the quiz or timer
    console.log('Quiz stopped!');
    // Add your logic here for stopping the quiz
}

// Function to handle Reset button click
function handleResetClick() {
    // Add logic to reset the quiz or timer
    console.log('Quiz reset!');
    // Add your logic here for resetting the quiz
}

// Add event listeners to control buttons
startButton.addEventListener('click', handleStartClick);
stopButton.addEventListener('click', handleStopClick);
resetButton.addEventListener('click', handleResetClick);
