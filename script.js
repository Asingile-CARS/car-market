const images = document.querySelectorAll('.carousel-image');
const dots = document.querySelectorAll('.dot');

let current = 0;

function showImage(index) {
  images.forEach(img => img.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));

  images[index].classList.add('active');
  dots[index].classList.add('active');
}

function nextImage() {
  current = (current + 1) % images.length;
  showImage(current);
}

function prevImage() {
  current = (current - 1 + images.length) % images.length;
  showImage(current);
}

function setImage(index) {
  current = index;
  showImage(current);
}

// start
showImage(current);

// auto slide
setInterval(nextImage, 3000);
