let currentQuestionIndex = 0;
let score = 0;

// Function to shuffle an array (Fisher-Yates shuffle)
function shuffleQuestions(questions) {
  let shuffled = [...questions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Shuffle questions every time the quiz starts or restarts
let shuffledQuestions = shuffleQuestions(questions);

// Function to load a question
function loadQuestion(index) {
  const questionData = shuffledQuestions[index];

  const questionContainer = document.getElementById("question-container");
  const optionsContainer = document.getElementById("options-container");
  const answerBar = document.getElementById("answer-bar");
  const correctAnswerText = document.getElementById("correct-answer-text");

  questionContainer.innerHTML = `${index + 1}. ${questionData.question}`;
  optionsContainer.innerHTML = "";
  answerBar.style.width = '0%'; // Reset the answer bar width
  answerBar.style.backgroundColor = ''; // Reset bar color
  correctAnswerText.innerHTML = ''; // Reset correct answer text

  questionData.options.forEach((option, i) => {
    const button = document.createElement("button");
    button.innerText = option;
    button.classList.add("option-btn");
    button.addEventListener("click", () => revealAnswer(i, questionData.answer, questionData.options[questionData.answer]));
    optionsContainer.appendChild(button);
  });

  updateNavigationButtons(index);
}

// Function to update navigation buttons
function updateNavigationButtons(index) {
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");

  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === shuffledQuestions.length - 1;
}

// Function to reveal the answer with a bar
function revealAnswer(selectedIndex, correctIndex, correctAnswer) {
  const answerBar = document.getElementById("answer-bar");
  const correctAnswerText = document.getElementById("correct-answer-text");

  // Check if the selected answer is correct or not
  if (selectedIndex === correctIndex) {
    answerBar.style.backgroundColor = "#4CAF50"; // Green for correct answer
    answerBar.style.width = "100%"; // Full width when correct
    score++;
  } else {
    answerBar.style.backgroundColor = "#f44336"; // Red for incorrect answer
    answerBar.style.width = "100%"; // Full width when incorrect
    correctAnswerText.innerHTML = `<p>The correct answer is: <strong>${correctAnswer}</strong></p>`;
  }

  // Disable all buttons after the first click
  const options = document.querySelectorAll(".option-btn");
  options.forEach((btn) => {
    btn.disabled = true;
  });
}

// Function to end the quiz and display the score
function endQuiz() {
  const quizContainer = document.querySelector(".quiz-container");
  quizContainer.innerHTML = `
    <div id="result">
      <h2>Quiz Completed!</h2>
      <p>Your Score: ${score} / ${shuffledQuestions.length}</p>
      <button id="restart-btn">Restart Quiz</button>
    </div>
  `;

  // Add event listener for restart
  document.getElementById("restart-btn").addEventListener("click", restartQuiz);
}

// Function to restart the quiz
function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  shuffledQuestions = shuffleQuestions(questions); // Shuffle questions again when restarting

  const quizContainer = document.querySelector(".quiz-container");
  quizContainer.innerHTML = `
    <div id="quiz-header">
      <h1>Tamil Quiz</h1>
    </div>
    <div id="quiz">
      <div id="question-container"></div>
      <div id="options-container"></div>
      <div id="answer-bar"></div> <!-- The bar for indicating correct or incorrect answers -->
      <div id="correct-answer-text"></div> <!-- Correct answer text will appear here -->
      <div class="navigation">
        <button id="prev-btn">Previous</button>
        <button id="next-btn">Next</button>
        <button id="end-btn">End Quiz</button>
      </div>
    </div>
  `;

  // Reinitialize event listeners
  initializeQuiz();
  loadQuestion(currentQuestionIndex);
}

// Function to initialize the quiz navigation
function initializeQuiz() {
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const endBtn = document.getElementById("end-btn");

  prevBtn.addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      loadQuestion(currentQuestionIndex);
    }
  });

  nextBtn.addEventListener("click", () => {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      currentQuestionIndex++;
      loadQuestion(currentQuestionIndex);
    }
  });

  endBtn.addEventListener("click", endQuiz);
}

// Initialize the quiz
initializeQuiz();
loadQuestion(currentQuestionIndex);
