// 🔹 Sidebar Menu Toggle
const toggleMenu = document.querySelector(".toggle-menu");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links li");
const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

toggleMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (window.innerWidth <= 991) {
      navLinks.classList.remove("active");
    }
  });
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 991) {
    navLinks.classList.remove("active");
  }
});

dropdownToggles.forEach((toggle) => {
  toggle.addEventListener("click", function (event) {
    event.stopPropagation();
    const dropdownMenu = this.nextElementSibling;

    document.querySelectorAll(".dropdown-menu.active").forEach((menu) => {
      if (menu !== dropdownMenu) {
        menu.classList.remove("active");
        menu.previousElementSibling.classList.remove("active");
      }
    });

    dropdownMenu.classList.toggle("active");
    this.classList.toggle("active");
  });
});

// 🔹 Intersection Observer for Scroll Animation
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible"); // Add the class to trigger animation
        observer.unobserve(entry.target); // Stop observing after the element becomes visible
      }
    });
  },
  {
    threshold: 0.5, // When 50% of the element is visible in the screen
  }
);

// Select all elements you want to animate on scroll
const animatedElements = document.querySelectorAll(".animate-on-scroll");

// Observe the elements
animatedElements.forEach((element) => {
  observer.observe(element);
});

// Close dropdown when clicking outside
document.addEventListener("click", (event) => {
  document.querySelectorAll(".dropdown-menu.active").forEach((menu) => {
    if (!menu.contains(event.target)) {
      menu.classList.remove("active");
      menu.previousElementSibling.classList.remove("active");
    }
  });
});

// 🔹 Hero Section Image Slider
const images = [
  "./image/sliders_ar1739101249Banner AR.jpg",
  "./image/هدية.jpg",
  "./image/اكثر من 100.000 قطعة اثرية.png",
];

const heroSection = document.querySelector(".landing");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const bulletsContainer = document.querySelector(".bullets");

let currentIndex = 0;
let autoSlideInterval;
const slideDuration = 5000;

const initBullets = () => {
  bulletsContainer.innerHTML = "";
  images.forEach((_, index) => {
    const bullet = document.createElement("li");
    bullet.addEventListener("click", () => goToSlide(index));
    bulletsContainer.appendChild(bullet);
  });
  updateBullets();
};

const updateBullets = () => {
  bulletsContainer.querySelectorAll("li").forEach((bullet, index) => {
    bullet.classList.toggle("active", index === currentIndex);
  });
};

const updateHeroBackground = () => {
  heroSection.style.backgroundImage = `url('${images[currentIndex]}')`;
  updateBullets();
};

const goToSlide = (index) => {
  currentIndex = index;
  updateHeroBackground();
  resetAutoSlide();
};

const nextSlide = () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateHeroBackground();
  resetAutoSlide();
};

const prevSlide = () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateHeroBackground();
  resetAutoSlide();
};

const resetAutoSlide = () => {
  clearInterval(autoSlideInterval);
  startAutoSlide();
};

const startAutoSlide = () => {
  autoSlideInterval = setInterval(() => {
    if (!document.hidden) {
      nextSlide();
    }
  }, slideDuration);
};

let xDown = null;

const handleTouchStart = (evt) => {
  xDown = evt.touches[0].clientX;
};

const handleTouchMove = (evt) => {
  if (!xDown) return;

  const xUp = evt.touches[0].clientX;
  const xDiff = xDown - xUp;

  if (xDiff > 50) nextSlide();
  else if (xDiff < -50) prevSlide();

  xDown = null;
};

heroSection.addEventListener("touchstart", handleTouchStart, false);
heroSection.addEventListener("touchmove", handleTouchMove, false);

heroSection.style.backgroundImage = `url('${images[currentIndex]}')`;
initBullets();
startAutoSlide();

rightArrow.addEventListener("click", nextSlide);
leftArrow.addEventListener("click", prevSlide);

// 🔹 Scroll Animation for Stat Boxes
const observerOptions = { root: null, rootMargin: "0px", threshold: 0.2 };

function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show"); // Add the class to trigger the animation

      if (entry.target.classList.contains("number")) {
        animateCounter(entry.target);
      }

      observer.unobserve(entry.target); // Stop observing the element after it's visible
    }
  });
}

const observerStats = new IntersectionObserver(
  handleIntersection,
  observerOptions
);

document
  .querySelectorAll(".stat-box, .box-content .box, .number")
  .forEach((box) => {
    observerStats.observe(box);
  });

function animateCounter(element, duration = 2000) {
  const target = +element.textContent.replace(/[^0-9]/g, "");
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;

  const update = () => {
    current += increment;
    if (current < target) {
      element.textContent = Math.floor(current).toLocaleString();
      requestAnimationFrame(update);
    } else {
      element.textContent = target.toLocaleString();
    }
  };

  update();
}

const translations = {
  en: {
    largest_museum: "The Largest Archaeological Museum",
    square_meters: "Square meters total area",
    home_to_more: "Home to more than",
    ancient_artifacts: "Ancient artifacts",
    exclusive_collection: "Exclusive Collection",
    king_tut_artifacts: "Artifacts of King Tutankhamun",
    featuring: "Featuring",
    exhibition_halls: "Exhibition halls & galleries",
    more_than: "More than",
    visitors: "Visitors since the museum opened",
    contains_more_than: "It contains more than",
    unique_artifacts: "Unique artifacts",
    area_more_than: "An area of more than",
    has_more_than: "It has more than",
    more_than_museum: "More than just a museum",
    kids_museum: "Kid's Museum",
    book_ticket: "Book A Ticket",
    museum_store: "Museum Store",
    virtual_tour: "Tutankhamun Hall",
    museum_location: "Museum Location",
    museum_description:
      "The Grand Egyptian Museum (GEM) is one of the most significant cultural landmarks in Egypt. Located near the Giza Pyramids, it is set to be the largest archaeological museum in the world, showcasing the treasures of ancient Egypt, including the complete collection of King Tutankhamun.",
    follow_social_media: "Follow the Egyptian Museum on social media:",
    follow_us: "FOLLOW US",
    call_us: "Call Us",
    contact_us: "Contact Us",
    contact_text:
      "Get in touch to discover more about the treasures of history and the heritage of ancient Egypt.",
    send_message: "Send Message",
    your_name: "Your Name",
    your_mail: "Your Mail",
    your_message: "Your Message",
    developed_by: "© Developed by Abdullah Hani",
    about: "About",
    history: "Museum History",
    mission_vision: "Mission & Vision",
    team: "Museum management",
    tours: "Tourist",
    popular_tours: "Popular Tours",
    book_trip: "Book a Trip",
    guidelines: "Guidelines",
    home: "Home",
    Archaeological: "Archaeological groups",
    Unique_pieces: "Unique pieces",
    great_kings: "The Great Kings of Egypt",
    guided_tours: "Guided Tours",
    guided_tours_info: "Explore the museum with expert Egyptologists",
    school_trips: "School Trips",
    school_trips_info: "Special programs for educational visits",
    educational_tours: "Educational Tours",
    educational_tours_info: "Designed for students, families, and researchers",
    virtual_tours: "Virtual Reality Tours",
    virtual_tours_info:
      "Experience ancient Egypt through immersive VR technology",
    // Add the new translations here:
    about_image_alt: "Inside the museum",
    about_title: "About the Grand Egyptian Museum",
    about_paragraph1:
      "The Grand Egyptian Museum is a gateway to the rich and timeless history of Ancient Egypt. Located near the Giza Pyramids, it houses thousands of artifacts, including the complete collection of King Tutankhamun.",
    about_paragraph2:
      "With cutting-edge architecture and immersive exhibits, the museum offers visitors a unique journey through time.",
    about_button: "Explore Tours",
    location: "         our Location in the map",
  },
  ar: {
    largest_museum: "أكبر متحف أثري",
    square_meters: "مساحة إجمالية بالمتر المربع",
    home_to_more: "يضم أكثر من",
    ancient_artifacts: "الآثار القديمة",
    exclusive_collection: "مجموعة حصرية",
    king_tut_artifacts: "آثار الملك توت عنخ آمون",
    featuring: "يتضمن",
    exhibition_halls: "قاعات ومعارض",
    more_than: "أكثر من",
    visitors: "زوار منذ افتتاح المتحف",
    contains_more_than: "يحتوي على أكثر من",
    unique_artifacts: "الآثار الفريدة",
    area_more_than: "مساحة تزيد عن",
    has_more_than: "يحتوي على أكثر من",
    more_than_museum: "أكثر من مجرد متحف",
    kids_museum: "متحف الأطفال",
    book_ticket: "احجز تذكرتك",
    museum_store: "متجر المتحف",
    virtual_tour: " قاعة توت عنخ آمون",
    museum_location: "موقع المتحف",
    museum_description:
      "المتحف المصري الكبير (GEM) هو واحد من أبرز المعالم الثقافية في مصر، ويقع بالقرب من أهرامات الجيزة. ومن المقرر أن يكون أكبر متحف أثري في العالم، ويعرض كنوز مصر القديمة، بما في ذلك مجموعة كاملة للملك توت عنخ آمون.",
    follow_social_media: "تابع المتحف المصري على وسائل التواصل الاجتماعي:",
    follow_us: "تابعنا",
    call_us: "اتصل بنا",
    contact_us: "اتصل بنا",
    contact_text:
      "تواصل معنا لاكتشاف المزيد عن كنوز التاريخ وتراث مصر القديمة.",
    send_message: "إرسال الرسالة",
    your_name: "اسمك",
    your_mail: "بريدك الإلكتروني",
    your_message: "رسالتك",
    developed_by: "© تم التطوير بواسطة عبدالله هاني",
    about: "عن المتحف",
    history: "تاريخ المتحف ",
    mission_vision: "المهمة والرؤية",
    team: "ادارة المتحف",
    tours: "السياحة",
    popular_tours: "الجولات المشهورة",
    book_trip: "احجز رحلة",
    guidelines: "إرشادات",
    home: "الرئيسية",
    Archaeological: "المجموعات الاثرية",
    Unique_pieces: " القطع الفريدة",
    great_kings: "الملوك العظام في مصر",
    guided_tours: "الجولات الإرشادية",
    guided_tours_info: "اكتشف المتحف مع علماء المصريات الخبراء",
    school_trips: "الرحلات المدرسية",
    school_trips_info: "برامج خاصة للزيارات التعليمية",
    educational_tours: "الجولات التعليمية",
    educational_tours_info: "مُصممة للطلاب والعائلات والباحثين",
    virtual_tours: "   ",
    virtual_tours_info:
      "استمتع بتجربة مصر القديمة من خلال تكنولوجيا الواقع الافتراضي",
    // Add the new translations here:
    Location: "جولة في الردهة",
    about_image_alt: "داخل المتحف",
    about_title: "عن المتحف المصري الكبير",
    about_paragraph1:
      "المتحف المصري الكبير هو بوابة لاستكشاف تاريخ مصر القديمة الغني والخالد. يقع بالقرب من أهرامات الجيزة ويضم آلاف القطع الأثرية، بما في ذلك المجموعة الكاملة للملك توت عنخ آمون.",
    about_paragraph2:
      "مع الهندسة المعمارية الحديثة والمعروضات التفاعلية، يقدم المتحف للزوار رحلة فريدة عبر الزمن.",
    about_button: "استكشف الجولات",
  },
};

let currentLanguage = "en";

// Function to set language direction (LTR or RTL)
function setDirection(language) {
  if (language === "en") {
    document.documentElement.lang = "ar";
    document.body.dir = "rtl";
  } else {
    document.documentElement.lang = "en";
    document.body.dir = "ltr";
  }
}

// Function to translate the page content
function translatePage(language) {
  const elements = document.querySelectorAll("[data-translate]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-translate");
    if (translations[language][key]) {
      element.textContent = translations[language][key];
    }
  });

  // Change the direction of text based on the language
  setDirection(language);
}

// Event listener for language change
const langButtons = document.querySelectorAll(".lang-btn");

langButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const selectedLang = e.target.getAttribute("data-lang");
    currentLanguage = selectedLang;
    translatePage(currentLanguage);
  });
});

// Initial language setup on load
window.addEventListener("load", () => {
  translatePage(currentLanguage);
});
