// Gallery logic
let currentImage = 1;
const totalImages = 5; // Change this to match how many images you have
const galleryImage = document.getElementById('galleryImage');

function updateGalleryImage() {
  galleryImage.src = `${currentImage}.png`;
  galleryImage.alt = `Drumming photo ${currentImage}`;
}

function nextImage() {
  currentImage = currentImage >= totalImages ? 1 : currentImage + 1;
  updateGalleryImage();
}

function prevImage() {
  currentImage = currentImage <= 1 ? totalImages : currentImage - 1;
  updateGalleryImage();
}
