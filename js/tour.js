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

document.addEventListener("click", function (event) {
  document.querySelectorAll(".dropdown-menu.active").forEach((menu) => {
    if (!menu.contains(event.target)) {
      menu.classList.remove("active");
      menu.previousElementSibling.classList.remove("active");
    }
  });
});

const translations = {
  en: {
    about: "About",
    our_story: "Our Story",
    mission_vision: "Mission & Vision",
    team: "Team",
    tours: "Tourist",
    popular_tours: "Popular Tours",
    book_trip: "Book a Trip",
    guidelines: "Guidelines",
    home: "Home",
    history: "HISTORY",
    museum_history: "Museum History",
    great_kings: "The great kings of Egypt",
    book_tickets: "Popular Tours",
    royal_title: "Royal Treasures Tour",
    royal_desc:
      "This guided tour takes you deep into the heart of Ancient Egypt's wealth and grandeur. You’ll experience:",
    royal_point_1:
      "🟡 The full collection of King Tutankhamun’s golden treasures.",
    royal_point_2: "🟡 Rare royal thrones, jewelry, and ancient artifacts.",
    royal_point_3:
      "🟡 Expert narration about the life and legacy of the boy king.",
    mummy_title: "Mummies Hall Tour",
    mummy_desc:
      "Discover the secrets of the ancient afterlife in this hauntingly beautiful tour. Highlights include:",
    mummy_point_1:
      "🟡 Access to the Royal Mummies Hall featuring real pharaohs.",
    mummy_point_2: "🟡 Insights into the mummification process and rituals.",
    mummy_point_3: "🟡 Ambient lighting and soundscapes for full immersion.",
    duration: "Duration:",
    book_tour_btn: "Book This Tour",
    reserve_btn: "Reserve Now",
    follow_us: "FOLLOW US",
    call_us: "Call Us",
    developed_by: "© Developed by Abdullah Hani",
  },
  ar: {
    about: "عن المتحف",
    our_story: "قصتنا",
    mission_vision: "الرؤية والرسالة",
    team: "الفريق",
    tours: "جولات سياحية",
    popular_tours: "جولات شهيرة",
    book_trip: "احجز رحلة",
    guidelines: "الإرشادات",
    home: "الرئيسية",
    history: "التاريخ",
    museum_history: "تاريخ المتحف",
    great_kings: "ملوك مصر العظماء",
    book_tickets: "الجولات الشهيرة",
    royal_title: "جولة الكنوز الملكية",
    royal_desc: "اصطحبك هذه الجولة في أعماق ثراء وعظمة مصر القديمة. ستشاهد:",
    royal_point_1: "🟡 المجموعة الكاملة لكنوز توت عنخ آمون الذهبية.",
    royal_point_2: "🟡 عروش ملكية نادرة، ومجوهرات، وقطع أثرية قديمة.",
    royal_point_3: "🟡 سرد تفصيلي عن حياة وإرث الملك الصغير.",
    mummy_title: "جولة قاعة المومياوات",
    mummy_desc: "اكتشف أسرار الحياة بعد الموت في هذه الجولة الساحرة. تشمل:",
    mummy_point_1:
      "🟡 الوصول إلى قاعة المومياوات الملكية التي تضم ملوكًا حقيقيين.",
    mummy_point_2: "🟡 شرح لعملية التحنيط والطقوس الجنائزية.",
    mummy_point_3: "🟡 إضاءة ومؤثرات صوتية لزيادة الواقعية.",
    duration: "المدة:",
    book_tour_btn: "احجز هذه الجولة",
    reserve_btn: "احجز الآن",
    follow_us: "تابعنا",
    call_us: "اتصل بنا",
    developed_by: "© تم التطوير بواسطة عبدالله هاني",
  },
};

const languageButtons = document.querySelectorAll(".lang-btn");

function setLanguage(lang) {
  const elements = document.querySelectorAll("[data-translate]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-translate");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  localStorage.setItem("language", lang);
}

// Check saved language on load
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("language") || "en"; // تغيير القيمة الافتراضية إلى الإنجليزية
  setLanguage(savedLang);
});

// Event listeners for language switch
languageButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const selectedLang = btn.getAttribute("data-lang");
    setLanguage(selectedLang);
  });
});

