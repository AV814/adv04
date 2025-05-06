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
    case '1': //Brings user to the HOME page
      window.location.href = 'index.html';
      break;
    case '2': //Brings user to the ABOUT page
      window.location.href = 'about.html';
      break;
    case '3': //Brings user to the GALLERY page
      window.location.href = 'gallery.html';
      break;
    case '4': //Brings user to the LINKS page
      window.location.href = 'destinations.html';
      break;
    case '5': //Brings user to the CONTACT page 
      window.location.href = 'contact.html';
      break;
    case 'r': //While in gallery, sends the user to a random image
      const randomImage = Math.floor(Math.random() * totalImages) + 1;
      currentImage = randomImage;
      updateGalleryImage();
      break;
    default:
      break;
  }
});
