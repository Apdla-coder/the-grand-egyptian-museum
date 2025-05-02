function scrollToRulesSection() {
  const rulesSection = document.querySelector(".rules-section");
  if (rulesSection) {
    rulesSection.scrollIntoView({ behavior: "smooth" });
  } else {
    console.log("'.rules-section' not found");
  }
}
// Sidebar Menu Toggle
const toggleMenu = document.querySelector(".toggle-menu");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links li");
const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

// Toggle menu visibility
toggleMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close menu when clicking on a nav item (for small screens)
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (window.innerWidth <= 991) {
      navLinks.classList.remove("active");
    }
  });
});

// Hide menu on large screens when resizing the window
window.addEventListener("resize", () => {
  if (window.innerWidth > 991) {
    navLinks.classList.remove("active");
  }
});

// Dropdown menu toggle
dropdownToggles.forEach((toggle) => {
  toggle.addEventListener("click", function (event) {
    event.stopPropagation();
    let dropdownMenu = this.nextElementSibling;

    // Close other open dropdowns
    document.querySelectorAll(".dropdown-menu.active").forEach((menu) => {
      if (menu !== dropdownMenu) {
        menu.classList.remove("active");
        menu.previousElementSibling.classList.remove("active");
      }
    });

    // Toggle current dropdown menu
    dropdownMenu.classList.toggle("active");
    this.classList.toggle("active");
  });
});

// Close dropdowns when clicking outside
document.addEventListener("click", function (event) {
  document.querySelectorAll(".dropdown-menu.active").forEach((menu) => {
    if (!menu.contains(event.target)) {
      menu.classList.remove("active");
      menu.previousElementSibling.classList.remove("active");
    }
  });
});

// Translate.js
const translations = {
  en: {
    suggestion_text:
      "If there are any suggestions or complaints, please contact the museum staff.",
    clean_text: "Please keep the place clean.",
    large_bags_text: "Large bags and sharp objects are not permitted.",
    sharp_objects_text:
      "Bringing sharp tools or dangerous materials is prohibited.",
    no_flash_text: "Please do not use flash when taking photographs.",
    no_smoking_text: "Smoking is prohibited throughout the museum.",
    no_food_text:
      "Food and drinks are prohibited, except for small water bottles.",
    dress_code_text:
      "Please adhere to the appropriate attire and maintain respectful behavior.",
    no_pets_text: "Pets are not allowed.",
    silence_text: "Please keep the museum quiet.",
    security_check_text:
      "Please allow museum staff to inspect your ID, bags, and tickets upon request.",
    no_flashlights_text:
      "Flashlights, laser pointers, and megaphones are not allowed.",
    follow_us: "Follow Us",
    call_us: "Call Us",
    developed_by: "© Developed by Abdullah Hani",
    guidelines_title: "Guidelines",
    museum_name: "Guidelines",
    about: "About",
    our_story: "Our Story",
    mission_vision: "Mission & Vision",
    team: "Team",
    tours: "Tourist",
    popular_tours: "Popular Tours",
    book_trip: "Book a Trip",
    guidelines: "Guidelines",
    home: "Home",
    history: "History",
    museum_history: "Museum History",
    great_kings: "The Great Kings of Egypt",
  },
  ar: {
    suggestion_text:
      "إذا كانت لديك أي اقتراحات أو شكاوى، يرجى الاتصال بفريق المتحف.",
    clean_text: "يرجى الحفاظ على نظافة المكان.",
    large_bags_text: "لا يُسمح بالحمل الحقائب الكبيرة والأشياء الحادة.",
    sharp_objects_text: "يحظر إحضار الأدوات الحادة أو المواد الخطرة.",
    no_flash_text: "يرجى عدم استخدام الفلاش أثناء التصوير.",
    no_smoking_text: "يحظر التدخين في جميع أنحاء المتحف.",
    no_food_text: "يحظر الطعام والشراب باستثناء زجاجات المياه الصغيرة.",
    dress_code_text: "يرجى الالتزام بالملابس المناسبة والحفاظ على سلوك محترم.",
    no_pets_text: "الحيوانات الأليفة غير مسموح بها.",
    silence_text: "يرجى الحفاظ على الهدوء داخل المتحف.",
    security_check_text:
      "يرجى السماح لفريق المتحف بفحص هويتك وحقائبك وتذاكرك عند الطلب.",
    no_flashlights_text:
      "المصابيح الكاشفة، مؤشرات الليزر، والميغافونات غير مسموح بها.",
    follow_us: "تابعنا",
    call_us: "اتصل بنا",
    developed_by: "© تم التطوير بواسطة عبد الله هاني",
    guidelines_title: "الإرشادات",
    museum_name: "الإرشادات",
    about: "حول",
    our_story: "قصتنا",
    mission_vision: "المهمة والرؤية",
    team: "الفريق",
    tours: "الجولات السياحية",
    popular_tours: "الجولات الشعبية",
    book_trip: "حجز رحلة",
    guidelines: "الإرشادات",
    home: "الصفحة الرئيسية",
    history: "التاريخ",
    museum_history: "تاريخ المتحف",
    great_kings: "الملوك العظام في مصر",
  },
};

let currentLang = "en";

// Function to set language direction (LTR or RTL)
function setDirection(lang) {
  if (lang === "en") {
    document.documentElement.lang = "ar";
    document.body.dir = "rtl";
  } else {
    document.documentElement.lang = "en";
    document.body.dir = "ltr";
  }
}

function translatePage(lang) {
  const elements = document.querySelectorAll("[data-translate]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-translate");
    if (translations[lang] && translations[lang][key]) {
      element.innerText = translations[lang][key];
    }
  });

  // Set the page direction based on selected language
  setDirection(lang);
}

// Language buttons event listeners
document.querySelectorAll(".lang-btn").forEach((button) => {
  button.addEventListener("click", (e) => {
    currentLang = e.target.getAttribute("data-lang");
    translatePage(currentLang);
  });
});

// Initial language translation
translatePage(currentLang);

// Booking functionality
const bookBtn = document.getElementById("bookBtn");
const confirmationBox = document.getElementById("confirmationBox");
const bookingNumberEl = document.getElementById("bookingNumber");
const visitDateDisplay = document.getElementById("visitDateDisplay");
const ticketTypeDisplay = document.getElementById("ticketTypeDisplay");
const userNameDisplay = document.getElementById("userNameDisplay"); // <== جديد

if (bookBtn) {
  bookBtn.addEventListener("click", function () {
    const bookingNumber = "EG" + Math.floor(100000 + Math.random() * 900000);
    const visitDate = document.getElementById("date").value;
    const ticketType = document.getElementById("ticket-type").value;
    const userName = document.getElementById("name").value; // <== جديد

    bookingNumberEl.textContent = bookingNumber;
    visitDateDisplay.textContent = visitDate;
    ticketTypeDisplay.textContent =
      ticketType.charAt(0).toUpperCase() + ticketType.slice(1);
    userNameDisplay.textContent = userName; // <== جديد

    confirmationBox.style.display = "block";
  });
}
