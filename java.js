// Get references to elements
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');
const questionElement = document.getElementById('question');
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
const option4 = document.getElementById('option4');
const timerElement = document.getElementById('timer');

// Define your quiz questions and answers
const quiz = [
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "What is 2 + 4?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    
    {
        question: "What is 2 + 5?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    
    {
        question: "What is 2 + 7?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    
    {
        question: "What is 2 + 8?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
];

let currentQuestion = 0;
let score = 0;
let time = 60; // Initial time in seconds

// Function to display the current question
function displayQuestion() {
    questionElement.textContent = quiz[currentQuestion].question;
    option1.textContent = quiz[currentQuestion].options[0];
    option2.textContent = quiz[currentQuestion].options[1];
    option3.textContent = quiz[currentQuestion].options[2];
    option4.textContent = quiz[currentQuestion].options[3];
}

// Function to start the quiz
function startQuiz() {
    displayQuestion();
    startTimer();
}

// Function to handle user's answer selection
function handleAnswer(selectedOption) {
    if (selectedOption === quiz[currentQuestion].answer) {
        score++;
        // Handle correct answer
    } else {
        // Handle incorrect answer
    }

    if (currentQuestion < quiz.length - 1) {
        currentQuestion++;
        displayQuestion();
    } else {
        // Quiz ends, display score or any final message
        // You can add a function to show the final score
    }
}

// Function to start the timer
if (startButton) {
    startButton.addEventListener('click', startQuiz);
    startButton.addEventListener('click', startTimer);
    startButton.addEventListener('click', displayQuestion);
}
