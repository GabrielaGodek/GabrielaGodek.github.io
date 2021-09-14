//input type="range"
const rangePln = document.querySelector(".rangePln");
const rangeMc = document.querySelector(".rangeMc");

const plnBox = document.querySelector(".pln-box");
const mcBox = document.querySelector(".mc-box");

const cookiesBtn = document.querySelector(".cookiesBtn");
const popUp = document.querySelector(".popUp");

// const plnBox = 50000;
// const mcBox = 15;

//pobranie wartosci dla kwoty z input range i przypisanie do boxa
rangePln.oninput = function() {
        plnBox.value = rangePln.value;
    }
    //pobranie wartosci dla miesiecy z input range i przypisanie do boxa
rangeMc.oninput = function() {
    mcBox.value = rangeMc.value;
}

//akceptacja plikow cookies
function cookies() {
    cookiesBtn.addEventListener("click", function() {
        popUp.style.visibility = "hidden";
    })
}