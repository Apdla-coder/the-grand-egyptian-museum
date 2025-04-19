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

// Language settings
const languageData = {
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
    history: "History",
    museum_history: "Museum History",
    museum_tours:
      "The Grand Egyptian Museum Offers Kids Tours Inside the 'Children's Museum'",
    museum_tours_description:
      "The Grand Egyptian Museum offers children's tours inside the 'Children’s Museum' located within the museum. The place is designed to nurture kids' passion through customized educational experiences using visual, auditory, and sensory tools, with the main aim to captivate children and showcase the magnificence of ancient Egyptian civilization.",
    great_kings: "The Great Kings of Egypt",
    book_tickets: "Children's Museum",
    exciting_experience: "An Exciting Experience for Kids",
    exciting_experience_description:
      "An experience designed to spark children's curiosity through educational, hands-on, and engaging activities. It is perfectly tailored for inquisitive young minds. Thanks to a setup that stimulates the senses, combining fascinating visuals, sounds, and tactile materials, the museum becomes an enchanting place where young visitors can immerse themselves in the grandeur and mysteries of ancient Egypt.",
    tour_details_by_age: "Tour Details by Age",
    tour_details_by_age_description:
      "We offer age-specific tours for children, with each tour designed to suit the needs of each age group. Here are the details of the tours based on age:",
    age_3_5: "Children Aged 3 to 5",
    age_3_5_description:
      "Interactive tours that use colors and sounds to capture children's attention, with simple educational games that introduce them to ancient Egyptian civilization in a fun way.",
    age_6_8: "Children Aged 6 to 8",
    age_6_8_description:
      "Tours based on hands-on activities and interactive stories, where children can learn about the key features of Egyptian civilization through play and interaction with the exhibits.",
    age_9_12: "Children Aged 9 to 12",
    age_9_12_description:
      "Educational tours that focus on a deeper understanding of ancient Egypt's history and its important discoveries, using multimedia techniques and group activities.",
    age_13_and_above: "Children Aged 13 and Above",
    age_13_and_above_description:
      "Advanced tours featuring detailed historical information and virtual reality tours to enhance the learning experience.",
    more_about_museum: "More Details About Visiting the Children's Museum",
    tour_duration: "The tour lasts 45 minutes.",
    available_in_languages: "The tour is available in both Arabic and English.",
    school_booking: "To book school visits, contact us at learning@gem.eg.",
    ticket_information:
      "Non-Egyptian individuals married to Egyptians and their children, or vice versa, are eligible to purchase Egyptian entry tickets.",
    booking_policy: "All bookings are non-transferable and non-refundable.",
    parking_available: "Parking is available on-site for a fee.",
    follow_us: "Follow Us",
    call_us: "Contact Us",
    developed_by: "© Developed by Abdullah Hani",
  },
  ar: {
    about: "عن المتحف",
    our_story: "قصتنا",
    mission_vision: "المهمة والرؤية",
    team: "الفريق",
    tours: "الجولات السياحية",
    popular_tours: "الجولات الشعبية",
    book_trip: "حجز رحلة",
    guidelines: "الإرشادات",
    home: "الرئيسية",
    history: "التاريخ",
    museum_history: "تاريخ المتحف",
    museum_tours: "يقدم المتحف المصري الكبير جولات للأطفال داخل 'متحف الأطفال'",
    museum_tours_description:
      "يقدم المتحف المصري الكبير جولات للأطفال داخل 'متحف الأطفال' الواقع داخل المتحف. تم تصميم المكان لرعاية شغف الأطفال من خلال تجارب تعليمية مخصصة باستخدام الأدوات البصرية والسمعية والحسية، بهدف جذب الأطفال وعرض عظمة حضارة مصر القديمة.",
    great_kings: "الملوك العظام في مصر",
    book_tickets: "متحف الأطفال",
    exciting_experience: "تجربة مثيرة للأطفال في متحف الأطفال",
    exciting_experience_description:
      "تجربة مصممة لإثارة فضول الأطفال، وتقريبهم من تراثهم الثقافي الاستثنائي من خلال أنشطة تعليمية عملية وجذابة، ومصممة بشكل مثالي للعقول الاستكشافية الشابة. بفضل الإعداد الذي يحفز الحواس، ويجمع بين الصور المثيرة والأصوات المثيرة والمواد التي يمكن لمسها، يصبح المتحف مكانًا ساحرًا وأسيرًا حيث يمكن للزوار الصغار الانغماس في عظمة وأسرار مصر القديمة.",
    tour_details_by_age: "تفاصيل الجولات بحسب العمر",
    tour_details_by_age_description:
      "نقدم جولات مخصصة للأطفال من مختلف الأعمار، حيث يتم تصميم كل جولة لتناسب احتياجات كل فئة عمرية. إليكم تفاصيل الجولات بحسب العمر:",
    age_3_5: "الأطفال من 3 إلى 5 سنوات",
    age_3_5_description:
      "جولات تفاعلية تستخدم الألوان والأصوات لجذب انتباه الأطفال، مع ألعاب تعليمية بسيطة تشرح لهم الحضارة المصرية القديمة بطريقة ممتعة.",
    age_6_8: "الأطفال من 6 إلى 8 سنوات",
    age_6_8_description:
      "جولات تعتمد على الأنشطة العملية والقصص التفاعلية، حيث يتمكن الأطفال من التعرف على أهم معالم الحضارة المصرية من خلال اللعب والتفاعل مع المعروضات.",
    age_9_12: "الأطفال من 9 إلى 12 سنة",
    age_9_12_description:
      "جولات تعليمية تركز على التعرف العميق على تاريخ مصر القديمة وأهم اكتشافاتها، باستخدام تقنيات الوسائط المتعددة والأنشطة الجماعية.",
    age_13_and_above: "الأطفال من 13 سنة فما فوق",
    age_13_and_above_description:
      "جولات متقدمة تحتوي على معلومات تاريخية تفصيلية وجولات باستخدام تقنيات الواقع الافتراضي لتعزيز تجربة التعلم.",
    more_about_museum: "تفاصيل أكثر عن زيارة متحف الأطفال",
    tour_duration: "الجولة مدتها 45 دقيقة.",
    available_in_languages: "الجولة متاحة باللغتين العربية والإنجليزية.",
    school_booking: "لحجز الزيارات المدرسية، التواصل على learning@gem.eg.",
    ticket_information:
      "غير المصري المتزوج بمصرية وأبناؤهم والعكس مؤهلون لشراء تذكرة الدخول المصرية.",
    booking_policy: "جميع الحجوزات غير قابلة للتحويل وغير قابلة للاسترداد.",
    parking_available: "تتوفر مواقف للسيارات في الموقع مقابل رسوم.",
    follow_us: "تابعونا",
    call_us: "اتصل بنا",
    developed_by: "© تطوير بواسطة عبدالله هاني",
  },
};

// Translation function
function translatePage(language) {
  const elements = document.querySelectorAll("[data-translate]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-translate");
    if (languageData[language] && languageData[language][key]) {
      element.textContent = languageData[language][key];
    }
  });
}

// Language switch function
document.querySelectorAll(".lang-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const lang = button.getAttribute("data-lang");
    translatePage(lang);
  });
});
