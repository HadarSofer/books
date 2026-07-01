// מנגנון ה-Reveal המעולה שלך (IntersectionObserver)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: .14 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// לוגיקה לקרוסלה - פותר תקיעות במחשב ובנייד
let currentSlide = 0;
const totalSlides = 5; // עודכן ל-5 שקפים

function moveCarousel(direction) {
  currentSlide += direction;
  
  // מעבר מעגלי תקין בין השקפים
  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  } else if (currentSlide >= totalSlides) {
    currentSlide = 0;
  }
  
  // בחירת כל מסילות הקרוסלה הקיימות בדף כדי למנוע התנגשויות CSS במחשב
  const tracks = document.querySelectorAll('.carousel-track, #carouselTrack');
  
  tracks.forEach(track => {
    if (track) {
      // הזזה מדויקת לפי אחוזים (צעדים של 20% בגלל RTL)
      track.style.transform = `translateX(${currentSlide * 20}%)`;
    }
  });
}
