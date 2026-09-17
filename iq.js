const questions = [
    {
        question: "Angka berikutnya adalah?",
        text: "2, 4, 8, 16, ?",
        options: ["20", "24", "32", "36"],
        answer: 2
    },
    {
        question: "Jika semua A adalah B, dan semua B adalah C, maka...",
        text: "",
        options: [
            "Semua A adalah C",
            "Semua C adalah A",
            "Tidak ada A yang C",
            "A dan C tidak berhubungan"
        ],
        answer: 0
    },
    {
        question: "Angka berikutnya adalah?",
        text: "3, 6, 12, 24, ?",
        options: ["30", "36", "48", "54"],
        answer: 2
    },
    {
        question: "Jika hari ini Senin, 10 hari kemudian adalah...",
        text: "",
        options: [
            "Selasa",
            "Rabu",
            "Kamis",
            "Jumat"
        ],
        answer: 2
    },
    {
        question: "Jika 5 pensil berharga Rp20.000, berapa harga 10 pensil?",
        text: "",
        options: [
            "Rp30.000",
            "Rp35.000",
            "Rp40.000",
            "Rp50.000"
        ],
        answer: 2
    },
    {
        question: "Angka berikutnya adalah?",
        text: "1, 4, 9, 16, ?",
        options: ["20", "24", "25", "30"],
        answer: 2
    },
    {
        question: "Manakah yang berbeda?",
        text: "",
        options: [
            "Apel",
            "Mangga",
            "Jeruk",
            "Wortel"
        ],
        answer: 3
    },
    {
        question: "Angka berikutnya adalah?",
        text: "5, 10, 15, 20, ?",
        options: ["22", "25", "30", "35"],
        answer: 1
    },
    {
        question: "Semua burung memiliki sayap. Elang adalah burung. Maka...",
        text: "",
        options: [
            "Elang memiliki sayap",
            "Elang tidak memiliki sayap",
            "Semua yang memiliki sayap adalah elang",
            "Elang bukan burung"
        ],
        answer: 0
    },
    {
        question: "Manakah yang berbeda?",
        text: "",
        options: [
            "Segitiga",
            "Persegi",
            "Lingkaran",
            "Kubus"
        ],
        answer: 3
    }
];

const intro = document.getElementById("iqIntro");
const quiz = document.getElementById("iqQuiz");
const result = document.getElementById("iqResult");

const startButton = document.getElementById("startIQ");
const questionNumber = document.getElementById("iqQuestionNumber");
const questionTitle = document.getElementById("iqQuestion");
const questionText = document.getElementById("iqQuestionText");
const optionsBox = document.getElementById("iqOptions");
const nextButton = document.getElementById("iqNext");
const progress = document.getElementById("iqProgress");
const timerDisplay = document.getElementById("iqTimer");

const scoreDisplay = document.getElementById("iqScore");
const levelDisplay = document.getElementById("iqLevel");
const messageDisplay = document.getElementById("iqMessage");
const restartButton = document.getElementById("iqRestart");

let currentQuestion = 0;
let score = 0;
let selected = false;
let timeLeft = 600;
let timer = null;


function startTest() {

    intro.style.display = "none";
    quiz.style.display = "block";
    result.style.display = "none";

    currentQuestion = 0;
    score = 0;
    selected = false;
    timeLeft = 600;

    clearInterval(timer);

    timer = setInterval(function () {

        timeLeft--;

        updateTimer();

        if (timeLeft <= 0) {
            clearInterval(timer);
            finishTest();
        }

    }, 1000);

    updateTimer();
    showQuestion();
}


function updateTimer() {

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    timerDisplay.textContent =
        String(minutes).padStart(2, "0") +
        ":" +
        String(seconds).padStart(2, "0");
}


function showQuestion() {

    selected = false;

    const question = questions[currentQuestion];

    questionNumber.textContent =
        (currentQuestion + 1) + "/" + questions.length;

    questionTitle.textContent =
        question.question;

    questionText.textContent =
        question.text;

    progress.style.width =
        ((currentQuestion + 1) / questions.length * 100) + "%";

    optionsBox.innerHTML = "";

    nextButton.style.display = "none";

    question.options.forEach(function (option, index) {

        const button = document.createElement("button");

        button.className = "iq-option";
        button.textContent = option;

        button.addEventListener("click", function () {
            selectAnswer(button, index);
        });

        optionsBox.appendChild(button);
    });
}


function selectAnswer(button, index) {

    if (selected) {
        return;
    }

    selected = true;

    const buttons =
        document.querySelectorAll(".iq-option");

    buttons.forEach(function (btn) {
        btn.disabled = true;
    });

    if (index === questions[currentQuestion].answer) {

        score++;

        button.classList.add("correct");

    } else {

        button.classList.add("wrong");

        buttons[
            questions[currentQuestion].answer
        ].classList.add("correct");
    }

    nextButton.style.display = "inline-block";
}


nextButton.addEventListener("click", function () {

    currentQuestion++;

    if (currentQuestion >= questions.length) {

        finishTest();

    } else {

        showQuestion();
    }
});


function finishTest() {

    clearInterval(timer);

    quiz.style.display = "none";
    result.style.display = "block";

    scoreDisplay.textContent = score + "/10";

    if (score >= 9) {

        levelDisplay.textContent = "Excellent";

        messageDisplay.textContent =
            "Kamu menunjukkan kemampuan penalaran yang sangat baik.";

    } else if (score >= 7) {

        levelDisplay.textContent = "Very Good";

        messageDisplay.textContent =
            "Kamu menunjukkan kemampuan logika dan pemecahan masalah yang baik.";

    } else if (score >= 5) {

        levelDisplay.textContent = "Good";

        messageDisplay.textContent =
            "Kemampuanmu cukup baik. Latihan logika dapat membantu meningkatkannya.";

    } else {

        levelDisplay.textContent = "Keep Practicing";

        messageDisplay.textContent =
            "Jangan berkecil hati. Kemampuan berpikir logis dapat terus dilatih.";
    }
}


restartButton.addEventListener("click", function () {

    result.style.display = "none";
    intro.style.display = "block";

    currentQuestion = 0;
    score = 0;
    timeLeft = 600;

    updateTimer();
});


startButton.addEventListener("click", startTest);
