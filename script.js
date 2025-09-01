// const startBtn = document.querySelectorALL('.start-btn');
const startLink = document.querySelectorAll('.start-link');
const startBtn = document.querySelectorAll('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn');
const quizSection = document.querySelector('.quiz-section');
const exitQuiz = document.querySelector('.exit-quiz');
const quizBox = document.querySelector('.quiz-box');
const nextBtn = document.querySelector('.next-btn');
const optionList = document.querySelector('.option-list');
const resultBox = document.querySelector('.result-box');
const tryAgainBtn = document.querySelector('.tryAgain-btn');
const goHomeBtn = document.querySelector('.goHome-btn');

// startBtn.onclick = () => {
//   popupInfo.classList.add('active');
//   main.classList.add('active');
// } 

// so for some reason, we need to add that index shit for queryselectorall to work...
startBtn[0].onclick = () => {
  popupInfo.classList.add('active');
  main.classList.add('active');
} 

startLink[0].onclick = () => {
  popupInfo.classList.add('active');
  main.classList.add('active');
}

exitBtn.onclick = () => {
  popupInfo.classList.remove('active');
  main.classList.remove('active');
} 

exitQuiz.onclick = () => {
  quizSection.classList.remove('active');
  quizBox.classList.remove('active');
  nextBtn.classList.remove('active');

  questionCount = 0;
  questionNumb = 1;
  userScore = 0;

  showQuestions(questionCount);
  questionCounter(questionNumb);
}

continueBtn.onclick = () => {
  quizSection.classList.add('active');
  popupInfo.classList.remove('active');
  main.classList.remove('active');
  quizBox.classList.add('active');

  showQuestions(0);
  questionCounter(1);
  headerScore();
} 

tryAgainBtn.onclick = () => {
  quizBox.classList.add('active');
  nextBtn.classList.remove('active');
  resultBox.classList.remove('active');

  console.log('Try again');

  questionCount = 0;
  questionNumb = 1;
  userScore = 0;

  showQuestions(questionCount);
  questionCounter(questionNumb);

  headerScore();
} 

goHomeBtn.onclick = () => {
  quizSection.classList.remove('active');
  nextBtn.classList.remove('active');
  resultBox.classList.remove('active');
  quizBox.classList.remove('active');

  questionCount = 0;
  questionNumb = 1;
  userScore = 0;

  showQuestions(questionCount);
  questionCounter(questionNumb);
}

let questionCount = 0;
let questionNumb = 1;
let userScore = 0;

nextBtn.onclick = () => {
  if (questionCount < questions.length - 1) {
    questionCount++;
    showQuestions(questionCount);

    questionNumb++;
    questionCounter(questionNumb);

    nextBtn.classList.remove('active');
  }
  else{
    showResultBox();
  }
}

function showQuestions(index) {
  const questionText = document.querySelector('.question-text');
  questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;

  let optionTag = `<div class="option"><span>${questions[index].options[0]}</span></div> 
    <div class="option"><span>${questions[index].options[1]}</span></div> 
    <div class="option"><span>${questions[index].options[2]}</span></div>
    <div class="option"><span>${questions[index].options[3]}</span></div>`;

  optionList.innerHTML = optionTag;

  const option = document.querySelectorAll('.option');

  for (let i = 0; i < option.length; i++){
    option[i].setAttribute('onclick', 'optionSelected(this)');
  }
}

function optionSelected(answer) {
  let userAnswer = answer.textContent;
  let correctAnswer = questions[questionCount].answer;
  let allOptions = optionList.children.length;

  if (userAnswer == correctAnswer) {
    answer.classList.add('correct');
    userScore += 1;
    headerScore();
  } 
  else {
    answer.classList.add('incorrect');

    for (let i = 0; i < allOptions; i++) {
      if (optionList.children[i].textContent == correctAnswer){
        optionList.children[i].setAttribute('class', 'option correct');
      }
    }
  }

  for (let i = 0; i < allOptions; i++) {
    optionList.children[i].classList.add('disabled');
  }

  nextBtn.classList.add('active');
}

function questionCounter(index){
  const questionTotal = document.querySelector('.question-total');
  questionTotal.textContent = `${index} of ${questions.length} Questions`; 
}

function headerScore(){
  const headerScoreText = document.querySelector('.header-score');
  headerScoreText.textContent = `Score: ${userScore} / ${questions.length}`;
}

function showResultBox(){
  quizBox.classList.remove('active');
  resultBox.classList.add('active');

  const scoreText = document.querySelector('.score-text');
  scoreText.textContent = `You Scored ${userScore} out of ${questions.length}`;
  const cirProgress = document.querySelector('.cir-progress');
  const progressValue = document.querySelector('.progress-value');
  let progressStartValue = -1;
  let progressEndValue = (userScore / questions.length) * 100;
  let speed = 20;

  let progress = setInterval(() => {
    progressStartValue++;
    // console.log(progressStartValue);
    
    progressValue.textContent = `${progressStartValue}%`;
    cirProgress.style.background = `conic-gradient(#ff0059 ${progressStartValue * 3.6}deg, rgba(255, 255, 255, 0.1) 0deg)`;
    
    if (progressStartValue == progressEndValue){
      clearInterval(progress);
    }
  }, speed);
}





































// const quizData = [
//   {
//     question: "What is the capital of France?",
//     options: ["Paris", "London", "Rome", "Berlin"],
//     answer: "Paris"
//   },
//   {
//     question: "Which planet is known as the Red Planet?",
//     options: ["Mars", "Jupiter", "Venus", "Uranus"],
//     answer: "Mars"
//   },
//   {
//     question: "Who painted the Mona Lisa?",
//     options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Adolf Hitler"],
//     answer: "Leonardo da Vinci"
//   },
//   {
//     question: "Who was the first man in space?",
//     options: ["Valentina Gagarin", "Yuri Gagarin", "Valentina Tereshkova", "Neil Armstrong"],
//     answer: "Yuri Gagarin"
//   }
// ];

// const questionElement = document.getElementById("question");
// const option1Element = document.getElementById("option1-label");
// const option2Element = document.getElementById("option2-label");
// const option3Element = document.getElementById("option3-label");
// const option4Element = document.getElementById("option4-label");
// const submitButton = document.getElementById("submit");
// const scoreElement = document.getElementById("score");
// const userScore = document.getElementById("user-score")

// let currentQuestion = 0;
// let score = 0;

// function loadQuestion() {
//   const quiz = quizData[currentQuestion];
//   questionElement.innerText = quiz.question;
//   option1Element.innerText = quiz.options[0];
//   option2Element.innerText = quiz.options[1];
//   option3Element.innerText = quiz.options[2];
//   option4Element.innerText = quiz.options[3];
// }

// function checkAnswer() {
//   const selectedOption = document.querySelector('input[name="option"]:checked');
//   if (!selectedOption) return;

//   const answer = selectedOption.nextElementSibling.innerText;
//   if (answer === quizData[currentQuestion].answer) {
//     score++;
//   }

//   selectedOption.checked = false;
//   currentQuestion++;

//   if (currentQuestion < quizData.length) {
//     loadQuestion();
//   } else {
//     showScore();
//   }
// }

// function showScore() {
//   questionElement.innerText = "Quiz completed!";
//   option1Element.style.display = "none";
//   option2Element.style.display = "none";
//   option3Element.style.display = "none";
//   option4Element.style.display = "none";
//   submitButton.style.display = "none";
//   scoreElement.innerText = "Your score: " + score + "/" + quizData.length;
//   scoreElement.style.display = "block";
// }

// submitButton.addEventListener("click", checkAnswer);

// loadQuestion();
