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

document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case '1': // Home
      window.location.href = 'index.html';
      break;
    case '2': // About
      window.location.href = 'about.html';
      break;
    case '3': // Gallery
      window.location.href = 'gallery.html';
      break;
    case '4': // Links
      window.location.href = 'destinations.html';
      break;
    case '5': // Contact
      window.location.href = 'contact.html';
      break;
    case 'r': // Random image (only in gallery)
      const randomImage = Math.floor(Math.random() * totalImages) + 1; // Generates a random number between 1 and totalImages
      currentImage = randomImage;  // Set the random image as the current image
      updateGalleryImage(); // Update the image displayed
      break;
    default:
      break; // No action for other keys
  }
});
