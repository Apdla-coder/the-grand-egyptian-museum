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

// 🔹 Language Translation

const translations = {
  en: {
    about: "About",
    tours: "Tourist",
    home: "Home",
    history: "HISTORY",
    book_tickets: "Book tickets",
    book_your_ticket: "Book Your Ticket",
    full_name: "Full Name",
    email: "Email",
    phone_number: "Phone Number",
    visit_date: "Visit Date",
    ticket_type: "Ticket Type",
    number_of_tickets: "Number of Tickets",
    book_now: "Book Now",
    largest_museum: "The Largest Archaeological Museum",
    total_area: "Square meters total area",
    home_to: "Home to more than",
    ancient_artifacts: "Ancient artifacts",
    exclusive_collection: "Exclusive Collection",
    king_tut: "Artifacts of King Tutankhamun",
    featuring: "Featuring",
    exhibition_halls: "Exhibition halls & galleries",
    call_us: "Call Us",
    developed_by: "© Developed by Abdullah Hani",
    follow_us: "FOLLOW US",
    our_story: "Our Story",
    mission_vision: "Mission & Vision",
    team: "Team",
    popular_tours: "Popular Tours",
    book_trip: "Book a Trip",
    guidelines: "Guidelines",
    ancient_egypt: "Ancient Egypt",
    pharaohs: "Pharaohs",
    booking_confirmation: "Booking Confirmation",
    booking_number: "Booking Number:",
  },
  ar: {
    about: "حول",
    tours: "السياحة",
    home: "الصفحة الرئيسية",
    history: "التاريخ",
    book_tickets: "حجز التذاكر",
    book_your_ticket: "احجز تذكرتك",
    full_name: "الاسم الكامل",
    email: "البريد الإلكتروني",
    phone_number: "رقم الهاتف",
    visit_date: "تاريخ الزيارة",
    ticket_type: "نوع التذكرة",
    number_of_tickets: "عدد التذاكر",
    book_now: "احجز الآن",
    largest_museum: "أكبر متحف أثري",
    total_area: "المساحة الإجمالية بالمتر المربع",
    home_to: "يحتوي على أكثر من",
    ancient_artifacts: "القطع الأثرية القديمة",
    exclusive_collection: "مجموعة حصرية",
    king_tut: "آثار الملك توت عنخ آمون",
    featuring: "يشمل",
    exhibition_halls: "قاعة المعارض وgalleries",
    call_us: "اتصل بنا",
    developed_by: "© تم التطوير بواسطة عبد الله هاني",
    follow_us: "تابعنا",
    our_story: "قصتنا",
    mission_vision: "المهمة والرؤية",
    team: "الفريق",
    popular_tours: "الجولات الشهيرة",
    book_trip: "احجز رحلة",
    guidelines: "إرشادات",
    ancient_egypt: "مصر القديمة",
    pharaohs: "الفراعنة",
    booking_confirmation: "تأكيد الحجز",
    booking_number: "رقم الحجز:",
  },
};

let currentLang = "en";

function translatePage(lang) {
  const elements = document.querySelectorAll("[data-translate]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-translate");
    if (translations[lang] && translations[lang][key]) {
      element.innerText = translations[lang][key];
    }
  });
}

document.querySelectorAll(".lang-btn").forEach((button) => {
  button.addEventListener("click", (e) => {
    currentLang = e.target.getAttribute("data-lang");
    translatePage(currentLang);
  });
});

translatePage(currentLang);

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
