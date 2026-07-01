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

// לוגיקה חכמה לקרוסלה - עובדת עם העכבר גם במחשב וגם בנייד
let currentSlide = 0;
const totalSlides = 5; // מספר ההמלצות הכולל בקרוסלה הזזה

function moveCarousel(direction) {
  currentSlide += direction;
  
  // הגנה ומעבר מעגלי בין השקפים
  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  } else if (currentSlide >= totalSlides) {
    currentSlide = 0;
  }
  
  // מוצא את כל מסילות הקרוסלה באתר (גם של המחשב וגם של הנייד)
  const tracks = document.querySelectorAll('#carouselTrack');
  
  tracks.forEach(track => {
    if (track) {
      // מזיז בצעדים של 20% (חיובי בגלל שהאתר ב-RTL)
      track.style.transform = `translateX(${currentSlide * 20}%)`;
    }
  });
}
