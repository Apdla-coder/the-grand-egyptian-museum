// 🔹 Sidebar Menu Toggle
const toggleMenu = document.querySelector(".toggle-menu");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links li");
const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
const navbar = document.querySelector(".navbar"); // ✅ مهم نعرف النافبار هنا
const langButtons = document.querySelectorAll(".lang-btn");

// 🔹 Toggle mobile menu
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

// 🔹 Dropdown toggle
dropdownToggles.forEach((toggle) => {
  toggle.addEventListener("click", function (event) {
    event.stopPropagation();
    let dropdownMenu = this.nextElementSibling;

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

// 🔹 Close dropdown when clicking outside
document.addEventListener("click", function (event) {
  document.querySelectorAll(".dropdown-menu.active").forEach((menu) => {
    if (!menu.contains(event.target)) {
      menu.classList.remove("active");
      menu.previousElementSibling.classList.remove("active");
    }
  });
});

// 🔹 Translations
const translations = {
  en: {
    mission_vision_title: "Mission & Vision",
    Mission_Vision: "Mission & Vision",
    mission_title: "Our Mission",
    mission_text:
      "The Grand Egyptian Museum is dedicated to preserving Egypt’s ancient heritage and showcasing its treasures to the world through advanced technologies, educational programs, and immersive exhibitions.",
    mission_extra:
      "Our mission also involves creating a dynamic cultural hub that promotes research, collaboration, and accessibility. By integrating cutting-edge display methods and interactive experiences, the museum seeks to engage visitors of all ages and backgrounds in the story of ancient Egypt.",
    vision_title: "Our Vision",
    vision_text:
      "To become the world’s foremost museum of ancient Egyptian civilization, offering a transformative experience that connects the past to the future and inspires global appreciation.",
    vision_extra:
      "Our vision is to establish the museum as a symbol of cultural diplomacy and innovation, where history meets technology. We aspire to set new standards in museum excellence and to make Egyptian heritage accessible to both local communities and the global public.",
    follow_us: "Follow Us",
    call_us: "Contact Us",
    developed_by: "© Developed by Abdullah Hani",
    about: "About",
    history: "Museum History",
    team: "Museum management",
    mission_vision: "Mission & Vision",
    tours: "Tourist",
    popular_tours: "Popular Tours",
    book_trip: "Book a Trip",
    guidelines: "Guidelines",
    home: "Home",
    Archaeological: "Archaeological groups",
    Unique_pieces: "Unique pieces",
    great_kings: "The Great Kings of Egypt",
  },
  ar: {
    mission_vision_title: "الرؤية والرسالة",
    Mission_Vision: "الرؤية والرسالة",
    mission_title: "رسالتنا",
    mission_text:
      "يكرس المتحف المصري الكبير جهوده لحفظ التراث المصري القديم وعرض كنوزه للعالم من خلال التقنيات الحديثة والبرامج التعليمية والمعارض التفاعلية.",
    mission_extra:
      "كما تهدف رسالتنا إلى خلق مركز ثقافي ديناميكي يعزز البحث والتعاون وسهولة الوصول. من خلال دمج أحدث طرق العرض والتجارب التفاعلية، يسعى المتحف إلى إشراك الزوار من جميع الأعمار والخلفيات في قصة مصر القديمة.",
    vision_title: "رؤيتنا",
    vision_text:
      "أن نصبح المتحف الرائد عالميًا في الحضارة المصرية القديمة، من خلال تجربة ملهمة تربط الماضي بالمستقبل وتثري التقدير العالمي.",
    vision_extra:
      "رؤيتنا هي أن يكون المتحف رمزًا للدبلوماسية الثقافية والابتكار، حيث يلتقي التاريخ بالتكنولوجيا. نسعى لوضع معايير جديدة في التميز المتحفي، وجعل التراث المصري في متناول المجتمعات المحلية والجمهور العالمي.",
    follow_us: "تابعنا",
    call_us: "اتصل بنا",
    developed_by: "© تطوير عبدالله هاني",
    about: "حول المتحف",
    history: "تاريخ المتحف",
    team: "إدارة المتحف",
    mission_vision: "الرؤية والرسالة",
    tours: "السياحة",
    popular_tours: "الجولات المميزة",
    book_trip: "احجز رحلة",
    guidelines: "الإرشادات",
    home: "الرئيسية",
    Archaeological: "المجموعات الأثرية",
    Unique_pieces: "قطع فريدة",
    great_kings: "ملوك مصر العظماء",
  },
};

// 🔹 Set Language and Direction
function setLanguage(lang) {
  localStorage.setItem("selectedLang", lang);
  document.documentElement.lang = lang;
  document.body.dir = lang === "ar" ? "rtl" : "ltr";

  if (navbar) {
    navbar.classList.toggle("rtl", lang === "ar");
    navbar.classList.toggle("ltr", lang !== "ar");
  }

  const elementsToTranslate = document.querySelectorAll("[data-translate]");
  elementsToTranslate.forEach((element) => {
    const key = element.getAttribute("data-translate");
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  // Highlight active language button
  langButtons.forEach((btn) => {
    btn.classList.toggle("active-lang", btn.getAttribute("data-lang") === lang);
  });
}

// 🔹 Initialize Language
const savedLang = localStorage.getItem("selectedLang") || "en";
setLanguage(savedLang);

// 🔹 Language Button Events
langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedLang = button.getAttribute("data-lang");
    setLanguage(selectedLang);
  });
});
