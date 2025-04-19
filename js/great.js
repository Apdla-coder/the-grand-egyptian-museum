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

document.addEventListener("DOMContentLoaded", function () {
  const langButtons = document.querySelectorAll(".lang-btn");

  const translations = {
    en: {
      the_great_kings_of_egypt: "The Great Kings of Egypt",
      about: "About",
      our_story: "Our Story",
      mission_vision: "Mission & Vision",
      team: "Team",
      tourist: "Tourist",
      popular_tours: "Popular Tours",
      book_trip: "Book a Trip",
      guidelines: "Guidelines",
      home: "Home",
      history: "History",
      museum_history: "Museum History",
      great_kings: "The Great Kings of Egypt",
      ramesses_ii: "Ramesses II",
      thutmose_iii: "Thutmose III",
      reign: "Reign",
      akhenaten: "Akhenaten",
      tutankhamun: "Tutankhamun",
      ramesses_iii: "Ramesses III",
      seti_i: "Seti I",
      hatshepsut: "Hatshepsut",
      siphtah: "Siptah",
      amenhotep_ii: "Amenhotep II",
      ramesses_ii_about:
        "Ramesses II, also known as Ramesses the Great, was the third pharaoh of the Nineteenth Dynasty of Egypt. He is often regarded as the greatest, most celebrated, and most powerful pharaoh of the Egyptian Empire.",
      thutmose_iii_about:
        "Thutmose III is often called the Napoleon of Egypt due to his military campaigns, which expanded Egypt’s empire to its greatest territorial extent.",
      akhenaten_about:
        "Akhenaten, originally Amenhotep IV, is best known for his religious revolution, where he attempted to replace Egypt’s polytheistic beliefs with monotheism focused on the worship of Aten.",
      tutankhamun_about:
        "Tutankhamun, also known as King Tut, was a young pharaoh whose tomb discovery in 1922 revealed extraordinary treasures, making him one of the most famous pharaohs.",
      ramesses_iii_about:
        "Ramesses III was the second pharaoh of the Twentieth Dynasty, known for his defense of Egypt against the Sea Peoples and his building programs.",
      seti_i_about:
        "Seti I was the second pharaoh of the Nineteenth Dynasty, known for his military campaigns and contributions to Egyptian architecture.",
      hatshepsut_about:
        "Hatshepsut was one of Egypt's few female pharaohs and is regarded as one of the most successful pharaohs of the New Kingdom, known for her extensive building projects.",
      siphtah_about:
        "Siptah was a pharaoh of the Nineteenth Dynasty, who ruled Egypt during a time of political instability, possibly due to a regency government.",
      amenhotep_ii_about:
        "Amenhotep II was a pharaoh of the Eighteenth Dynasty, renowned for his military achievements and for expanding Egypt’s borders during his reign.",
      follow_us: "FOLLOW US",
      call_us: "Call Us",
      developed_by: "© Developed by Abdullah Hani",
    },
    ar: {
      the_great_kings_of_egypt: "الملوك العظماء في مصر",
      about: "عن",
      our_story: "قصتنا",
      mission_vision: "المهمة والرؤية",
      team: "الفريق",
      tourist: "السياحة",
      popular_tours: "الجولات السياحية الشهيرة",
      book_trip: "احجز رحلتك",
      guidelines: "إرشادات",
      home: "الرئيسية",
      history: "التاريخ",
      museum_history: "تاريخ المتحف",
      great_kings: "الملوك العظماء في مصر",
      ramesses_ii: "رمسيس الثاني",
      thutmose_iii: "تحتمس الثالث",
      reign: "الحقبة",
      akhenaten: "أخناتون",
      tutankhamun: "توت عنخ آمون",
      ramesses_iii: "رمسيس الثالث",
      seti_i: "سيتي الأول",
      hatshepsut: "حتشبسوت",
      siphtah: "سيبتاح",
      amenhotep_ii: "أمنحتب الثاني",
      ramesses_ii_about:
        "رمسيس الثاني، المعروف أيضًا باسم رمسيس العظيم، كان الفرعون الثالث من الأسرة التاسعة عشرة في مصر. يُعتبر في كثير من الأحيان أعظم وأشهر وأقوى فرعون في إمبراطورية مصر.",
      thutmose_iii_about:
        "تحتمس الثالث يُلقب أحيانًا بنابليون مصر بسبب حملاته العسكرية التي وسعت إمبراطورية مصر إلى أقصى حدودها الإقليمية.",
      akhenaten_about:
        "أخناتون، الذي كان يُدعى في الأصل أمنحوتب الرابع، يُعرف بشكل رئيسي بثورته الدينية، حيث حاول استبدال المعتقدات المصرية المتعددة الآلهة بالتوحيد الذي يركز على عبادة آتون.",
      tutankhamun_about:
        "توت عنخ آمون، المعروف أيضًا بالملك توت، كان فرعونًا شابًا، وتم اكتشاف قبره في عام 1922، مما كشف عن كنوز استثنائية، مما جعله واحدًا من أشهر الفراعنة.",
      ramesses_iii_about:
        "رمسيس الثالث كان الفرعون الثاني للأسرة العشرون، ويشتهر بدفاعه عن مصر ضد شعوب البحر وبرامجه البناءية.",
      seti_i_about:
        "سيتي الأول كان الفرعون الثاني للأسرة التاسعة عشرة، ويشتهر بحملاته العسكرية ومساهماته في العمارة المصرية.",
      hatshepsut_about:
        "حتشبسوت كانت واحدة من الفرعونات القليلات في مصر وتُعتبر واحدة من أنجح الفراعنة في المملكة الحديثة، معروفة بمشاريعها البناءية الكبيرة.",
      siphtah_about:
        "سيبتاح كان فرعونًا من الأسرة التاسعة عشرة، حكم مصر في فترة من عدم الاستقرار السياسي، ربما بسبب حكومة وصاية.",
      amenhotep_ii_about:
        "أمنحتب الثاني كان فرعونًا من الأسرة الثامنة عشرة، يُعرف بإنجازاته العسكرية وتوسيع حدود مصر خلال فترة حكمه.",
      follow_us: "تابعنا",
      call_us: "اتصل بنا",
      developed_by: "© تم التطوير بواسطة عبد الله هاني",
    },
  };

  // Function to set the language and save it
  function setLanguage(lang) {
    localStorage.setItem("selectedLang", lang);
    const elementsToTranslate = document.querySelectorAll("[data-translate]");
    elementsToTranslate.forEach((element) => {
      const key = element.getAttribute("data-translate");
      if (translations[lang][key]) {
        element.textContent = translations[lang][key];
      }
    });
  }

  // Language button click events
  langButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const lang = button.getAttribute("data-lang");
      setLanguage(lang);

      // Optional: highlight active button
      langButtons.forEach((btn) => btn.classList.remove("active-lang"));
      button.classList.add("active-lang");
    });
  });

  // Set initial language (saved or default to English)
  const savedLang = localStorage.getItem("selectedLang") || "en";
  setLanguage(savedLang);

  // Optional: highlight active button on load
  langButtons.forEach((btn) => {
    if (btn.getAttribute("data-lang") === savedLang) {
      btn.classList.add("active-lang");
    }
  });
});
