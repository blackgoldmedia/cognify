// ========================================
// COGNIFY - ZODIAC DAILY
// ========================================

const dailyZodiac =
    document.getElementById("dailyZodiac");

const dailyZodiacButton =
    document.getElementById("dailyZodiacButton");

const dailyZodiacResult =
    document.getElementById("dailyZodiacResult");

const dailySymbol =
    document.getElementById("dailySymbol");

const dailyName =
    document.getElementById("dailyName");

const dailyMessage =
    document.getElementById("dailyMessage");

const dailyLove =
    document.getElementById("dailyLove");

const dailyCareer =
    document.getElementById("dailyCareer");

const dailyMoney =
    document.getElementById("dailyMoney");

const dailyEnergy =
    document.getElementById("dailyEnergy");

const dailyColor =
    document.getElementById("dailyColor");

const dailyNumber =
    document.getElementById("dailyNumber");


// ========================================
// DATA ZODIAK HARIAN
// ========================================

const dailyData = {

    aries: {
        nama: "Aries",
        simbol: "♈",
        pesan: "Hari ini adalah waktu yang baik untuk bergerak maju. Jangan terlalu lama menunggu kesempatan datang.",
        cinta: "Komunikasi yang jujur dapat membuat hubungan terasa lebih dekat.",
        karier: "Fokus pada satu tujuan utama agar energimu tidak terbagi.",
        keuangan: "Hindari keputusan pembelian yang dilakukan secara impulsif.",
        energi: "Tinggi",
        warna: "Merah",
        angka: "9"
    },

    taurus: {
        nama: "Taurus",
        simbol: "♉",
        pesan: "Kesabaranmu dapat menjadi kekuatan hari ini. Tidak semua hal harus diselesaikan dengan terburu-buru.",
        cinta: "Berikan perhatian kecil kepada orang yang penting bagimu.",
        karier: "Konsistensi akan membantu menyelesaikan pekerjaan yang tertunda.",
        keuangan: "Waktu yang tepat untuk meninjau kembali pengeluaran.",
        energi: "Stabil",
        warna: "Hijau",
        angka: "6"
    },

    gemini: {
        nama: "Gemini",
        simbol: "♊",
        pesan: "Ide baru dapat muncul dari percakapan sederhana. Dengarkan orang lain sebelum mengambil keputusan.",
        cinta: "Percakapan ringan dapat berkembang menjadi hubungan yang lebih dekat.",
        karier: "Manfaatkan kemampuan komunikasi dan kreativitasmu.",
        keuangan: "Pertimbangkan kembali sebelum mengikuti tawaran yang terlalu menarik.",
        energi: "Aktif",
        warna: "Kuning",
        angka: "5"
    },

    cancer: {
        nama: "Cancer",
        simbol: "♋",
        pesan: "Hari ini cocok untuk memperhatikan kebutuhan dirimu sendiri tanpa melupakan orang-orang di sekitarmu.",
        cinta: "Kejujuran emosional dapat membuat hubungan menjadi lebih hangat.",
        karier: "Kerjakan tugas dengan tenang dan jangan terlalu memikirkan komentar orang lain.",
        keuangan: "Prioritaskan kebutuhan daripada keinginan sesaat.",
        energi: "Tenang",
        warna: "Putih",
        angka: "2"
    },

    leo: {
        nama: "Leo",
        simbol: "♌",
        pesan: "Kepercayaan diri dapat membantumu mengambil langkah yang selama ini kamu tunda.",
        cinta: "Berikan ruang bagi pasangan untuk menyampaikan pendapatnya.",
        karier: "Hari yang baik untuk menunjukkan ide dan kemampuanmu.",
        keuangan: "Tetap percaya diri tetapi jangan mengabaikan perencanaan.",
        energi: "Tinggi",
        warna: "Emas",
        angka: "1"
    },

    virgo: {
        nama: "Virgo",
        simbol: "♍",
        pesan: "Tidak semua hal harus sempurna. Terkadang menyelesaikan sesuatu lebih penting daripada terus memperbaikinya.",
        cinta: "Jangan terlalu banyak menganalisis perasaan orang lain.",
        karier: "Detail dan ketelitianmu dapat membantu menemukan kesalahan kecil.",
        keuangan: "Cocok untuk membuat rencana pengeluaran yang lebih teratur.",
        energi: "Stabil",
        warna: "Cokelat",
        angka: "4"
    },

    libra: {
        nama: "Libra",
        simbol: "♎",
        pesan: "Hari ini kamu mungkin perlu membuat keputusan. Percayalah pada pertimbanganmu sendiri.",
        cinta: "Keseimbangan antara memberi dan menerima sangat penting.",
        karier: "Kerja sama dengan orang lain dapat menghasilkan solusi yang lebih baik.",
        keuangan: "Jaga keseimbangan antara menikmati hidup dan menabung.",
        energi: "Seimbang",
        warna: "Biru",
        angka: "7"
    },

    scorpio: {
        nama: "Scorpio",
        simbol: "♏",
        pesan: "Intuisimu mungkin terasa kuat hari ini, tetapi tetap gunakan fakta sebelum mengambil keputusan.",
        cinta: "Hubungan dapat menjadi lebih dalam ketika kepercayaan dibangun secara perlahan.",
        karier: "Fokus pada tujuan dan hindari terlalu banyak mengungkapkan rencana.",
        keuangan: "Periksa detail sebelum melakukan transaksi penting.",
        energi: "Intens",
        warna: "Hitam",
        angka: "8"
    },

    sagittarius: {
        nama: "Sagitarius",
        simbol: "♐",
        pesan: "Rasa ingin tahu dapat membawamu menemukan sesuatu yang menarik hari ini.",
        cinta: "Hubungan terasa lebih menyenangkan ketika ada ruang untuk menjadi diri sendiri.",
        karier: "Jangan takut mencoba pendekatan baru terhadap masalah lama.",
        keuangan: "Hindari pengeluaran spontan yang berkaitan dengan kesenangan.",
        energi: "Tinggi",
        warna: "Ungu",
        angka: "3"
    },

    capricorn: {
        nama: "Capricorn",
        simbol: "♑",
        pesan: "Langkah kecil yang konsisten tetap membawa kamu lebih dekat kepada tujuan.",
        cinta: "Tunjukkan perasaan melalui tindakan sederhana.",
        karier: "Disiplin dan perencanaan menjadi kekuatan utama hari ini.",
        keuangan: "Hari yang baik untuk memikirkan tujuan keuangan jangka panjang.",
        energi: "Stabil",
        warna: "Abu-abu",
        angka: "10"
    },

    aquarius: {
        nama: "Aquarius",
        simbol: "♒",
        pesan: "Ide yang berbeda tidak selalu berarti salah. Berikan kesempatan kepada pemikiran baru.",
        cinta: "Komunikasi terbuka dapat mencegah kesalahpahaman.",
        karier: "Kreativitasmu dapat membantu menemukan solusi yang tidak biasa.",
        keuangan: "Jangan terlalu mudah mengikuti tren.",
        energi: "Aktif",
        warna: "Biru muda",
        angka: "11"
    },

    pisces: {
        nama: "Pisces",
        simbol: "♓",
        pesan: "Gunakan imajinasi sebagai sumber inspirasi, tetapi tetap pijakkan keputusan pada kenyataan.",
        cinta: "Perhatian kecil dapat memberikan dampak besar pada hubungan.",
        karier: "Percayai kreativitasmu ketika menghadapi pekerjaan yang membutuhkan ide.",
        keuangan: "Hindari membuat keputusan finansial hanya berdasarkan perasaan.",
        energi: "Tenang",
        warna: "Hijau laut",
        angka: "7"
    }

};


// ========================================
// TAMPILKAN ZODIAK HARIAN
// ========================================

function tampilkanZodiakHarian() {

    const pilihan = dailyZodiac.value;

    if (!pilihan) {

        alert("Silakan pilih zodiak terlebih dahulu.");

        return;
    }

    const data = dailyData[pilihan];

    dailySymbol.textContent =
        data.simbol;

    dailyName.textContent =
        data.nama;

    dailyMessage.textContent =
        data.pesan;

    dailyLove.textContent =
        data.cinta;

    dailyCareer.textContent =
        data.karier;

    dailyMoney.textContent =
        data.keuangan;

    dailyEnergy.textContent =
        data.energi;

    dailyColor.textContent =
        data.warna;

    dailyNumber.textContent =
        data.angka;

    dailyZodiacResult.style.display =
        "block";

    dailyZodiacResult.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


// ========================================
// EVENT
// ========================================

dailyZodiacButton.addEventListener(
    "click",
    tampilkanZodiakHarian
);

// ========================================
// GUNAKAN ZODIAK SAYA
// ========================================

const useMyZodiac =
    document.getElementById("useMyZodiac");

useMyZodiac.addEventListener(
    "click",
    function () {

        const namaZodiak =
            document
                .getElementById("zodiacName")
                .textContent
                .trim();

        const mappingZodiak = {

            "Aries": "aries",
            "Taurus": "taurus",
            "Gemini": "gemini",
            "Cancer": "cancer",
            "Leo": "leo",
            "Virgo": "virgo",
            "Libra": "libra",
            "Scorpio": "scorpio",
            "Sagitarius": "sagittarius",
            "Capricorn": "capricorn",
            "Aquarius": "aquarius",
            "Pisces": "pisces"

        };

        const kodeZodiak =
            mappingZodiak[namaZodiak];

        if (!kodeZodiak) {

            alert(
                "Silakan cari zodiak berdasarkan tanggal lahir terlebih dahulu."
            );

            return;
        }

        dailyZodiac.value =
            kodeZodiak;

        tampilkanZodiakHarian();

    }
);
