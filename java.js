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
        question: "What is 2 + 23?",
        options: ["4", "22", "66", "25"],
        answer: "25"
    },
    {
        question: "What is 2 + 3?",
        options: ["3", "4", "5", "6"],
        answer: "5"
    },
    {
        question: "What is 4 + 4?",
        options: ["8", "16", "5", "9"],
        answer: "8"
    },
    {
        question: "What is 60 - 10?",
        options: ["60", "42", "50", "6"],
        answer: "50"
    },
    {
        question: "What is 66 + 99?",
        options: ["188", "165", "22", "156"],
        answer: "165"
    },
    {
        question: "What is 5 + 5?",
        options: ["10", "15", "20", "25"],
        answer: "10"
    },
    {
        question: "What is 6 + 6?",
        options: ["12", "18", "24", "30"],
        answer: "12"
    },
    {
        question: "What is 9 + 9?",
        options: ["18", "27", "36", "45"],
        answer: "18"
    },
    {
        question: "What is 10 * 10?",
        options: ["10", "100", "300", "430"],
        answer: "100"
    }
];

let currentQuestion = 0;
let score = 0;
let time = 60;

// Function to display the current question
function displayQuestion() {
    questionElement.textContent = quiz[currentQuestion].question;
    option1.textContent = quiz[currentQuestion].options[0];
    option2.textContent = quiz[currentQuestion].options[1];
    option3.textContent = quiz[currentQuestion].options[2];
    option4.textContent = quiz[currentQuestion].options[3];
    
}

// Function to handle user's answer selection and move to the next question
function handleAnswer(selectedOption) {
    if (selectedOption === quiz[currentQuestion].answer) {
        score++;
        // Handle correct answer
    } else {
        //repeat the question
        time = time - 10; 
    }

    if (currentQuestion < quiz.length - 1) {
        currentQuestion++;
        displayQuestion();
    } else {
       alert(`Your score is ${score}`);
    }
}

// Event listeners for options to handle answer and move to the next question
option1.addEventListener('click', () => {
    handleAnswer(option1.textContent);
});

option2.addEventListener('click', () => {
    handleAnswer(option2.textContent);
});

option3.addEventListener('click', () => {
    handleAnswer(option3.textContent);
});

option4.addEventListener('click', () => {
    handleAnswer(option4.textContent);
});

// Function to start the quiz and display the first question

// Function to reset the quiz
function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    clearInterval(intervalId); // Stop the timer if it's running
    questionElement.textContent = ''; // Clear the question display
    // Add any other reset functionality you may need

    // Reset the timer display to default
    time = 60;
    timerElement.textContent = `Timer ${time}`;
}

// Event listener for the reset button to reset the quiz
resetButton.addEventListener('click', resetQuiz);

// Event listener for the start button to initiate the quiz
startButton.addEventListener('click', startQuiz);

// Event listener for the stop button to stop the quiz
stopButton.addEventListener('click', () => {
    clearInterval(intervalId);
    alert(`Your score is ${score}`);
})

let intervalId; // To store the interval ID for the timer

// Function to start the quiz and countdown timer
function startQuiz() {
    shuffleQuestions();
    resetQuiz(); // Reset everything before starting

    intervalId = setInterval(() => {
        time--;
        if (time >= 0) {
            timerElement.textContent = `Timer ${time}`;
        } else {
            clearInterval(intervalId);
            // Handle when time runs out
        }
    }, 1000);

    displayQuestion();
}

let shuffledQuestions = []; // Array to store shuffled questions

// Function to shuffle the quiz questions array
function shuffleQuestions() {
    shuffledQuestions = [...quiz].sort(() => Math.random() - 0.5);
}
