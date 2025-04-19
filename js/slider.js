document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const prevButton = document.querySelector(".prev-button");
  const nextButton = document.querySelector(".next-button");
  const indicatorsContainer = document.querySelector(".indicators");

  let currentIndex = 0;

  // إنشاء النقاط (Indicators)
  slides.forEach((_, index) => {
    const indicator = document.createElement("li");
    indicator.addEventListener("click", () => goToSlide(index));
    indicatorsContainer.appendChild(indicator);
  });

  const indicators = document.querySelectorAll(".indicators li");

  const updateIndicators = () => {
    indicators.forEach((ind, i) => {
      ind.classList.toggle("active", i === currentIndex);
    });
  };

  const showSlide = () => {
    slides.forEach((slide, index) => {
      slide.classList.toggle("active", index === currentIndex);
    });
    updateIndicators();
  };

  const goToSlide = (index) => {
    currentIndex = index;
    showSlide();
  };

  const nextSlide = () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide();
  };

  const prevSlide = () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide();
  };

  prevButton.addEventListener("click", prevSlide);
  nextButton.addEventListener("click", nextSlide);

  showSlide(); // عرض السلايد الأول فقط عند التحميل
});
