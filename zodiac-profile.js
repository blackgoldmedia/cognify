// ========================================
// COGNIFY - ZODIAC PROFILE
// ========================================

const profileElement =
    document.getElementById("profileElement");

const profileElementDescription =
    document.getElementById("profileElementDescription");

const profilePlanet =
    document.getElementById("profilePlanet");

const profilePlanetDescription =
    document.getElementById("profilePlanetDescription");

const profileQuality =
    document.getElementById("profileQuality");

const profileQualityDescription =
    document.getElementById("profileQualityDescription");

const profileColor =
    document.getElementById("profileColor");

const profileNumber =
    document.getElementById("profileNumber");

const profileSymbol =
    document.getElementById("profileSymbol");

const profileSymbolDescription =
    document.getElementById("profileSymbolDescription");


// ========================================
// DATA PROFIL
// ========================================

const profileData = {

    Aries: {
        elemen: "Api",
        elemenDeskripsi: "Melambangkan energi, keberanian, dan semangat.",
        planet: "Mars",
        planetDeskripsi: "Secara tradisional dikaitkan dengan energi dan keberanian.",
        kualitas: "Kardinal",
        kualitasDeskripsi: "Sering dikaitkan dengan inisiatif dan keinginan untuk memulai.",
        warna: "Merah",
        angka: "1, 9",
        simbolDeskripsi: "Domba jantan."
    },

    Taurus: {
        elemen: "Tanah",
        elemenDeskripsi: "Melambangkan kestabilan, kenyamanan, dan keteguhan.",
        planet: "Venus",
        planetDeskripsi: "Secara tradisional dikaitkan dengan keindahan dan kenyamanan.",
        kualitas: "Tetap",
        kualitasDeskripsi: "Sering dikaitkan dengan konsistensi dan ketekunan.",
        warna: "Hijau",
        angka: "2, 6",
        simbolDeskripsi: "Banteng."
    },

    Gemini: {
        elemen: "Udara",
        elemenDeskripsi: "Melambangkan komunikasi, ide, dan pertukaran informasi.",
        planet: "Merkurius",
        planetDeskripsi: "Secara tradisional dikaitkan dengan komunikasi dan pemikiran.",
        kualitas: "Mutable",
        kualitasDeskripsi: "Sering dikaitkan dengan kemampuan beradaptasi.",
        warna: "Kuning",
        angka: "3, 5",
        simbolDeskripsi: "Si kembar."
    },

    Cancer: {
        elemen: "Air",
        elemenDeskripsi: "Melambangkan emosi, intuisi, dan kepekaan.",
        planet: "Bulan",
        planetDeskripsi: "Secara tradisional dikaitkan dengan emosi dan kehidupan batin.",
        kualitas: "Kardinal",
        kualitasDeskripsi: "Sering dikaitkan dengan inisiatif dan kepedulian.",
        warna: "Putih",
        angka: "2, 7",
        simbolDeskripsi: "Kepiting."
    },

    Leo: {
        elemen: "Api",
        elemenDeskripsi: "Melambangkan energi, ekspresi, dan kepercayaan diri.",
        planet: "Matahari",
        planetDeskripsi: "Secara tradisional dikaitkan dengan vitalitas dan ekspresi diri.",
        kualitas: "Tetap",
        kualitasDeskripsi: "Sering dikaitkan dengan keteguhan dan konsistensi.",
        warna: "Emas",
        angka: "1, 5",
        simbolDeskripsi: "Singa."
    },

    Virgo: {
        elemen: "Tanah",
        elemenDeskripsi: "Melambangkan ketelitian, kestabilan, dan praktis.",
        planet: "Merkurius",
        planetDeskripsi: "Secara tradisional dikaitkan dengan analisis dan komunikasi.",
        kualitas: "Mutable",
        kualitasDeskripsi: "Sering dikaitkan dengan kemampuan menyesuaikan diri.",
        warna: "Hijau",
        angka: "5, 6",
        simbolDeskripsi: "Gadis atau figur perempuan."
    },

    Libra: {
        elemen: "Udara",
        elemenDeskripsi: "Melambangkan hubungan, komunikasi, dan keseimbangan.",
        planet: "Venus",
        planetDeskripsi: "Secara tradisional dikaitkan dengan harmoni dan keindahan.",
        kualitas: "Kardinal",
        kualitasDeskripsi: "Sering dikaitkan dengan inisiatif dalam hubungan dan keputusan.",
        warna: "Biru",
        angka: "6, 7",
        simbolDeskripsi: "Timbangan."
    },

    Scorpio: {
        elemen: "Air",
        elemenDeskripsi: "Melambangkan kedalaman emosi, intuisi, dan transformasi.",
        planet: "Mars & Pluto",
        planetDeskripsi: "Dalam astrologi modern, Scorpio sering dikaitkan dengan Mars dan Pluto.",
        kualitas: "Tetap",
        kualitasDeskripsi: "Sering dikaitkan dengan keteguhan dan intensitas.",
        warna: "Hitam",
        angka: "8, 9",
        simbolDeskripsi: "Kalajengking."
    },

    Sagitarius: {
        elemen: "Api",
        elemenDeskripsi: "Melambangkan semangat, eksplorasi, dan kebebasan.",
        planet: "Jupiter",
        planetDeskripsi: "Secara tradisional dikaitkan dengan ekspansi dan pencarian pengetahuan.",
        kualitas: "Mutable",
        kualitasDeskripsi: "Sering dikaitkan dengan fleksibilitas dan eksplorasi.",
        warna: "Ungu",
        angka: "3, 9",
        simbolDeskripsi: "Pemanah."
    },

    Capricorn: {
        elemen: "Tanah",
        elemenDeskripsi: "Melambangkan struktur, disiplin, dan kestabilan.",
        planet: "Saturnus",
        planetDeskripsi: "Secara tradisional dikaitkan dengan disiplin dan struktur.",
        kualitas: "Kardinal",
        kualitasDeskripsi: "Sering dikaitkan dengan ambisi dan kemampuan memulai.",
        warna: "Abu-abu",
        angka: "4, 8",
        simbolDeskripsi: "Kambing laut."
    },

    Aquarius: {
        elemen: "Udara",
        elemenDeskripsi: "Melambangkan ide, pemikiran, dan inovasi.",
        planet: "Saturnus & Uranus",
        planetDeskripsi: "Dalam astrologi modern, Aquarius sering dikaitkan dengan Saturnus dan Uranus.",
        kualitas: "Tetap",
        kualitasDeskripsi: "Sering dikaitkan dengan keteguhan terhadap gagasan.",
        warna: "Biru",
        angka: "4, 11",
        simbolDeskripsi: "Pembawa air."
    },

    Pisces: {
        elemen: "Air",
        elemenDeskripsi: "Melambangkan imajinasi, emosi, dan intuisi.",
        planet: "Jupiter & Neptunus",
        planetDeskripsi: "Dalam astrologi modern, Pisces sering dikaitkan dengan Jupiter dan Neptunus.",
        kualitas: "Mutable",
        kualitasDeskripsi: "Sering dikaitkan dengan fleksibilitas dan kemampuan beradaptasi.",
        warna: "Hijau laut",
        angka: "3, 7",
        simbolDeskripsi: "Dua ikan."
    }

};


// ========================================
// UPDATE PROFIL
// ========================================

function updateZodiacProfile(namaZodiak) {

    const data = profileData[namaZodiak];

    if (!data) {
        return;
    }

    profileElement.textContent =
        data.elemen;

    profileElementDescription.textContent =
        data.elemenDeskripsi;

    profilePlanet.textContent =
        data.planet;

    profilePlanetDescription.textContent =
        data.planetDeskripsi;

    profileQuality.textContent =
        data.kualitas;

    profileQualityDescription.textContent =
        data.kualitasDeskripsi;

    profileColor.textContent =
        data.warna;

    profileNumber.textContent =
        data.angka;

    profileSymbol.textContent =
        document.getElementById("zodiacSymbol").textContent;

    profileSymbolDescription.textContent =
        data.simbolDeskripsi;
}
