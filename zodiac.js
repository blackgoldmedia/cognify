/* =================================
   COGNIFY — ZODIAC
================================= */

const zodiacButton =
    document.getElementById("zodiacButton");

const birthDay =
    document.getElementById("birthDay");

const birthMonth =
    document.getElementById("birthMonth");

const zodiacResult =
    document.getElementById("zodiacResult");

const zodiacSymbol =
    document.getElementById("zodiacSymbol");

const zodiacName =
    document.getElementById("zodiacName");

const zodiacDate =
    document.getElementById("zodiacDate");

const zodiacElement =
    document.getElementById("zodiacElement");

const zodiacPlanet =
    document.getElementById("zodiacPlanet");

const zodiacQuality =
    document.getElementById("zodiacQuality");

const zodiacDescription =
    document.getElementById("zodiacDescription");
const zodiacStrength =
    document.getElementById("zodiacStrength");

const zodiacChallenge =
    document.getElementById("zodiacChallenge");

const zodiacLove =
    document.getElementById("zodiacLove");

const zodiacCareer =
    document.getElementById("zodiacCareer");

const zodiacLuckyNumber =
    document.getElementById("zodiacLuckyNumber");


/* =================================
   TOMBOL ZODIAK
================================= */

zodiacButton.addEventListener(
    "click",
    cariZodiak
);


/* =================================
   MENENTUKAN ZODIAK
================================= */

function cariZodiak() {

    const hari =
        Number(birthDay.value);

    const bulan =
        Number(birthMonth.value);


    if (
        !hari ||
        !bulan ||
        hari < 1 ||
        hari > 31
    ) {

        alert(
            "Silakan masukkan tanggal lahir yang valid."
        );

        return;
    }


    let zodiak;


    /* ARIES */

    if (
        (bulan === 3 && hari >= 21) ||
        (bulan === 4 && hari <= 19)
    ) {

        zodiak = {

            simbol: "♈",

            nama: "Aries",

            tanggal:
                "21 Maret – 19 April",

            elemen:
                "Api",

            planet:
                "Mars",

            kualitas:
                "Kardinal",

            deskripsi:
                "Aries secara tradisional dikaitkan dengan keberanian, energi, inisiatif, dan semangat untuk memulai sesuatu.",

            kelebihan:
                "Berani, energik, percaya diri",

            tantangan:
                "Impulsif, mudah terburu-buru",

            cinta:
                "Romantis, bersemangat, dan terus terang",

            karier:
                "Kepemimpinan, bisnis, olahraga, dan bidang yang membutuhkan keberanian",

            angka:
                "1, 9, 18"

        };


    /* TAURUS */

    } else if (
        (bulan === 4 && hari >= 20) ||
        (bulan === 5 && hari <= 20)
    ) {

        zodiak = {

            simbol: "♉",

            nama: "Taurus",

            tanggal:
                "20 April – 20 Mei",

            elemen:
                "Bumi",

            planet:
                "Venus",

            kualitas:
                "Tetap",

            deskripsi:
                "Taurus secara tradisional dikaitkan dengan kestabilan, kesabaran, ketekunan, dan kecintaan terhadap kenyamanan.",

            kelebihan:
                "Sabar, setia, stabil",

            tantangan:
                "Keras kepala, sulit menerima perubahan",

            cinta:
                "Setia, perhatian, dan menghargai hubungan yang stabil",

            karier:
                "Keuangan, bisnis, seni, desain, dan pekerjaan yang membutuhkan ketekunan",

            angka:
                "2, 6, 15"

        };


    /* GEMINI */

    } else if (
        (bulan === 5 && hari >= 21) ||
        (bulan === 6 && hari <= 20)
    ) {

        zodiak = {

            simbol: "♊",

            nama: "Gemini",

            tanggal:
                "21 Mei – 20 Juni",

            elemen:
                "Udara",

            planet:
                "Merkurius",

            kualitas:
                "Berubah",

            deskripsi:
                "Gemini secara tradisional dikaitkan dengan rasa ingin tahu, komunikasi, kemampuan beradaptasi, dan ketertarikan terhadap berbagai ide.",

            kelebihan:
                "Komunikatif, cepat belajar, fleksibel",

            tantangan:
                "Mudah bosan, sulit fokus",

            cinta:
                "Menyukai komunikasi dan hubungan yang penuh variasi",

            karier:
                "Komunikasi, media, pendidikan, teknologi, dan pekerjaan kreatif",

            angka:
                "3, 5, 14"

        };


    /* CANCER */

    } else if (
        (bulan === 6 && hari >= 21) ||
        (bulan === 7 && hari <= 22)
    ) {

        zodiak = {

            simbol: "♋",

            nama: "Cancer",

            tanggal:
                "21 Juni – 22 Juli",

            elemen:
                "Air",

            planet:
                "Bulan",

            kualitas:
                "Kardinal",

            deskripsi:
                "Cancer secara tradisional dikaitkan dengan kepedulian, intuisi, kepekaan emosional, dan hubungan yang kuat dengan keluarga.",

            kelebihan:
                "Peduli, intuitif, penyayang",

            tantangan:
                "Sensitif, mudah terbawa perasaan",

            cinta:
                "Penuh perhatian dan menghargai kedekatan emosional",

            karier:
                "Pendidikan, pelayanan, psikologi, kuliner, dan pekerjaan yang berhubungan dengan manusia",

            angka:
                "2, 7, 11"

        };


    /* LEO */

    } else if (
        (bulan === 7 && hari >= 23) ||
        (bulan === 8 && hari <= 22)
    ) {

        zodiak = {

            simbol: "♌",

            nama: "Leo",

            tanggal:
                "23 Juli – 22 Agustus",

            elemen:
                "Api",

            planet:
                "Matahari",

            kualitas:
                "Tetap",

            deskripsi:
                "Leo secara tradisional dikaitkan dengan kepercayaan diri, kreativitas, kehangatan, dan ekspresi diri.",

            kelebihan:
                "Percaya diri, kreatif, berani",

            tantangan:
                "Ego tinggi, keras kepala",

            cinta:
                "Hangat, romantis, dan loyal",

            karier:
                "Kepemimpinan, hiburan, bisnis, seni, dan pekerjaan kreatif",

            angka:
                "1, 5, 19"

        };


    /* VIRGO */

    } else if (
        (bulan === 8 && hari >= 23) ||
        (bulan === 9 && hari <= 22)
    ) {

        zodiak = {

            simbol: "♍",

            nama: "Virgo",

            tanggal:
                "23 Agustus – 22 September",

            elemen:
                "Bumi",

            planet:
                "Merkurius",

            kualitas:
                "Berubah",

            deskripsi:
                "Virgo secara tradisional dikaitkan dengan ketelitian, keteraturan, analisis, dan pendekatan praktis.",

            kelebihan:
                "Teliti, terorganisir, analitis",

            tantangan:
                "Terlalu kritis, perfeksionis",

            cinta:
                "Serius, perhatian, dan menunjukkan kasih sayang melalui tindakan",

            karier:
                "Analisis, kesehatan, teknologi, penelitian, dan administrasi",

            angka:
                "5, 14, 23"

        };


    /* LIBRA */

    } else if (
        (bulan === 9 && hari >= 23) ||
        (bulan === 10 && hari <= 22)
    ) {

        zodiak = {

            simbol: "♎",

            nama: "Libra",

            tanggal:
                "23 September – 22 Oktober",

            elemen:
                "Udara",

            planet:
                "Venus",

            kualitas:
                "Kardinal",

            deskripsi:
                "Libra secara tradisional dikaitkan dengan keseimbangan, kerja sama, diplomasi, dan penghargaan terhadap keharmonisan.",

            kelebihan:
                "Diplomatis, ramah, adil",

            tantangan:
                "Sulit mengambil keputusan, terlalu mempertimbangkan pendapat orang lain",

            cinta:
                "Romantis dan menghargai hubungan yang harmonis",

            karier:
                "Hukum, diplomasi, desain, seni, dan hubungan masyarakat",

            angka:
                "6, 15, 24"

        };


    /* SCORPIO */

    } else if (
        (bulan === 10 && hari >= 23) ||
        (bulan === 11 && hari <= 21)
    ) {

        zodiak = {

            simbol: "♏",

            nama: "Scorpio",

            tanggal:
                "23 Oktober – 21 November",

            elemen:
                "Air",

            planet:
                "Pluto",

            kualitas:
                "Tetap",

            deskripsi:
                "Scorpio secara tradisional dikaitkan dengan intensitas, keteguhan, privasi, dan kedalaman emosional.",

            kelebihan:
                "Fokus, berani, loyal",

            tantangan:
                "Mudah curiga, posesif",

            cinta:
                "Intens, setia, dan menghargai kedalaman hubungan",

            karier:
                "Penelitian, psikologi, investigasi, teknologi, dan bidang yang membutuhkan ketelitian",

            angka:
                "8, 11, 22"

        };


    /* SAGITTARIUS */

    } else if (
        (bulan === 11 && hari >= 22) ||
        (bulan === 12 && hari <= 21)
    ) {

        zodiak = {

            simbol: "♐",

            nama: "Sagitarius",

            tanggal:
                "22 November – 21 Desember",

            elemen:
                "Api",

            planet:
                "Jupiter",

            kualitas:
                "Berubah",

            deskripsi:
                "Sagitarius secara tradisional dikaitkan dengan petualangan, optimisme, kebebasan, dan kecintaan terhadap pengetahuan.",

            kelebihan:
                "Optimis, terbuka, suka belajar",

            tantangan:
                "Kurang sabar, terlalu terus terang",

            cinta:
                "Menyukai kebebasan dan hubungan yang penuh petualangan",

            karier:
                "Pendidikan, perjalanan, media, olahraga, dan pekerjaan internasional",

            angka:
                "3, 9, 21"

        };


    /* CAPRICORN */

    } else if (
        (bulan === 12 && hari >= 22) ||
        (bulan === 1 && hari <= 19)
    ) {

        zodiak = {

            simbol: "♑",

            nama: "Capricorn",

            tanggal:
                "22 Desember – 19 Januari",

            elemen:
                "Bumi",

            planet:
                "Saturnus",

            kualitas:
                "Kardinal",

            deskripsi:
                "Capricorn secara tradisional dikaitkan dengan disiplin, ambisi, tanggung jawab, dan ketekunan.",

            kelebihan:
                "Disiplin, bertanggung jawab, tekun",

            tantangan:
                "Terlalu serius, sulit bersantai",

            cinta:
                "Serius, setia, dan mencari hubungan yang stabil",

            karier:
                "Manajemen, bisnis, keuangan, pemerintahan, dan bidang profesional",

            angka:
                "4, 8, 22"

        };


    /* AQUARIUS */

    } else if (
        (bulan === 1 && hari >= 20) ||
        (bulan === 2 && hari <= 18)
    ) {

        zodiak = {

            simbol: "♒",

            nama: "Aquarius",

            tanggal:
                "20 Januari – 18 Februari",

            elemen:
                "Udara",

            planet:
                "Uranus",

            kualitas:
                "Tetap",

            deskripsi:
                "Aquarius secara tradisional dikaitkan dengan kemandirian, orisinalitas, ide-ide baru, dan ketertarikan terhadap inovasi.",

            kelebihan:
                "Kreatif, mandiri, inovatif",

            tantangan:
                "Sulit ditebak, terlalu independen",

            cinta:
                "Menghargai kebebasan, persahabatan, dan hubungan intelektual",

            karier:
                "Teknologi, penelitian, inovasi, sosial, dan bidang kreatif",

            angka:
                "4, 7, 11"

        };


    /* PISCES */

    } else {

        zodiak = {

            simbol: "♓",

            nama: "Pisces",

            tanggal:
                "19 Februari – 20 Maret",

            elemen:
                "Air",

            planet:
                "Neptunus",

            kualitas:
                "Berubah",

            deskripsi:
                "Pisces secara tradisional dikaitkan dengan imajinasi, empati, intuisi, dan kreativitas.",

            kelebihan:
                "Empati, kreatif, intuitif",

            tantangan:
                "Mudah terbawa perasaan, sulit menentukan batas",

            cinta:
                "Romantis, penuh perhatian, dan emosional",

            karier:
                "Seni, musik, psikologi, pelayanan, dan pekerjaan kreatif",

            angka:
                "3, 7, 12"

        };

    }


    tampilkanZodiak(zodiak);

}


/* =================================
   MENAMPILKAN HASIL
================================= */

function tampilkanZodiak(zodiak) {

    zodiacSymbol.textContent =
        zodiak.simbol;

    zodiacName.textContent =
        zodiak.nama;

    zodiacDate.textContent =
        zodiak.tanggal;

    zodiacElement.textContent =
        zodiak.elemen;

    zodiacPlanet.textContent =
        zodiak.planet;

    zodiacQuality.textContent =
        zodiak.kualitas;

    zodiacDescription.textContent =
        zodiak.deskripsi;


    zodiacResult.style.display =
        "block";


    zodiacResult.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

           }
