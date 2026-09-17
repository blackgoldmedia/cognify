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
// =========================
// COGNIFY PERSONALITY TEST
// =========================


const personalityQuestions = [

    {
        question:
            "Ketika berada di tempat baru, saya biasanya...",

        answers: [
            "Langsung mencoba hal baru",
            "Mengamati keadaan terlebih dahulu",
            "Mencari seseorang untuk diajak bicara",
            "Tetap melakukan hal yang sudah saya kenal"
        ],

        type: [
            "explorer",
            "thinker",
            "social",
            "planner"
        ]
    },


    {
        question:
            "Jika mendapatkan masalah yang sulit, saya cenderung...",

        answers: [
            "Mencari cara baru untuk menyelesaikannya",
            "Menganalisis masalah secara mendalam",
            "Mendiskusikannya dengan orang lain",
            "Membuat rencana langkah demi langkah"
        ],

        type: [
            "explorer",
            "thinker",
            "social",
            "planner"
        ]
    },


    {
        question:
            "Saya paling menikmati waktu ketika...",

        answers: [
            "Mencoba sesuatu yang belum pernah dilakukan",
            "Mempelajari sesuatu yang menarik",
            "Bersama orang-orang yang saya sukai",
            "Mengerjakan sesuatu dengan tenang"
        ],

        type: [
            "explorer",
            "thinker",
            "social",
            "planner"
        ]
    },


    {
        question:
            "Ketika mengambil keputusan penting, saya biasanya...",

        answers: [
            "Mengikuti intuisi dan mencoba",
            "Mengumpulkan informasi terlebih dahulu",
            "Mempertimbangkan perasaan orang lain",
            "Membandingkan semua pilihan"
        ],

        type: [
            "explorer",
            "thinker",
            "social",
            "planner"
        ]
    },


    {
        question:
            "Teman-teman biasanya melihat saya sebagai orang yang...",

        answers: [
            "Suka petualangan",
            "Banyak berpikir",
            "Mudah bergaul",
            "Terorganisir"
        ],

        type: [
            "explorer",
            "thinker",
            "social",
            "planner"
        ]
    },


    {
        question:
            "Jika memiliki satu hari kosong, saya lebih memilih...",

        answers: [
            "Pergi ke tempat baru",
            "Membaca atau mempelajari sesuatu",
            "Berkumpul dengan teman",
            "Menyelesaikan sesuatu yang sudah direncanakan"
        ],

        type: [
            "explorer",
            "thinker",
            "social",
            "planner"
        ]
    },


    {
        question:
            "Saat mendapatkan ide baru, saya biasanya...",

        answers: [
            "Langsung ingin mencobanya",
            "Memikirkan apakah ide itu masuk akal",
            "Menceritakannya kepada orang lain",
            "Membuat rencana terlebih dahulu"
        ],

        type: [
            "explorer",
            "thinker",
            "social",
            "planner"
        ]
    },


    {
        question:
            "Saya merasa paling nyaman ketika...",

        answers: [
            "Bebas melakukan sesuatu",
            "Memahami sesuatu dengan jelas",
            "Dikelilingi orang yang saya percaya",
            "Mengetahui apa yang akan terjadi"
        ],

        type: [
            "explorer",
            "thinker",
            "social",
            "planner"
        ]
    },


    {
        question:
            "Ketika berdiskusi, saya lebih suka...",

        answers: [
            "Membahas kemungkinan baru",
            "Membahas fakta dan alasan",
            "Mendengar berbagai pendapat",
            "Mencari solusi yang jelas"
        ],

        type: [
            "explorer",
            "thinker",
            "social",
            "planner"
        ]
    },


    {
        question:
            "Saya biasanya tertarik pada...",

        answers: [
            "Hal-hal yang belum pernah saya coba",
            "Ide dan pengetahuan baru",
            "Cerita dan kehidupan manusia",
            "Sistem dan cara kerja sesuatu"
        ],

        type: [
            "explorer",
            "thinker",
            "social",
            "planner"
        ]
    },


    {
        question:
            "Ketika bekerja dalam kelompok, saya cenderung...",

        answers: [
            "Mencari ide baru",
            "Menganalisis masalah",
            "Membangun komunikasi",
            "Mengatur pekerjaan"
        ],

        type: [
            "explorer",
            "thinker",
            "social",
            "planner"
        ]
    },


    {
        question:
            "Kalimat yang paling menggambarkan saya adalah...",

        answers: [
            "Saya ingin terus menjelajahi dunia",
            "Saya ingin memahami bagaimana sesuatu bekerja",
            "Saya ingin memahami orang lain",
            "Saya ingin membuat sesuatu berjalan dengan baik"
        ],

        type: [
            "explorer",
            "thinker",
            "social",
            "planner"
        ]
    }

];


// =========================
// ELEMENTS
// =========================

const personalityIntro =
    document.getElementById("personalityIntro");

const personalityBox =
    document.getElementById("personalityBox");

const personalityResult =
    document.getElementById("personalityResult");

const startPersonality =
    document.getElementById("startPersonality");

const restartPersonality =
    document.getElementById("restartPersonality");

const personalityNumber =
    document.getElementById("personalityNumber");

const personalityTimer =
    document.getElementById("personalityTimer");

const personalityProgress =
    document.getElementById("personalityProgress");

const personalityQuestion =
    document.getElementById("personalityQuestion");

const personalityOptions =
    document.getElementById("personalityOptions");

const personalityNext =
    document.getElementById("personalityNext");

const personalityTitle =
    document.getElementById("personalityTitle");

const personalityDescription =
    document.getElementById("personalityDescription");

const traitCuriosity =
    document.getElementById("traitCuriosity");

const traitSocial =
    document.getElementById("traitSocial");

const traitFocus =
    document.getElementById("traitFocus");


// =========================
// VARIABLES
// =========================

let personalityCurrent = 0;

let personalitySelected = null;

let personalityScores = {

    explorer: 0,

    thinker: 0,

    social: 0,

    planner: 0

};

let personalityTime = 300;

let personalityTimerInterval;


// =========================
// START
// =========================

if (startPersonality) {

    startPersonality.addEventListener(
        "click",
        function () {

            personalityIntro.style.display =
                "none";

            personalityBox.style.display =
                "block";

            personalityResult.style.display =
                "none";


            personalityCurrent = 0;

            personalitySelected = null;

            personalityScores = {

                explorer: 0,

                thinker: 0,

                social: 0,

                planner: 0

            };


            personalityTime = 300;

            startPersonalityTimer();

            showPersonalityQuestion();

        }
    );

}


// =========================
// SHOW QUESTION
// =========================

function showPersonalityQuestion() {

    personalitySelected = null;

    personalityNext.disabled = true;

    personalityNext.classList.remove(
        "active"
    );


    const question =
        personalityQuestions[personalityCurrent];


    personalityNumber.textContent =
        `Pernyataan ${personalityCurrent + 1} / ${personalityQuestions.length}`;


    personalityQuestion.textContent =
        question.question;


    personalityProgress.style.width =
        `${(personalityCurrent / personalityQuestions.length) * 100}%`;


    personalityOptions.innerHTML = "";


    question.answers.forEach(
        function (answer, index) {

            const button =
                document.createElement("button");


            button.className =
                "personality-option";


            button.textContent =
                `${String.fromCharCode(65 + index)}. ${answer}`;


            button.addEventListener(
                "click",
                function () {

                    selectPersonalityAnswer(
                        index,
                        button
                    );

                }
            );


            personalityOptions.appendChild(
                button
            );

        }
    );

}


// =========================
// SELECT ANSWER
// =========================

function selectPersonalityAnswer(
    index,
    button
) {

    personalitySelected = index;


    const options =
        document.querySelectorAll(
            ".personality-option"
        );


    options.forEach(
        function (option) {

            option.classList.remove(
                "selected"
            );

        }
    );


    button.classList.add(
        "selected"
    );


    personalityNext.disabled =
        false;

    personalityNext.classList.add(
        "active"
    );

}


// =========================
// NEXT
// =========================

if (personalityNext) {

    personalityNext.addEventListener(
        "click",
        function () {

            if (
                personalitySelected === null
            ) {

                return;

            }


            const question =
                personalityQuestions[
                    personalityCurrent
                ];


            const selectedType =
                question.type[
                    personalitySelected
                ];


            personalityScores[
                selectedType
            ]++;


            personalityCurrent++;


            if (
                personalityCurrent <
                personalityQuestions.length
            ) {

                showPersonalityQuestion();

            } else {

                finishPersonalityTest();

            }

        }
    );

}


// =========================
// FINISH
// =========================

function finishPersonalityTest() {

    clearInterval(
        personalityTimerInterval
    );


    personalityBox.style.display =
        "none";


    personalityResult.style.display =
        "block";


    personalityProgress.style.width =
        "100%";


    let highestType =
        "explorer";


    Object.keys(
        personalityScores
    ).forEach(
        function (type) {

            if (
                personalityScores[type] >
                personalityScores[highestType]
            ) {

                highestType = type;

            }

        }
    );


    showPersonalityResult(
        highestType
    );

}


// =========================
// RESULT
// =========================

function showPersonalityResult(type) {

    if (type === "explorer") {

        personalityTitle.textContent =
            "The Explorer";


        personalityDescription.textContent =
            "Kamu cenderung memiliki rasa ingin tahu yang tinggi dan menikmati pengalaman baru. Kamu senang menemukan kemungkinan, mencoba sesuatu yang berbeda, dan melihat dunia dari sudut pandang yang luas.";

    }


    else if (type === "thinker") {

        personalityTitle.textContent =
            "The Thinker";


        personalityDescription.textContent =
            "Kamu cenderung menikmati proses berpikir, menganalisis informasi, dan memahami bagaimana sesuatu bekerja. Rasa ingin tahu intelektual menjadi salah satu kekuatanmu.";

    }


    else if (type === "social") {

        personalityTitle.textContent =
            "The Connector";


        personalityDescription.textContent =
            "Kamu cenderung memberikan perhatian besar pada hubungan dan komunikasi. Kamu menikmati pertukaran ide, memahami orang lain, dan membangun hubungan.";

    }


    else {

        personalityTitle.textContent =
            "The Strategist";


        personalityDescription.textContent =
            "Kamu cenderung menyukai struktur, perencanaan, dan tujuan yang jelas. Kamu merasa nyaman ketika sesuatu dapat diatur dan dikerjakan secara sistematis.";

    }


    const total =
        personalityQuestions.length;


    traitCuriosity.textContent =
        Math.round(
            (personalityScores.explorer / total) * 100
        ) + "%";


    traitSocial.textContent =
        Math.round(
            (personalityScores.social / total) * 100
        ) + "%";


    traitFocus.textContent =
        Math.round(
            (
                personalityScores.thinker +
                personalityScores.planner
            ) /
            (total * 2) *
            100
        ) + "%";

}


// =========================
// TIMER
// =========================

function startPersonalityTimer() {

    clearInterval(
        personalityTimerInterval
    );


    updatePersonalityTimer();


    personalityTimerInterval =
        setInterval(
            function () {

                personalityTime--;

                updatePersonalityTimer();


                if (
                    personalityTime <= 0
                ) {

                    clearInterval(
                        personalityTimerInterval
                    );

                    finishPersonalityTest();

                }

            },
            1000
        );

}


function updatePersonalityTimer() {

    const minutes =
        Math.floor(
            personalityTime / 60
        );


    const seconds =
        personalityTime % 60;


    personalityTimer.textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

}


// =========================
// RESTART
// =========================

if (restartPersonality) {

    restartPersonality.addEventListener(
        "click",
        function () {

            personalityResult.style.display =
                "none";

            personalityIntro.style.display =
                "block";


            clearInterval(
                personalityTimerInterval
            );

        }
    );

}
