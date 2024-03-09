  const carousel = document.getElementById('carousel');
  const carouselItems = document.querySelectorAll('.carousel-item');

  let currentIndex = 0;

  function updateCarousel() {
    const newPosition = -currentIndex * 100 + '%';
    carousel.style.transform = 'translateX(' + newPosition + ')';
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    updateCarousel();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    updateCarousel();
  }