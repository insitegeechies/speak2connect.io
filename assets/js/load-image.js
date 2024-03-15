// JavaScript to handle the load more button
const loadMoreBtn = document.getElementById('loadMoreBtn');
const imageContainer = document.getElementById('imageContainer');
const maxImagesToShow = 24; // Change this according to your needs
let currentImageCount = 3; // Initial number of images loaded

loadMoreBtn.addEventListener('click', function() {
    // Load more images if available
    for (let i = 0; i < 3; i++) { // Load 3 more images at a time
        if (currentImageCount < maxImagesToShow) {
            const newImage = document.createElement('img');
            newImage.src = `assets/images/reviews/speak2connect-review-${currentImageCount + 1}.webp`; // Change this path accordingly
            newImage.className = 'h-auto max-w-full rounded-lg'; // Adjust styling as needed
            imageContainer.appendChild(newImage);
            currentImageCount++;
        } else {
            loadMoreBtn.disabled = true;
            loadMoreBtn.textContent = 'No more images';
            break;
        }
    }
});