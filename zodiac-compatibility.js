// ========================================
// COGNIFY - ZODIAC COMPATIBILITY
// ========================================

const compatibilityButton =
    document.getElementById("compatibilityButton");

const zodiacOne =
    document.getElementById("zodiacOne");

const zodiacTwo =
    document.getElementById("zodiacTwo");

const compatibilityResult =
    document.getElementById("compatibilityResult");

const compatibilitySymbolOne =
    document.getElementById("compatibilitySymbolOne");

const compatibilitySymbolTwo =
    document.getElementById("compatibilitySymbolTwo");

const compatibilityTitle =
    document.getElementById("compatibilityTitle");

const compatibilityScore =
    document.getElementById("compatibilityScore");

const compatibilityLove =
    document.getElementById("compatibilityLove");

const compatibilityFriendship =
    document.getElementById("compatibilityFriendship");

const compatibilityCommunication =
    document.getElementById("compatibilityCommunication");

const compatibilityChemistry =
    document.getElementById("compatibilityChemistry");

const compatibilityDescription =
    document.getElementById("compatibilityDescription");


// ========================================
// DATA ZODIAK
// ========================================

const zodiacData = {

    aries: {
        nama: "Aries",
        simbol: "♈"
    },

    taurus: {
        nama: "Taurus",
        simbol: "♉"
    },

    gemini: {
        nama: "Gemini",
        simbol: "♊"
    },

    cancer: {
        nama: "Cancer",
        simbol: "♋"
    },

    leo: {
        nama: "Leo",
        simbol: "♌"
    },

    virgo: {
        nama: "Virgo",
        simbol: "♍"
    },

    libra: {
        nama: "Libra",
        simbol: "♎"
    },

    scorpio: {
        nama: "Scorpio",
        simbol: "♏"
    },

    sagittarius: {
        nama: "Sagitarius",
        simbol: "♐"
    },

    capricorn: {
        nama: "Capricorn",
        simbol: "♑"
    },

    aquarius: {
        nama: "Aquarius",
        simbol: "♒"
    },

    pisces: {
        nama: "Pisces",
        simbol: "♓"
    }

};


// ========================================
// DATA KECOCOKAN
// ========================================

const compatibilityData = {

    aries: {
        leo: [90, "Sangat kuat", "Sangat baik", "Baik", "Sangat kuat"],
        sagittarius: [92, "Sangat kuat", "Sangat baik", "Sangat baik", "Sangat kuat"],
        gemini: [82, "Baik", "Sangat baik", "Sangat baik", "Kuat"],
        libra: [78, "Baik", "Sangat baik", "Baik", "Kuat"],
        taurus: [65, "Cukup", "Baik", "Cukup", "Baik"],
        cancer: [58, "Cukup", "Baik", "Cukup", "Cukup"],
        virgo: [62, "Cukup", "Baik", "Baik", "Cukup"],
        scorpio: [72, "Baik", "Baik", "Cukup", "Sangat kuat"],
        capricorn: [60, "Cukup", "Baik", "Cukup", "Baik"],
        aquarius: [80, "Baik", "Sangat baik", "Sangat baik", "Kuat"],
        pisces: [63, "Cukup", "Baik", "Cukup", "Baik"]
    },

    taurus: {
        cancer: [88, "Sangat baik", "Sangat baik", "Baik", "Kuat"],
        virgo: [91, "Sangat baik", "Sangat baik", "Sangat baik", "Baik"],
        capricorn: [94, "Sangat baik", "Sangat baik", "Sangat baik", "Sangat kuat"],
        pisces: [84, "Sangat baik", "Baik", "Baik", "Kuat"],
        libra: [70, "Baik", "Baik", "Baik", "Cukup"],
        scorpio: [82, "Baik", "Baik", "Cukup", "Sangat kuat"],
        gemini: [55, "Cukup", "Baik", "Cukup", "Cukup"],
        leo: [68, "Baik", "Baik", "Cukup", "Kuat"],
        sagittarius: [57, "Cukup", "Baik", "Cukup", "Baik"],
        aquarius: [52, "Cukup", "Baik", "Cukup", "Cukup"],
        aries: [65, "Cukup", "Baik", "Cukup", "Baik"]
    },

    gemini: {
        libra: [91, "Sangat baik", "Sangat baik", "Sangat baik", "Kuat"],
        aquarius: [94, "Sangat baik", "Sangat baik", "Sangat baik", "Kuat"],
        aries: [82, "Baik", "Sangat baik", "Sangat baik", "Kuat"],
        leo: [85, "Baik", "Sangat baik", "Sangat baik", "Kuat"],
        sagittarius: [79, "Baik", "Sangat baik", "Sangat baik", "Kuat"],
        cancer: [60, "Cukup", "Baik", "Cukup", "Cukup"],
        virgo: [66, "Cukup", "Baik", "Baik", "Cukup"],
        scorpio: [58, "Cukup", "Baik", "Cukup", "Kuat"],
        capricorn: [55, "Cukup", "Baik", "Cukup", "Cukup"],
        taurus: [55, "Cukup", "Baik", "Cukup", "Cukup"],
        pisces: [64, "Cukup", "Baik", "Cukup", "Baik"]
    },

    cancer: {
        scorpio: [93, "Sangat kuat", "Sangat baik", "Baik", "Sangat kuat"],
        pisces: [95, "Sangat baik", "Sangat baik", "Baik", "Sangat kuat"],
        taurus: [88, "Sangat baik", "Sangat baik", "Baik", "Kuat"],
        virgo: [82, "Sangat baik", "Baik", "Baik", "Baik"],
        capricorn: [78, "Baik", "Baik", "Baik", "Kuat"],
        leo: [70, "Baik", "Baik", "Cukup", "Kuat"],
        libra: [62, "Cukup", "Baik", "Cukup", "Cukup"],
        aries: [58, "Cukup", "Baik", "Cukup", "Cukup"],
        gemini: [60, "Cukup", "Baik", "Cukup", "Cukup"],
        sagittarius: [55, "Cukup", "Baik", "Cukup", "Cukup"],
        aquarius: [50, "Cukup", "Baik", "Cukup", "Cukup"]
    },

    leo: {
        aries: [90, "Sangat kuat", "Sangat baik", "Baik", "Sangat kuat"],
        sagittarius: [94, "Sangat kuat", "Sangat baik", "Sangat baik", "Sangat kuat"],
        gemini: [85, "Baik", "Sangat baik", "Sangat baik", "Kuat"],
        libra: [88, "Sangat baik", "Sangat baik", "Sangat baik", "Kuat"],
        aquarius: [80, "Baik", "Sangat baik", "Baik", "Sangat kuat"],
        cancer: [70, "Baik", "Baik", "Cukup", "Kuat"],
        taurus: [68, "Baik", "Baik", "Cukup", "Kuat"],
        virgo: [65, "Cukup", "Baik", "Baik", "Cukup"],
        scorpio: [75, "Baik", "Baik", "Cukup", "Sangat kuat"],
        capricorn: [62, "Cukup", "Baik", "Cukup", "Baik"],
        pisces: [66, "Cukup", "Baik", "Cukup", "Baik"]
    },

    virgo: {
        taurus: [91, "Sangat baik", "Sangat baik", "Sangat baik", "Baik"],
        capricorn: [93, "Sangat baik", "Sangat baik", "Sangat baik", "Baik"],
        cancer: [82, "Sangat baik", "Baik", "Baik", "Baik"],
        scorpio: [84, "Baik", "Baik", "Baik", "Kuat"],
        pisces: [76, "Baik", "Baik", "Cukup", "Kuat"],
        libra: [72, "Baik", "Baik", "Sangat baik", "Cukup"],
        leo: [65, "Cukup", "Baik", "Baik", "Cukup"],
        aries: [62, "Cukup", "Baik", "Baik", "Cukup"],
        gemini: [66, "Cukup", "Baik", "Baik", "Cukup"],
        sagittarius: [60, "Cukup", "Baik", "Cukup", "Baik"],
        aquarius: [58, "Cukup", "Baik", "Baik", "Cukup"]
    },

    libra: {
        gemini: [91, "Sangat baik", "Sangat baik", "Sangat baik", "Kuat"],
        aquarius: [93, "Sangat baik", "Sangat baik", "Sangat baik", "Kuat"],
        leo: [88, "Sangat baik", "Sangat baik", "Sangat baik", "Kuat"],
        aries: [78, "Baik", "Sangat baik", "Baik", "Kuat"],
        sagittarius: [82, "Baik", "Sangat baik", "Sangat baik", "Kuat"],
        taurus: [70, "Baik", "Baik", "Baik", "Cukup"],
        cancer: [62, "Cukup", "Baik", "Cukup", "Cukup"],
        virgo: [72, "Baik", "Baik", "Sangat baik", "Cukup"],
        scorpio: [68, "Baik", "Baik", "Cukup", "Kuat"],
        capricorn: [64, "Cukup", "Baik", "Baik", "Cukup"],
        pisces: [74, "Baik", "Baik", "Baik", "Kuat"]
    },

    scorpio: {
        cancer: [93, "Sangat kuat", "Sangat baik", "Baik", "Sangat kuat"],
        pisces: [94, "Sangat kuat", "Sangat baik", "Baik", "Sangat kuat"],
        taurus: [82, "Baik", "Baik", "Cukup", "Sangat kuat"],
        virgo: [84, "Baik", "Baik", "Baik", "Kuat"],
        capricorn: [86, "Baik", "Baik", "Baik", "Sangat kuat"],
        leo: [75, "Baik", "Baik", "Cukup", "Sangat kuat"],
        aries: [72, "Baik", "Baik", "Cukup", "Sangat kuat"],
        libra: [68, "Baik", "Baik", "Cukup", "Kuat"],
        gemini: [58, "Cukup", "Baik", "Cukup", "Kuat"],
        sagittarius: [65, "Cukup", "Baik", "Cukup", "Kuat"],
        aquarius: [60, "Cukup", "Baik", "Cukup", "Baik"]
    },

    sagittarius: {
        aries: [92, "Sangat kuat", "Sangat baik", "Sangat baik", "Sangat kuat"],
        leo: [94, "Sangat kuat", "Sangat baik", "Sangat baik", "Sangat kuat"],
        libra: [82, "Baik", "Sangat baik", "Sangat baik", "Kuat"],
        aquarius: [88, "Baik", "Sangat baik", "Sangat baik", "Kuat"],
        gemini: [79, "Baik", "Sangat baik", "Sangat baik", "Kuat"],
        cancer: [55, "Cukup", "Baik", "Cukup", "Cukup"],
        virgo: [60, "Cukup", "Baik", "Cukup", "Baik"],
        taurus: [57, "Cukup", "Baik", "Cukup", "Baik"],
        scorpio: [65, "Cukup", "Baik", "Cukup", "Kuat"],
        capricorn: [70, "Baik", "Baik", "Baik", "Kuat"],
        pisces: [68, "Cukup", "Baik", "Cukup", "Baik"]
    },

    capricorn: {
        taurus: [94, "Sangat baik", "Sangat baik", "Sangat baik", "Sangat kuat"],
        virgo: [93, "Sangat baik", "Sangat baik", "Sangat baik", "Baik"],
        scorpio: [86, "Baik", "Baik", "Baik", "Sangat kuat"],
        cancer: [78, "Baik", "Baik", "Baik", "Kuat"],
        pisces: [80, "Baik", "Baik", "Baik", "Kuat"],
        libra: [64, "Cukup", "Baik", "Baik", "Cukup"],
        aries: [60, "Cukup", "Baik", "Cukup", "Baik"],
        leo: [62, "Cukup", "Baik", "Cukup", "Baik"],
        gemini: [55, "Cukup", "Baik", "Cukup", "Cukup"],
        sagittarius: [70, "Baik", "Baik", "Baik", "Kuat"],
        aquarius: [58, "Cukup", "Baik", "Baik", "Cukup"]
    },

    aquarius: {
        gemini: [94, "Sangat baik", "Sangat baik", "Sangat baik", "Kuat"],
        libra: [93, "Sangat baik", "Sangat baik", "Sangat baik", "Kuat"],
        sagittarius: [88, "Baik", "Sangat baik", "Sangat baik", "Kuat"],
        aries: [80, "Baik", "Sangat baik", "Baik", "Kuat"],
        leo: [80, "Baik", "Sangat baik", "Baik", "Sangat kuat"],
        libra: [93, "Sangat baik", "Sangat baik", "Sangat baik", "Kuat"],
        taurus: [52, "Cukup", "Baik", "Cukup", "Cukup"],
        cancer: [50, "Cukup", "Baik", "Cukup", "Cukup"],
        virgo: [58, "Cukup", "Baik", "Baik", "Cukup"],
        scorpio: [60, "Cukup", "Baik", "Cukup", "Baik"],
        capricorn: [58, "Cukup", "Baik", "Baik", "Cukup"],
        pisces: [65, "Cukup", "Baik", "Cukup", "Baik"]
    },

    pisces: {
        cancer: [95, "Sangat baik", "Sangat baik", "Baik", "Sangat kuat"],
        scorpio: [94, "Sangat kuat", "Sangat baik", "Baik", "Sangat kuat"],
        taurus: [84, "Sangat baik", "Baik", "Baik", "Kuat"],
        capricorn: [80, "Baik", "Baik", "Baik", "Kuat"],
        virgo: [76, "Baik", "Baik", "Cukup", "Kuat"],
        libra: [74, "Baik", "Baik", "Baik", "Kuat"],
        leo: [66, "Cukup", "Baik", "Cukup", "Baik"],
        aries: [63, "Cukup", "Baik", "Cukup", "Baik"],
        gemini: [64, "Cukup", "Baik", "Cukup", "Baik"],
        sagittarius: [68, "Cukup", "Baik", "Cukup", "Baik"],
        aquarius: [65, "Cukup", "Baik", "Cukup", "Baik"]
    }

};


// ========================================
// FUNGSI KECOCOKAN
// ========================================

function cariKecocokan() {

    const pertama = zodiacOne.value;
    const kedua = zodiacTwo.value;

    if (!pertama || !kedua) {

        alert("Silakan pilih dua zodiak terlebih dahulu.");

        return;
    }

    if (pertama === kedua) {

        tampilkanKecocokan(
            pertama,
            kedua,
            [85, "Baik", "Sangat baik", "Sangat baik", "Kuat"]
        );

        return;
    }

    let data = null;

    if (
        compatibilityData[pertama] &&
        compatibilityData[pertama][kedua]
    ) {

        data = compatibilityData[pertama][kedua];

    } else if (
        compatibilityData[kedua] &&
        compatibilityData[kedua][pertama]
    ) {

        data = compatibilityData[kedua][pertama];

    }

    if (!data) {

        alert("Data kecocokan belum tersedia.");

        return;
    }

    tampilkanKecocokan(
        pertama,
        kedua,
        data
    );
}


// ========================================
// TAMPILKAN HASIL
// ========================================

function tampilkanKecocokan(
    pertama,
    kedua,
    data
) {

    compatibilitySymbolOne.textContent =
        zodiacData[pertama].simbol;

    compatibilitySymbolTwo.textContent =
        zodiacData[kedua].simbol;

    compatibilityTitle.textContent =
        zodiacData[pertama].nama +
        " × " +
        zodiacData[kedua].nama;

    compatibilityScore.textContent =
        data[0] + "%";

    compatibilityLove.textContent =
        data[1];

    compatibilityFriendship.textContent =
        data[2];

    compatibilityCommunication.textContent =
        data[3];

    compatibilityChemistry.textContent =
        data[4];

    compatibilityDescription.textContent =
        buatDeskripsiKecocokan(
            pertama,
            kedua,
            data[0]
        );

    compatibilityResult.style.display =
        "block";

    compatibilityResult.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


// ========================================
// DESKRIPSI
// ========================================

function buatDeskripsiKecocokan(
    pertama,
    kedua,
    skor
) {

    if (skor >= 90) {

        return `Dalam astrologi, ${zodiacData[pertama].nama} dan ${zodiacData[kedua].nama} sering dianggap memiliki kecocokan yang kuat. Keduanya dapat memiliki energi yang saling melengkapi dan menciptakan hubungan yang menarik.`;

    }

    if (skor >= 75) {

        return `Dalam astrologi, ${zodiacData[pertama].nama} dan ${zodiacData[kedua].nama} memiliki banyak potensi untuk saling melengkapi. Perbedaan karakter dapat menjadi kekuatan jika keduanya mampu berkomunikasi dengan baik.`;

    }

    if (skor >= 60) {

        return `Dalam astrologi, ${zodiacData[pertama].nama} dan ${zodiacData[kedua].nama} memiliki kecocokan yang cukup baik. Hubungan dapat berkembang dengan komunikasi, pengertian, dan kemauan untuk memahami perbedaan.`;

    }

    return `Dalam astrologi, ${zodiacData[pertama].nama} dan ${zodiacData[kedua].nama} memiliki beberapa perbedaan karakter. Hal tersebut bukan berarti hubungan tidak dapat berjalan, tetapi membutuhkan komunikasi dan saling pengertian.`;
}


// ========================================
// EVENT
// ========================================

compatibilityButton.addEventListener(
    "click",
    cariKecocokan
);
