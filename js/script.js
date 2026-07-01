const observer = new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}})},{threshold:.14});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
let currentSlide = 0;
const totalSlides = 3;

function moveCarousel(direction) {
  currentSlide += direction;
  
  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  } else if (currentSlide >= totalSlides) {
    currentSlide = 0;
  }
  
  const track = document.getElementById('carouselTrack');
  if (track) {
    // מזיז את הקרוסלה לפי אחוזים (בגלל שהאתר ב-RTL, הכיוון הפוך)
    track style transform = `translateX(${currentSlide * 33.333}%)`;
  }
}
