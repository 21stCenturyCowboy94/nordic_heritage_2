const questions = [

  // History questions
{
    question: "What was the name of the Vikings who came from Scandinavia?",
    options: ["Northmen", "Norsemen", "Nordicmen"],
    answer: "Norsemen",
},

{
    question: "Which Nordic Country is the most powerful and Influential?",
    options: ["Sweden", "Denmark", "Norway", "Finland", "Iceland"],
    answer: "Sweden",
},

{
    question: "True or False; Danish and Norwegian Vikings trveled to, conquered, and influenced areas to the West of Scandinavia, while Swedish Vikings went East and did the same.",
    options: ["True", "False"],
    answer: "True"
},

{
    question: "Which country was the leading hand in the Kalmar Union?",
    options: ["Sweden", "Denmark", "Norway"],
    answer: "Denmark"
},

{
    question: "When did Sweden (and Finland) break away from the Kalmar Union",
    options: ["1500", "1515", "1523", "1530"],
    answer: "1523",
},

{
    question: "What was the relationship like between Sweden and Denmark like between 1523 and 1900?",
    options: ["Very good", "Close allies", "Minor adversaries", "Bitter enemies"],
    answer: "Bitter enemies",
},

{
    question: "When did Sweden reach its peak as a great power?",
    options: ["1600", "1620", "1635", "1658"],
    answer: "1658",
},

{
    question: "When did Russia invade and take Finland from Sweden?",
    options: ["1809", "1814", "1815", "1822"],
    answer: "1809",
},

{
    question: "When did Denmark give Norway to Sweden as a result of its loss in the Napoleonic Wars?",
    options: ["1809", "1814", "1818", "1821"],
    answer: "1814",
},

{
    question: "When did Sweden and Denmark begin to see improvements in their relationship?",
    options: ["1820s", "Mid 1800s", "Early 1900s", "After World War I"],
    answer: "Mid 1800s",

},

{
    question: "In the 1800s and Early 1900s, many Scandinavians immigrated to the USA, but which two countries sent the majority of those immigrants?",
    options: ["Denmark and Finland", "Sweden and Norway", "Sweden and Iceland", "Denmark and Norway"],
    answer: "Sweden and Norway",
},

{
    question: "How many Swedes came to the USA?",
    options: ["1 million", "1.1 million", "1.2 million", "1.3 million"],
    answer: "1.3 million",
},

{
    question: "How many Norwegians came to the USA?",
    options: ["600,000", "700,000", "800,000", "900,000"],
    answer: "800,000",
},

// Immigration questions

{
    question: "Which US State has the most Nordic Heritage?",
    options: ["Oregon", "Minnesota", "Nevada", "Idaho"],
    answer: "Minnesota",
},

{
    question: ""
},

];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-button");
const scoreElement = document.getElementById("score");

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  optionsElement.innerHTML = "";

  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("option-button");
    button.addEventListener("click", () => checkAnswer(option));
    optionsElement.appendChild(button);
  });
}

function checkAnswer(selectedOption) {
  const currentQuestion = questions[currentQuestionIndex];
  if (selectedOption === currentQuestion.answer) {
    score++;
    alert("Correct!");
  } else {
    alert(`Wrong! The correct answer is ${currentQuestion.answer}.`);
  }
  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
    nextButton.style.display = "none";
  } else {
    questionElement.textContent = "Quiz Completed!";
    optionsElement.innerHTML = "";
    nextButton.style.display = "none";
    scoreElement.textContent = `You scored ${score} out of ${questions.length}!`;
  }
});

// Load the first question
loadQuestion();