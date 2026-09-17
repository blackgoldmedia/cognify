// =========================
// COGNIFY JAVASCRIPT
// =========================


// MOBILE MENU

const menuBtn = document.getElementById("menuBtn");
const navigation = document.getElementById("navigation");

menuBtn.addEventListener("click", function () {

    navigation.classList.toggle("active");

});


// CLOSE MENU AFTER CLICKING LINK

const navigationLinks = document.querySelectorAll(".navigation a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navigation.classList.remove("active");

    });

});


// TEST BUTTON

const testButtons = document.querySelectorAll(".test-card button");

testButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        alert("Test Cognify akan segera tersedia!");

    });

});
