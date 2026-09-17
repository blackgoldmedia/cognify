// ================================
// COGNIFY PERSONALITY TEST
// ================================

const questions = [
    {
        question: "Ketika berada di tempat baru, saya biasanya...",
        answers: [
            "Langsung mencoba hal baru",
            "Mengamati keadaan terlebih dahulu",
            "Mencari seseorang untuk diajak bicara",
            "Membuat rencana terlebih dahulu"
        ]
    },

    {
        question: "Jika mendapatkan masalah yang sulit, saya cenderung...",
        answers: [
            "Mencari cara baru",
            "Menganalisis masalah",
            "Berdiskusi dengan orang lain",
            "Membuat rencana langkah demi langkah"
        ]
    },

    {
        question: "Saya paling menikmati waktu ketika...",
        answers: [
            "Mencoba sesuatu yang baru",
            "Mempelajari sesuatu",
            "Bersama teman",
            "Mengerjakan sesuatu dengan tenang"
        ]
    },

    {
        question: "Ketika mengambil keputusan penting, saya biasanya...",
        answers: [
            "Mengikuti intuisi",
            "Mengumpulkan informasi",
            "Mempertimbangkan orang lain",
            "Membandingkan semua pilihan"
        ]
    },

    {
        question: "Teman-teman biasanya melihat saya sebagai orang yang...",
        answers: [
            "Suka petualangan",
            "Banyak berpikir",
            "Mudah bergaul",
            "Terorganisir"
        ]
    },

    {
        question: "Jika memiliki satu hari kosong, saya lebih memilih...",
        answers: [
            "Pergi ke tempat baru",
            "Membaca atau belajar",
            "Berkumpul dengan teman",
            "Menyelesaikan sesuatu"
        ]
    },

    {
        question: "Saat mendapatkan ide baru, saya biasanya...",
        answers: [
            "Langsung mencobanya",
            "Memikirkannya terlebih dahulu",
            "Menceritakannya kepada orang lain",
            "Membuat rencana"
        ]
    },

    {
        question: "Saya merasa paling nyaman ketika...",
        answers: [
            "Bebas melakukan sesuatu",
            "Memahami sesuatu dengan jelas",
            "Dikelilingi orang yang dipercaya",
            "Mengetahui apa yang akan terjadi"
        ]
    },

    {
        question: "Ketika berdiskusi, saya lebih suka...",
        answers: [
            "Membahas kemungkinan baru",
            "Membahas fakta",
            "Mendengar pendapat orang lain",
            "Mencari solusi"
        ]
    },

    {
        question: "Saya biasanya tertarik pada...",
        answers: [
            "Hal yang belum pernah dicoba",
            "Ide dan pengetahuan",
            "Cerita manusia",
            "Sistem dan cara kerja"
        ]
    },

    {
        question: "Ketika bekerja dalam kelompok, saya cenderung...",
        answers: [
            "Mencari ide baru",
            "Menganalisis masalah",
            "Membangun komunikasi",
            "Mengatur pekerjaan"
        ]
    },

    {
        question: "Kalimat yang paling menggambarkan saya adalah...",
        answers: [
            "Saya ingin terus menjelajahi dunia",
            "Saya ingin memahami bagaimana sesuatu bekerja",
            "Saya ingin memahami orang lain",
            "Saya ingin membuat sesuatu berjalan dengan baik"
        ]
    }
];


// ================================
// ELEMENT
// ================================

const intro = document.getElementById("personalityIntro");
const quiz = document.getElementById("personalityBox");
const result = document.getElementById("personalityResult");

const startButton =
    document.getElementById("startPersonality");

const restartButton =
    document.getElementById("restartPersonality");

const questionNumber =
    document.getElementById("personalityNumber");

const questionText =
    document.getElementById("personalityQuestion");

const options =
    document.getElementById("personalityOptions");

const nextButton =
    document.getElementById("personalityNext");

const progress =
    document.getElementById("personalityProgress");

const timer =
    document.getElementById("personalityTimer");

const title =
    document.getElementById("personalityTitle");

const description =
    document.getElementById("personalityDescription");

const curiosity =
    document.getElementById("traitCuriosity");

const social =
    document.getElementById("traitSocial");

const focus =
    document.getElementById("traitFocus");


// ================================
// STATE
// ================================

let current = 0;

let selected = -1;

let scores = [0, 0, 0, 0];

let time = 300;

let timerInterval = null;


// ================================
// START
// ================================

startButton.addEventListener("click", startTest);

function startTest() {

    intro.style.display = "none";

    result.style.display = "none";

    quiz.style.display = "block";

    current = 0;

    selected = -1;

    scores = [0, 0, 0, 0];

    time = 300;

    startTimer();

    showQuestion();
}


// ================================
// SHOW QUESTION
// ================================

function showQuestion() {

    selected = -1;

    nextButton.disabled = true;

    nextButton.classList.remove("active");

    const q = questions[current];

    questionNumber.textContent =
        `Pernyataan ${current + 1} / ${questions.length}`;

    questionText.textContent =
        q.question;

    progress.style.width =
        `${(current / questions.length) * 100}%`;

    options.innerHTML = "";


    q.answers.forEach((answer, index) => {

        const button =
            document.createElement("button");

        button.type = "button";

        button.className =
            "personality-option";

        button.textContent =
            `${String.fromCharCode(65 + index)}. ${answer}`;

        button.addEventListener("click", () => {

            selectAnswer(index, button);

        });

        options.appendChild(button);

    });
}


// ================================
// SELECT
// ================================

function selectAnswer(index, button) {

    selected = index;

    document
        .querySelectorAll(".personality-option")
        .forEach(item => {

            item.classList.remove("selected");

        });

    button.classList.add("selected");

    nextButton.disabled = false;

    nextButton.classList.add("active");
}


// ================================
// NEXT
// ================================

nextButton.addEventListener("click", () => {

    if (selected === -1) {
        return;
    }

    scores[selected]++;

    current++;

    if (current < questions.length) {

        showQuestion();

    } else {

        finishTest();

    }

});


// ================================
// FINISH
// ================================

function finishTest() {

    clearInterval(timerInterval);

    quiz.style.display = "none";

    result.style.display = "block";

    progress.style.width = "100%";


    let highest = 0;

    for (let i = 1; i < scores.length; i++) {

        if (scores[i] > scores[highest]) {
            highest = i;
        }

    }


    const profiles = [

        {
            title: "The Explorer",
            description:
                "Kamu cenderung memiliki rasa ingin tahu yang tinggi dan menikmati pengalaman baru. Kamu senang mencoba sesuatu yang berbeda dan menemukan kemungkinan baru."
        },

        {
            title: "The Thinker",
            description:
                "Kamu cenderung menikmati proses berpikir, menganalisis informasi, dan memahami bagaimana sesuatu bekerja."
        },

        {
            title: "The Connector",
            description:
                "Kamu cenderung memberikan perhatian besar pada hubungan dan komunikasi. Kamu menikmati interaksi dan memahami orang lain."
        },

        {
            title: "The Strategist",
            description:
                "Kamu cenderung menyukai struktur, perencanaan, dan tujuan yang jelas. Kamu nyaman ketika sesuatu dapat dikerjakan secara sistematis."
        }

    ];


    title.textContent =
        profiles[highest].title;

    description.textContent =
        profiles[highest].description;


    curiosity.textContent =
        Math.round(
            scores[0] / questions.length * 100
        ) + "%";


    social.textContent =
        Math.round(
            scores[2] / questions.length * 100
        ) + "%";


    focus.textContent =
        Math.round(
            (scores[1] + scores[3]) /
            (questions.length * 2) *
            100
        ) + "%";
}


// ================================
// TIMER
// ================================

function startTimer() {

    clearInterval(timerInterval);

    updateTimer();


    timerInterval =
        setInterval(() => {

            time--;

            updateTimer();

            if (time <= 0) {

                clearInterval(timerInterval);

                finishTest();

            }

        }, 1000);
}


function updateTimer() {

    const minutes =
        Math.floor(time / 60);

    const seconds =
        time % 60;

    timer.textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}


// ================================
// RESTART
// ================================

restartButton.addEventListener("click", () => {

    clearInterval(timerInterval);

    result.style.display = "none";

    intro.style.display = "block";

});
