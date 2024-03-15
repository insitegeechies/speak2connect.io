var photos = [];
var currentIndex = 0;

// Populate photos array with image URLs
document.querySelectorAll('.cursor-pointer').forEach(function (el) {
    photos.push(el.getAttribute('src'));
});

// Open fullscreen photo viewer
function openFullscreen(imgSrc) {
    var fullscreenElem = document.getElementById("fullscreen");
    var imgElem = document.getElementById("fullscreen-img");

    // Find index of clicked photo
    currentIndex = photos.indexOf(imgSrc);
    imgElem.src = imgSrc;
    fullscreenElem.style.display = "block";
}

// Close fullscreen photo viewer
function closeFullscreen() {
    document.getElementById("fullscreen").style.display = "none";
}

// Navigate to next photo
function nextPhoto() {
    currentIndex = (currentIndex + 1) % photos.length;
    document.getElementById("fullscreen-img").src = photos[currentIndex];
}

// Navigate to previous photo
function prevPhoto() {
    currentIndex = (currentIndex - 1 + photos.length) % photos.length;
    document.getElementById("fullscreen-img").src = photos[currentIndex];
}

// Handle keyboard events
document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowLeft') {
        prevPhoto();
    } else if (event.key === 'ArrowRight') {
        nextPhoto();
    } else if (event.key === 'Escape') {
        closeFullscreen();
    }
});