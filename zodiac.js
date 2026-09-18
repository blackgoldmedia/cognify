/* ================================
   COGNIFY — ZODIAC
================================ */

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


zodiacButton.addEventListener(
    "click",
    findZodiac
);


function findZodiac() {

    const day =
        Number(birthDay.value);

    const month =
        Number(birthMonth.value);


    if (
        !day ||
        !month ||
        day < 1 ||
        day > 31
    ) {

        alert(
            "Please enter a valid birth date."
        );

        return;
    }


    let zodiac;


    if (
        (month === 3 && day >= 21) ||
        (month === 4 && day <= 19)
    ) {

        zodiac = {
            symbol: "♈",
            name: "Aries",
            date: "March 21 – April 19",
            element: "Fire",
            planet: "Mars",
            quality: "Cardinal",
            description:
                "Aries is traditionally associated with energy, initiative, confidence, and a willingness to take action."
        };

    }

    else if (
        (month === 4 && day >= 20) ||
        (month === 5 && day <= 20)
    ) {

        zodiac = {
            symbol: "♉",
            name: "Taurus",
            date: "April 20 – May 20",
            element: "Earth",
            planet: "Venus",
            quality: "Fixed",
            description:
                "Taurus is traditionally associated with stability, patience, determination, and appreciation of comfort."
        };

    }

    else if (
        (month === 5 && day >= 21) ||
        (month === 6 && day <= 20)
    ) {

        zodiac = {
            symbol: "♊",
            name: "Gemini",
            date: "May 21 – June 20",
            element: "Air",
            planet: "Mercury",
            quality: "Mutable",
            description:
                "Gemini is traditionally associated with curiosity, communication, adaptability, and intellectual exploration."
        };

    }

    else if (
        (month === 6 && day >= 21) ||
        (month === 7 && day <= 22)
    ) {

        zodiac = {
            symbol: "♋",
            name: "Cancer",
            date: "June 21 – July 22",
            element: "Water",
            planet: "Moon",
            quality: "Cardinal",
            description:
                "Cancer is traditionally associated with emotional sensitivity, care, intuition, and strong connections with others."
        };

    }

    else if (
        (month === 7 && day >= 23) ||
        (month === 8 && day <= 22)
    ) {

        zodiac = {
            symbol: "♌",
            name: "Leo",
            date: "July 23 – August 22",
            element: "Fire",
            planet: "Sun",
            quality: "Fixed",
            description:
                "Leo is traditionally associated with confidence, creativity, warmth, and self-expression."
        };

    }

    else if (
        (month === 8 && day >= 23) ||
        (month === 9 && day <= 22)
    ) {

        zodiac = {
            symbol: "♍",
            name: "Virgo",
            date: "August 23 – September 22",
            element: "Earth",
            planet: "Mercury",
            quality: "Mutable",
            description:
                "Virgo is traditionally associated with organization, attention to detail, practicality, and analysis."
        };

    }

    else if (
        (month === 9 && day >= 23) ||
        (month === 10 && day <= 22)
    ) {

        zodiac = {
            symbol: "♎",
            name: "Libra",
            date: "September 23 – October 22",
            element: "Air",
            planet: "Venus",
            quality: "Cardinal",
            description:
                "Libra is traditionally associated with balance, cooperation, diplomacy, and appreciation of harmony."
        };

    }

    else if (
        (month === 10 && day >= 23) ||
        (month === 11 && day <= 21)
    ) {

        zodiac = {
            symbol: "♏",
            name: "Scorpio",
            date: "October 23 – November 21",
            element: "Water",
            planet: "Pluto",
            quality: "Fixed",
            description:
                "Scorpio is traditionally associated with intensity, determination, privacy, and emotional depth."
        };

    }

    else if (
        (month === 11 && day >= 22) ||
        (month === 12 && day <= 21)
    ) {

        zodiac = {
            symbol: "♐",
            name: "Sagittarius",
            date: "November 22 – December 21",
            element: "Fire",
            planet: "Jupiter",
            quality: "Mutable",
            description:
                "Sagittarius is traditionally associated with exploration, optimism, independence, and love of learning."
        };

    }

    else if (
        (month === 12 && day >= 22) ||
        (month === 1 && day <= 19)
    ) {

        zodiac = {
            symbol: "♑",
            name: "Capricorn",
            date: "December 22 – January 19",
            element: "Earth",
            planet: "Saturn",
            quality: "Cardinal",
            description:
                "Capricorn is traditionally associated with discipline, ambition, responsibility, and persistence."
        };

    }

    else if (
        (month === 1 && day >= 20) ||
        (month === 2 && day <= 18)
    ) {

        zodiac = {
            symbol: "♒",
            name: "Aquarius",
            date: "January 20 – February 18",
            element: "Air",
            planet: "Uranus",
            quality: "Fixed",
            description:
                "Aquarius is traditionally associated with independence, originality, ideas, and interest in innovation."
        };

    }

    else {

        zodiac = {
            symbol: "♓",
            name: "Pisces",
            date: "February 19 – March 20",
            element: "Water",
            planet: "Neptune",
            quality: "Mutable",
            description:
                "Pisces is traditionally associated with imagination, empathy, intuition, and creativity."
        };

    }


    showZodiacResult(zodiac);

}


function showZodiacResult(zodiac) {

    zodiacSymbol.textContent =
        zodiac.symbol;

    zodiacName.textContent =
        zodiac.name;

    zodiacDate.textContent =
        zodiac.date;

    zodiacElement.textContent =
        zodiac.element;

    zodiacPlanet.textContent =
        zodiac.planet;

    zodiacQuality.textContent =
        zodiac.quality;

    zodiacDescription.textContent =
        zodiac.description;

    zodiacResult.style.display =
        "block";

    zodiacResult.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}
