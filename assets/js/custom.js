
// Add your custom JavaScript here
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // const carousel = document.getElementById('default-carousel');
  
  //   const startCarousel = () => {
  //     carousel.cycle();
  //   };

  //   const stopCarousel = () => {
  //     carousel.pause();
  //     // clearInterval(carouselInterval);
  //   };

  //   carousel.addEventListener('mouseenter', stopCarousel);
  //   carousel.addEventListener('mouseleave', startCarousel);
  
  //   startCarousel(); // Start the carousel when the page loads


});
