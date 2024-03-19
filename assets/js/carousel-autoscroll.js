/*let defaultTransform = 0;
const transitionInterval = 3000; // Set the interval in milliseconds (e.g., 2000 for 2 seconds)

function goNext() {
    defaultTransform = defaultTransform - 398;
    const slider = document.getElementById("slider");
    if (Math.abs(defaultTransform) >= slider.scrollWidth / 1.7) defaultTransform = 0;
    slider.style.transform = "translateX(" + defaultTransform + "px)";
}

function goPrev() {
    const slider = document.getElementById("slider");
    if (Math.abs(defaultTransform) === 0) defaultTransform = 0;
    else defaultTransform = defaultTransform + 398;
    slider.style.transform = "translateX(" + defaultTransform + "px)";
}

const next = document.getElementById("next");
const prev = document.getElementById("prev");

next.addEventListener("click", goNext);
prev.addEventListener("click", goPrev);

// Auto transition
setInterval(goNext, transitionInterval);*/

let defaultTransform = 0;
let touchStartX = 0;
let touchMoveX = 0;
const transitionInterval = 5000; // Set the interval in milliseconds (e.g., 2000 for 2 seconds)

function goNext() {
    defaultTransform = defaultTransform - 398;
    const slider = document.getElementById("slider");
    if (Math.abs(defaultTransform) >= slider.scrollWidth / 1.7) defaultTransform = 0;
    slider.style.transform = "translateX(" + defaultTransform + "px)";
}

function goPrev() {
    const slider = document.getElementById("slider");
    if (Math.abs(defaultTransform) === 0) defaultTransform = 0;
    else defaultTransform = defaultTransform + 398;
    slider.style.transform = "translateX(" + defaultTransform + "px)";
}

const next = document.getElementById("next");
const prev = document.getElementById("prev");
const slider = document.getElementById("slider");

next.addEventListener("click", goNext);
prev.addEventListener("click", goPrev);

// Auto transition
setInterval(goNext, transitionInterval);

// Touch events
slider.addEventListener("touchstart", (event) => {
    touchStartX = event.touches[0].clientX;
});

slider.addEventListener("touchmove", (event) => {
    touchMoveX = event.touches[0].clientX;
    const difference = touchStartX - touchMoveX;
    slider.style.transform = `translateX(${-difference}px)`;
});

slider.addEventListener("touchend", (event) => {
    const difference = touchStartX - touchMoveX;
    if (difference > 0) {
        goNext();
    } else {
        goPrev();
    }
});