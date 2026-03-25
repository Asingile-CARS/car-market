


  document.addEventListener("DOMContentLoaded", function () {

    const images = document.querySelectorAll('.carousel-image');
    const dots = document.querySelectorAll('.dot');
  
    let current = 0;
  
    function showImage(index) {
      // hide all
      images.forEach(img => img.style.display = "none");
      dots.forEach(dot => dot.classList.remove("active"));
  
      // show current
      if(images[index]) {
        images[index].style.display = "block";
      }
  
      if(dots[index]) {
        dots[index].classList.add("active");
      }
    }
  
    function nextImage() {
      current = (current + 1) % images.length;
      showImage(current);
    }
  
    function prevImage() {
      current = (current - 1 + images.length) % images.length;
      showImage(current);
    }
  
    // buttons
    document.querySelector(".next").addEventListener("click", nextImage);
    document.querySelector(".prev").addEventListener("click", prevImage);
  
    // dots
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
          current = index;
          showImage(current);
        });
      });




    // 🔥 IMPORTANT: show first image
    showImage(0);
  
    setInterval(nextImage, 3000);
  });
