//Javascript Code for the Photo Gallery
let currentImage = 1;
const totalImages = 11;
const galleryImage = document.getElementById('galleryImage');

function updateGalleryImage() {
  galleryImage.src = `media/${currentImage}.png`;
  galleryImage.alt = `Travel photo ${currentImage}`;
}

function nextImage() {
  currentImage = currentImage >= totalImages ? 1 : currentImage + 1;
  updateGalleryImage();
}

function prevImage() {
  currentImage = currentImage <= 1 ? totalImages : currentImage - 1;
  updateGalleryImage();
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') {
    nextImage(); // Right arrow = next image
  } else if (event.key === 'ArrowLeft') {
    prevImage(); // Left arrow = previous image
  }
});
