//Javascript Code for the Photo Gallery
let currentImage = 1;
const totalImages = 5;
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

let currentImage = 1;
const totalImages = 5; // Update to match the number of images you have
const galleryImage = document.getElementById('galleryImage');
const imageCaption = document.getElementById('imageCaption');

// Example captions — make sure there's one for each image
const captions = {
  1: "Naples, Florida",
  2: "Naples, Florida",
  3: "Naples, Florida",
  4: "Image 4 Description",
  5: "Image 5 Description"
};

function updateImage() {
  galleryImage.src = `media/${currentImage}.png`;
  imageCaption.textContent = captions[currentImage] || "Image Description";
}

function nextImage() {
  currentImage = currentImage < totalImages ? currentImage + 1 : 1;
  updateImage();
}

function prevImage() {
  currentImage = currentImage > 1 ? currentImage - 1 : totalImages;
  updateImage();
}

// Initialize on load
updateImage();

