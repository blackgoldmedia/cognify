/* =================================
   COGNIFY — LOGIC TEST
================================= */

const logicQuestions = [

    {
        question: "2, 4, 6, 8, ?",
        options: ["9", "10", "11", "12"],
        answer: 1
    },

    {
        question: "3, 6, 12, 24, ?",
        options: ["36", "42", "48", "54"],
        answer: 2
    },

    {
        question: "1, 4, 9, 16, ?",
        options: ["20", "24", "25", "27"],
        answer: 2
    },

    {
        question: "Jika semua A adalah B, dan semua B adalah C, maka...",
        options: [
            "Semua C adalah A",
            "Semua A adalah C",
            "Tidak ada A yang C",
            "Sebagian C bukan B"
        ],
        answer: 1
    },

    {
        question: "Buku : Membaca = Makanan : ?",
        options: [
            "Memasak",
            "Membeli",
            "Makan",
            "Dapur"
        ],
        answer: 2
    },

    {
        question: "5, 10, 20, 40, ?",
        options: ["60", "70", "80", "100"],
        answer: 2
    },

    {
        question: "Jika hari ini Senin, 10 hari kemudian adalah hari...",
        options: [
            "Rabu",
            "Kamis",
            "Jumat",
            "Sabtu"
        ],
        answer: 1
    },

    {
        question: "Semua burung memiliki sayap. Penguin adalah burung. Maka...",
        options: [
            "Penguin tidak memiliki sayap",
            "Penguin memiliki sayap",
            "Semua yang memiliki sayap adalah penguin",
            "Penguin bukan burung"
        ],
        answer: 1
    },

    {
        question: "7, 10, 16, 25, 37, ?",
        options: ["49", "50", "52", "54"],
        answer: 2
    },

    {
        question: "Jika 2 + 3 = 10, 3 + 4 = 21, maka 4 + 5 = ?",
        options: [
            "30",
            "36",
            "40",
            "45"
        ],
        answer: 2
    }

];


/* =================================
   ELEMENT
================================= */

const logicIntro = document.getElementById("logicIntro");
const logicQuiz = document.getElementById("logicQuiz");
const logicResult = document.getElementById("logicResult");

const startLogicBtn = document.getElementById("startLogicBtn");

const logicQuestion = document.getElementById("logicQuestion");
const logicOptions = document.getElementById("logicOptions");

const logicNext = document.getElementById("logicNext");

const logicCurrent = document.getElementById("logicCurrent");
const logicProgress = document.getElementById("logicProgress");

const logicTimer = document.getElementById("logicTimer");

const logicScore = document.getElementById("logicScore");
const logicLevel = document.getElementById("logicLevel");
const logicMessage = document.getElementById("logicMessage");

const logicRestart = document.getElementById("logicRestart");


/* =================================
   VARIABLES
================================= */

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

let timeLeft = 300;
let timerInterval;


/* =================================
   START TEST
================================= */

startLogicBtn.addEventListener("click", startLogicTest);


function startLogicTest() {

    currentQuestion = 0;
    score = 0;
    selectedAnswer = null;

    timeLeft = 300;

    logicIntro.style.display = "none";
    logicResult.style.display = "none";
    logicQuiz.style.display = "block";

    startTimer();

    showLogicQuestion();

}


/* =================================
   TIMER
================================= */

function startTimer() {

    clearInterval(timerInterval);

    updateTimer();

    timerInterval = setInterval(() => {

        timeLeft--;

        updateTimer();

        if (timeLeft <= 0) {

            clearInterval(timerInterval);

            finishLogicTest();

        }

    }, 1000);

}


function updateTimer() {

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    logicTimer.textContent =
        String(minutes).padStart(2, "0") +
        ":" +
        String(seconds).padStart(2, "0");

}


/* =================================
   SHOW QUESTION
================================= */

function showLogicQuestion() {

    selectedAnswer = null;

    const question =
        logicQuestions[currentQuestion];

    logicCurrent.textContent =
        currentQuestion + 1;

    logicQuestion.textContent =
        question.question;

    logicOptions.innerHTML = "";

    logicNext.style.display = "none";

    const progress =
        ((currentQuestion) /
        logicQuestions.length) * 100;

    logicProgress.style.width =
        progress + "%";


    question.options.forEach((option, index) => {

        const button =
            document.createElement("button");

        button.className =
            "memory-option";

        button.textContent =
            option;

        button.addEventListener(
            "click",
            () => selectLogicAnswer(index, button)
        );

        logicOptions.appendChild(button);

    });

}


/* =================================
   SELECT ANSWER
================================= */

function selectLogicAnswer(index, button) {

    if (selectedAnswer !== null) {
        return;
    }

    selectedAnswer = index;

    const question =
        logicQuestions[currentQuestion];


    const buttons =
        logicOptions.querySelectorAll(
            ".memory-option"
        );


    buttons.forEach(btn => {
        btn.disabled = true;
    });


    if (index === question.answer) {

        button.classList.add("correct");

        score++;

    } else {

        button.classList.add("wrong");

        buttons[question.answer]
            .classList.add("correct");

    }


    logicNext.style.display =
        "inline-block";

}


/* =================================
   NEXT QUESTION
================================= */

logicNext.addEventListener(
    "click",
    nextLogicQuestion
);


function nextLogicQuestion() {

    currentQuestion++;

    if (
        currentQuestion >=
        logicQuestions.length
    ) {

        finishLogicTest();

        return;

    }

    showLogicQuestion();

}


/* =================================
   FINISH TEST
================================= */

function finishLogicTest() {

    clearInterval(timerInterval);

    logicQuiz.style.display = "none";

    logicResult.style.display = "block";

    logicProgress.style.width = "100%";

    logicScore.textContent = score;


    if (score >= 9) {

        logicLevel.textContent =
            "Excellent";

        logicMessage.textContent =
            "Kemampuan logikamu sangat baik. Kamu mampu menemukan pola dan hubungan dengan cepat.";

    }

    else if (score >= 7) {

        logicLevel.textContent =
            "Very Good";

        logicMessage.textContent =
            "Kamu memiliki kemampuan penalaran logis yang baik.";

    }

    else if (score >= 5) {

        logicLevel.textContent =
            "Good";

        logicMessage.textContent =
            "Kemampuan logikamu cukup baik, tetapi masih bisa terus dilatih.";

    }

    else if (score >= 3) {

        logicLevel.textContent =
            "Developing";

        logicMessage.textContent =
            "Kemampuan logikamu sedang berkembang. Latihan pola dan penalaran dapat membantu.";

    }

    else {

        logicLevel.textContent =
            "Keep Practicing";

        logicMessage.textContent =
            "Jangan menyerah. Kemampuan berpikir logis dapat dilatih melalui latihan yang konsisten.";

    }

}


/* =================================
   RESTART
================================= */

logicRestart.addEventListener(
    "click",
    () => {

        logicResult.style.display = "none";

        logicIntro.style.display = "block";

        logicProgress.style.width = "0%";

        logicTimer.textContent = "05:00";

    }
);
