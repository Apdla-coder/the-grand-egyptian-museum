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
    team: "Museum management",
    tours: "Tourist",
    popular_tours: "Popular Tours",
    book_trip: "Book a Trip",
    guidelines: "Guidelines",
    home: "Home",
    history: "HISTORY",
    Unique_pieces: " Unique_pieces",
    Archaeological: "Archaeological groups",
    History: "Museum history",
    great_kings: "The great kings of Egypt",
    book_tickets: "Museum management",
    directors_title: "Directors of the Grand Egyptian Museum",
    director_name_1: "Dr. Tarek Tawfik",
    director_bio_1:
      "Dr. Tarek Tawfik is the General Supervisor of the Grand Egyptian Museum. He has an extensive background in Egyptology and museum management. Dr. Tawfik has been a key figure in the museum's development, overseeing its design, collections, and exhibition strategies.",
    director_name_2: "Dr. Zahi Hawass",
    director_bio_2:
      "Dr. Zahi Hawass is a renowned archaeologist and former Minister of Antiquities in Egypt. He is best known for his work on the Valley of the Kings and his leadership in Egyptian archaeological research. Dr. Hawass contributed greatly to the museum's vision and was instrumental in its early planning stages.",
    director_name_3: "Major General Atef Moftah",
    director_bio_3: `   Major General Atef Moftah is the General Supervisor of the Grand
              Egyptian Museum and the surrounding area since 2016. Appointed by
              President Abdel Fattah El-Sisi, he has led the project with a
              focus on sustainability, operational efficiency, and international
              collaboration. Under his leadership, the museum achieved multiple
              ISO certifications and significant energy savings, establishing it
              as a global cultural landmark.`,
    director_name_4: "Dr. Mostafa Waziri",
    director_bio_4:
      "Dr. Mostafa Waziri is an archaeologist and the former head of Egypt's Supreme Council of Antiquities. He played a critical role in the excavation and preservation of numerous ancient Egyptian sites and was instrumental in the conceptualization of the museum’s future direction.",
    follow_us: "Follow Us",
    call_us: "Contact Us",
    developed_by: "© Developed by Abdullah Hani",
    management_title: "Management of the Grand Egyptian Museum",
    management_intro:
      "The management of the Grand Egyptian Museum oversees the planning, operation, and development of the museum to ensure it becomes a global hub of heritage, culture, and innovation.",
    management_vision_title: "Our Vision",
    management_vision:
      "To position the Grand Egyptian Museum as the leading cultural destination showcasing the legacy of ancient Egypt through advanced museological practices.",
    management_mission_title: "Our Mission",
    management_mission:
      "To preserve, research, and present Egypt’s heritage in an engaging and sustainable way, while promoting cultural education and tourism.",
    management_objectives_title: "Key Objectives",
    objective_1: "Preserve and display over 100,000 artifacts.",
    objective_2: "Implement smart technology in exhibits and operations.",
    objective_3: "Create educational programs for global audiences.",
    objective_4: "Collaborate with international museums and institutions.",
    directors_title: "Directors of the Grand Egyptian Museum",
    director_name_1: "Dr. Tarek Tawfik",
    director_bio_1:
      "Dr. Tarek Tawfik is the General Supervisor of the Grand Egyptian Museum...",
    achievement_1_1: "Supervised the museum’s design and layout.",
    achievement_1_2: "Key figure in exhibition strategies.",
    director_name_2: "Dr. Zahi Hawass",
    director_bio_2:
      "Dr. Zahi Hawass is a renowned archaeologist and former Minister of Antiquities...",
    achievement_2_1: "Led major excavations in the Valley of the Kings.",
    achievement_2_2: "Shaped Egypt’s archaeological strategy.",
    director_name_3: "Major General Atef Moftah",
    director_bio_3:
      "He has led the project since 2016 focusing on sustainability and international collaboration...",
    achievement_3_1: "Achieved multiple ISO certifications.",
    achievement_3_2: "Boosted energy efficiency of the museum.",
    director_name_4: "Dr. Mostafa Waziri",
    director_bio_4:
      "Dr. Waziri played a critical role in excavation and preservation efforts...",
    achievement_4_1: "Led preservation of ancient Egyptian sites.",
    achievement_4_2: "Helped conceptualize the museum’s direction.",
  },
  ar: {
    about: "حول",
    our_story: "قصتنا",
    mission_vision: "الرؤية والرسالة",
    team: "ادارة المتحف",
    tours: "السياحة",
    popular_tours: "الجولات الشهيرة",
    book_trip: "احجز رحلة",
    guidelines: "إرشادات",
    home: "الرئيسية",
    history: "التاريخ",
    History: "تاريخ المتحف",
    Unique_pieces: " القطع الفريدة",
    Archaeological: "المجموعات الاثرية",

    great_kings: "عظماء ملوك مصر",

    book_tickets: "إدارة المتحف",
    directors_title: "مديرو المتحف المصري الكبير",
    director_name_1: "د. طارق توفيق",
    director_bio_1:
      "الدكتور طارق توفيق هو المشرف العام على المتحف المصري الكبير. يتمتع بخبرة واسعة في علم المصريات وإدارة المتاحف. كان له دور رئيسي في تطوير المتحف، حيث أشرف على تصميمه ومجموعاته واستراتيجيات العرض فيه.",
    director_name_2: "د. زاهي حواس",
    director_bio_2:
      "الدكتور زاهي حواس عالم آثار مشهور ووزير الآثار الأسبق في مصر. اشتهر بعمله في وادي الملوك وقيادته للأبحاث الأثرية المصرية. ساهم بشكل كبير في رؤية المتحف وكان له دور رئيسي في مراحل التخطيط المبكر.",
    director_name_3: "اللواء عاطف مفتاح",
    director_bio_3: `اللواء عاطف مفتاح هو المشرف العام على المتحف المصري الكبير والمنطقة المحيطة به منذ عام 2016. تم تعيينه من قبل الرئيس عبد الفتاح السيسي، وقد قاد المشروع مع التركيز على الاستدامة وكفاءة العمليات والتعاون الدولي. تحت قيادته، حصل المتحف على العديد من شهادات الأيزو وحقق توفيرات كبيرة في الطاقة، مما جعله يثبت مكانته كمعلم ثقافي عالمي.

`,
    management_title: "إدارة المتحف المصري الكبير",
    management_intro:
      "تشرف إدارة المتحف المصري الكبير على التخطيط والتشغيل وتطوير المتحف لضمان أن يصبح مركزًا عالميًا للتراث والثقافة والابتكار.",
    management_vision_title: "رؤيتنا",
    management_vision:
      "أن يكون المتحف المصري الكبير الوجهة الثقافية الرائدة التي تعرض إرث مصر القديمة من خلال أحدث ممارسات العرض المتحفي.",
    management_mission_title: "مهمتنا",
    management_mission:
      "الحفاظ على التراث المصري ودراسته وتقديمه بطريقة جذابة ومستدامة، مع تعزيز التعليم الثقافي والسياحة.",
    management_objectives_title: "الأهداف الرئيسية",
    objective_1: "الحفاظ على أكثر من 100,000 قطعة أثرية وعرضها.",
    objective_2: "تطبيق التكنولوجيا الذكية في المعروضات والعمليات.",
    objective_3: "إنشاء برامج تعليمية للجمهور العالمي.",
    objective_4: "التعاون مع المتاحف والمؤسسات الدولية.",
    directors_title: "مديرو المتحف المصري الكبير",
    director_name_1: "الدكتور طارق توفيق",
    director_bio_1:
      "الدكتور طارق توفيق هو المشرف العام على المتحف المصري الكبير...",
    achievement_1_1: "أشرف على تصميم المتحف وتخطيطه.",
    achievement_1_2: "شخصية رئيسية في استراتيجيات المعارض.",
    director_name_2: "الدكتور زاهي حواس",
    director_bio_2: "الدكتور زاهي حواس عالم آثار شهير ووزير سابق للآثار...",
    achievement_2_1: "قاد حفريات كبرى في وادي الملوك.",
    achievement_2_2: "ساهم في تشكيل استراتيجية علم الآثار في مصر.",
    director_name_3: "اللواء عاطف مفتاح",
    director_bio_3:
      "يقود المشروع منذ 2016 مع التركيز على الاستدامة والتعاون الدولي...",
    achievement_3_1: "حقق عدة شهادات ISO.",
    achievement_3_2: "عزز كفاءة الطاقة في المتحف.",
    director_name_4: "الدكتور مصطفى وزيري",
    director_bio_4: "لعب الدكتور وزيري دورًا حيويًا في الحفريات وجهود الحفظ...",
    achievement_4_1: "قاد جهود الحفاظ على المواقع الأثرية المصرية.",
    achievement_4_2: "ساهم في تصور توجه المتحف.",
    director_name_4: "د. مصطفى وزيري",
    director_bio_4:
      "الدكتور مصطفى وزيري عالم آثار ورئيس سابق للمجلس الأعلى للآثار. لعب دورًا حيويًا في التنقيب والحفاظ على العديد من المواقع الأثرية المصرية، وكان له دور أساسي في تصور مستقبل المتحف.",
    follow_us: "تابعنا",
    call_us: "تواصل معنا",
    developed_by: "© تم التطوير بواسطة عبدالله هاني",
  },
};

function setLanguage(lang) {
  // Translate page content
  document.querySelectorAll("[data-translate]").forEach((el) => {
    const key = el.getAttribute("data-translate");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Save language in localStorage
  localStorage.setItem("language", lang);

  // Set language direction (RTL or LTR)
  setDirection(lang);
}

// Function to set text direction (LTR or RTL)
function setDirection(lang) {
  if (lang === "ar") {
    document.documentElement.lang = "ar";
    document.body.dir = "rtl";
  } else {
    document.documentElement.lang = "en";
    document.body.dir = "ltr";
  }
}

// Language button event listeners
document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const lang = btn.getAttribute("data-lang");
    setLanguage(lang);
  });
});

// Set initial language (saved or default to English)
window.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("language") || "en";
  setLanguage(savedLang);
});
