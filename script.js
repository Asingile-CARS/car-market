const images = document.querySelectorAll('.carousel-image');
let current = 0;

function showNextImage() {
  images[current].classList.remove('active');
  current = (current + 1) % images.length;
  images[current].classList.add('active');
}

// start first image
images[current].classList.add('active');

// change image every 3 seconds
setInterval(showNextImage, 7000);