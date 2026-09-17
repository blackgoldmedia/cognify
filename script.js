// =========================
// COGNIFY
// MAIN JAVASCRIPT
// =========================


// =========================
// MOBILE MENU
// =========================

const menuBtn = document.getElementById("menuBtn");
const navigation = document.getElementById("navigation");

if (menuBtn && navigation) {

    menuBtn.addEventListener("click", function () {

        navigation.classList.toggle("active");

    });

}


// =========================
// IQ STYLE TEST
// =========================

const questions = [

    {
        category: "NUMBER PATTERN",

        question:
            "Angka berikutnya adalah? 2, 4, 8, 16, ?",

        answers: [
            "20",
            "24",
            "32",
            "36"
        ],

        correct: 2
    },


    {
        category: "LOGIC",

        question:
            "Jika semua A adalah B, dan semua B adalah C, maka...",

        answers: [
            "Semua A adalah C",
            "Semua C adalah A",
            "Tidak ada A yang C",
            "Tidak dapat diketahui"
        ],

        correct: 0
    },


    {
        category: "NUMBER PATTERN",

        question:
            "Angka berikutnya adalah? 3, 6, 12, 24, ?",

        answers: [
            "30",
            "36",
            "42",
            "48"
        ],

        correct: 3
    },


    {
        category: "LOGIC",

        question:
            "Jika hari ini Senin, hari apakah 10 hari kemudian?",

        answers: [
            "Rabu",
            "Kamis",
            "Jumat",
            "Sabtu"
        ],

        correct: 1
    },


    {
        category: "MATHEMATICAL REASONING",

        question:
            "Jika 5 + 5 = 10 dan 10 + 10 = 20, maka 20 + 20 = ?",

        answers: [
            "30",
            "35",
            "40",
            "45"
        ],

        correct: 2
    },


    {
        category: "NUMBER PATTERN",

        question:
            "Angka berikutnya adalah? 1, 4, 9, 16, ?",

        answers: [
            "20",
            "24",
            "25",
            "30"
        ],

        correct: 2
    },


    {
        category: "LOGIC",

        question:
            "Mana yang berbeda dari kelompok berikut?",

        answers: [
            "Apel",
            "Mangga",
            "Jeruk",
            "Wortel"
        ],

        correct: 3
    },


    {
        category: "NUMBER PATTERN",

        question:
            "Angka berikutnya adalah? 5, 10, 15, 20, ?",

        answers: [
            "22",
            "24",
            "25",
            "30"
        ],

        correct: 2
    },


    {
        category: "LOGIC",

        question:
            "Jika semua burung memiliki sayap, dan elang adalah burung, maka...",

        answers: [
            "Elang memiliki sayap",
            "Elang bukan burung",
            "Semua burung adalah elang",
            "Tidak dapat diketahui"
        ],

        correct: 0
    },


    {
        category: "REASONING",

        question:
            "Mana yang paling berbeda?",

        answers: [
            "Segitiga",
            "Persegi",
            "Lingkaran",
            "Kubus"
        ],

        correct: 3
    }

];


// =========================
// ELEMENTS
// =========================

const quizIntro = document.getElementById("quizIntro");
const quizBox = document.getElementById("quizBox");
const resultBox = document.getElementById("resultBox");

const startQuiz = document.getElementById("startQuiz");
const restartQuiz = document.getElementById("restartQuiz");

const questionNumber = document.getElementById("questionNumber");
const questionCategory = document.getElementById("questionCategory");
const questionText = document.getElementById("questionText");

const answersContainer = document.getElementById("answers");

const nextButton = document.getElementById("nextButton");

const progressBar = document.getElementById("progressBar");

const scoreElement = document.getElementById("score");
const resultTitle = document.getElementById("resultTitle");
const resultDescription = document.getElementById("resultDescription");

const timerElement = document.getElementById("timer");


// =========================
// VARIABLES
// =========================

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

let timeLeft = 600;
let timer;


// =========================
// START TEST
// =========================

if (startQuiz) {

    startQuiz.addEventListener("click", function () {

        quizIntro.style.display = "none";

        quizBox.style.display = "block";

        currentQuestion = 0;
        score = 0;

        timeLeft = 600;

        startTimer();

        showQuestion();

    });

}


// =========================
// SHOW QUESTION
// =========================

function showQuestion() {

    selectedAnswer = null;

    nextButton.disabled = true;

    nextButton.classList.remove("active");

    const question = questions[currentQuestion];

    questionNumber.textContent =
        `Pertanyaan ${currentQuestion + 1} / ${questions.length}`;

    questionCategory.textContent =
        question.category;

    questionText.textContent =
        question.question;


    progressBar.style.width =
        `${((currentQuestion) / questions.length) * 100}%`;


    answersContainer.innerHTML = "";


    question.answers.forEach(function (answer, index) {

        const button = document.createElement("button");

        button.className = "answer";

        button.textContent =
            `${String.fromCharCode(65 + index)}. ${answer}`;


        button.addEventListener("click", function () {

            selectAnswer(index, button);

        });


        answersContainer.appendChild(button);

    });

}


// =========================
// SELECT ANSWER
// =========================

function selectAnswer(index, button) {

    selectedAnswer = index;

    const allAnswers =
        document.querySelectorAll(".answer");

    allAnswers.forEach(function (answer) {

        answer.classList.remove("selected");

    });


    button.classList.add("selected");


    nextButton.disabled = false;

    nextButton.classList.add("active");

}


// =========================
// NEXT QUESTION
// =========================

if (nextButton) {

    nextButton.addEventListener("click", function () {

        if (selectedAnswer === null) {

            return;

        }


        if (
            selectedAnswer ===
            questions[currentQuestion].correct
        ) {

            score++;

        }


        currentQuestion++;


        if (currentQuestion < questions.length) {

            showQuestion();

        } else {

            finishQuiz();

        }

    });

}


// =========================
// FINISH QUIZ
// =========================

function finishQuiz() {

    clearInterval(timer);

    quizBox.style.display = "none";

    resultBox.style.display = "block";

    progressBar.style.width = "100%";

    scoreElement.textContent = score;


    if (score <= 3) {

        resultTitle.textContent =
            "Keep Exploring";

        resultDescription.textContent =
            "Hasil ini menunjukkan masih ada banyak ruang untuk melatih kemampuan logika dan penalaranmu. Cobalah lagi dan lihat apakah skormu meningkat.";

    }

    else if (score <= 6) {

        resultTitle.textContent =
            "Good Work";

        resultDescription.textContent =
            "Kamu menunjukkan kemampuan penalaran yang cukup baik. Terus berlatih dengan berbagai tantangan logika.";

    }

    else if (score <= 8) {

        resultTitle.textContent =
            "Great Job";

        resultDescription.textContent =
            "Kamu berhasil menjawab sebagian besar pertanyaan dengan benar. Kemampuan logikamu terlihat cukup kuat.";

    }

    else {

        resultTitle.textContent =
            "Excellent";

        resultDescription.textContent =
            "Hasilmu sangat baik pada tes ini. Pertahankan rasa ingin tahu dan terus tantang kemampuan berpikirmu.";

    }

}


// =========================
// TIMER
// =========================

function startTimer() {

    clearInterval(timer);

    updateTimer();


    timer = setInterval(function () {

        timeLeft--;

        updateTimer();


        if (timeLeft <= 0) {

            clearInterval(timer);

            finishQuiz();

        }

    }, 1000);

}


function updateTimer() {

    const minutes =
        Math.floor(timeLeft / 60);

    const seconds =
        timeLeft % 60;


    timerElement.textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

}


// =========================
// RESTART
// =========================

if (restartQuiz) {

    restartQuiz.addEventListener("click", function () {

        resultBox.style.display = "none";

        quizIntro.style.display = "block";

        currentQuestion = 0;

        score = 0;

    });

}
