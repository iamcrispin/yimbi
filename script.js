const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn');
const testSection = document.querySelector('.test-section');
const testBox = document.querySelector('.test-box');
const resultBox = document.querySelector('.result-box');
const tryAgainBtn = document.querySelector('.tryAgain-btn');
const goHomeBtn = document.querySelector('.goHome-btn');

startBtn.onclick = () => {
    popupInfo.classList.add('active');
    main.classList.add('active');
}

exitBtn.onclick = () => {
    popupInfo.classList.remove('active');
    main.classList.remove('active');
}

continueBtn.onclick = () => {
    testSection.classList.add('active');
    popupInfo.classList.remove('active');
    main.classList.remove('active');
    testBox.classList.add('active');

    showQuestions(0);
    headerScore();
    startTimer();

}

tryAgainBtn.onclick = () => {
    resultBox.classList.remove('active');
    testBox.classList.add('active');

    questionCount = 0;
    userScore = 0;
    userAnswers = new Array(questions.length).fill(null);

    showQuestions(0);
    headerScore();
    startTimer();
}

goHomeBtn.onclick = () => {
    resultBox.classList.remove('active');
    testSection.classList.remove('active');
    main.classList.remove('active');
    
    // Stop timer
    stopTimer();
    remainingSeconds = 0;
    timerDisplay.textContent = '00:00';
    
    // Reset quiz state for fresh start
    questionCount = 0;
    userScore = 0;
    userAnswers = new Array(questions.length).fill(null);
    headerScore();
}


let questionCount = 0;
let userScore = 0;
let userAnswers = new Array(questions.length).fill(null);

// Timer functionality
let timerInterval = null;
let remainingSeconds = 0;
const timerDisplay = document.getElementById('timer-display');

// SET THE TEST DURATION HERE (in minutes)
const TEST_DURATION_MINUTES = 90;

function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    remainingSeconds = TEST_DURATION_MINUTES * 60;
    updateTimerDisplay();
    
    timerInterval = setInterval(() => {
        remainingSeconds--;
        updateTimerDisplay();
        
        if (remainingSeconds <= 0) {
            clearInterval(timerInterval);
            timerInterval = null;
            testBox.classList.remove('active');
            resultBox.classList.add('active');
            showResultBox();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const hours = Math.floor(remainingSeconds / 3600);
    const minutes = Math.floor((remainingSeconds % 3600) / 60);
    const seconds = remainingSeconds % 60;
    
    if (hours > 0) {
        timerDisplay.textContent = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    } else {
        timerDisplay.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

const nextBtn = document.querySelector('.next-btn');
nextBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (questionCount < questions.length - 1) {
        questionCount++;
        showQuestions(questionCount);
        updateNextButtonState();
    } else {
        // Show results only if all questions are answered
        if (userAnswers.every(answer => answer !== null)) {
            try {
                showResultBox();
            } catch (err) {
                console.error('Error showing result box:', err);
            }
        }
    }
});

function updateNextButtonState() {
    if (questionCount === questions.length - 1) {
        // On last question: disable next unless all questions answered
        if (userAnswers.every(answer => answer !== null)) {
            nextBtn.disabled = false;
            nextBtn.style.opacity = '1';
            nextBtn.style.cursor = 'pointer';
        } else {
            nextBtn.disabled = true;
            nextBtn.style.opacity = '0.5';
            nextBtn.style.cursor = 'not-allowed';
        }
    } else {
        // Not on last question: always enable
        nextBtn.disabled = false;
        nextBtn.style.opacity = '1';
        nextBtn.style.cursor = 'pointer';
    }
}

const prevBtn = document.querySelector('.prev-btn');
prevBtn.addEventListener('click', (e) => {
    e.preventDefault();
    prevQuestion();
});

function prevQuestion() {
    if (questionCount > 0) {
        questionCount--;
        showQuestions(questionCount);
    }
}

const optionsList = document.querySelector('.option-list');

// getting questions and options from array
function showQuestions(index) {
    const questionText = document.querySelector('.question-text');
    questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;

    let optionTag = `<div class="option"><span>${questions[index].options[0]}</span></div>
    <div class="option"><span>${questions[index].options[1]}</span></div>
    <div class="option"><span>${questions[index].options[2]}</span></div>
    <div class="option"><span>${questions[index].options[3]}</span></div>`;
    optionsList.innerHTML = optionTag;

    const option = document.querySelectorAll('.option');
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute('onclick', 'optionSelected(this)');
    }

    // Restore previous selection if answered
    if (userAnswers[index] !== null) {
        for (let i = 0; i < option.length; i++) {
            if (option[i].textContent === userAnswers[index]) {
                option[i].classList.add('selected');
                if (userAnswers[index] === questions[index].answer) {
                    option[i].classList.add('correct');
                } else {
                    option[i].classList.add('incorrect');
                    // Show the correct answer
                    for (let j = 0; j < option.length; j++) {
                        if (option[j].textContent === questions[index].answer) {
                            option[j].classList.add('correct');
                            break;
                        }
                    }
                }
                break;
            }
        }
    }

    const questionTotal = document.querySelector('.question-total');
    questionTotal.textContent = `${index + 1} of ${questions.length} questions`;
    
    // Update next button state when showing a question
    updateNextButtonState();
}

function optionSelected(answer) {
    if (userAnswers[questionCount] !== null) return; // Prevent changing answer

    let userAnswer = answer.textContent;
    userAnswers[questionCount] = userAnswer; // Store the answer

    let correctAnswer = questions[questionCount].answer;
    let allOptions = optionsList.children.length;

    if (userAnswer === correctAnswer) {
        answer.classList.add('correct');
        userScore += 1;
        headerScore();
    } else {
         answer.classList.add('incorrect');

         //if answer is incorrect then automatically show the correct answer
            for (let i = 0; i < allOptions; i++) {
                if (optionsList.children[i].textContent === correctAnswer) {
                    optionsList.children[i].setAttribute('class', 'option correct');
                }
            }
    }

    //if user has selected an option then disabled all other options
    for (let i = 0; i < allOptions; i++) {
        optionsList.children[i].classList.add('disabled');
    }
    
    // Update next button state after answering
    updateNextButtonState();
}


function headerScore() {
    const headerscoreText = document.querySelector('.header-score');    
    headerscoreText.textContent = `Score: ${userScore} / ${questions.length}`;
}

function showResultBox() {
    try {
        testBox.classList.remove('active');
        resultBox.classList.add('active');

        const scoreText = resultBox.querySelector('.score-text');
        if (scoreText) scoreText.textContent = `You scored ${userScore} out of ${questions.length}`;

        const circularProgress = resultBox.querySelector('.circular-progress');
        const progressValue = resultBox.querySelector('.progress-value');
        if (!circularProgress || !progressValue) {
            console.warn('Result elements missing:', { circularProgress, progressValue });
            return;
        }

        let progressStartValue = -1;
        let progressEndValue = Math.round((userScore / questions.length) * 100);
        let speed = 50;

        let progress = setInterval(() => {
            progressStartValue++;

            progressValue.textContent = `${progressStartValue}%`;
            circularProgress.style.background = `conic-gradient(#c40094 ${progressStartValue * 3.6}deg, rgba(255, 255, 255, .1) 0deg)`;

            if (progressStartValue == progressEndValue) {
                clearInterval(progress);
            }
        }, speed);
    } catch (err) {
        console.error('showResultBox error:', err);
    }

}