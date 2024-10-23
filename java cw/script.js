let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const intervalTime = 6000; // Change slide every 6 seconds
let slideInterval;

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function prevSlide() {
  goToSlide(currentSlide - 1);
}

function goToSlide(n) {
  slides[currentSlide].style.display = 'none';
  currentSlide = (n + totalSlides) % totalSlides;
  slides[currentSlide].style.display = 'block';
}

nextSlide(); // Start slider immediately

function startSlide() {
  slideInterval = setInterval(nextSlide, intervalTime);
}

function stopSlide() {
  clearInterval(slideInterval);
}

startSlide();
