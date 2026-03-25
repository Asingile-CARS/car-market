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

function filterCars() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.car-card');
  
    cards.forEach(card => {
      const title = card.querySelector('h3').innerText.toLowerCase();
      if(title.includes(input)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }