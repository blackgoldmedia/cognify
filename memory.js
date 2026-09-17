const questions = [
    {
        sequence: ["7", "2", "9", "4", "1"],
        options: [
            "7 - 2 - 9 - 4 - 1",
            "7 - 9 - 2 - 4 - 1",
            "2 - 7 - 9 - 1 - 4",
            "7 - 2 - 4 - 9 - 1"
        ],
        answer: 0
    },

    {
        sequence: ["B", "K", "M", "A", "R"],
        options: [
            "B - K - M - A - R",
            "B - M - K - A - R",
            "K - B - M - R - A",
            "B - K - A - M - R"
        ],
        answer: 0
    },

    {
        sequence: ["3", "8", "1", "6", "5"],
        options: [
            "3 - 8 - 1 - 6 - 5",
            "3 - 1 - 8 - 6 - 5",
            "8 - 3 - 1 - 5 - 6",
            "3 - 8 - 6 - 1 - 5"
        ],
        answer: 0
    },

    {
        sequence: ["C", "7", "L", "2", "P"],
        options: [
            "C - 7 - L - 2 - P",
            "C - L - 7 - 2 - P",
            "7 - C - L - P - 2",
            "C - 7 - 2 - L - P"
        ],
        answer: 0
    },

    {
        sequence: ["9", "4", "6", "2", "8"],
        options: [
            "9 - 4 - 6 - 2 - 8",
            "9 - 6 - 4 - 2 - 8",
            "4 - 9 - 6 - 8 - 2",
            "9 - 4 - 2 - 6 - 8"
        ],
        answer: 0
    },

    {
        sequence: ["M", "Q", "5", "T", "3"],
        options: [
            "M - Q - 5 - T - 3",
            "M - 5 - Q - T - 3",
            "Q - M - 5 - 3 - T",
            "M - Q - T - 5 - 3"
        ],
        answer: 0
    },

    {
        sequence: ["1", "9", "4", "7", "2"],
        options: [
            "1 - 9 - 4 - 7 - 2",
            "1 - 4 - 9 - 7 - 2",
            "9 - 1 - 4 - 2 - 7",
            "1 - 9 - 7 - 4 - 2"
        ],
        answer: 0
    },

    {
        sequence: ["D", "8", "N", "4", "S"],
        options: [
            "D - 8 - N - 4 - S",
            "D - N - 8 - 4 - S",
            "8 - D - N - S - 4",
            "D - 8 - 4 - N - S"
        ],
        answer: 0
    },

    {
        sequence: ["6", "1", "8", "3", "9"],
        options: [
            "6 - 1 - 8 - 3 - 9",
            "6 - 8 - 1 - 3 - 9",
            "1 - 6 - 8 - 9 - 3",
            "6 - 1 - 3 - 8 - 9"
        ],
        answer: 0
    },

    {
        sequence: ["F", "2", "K", "7", "A"],
        options: [
            "F - 2 - K - 7 - A",
            "F - K - 2 - 7 - A",
            "2 - F - K - A - 7",
            "F - 2 - 7 - K - A"
        ],
        answer: 0
    }
];


const intro = document.getElementById("memoryIntro");
const quiz = document.getElementById("memoryQuiz");
const result = document.getElementById("memoryResult");

const startButton =
    document.getElementById("startMemoryBtn");

const display =
    document.getElementById("memoryDisplay");

const optionsBox =
    document.getElementById("memoryOptions");

const nextButton =
    document.getElementById("memoryNext");

const currentNumber =
    document.getElementById("memoryCurrent");

const progress =
    document.getElementById("memoryProgress");

const timerDisplay =
    document.getElementById("memoryTimer");

const scoreDisplay =
    document.getElementById("memoryScore");

const levelDisplay =
    document.getElementById("memoryLevel");

const messageDisplay =
    document.getElementById("memoryMessage");

const restartButton =
    document.getElementById("memoryRestart");


let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

let timeLeft = 300;
let timer = null;


function startTest() {

    intro.style.display = "none";
    quiz.style.display = "block";

    currentQuestion = 0;
    score = 0;

    timeLeft = 300;

    updateTimer();

    clearInterval(timer);

    timer = setInterval(() => {

        timeLeft--;

        updateTimer();

        if (timeLeft <= 0) {

            clearInterval(timer);

            finishTest();

        }

    }, 1000);

    showQuestion();
}


function updateTimer() {

    const minutes =
        Math.floor(timeLeft / 60);

    const seconds =
        timeLeft % 60;

    timerDisplay.textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}


function showQuestion() {

    selectedAnswer = null;

    const question =
        questions[currentQuestion];

    currentNumber.textContent =
        currentQuestion + 1;

    progress.style.width =
        `${((currentQuestion + 1) / questions.length) * 100}%`;


    display.textContent =
        question.sequence.join("   ");


    optionsBox.innerHTML = "";

    nextButton.style.display = "none";


    setTimeout(() => {

        display.textContent = "•••";

        setTimeout(() => {

            display.textContent = "Apa urutannya?";

            createOptions();

        }, 700);

    }, 1500);
}


function createOptions() {

    const question =
        questions[currentQuestion];

    question.options.forEach(
        (option, index) => {

            const button =
                document.createElement("button");

            button.className =
                "memory-option";

            button.textContent =
                option;

            button.addEventListener(
                "click",
                () => selectAnswer(button, index)
            );

            optionsBox.appendChild(button);

        }
    );
}


function selectAnswer(button, index) {

    if (selectedAnswer !== null) {
        return;
    }

    selectedAnswer = index;

    const buttons =
        document.querySelectorAll(".memory-option");

    buttons.forEach(btn => {

        btn.disabled = true;

    });

    button.classList.add("selected");

    if (
        index ===
        questions[currentQuestion].answer
    ) {

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


nextButton.addEventListener(
    "click",
    () => {

        currentQuestion++;

        if (
            currentQuestion >=
            questions.length
        ) {

            finishTest();

        } else {

            showQuestion();

        }

    }
);


function finishTest() {

    clearInterval(timer);

    quiz.style.display = "none";

    result.style.display = "block";

    scoreDisplay.textContent = score;

    let level = "";
    let message = "";

    if (score >= 9) {

        level = "Excellent Memory";

        message =
            "Kemampuan mengingatmu sangat baik. Kamu mampu mempertahankan informasi dengan cukup kuat.";

    } else if (score >= 7) {

        level = "Good Memory";

        message =
            "Kemampuan memorimu tergolong baik. Dengan latihan rutin, kemampuan ini dapat terus berkembang.";

    } else if (score >= 5) {

        level = "Average Memory";

        message =
            "Kemampuan memorimu berada pada tingkat sedang. Fokus dan latihan dapat membantu meningkatkannya.";

    } else {

        level = "Needs Practice";

        message =
            "Tidak masalah. Memori dapat dilatih melalui latihan fokus, pengulangan, dan permainan memori.";

    }

    levelDisplay.textContent = level;

    messageDisplay.textContent = message;
}


restartButton.addEventListener(
    "click",
    () => {

        result.style.display = "none";

        intro.style.display = "block";

        currentQuestion = 0;
        score = 0;
        timeLeft = 300;

        updateTimer();

    }
);


startButton.addEventListener(
    "click",
    startTest
);
