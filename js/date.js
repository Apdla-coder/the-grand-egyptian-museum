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

// 🔹 Counter Animation (only when in view)

document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".counter");

  const animateCounter = (counter) => {
    const target = +counter.getAttribute("data-target");
    let count = 0;
    const speed = target / 100;

    const update = () => {
      if (count < target) {
        count += speed;
        counter.innerText = Math.ceil(count);
        setTimeout(update, 30);
      } else {
        counter.innerText = target;
      }
    };

    update();
  };

  const observerOptions = {
    root: null,
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  counters.forEach((counter) => {
    observer.observe(counter);
  });
});

// 🔹 Language Toggle

const translationData = {
  en: {
    about: "Museum History",
    Archaeological: "Archaeological groups",
    mission_vision: "Mission & Vision",
    Unique_pieces: "Unique pieces",

    team: "Museum management",
    tours: "Tourist",
    popular_tours: "Popular Tours",
    book_trip: "Book a Trip",
    guidelines: "Guidelines",
    home: "Home",
    history: "Museum History",
    ancient_egypt: "Ancient Egypt",
    pharaohs: "Pharaohs",
    museum_name: "The Grand Egyptian Museum",
    journey_text:
      "A journey through time to explore the greatest civilizations in history",
    discover_more: "Discover More",
    about_the_museum: "About the Museum",
    history_of_museum: "History of the Grand Egyptian Museum",
    museum_history:
      "The Grand Egyptian Museum project was announced in 2002 to be the largest archaeological museum in the world. It aims to accommodate and display over 100,000 artifacts, including the complete collection of Tutankhamun.",
    museum_design:
      "The museum features modern architectural design inspired by ancient Egyptian civilization and is a new gateway for discovering the secrets of the pharaohs in an interactive and advanced way.",
    museum_inauguration:
      "The museum's grand opening was scheduled for 2022, marking a major milestone in the preservation and exhibition of Egypt's rich heritage. It is expected to attract millions of visitors each year, contributing significantly to the country's tourism and cultural sectors.",
    museum_exhibitions:
      "The museum will house not only the priceless treasures of Tutankhamun but also numerous other exhibits that highlight Egypt's ancient civilization, ranging from monumental statues to intricate jewelry, and offering a deep dive into the world of the pharaohs, their culture, and their lasting impact on modern civilization.",
    museum_technology:
      "The Grand Egyptian Museum integrates cutting-edge technology in its design, with features like virtual tours, interactive displays, and advanced preservation methods to ensure the longevity and accessibility of its exhibits. The museum’s design incorporates sustainable and energy-efficient elements, positioning it as a model for future cultural institutions.",
    museum_impact:
      "This monumental project is expected to enhance Egypt's position as a leading cultural and tourist destination, highlighting the global significance of Egyptian history. It is a landmark project that brings Egypt's ancient heritage to the world while ensuring its preservation for future generations.",
    museum_info:
      "The Grand Egyptian Museum is the largest archaeological museum in the world dedicated to a single civilization. It is located near the Pyramids of Giza and houses a massive collection of Egyptian artifacts, including the treasures of Tutankhamun.",
    museum_construction:
      "Construction began in 2002, and it is expected to be a global center for preserving and showcasing Egyptian heritage using the latest technologies.",
    history_of_museum: "History of the Grand Egyptian Museum",
    great_kings: "the great kings of egypt ",
    museum_history: "museum_history",
    museum_design:
      "The museum features a modern architectural design inspired by ancient Egyptian civilization and serves as a new gateway to discover the secrets of the pharaohs in an interactive and advanced way.",
    museum_facts: "Facts about the Grand Egyptian Museum",
    artifacts: "Artifacts",
    area: "Square meters area",
    construction_start: "Construction Start Year",
    expected_opening: "Expected Opening Year",
    why_visit: "Why Visit the Grand Egyptian Museum?",
    discover_history: "Discover History",
    history_description:
      "The museum holds over 100,000 rare artifacts from ancient Egyptian civilization.",
    modern_technologies: "Modern Technologies",
    technologies_description:
      "Utilize the latest augmented reality and digital interactions for a unique experience.",
    exceptional_location: "Exceptional Location",
    location_description:
      "Located near the Pyramids of Giza, making it an ideal destination for tourism and culture.",
    special_exhibitions: "Special Exhibitions",
    exhibitions_description:
      "The museum hosts events and temporary exhibitions showcasing Egypt’s greatest treasures throughout the ages.",
    follow_us: "FOLLOW US",
    call_us: "Call Us",
    developed_by: "© Developed by Abdullah Hani",
  },
  ar: {
    about: " تاريخ المتحف",
    Archaeological: "المجموعات الاثرية",
    mission_vision: "الرسالة والرؤية",
    team: " ادارة المتحف",
    Unique_pieces: "القطع الفريدة",

    tours: "السياحة",
    popular_tours: "الجولات المشهورة",
    book_trip: "احجز رحلة",
    guidelines: "إرشادات",
    home: "الرئيسية",
    history: "تاريخ المتحف",
    ancient_egypt: "مصر القديمة",
    pharaohs: "الفراعنة",
    museum_name: "المتحف المصري الكبير",
    journey_text: "رحلة عبر الزمن لاستكشاف أعظم الحضارات في التاريخ",
    discover_more: "اكتشف المزيد",
    about_the_museum: "حول المتحف",
    history_of_museum: "تاريخ المتحف المصري الكبير",
    museum_history:
      "تم الإعلان عن مشروع المتحف المصري الكبير في عام 2002 ليكون أكبر متحف أثري في العالم. يهدف المتحف إلى استيعاب وعرض أكثر من 100,000 قطعة أثرية، بما في ذلك المجموعة الكاملة لتوت عنخ آمون.",
    museum_design:
      "يتميز المتحف بتصميم معماري عصري مستوحى من الحضارة المصرية القديمة وهو بوابة جديدة لاكتشاف أسرار الفراعنة بطريقة تفاعلية ومتقدمة.",
    museum_inauguration:
      "كان من المقرر افتتاح المتحف الكبير في عام 2022، مما يمثل معلمًا هامًا في الحفاظ على التراث المصري وعرضه. من المتوقع أن يجذب المتحف ملايين الزوار سنويًا، مما يساهم بشكل كبير في قطاعات السياحة والثقافة في البلاد.",
    museum_exhibitions:
      "سيضم المتحف ليس فقط الكنوز الثمينة لتوت عنخ آمون، بل العديد من المعروضات الأخرى التي تسلط الضوء على حضارة مصر القديمة، بدءًا من التماثيل الضخمة إلى المجوهرات المعقدة، ويقدم غمرًا في عالم الفراعنة، ثقافتهم، وتأثيرهم المستمر على الحضارة الحديثة.",
    museum_technology:
      "يدمج المتحف المصري الكبير تكنولوجيا متقدمة في تصميمه، مع ميزات مثل الجولات الافتراضية والعروض التفاعلية وطرق الحفظ المتقدمة لضمان ديمومة المعروضات وسهولة الوصول إليها. يتضمن تصميم المتحف عناصر مستدامة وموفرة للطاقة، مما يجعله نموذجًا للمؤسسات الثقافية المستقبلية.",
    museum_impact:
      "من المتوقع أن يعزز هذا المشروع الضخم مكانة مصر كوجهة ثقافية وسياحية رائدة، ويسلط الضوء على الأهمية العالمية للتاريخ المصري. إنه مشروع معلم يجلب التراث المصري القديم إلى العالم بينما يضمن الحفاظ عليه للأجيال القادمة.",
    museum_info:
      "المتحف المصري الكبير هو أكبر متحف أثري في العالم مخصص لحضارة واحدة. يقع بالقرب من أهرامات الجيزة ويضم مجموعة ضخمة من القطع الأثرية المصرية، بما في ذلك كنوز توت عنخ آمون.",
    museum_construction:
      "بدأ البناء في عام 2002، ومن المتوقع أن يكون مركزًا عالميًا للحفاظ على التراث المصري وعرضه باستخدام أحدث التقنيات.",
    history_of_museum: "تاريخ المتحف المصري الكبير",
    great_kings: "ملوك مصر العظماء",

    museum_history: "تاريخ المتحف",
    museum_design:
      "يتميز المتحف بتصميم معماري حديث مستوحى من الحضارة المصرية القديمة ويعد بوابة جديدة لاكتشاف أسرار الفراعنة بطريقة تفاعلية ومتقدمة.",
    museum_facts: "حقائق عن المتحف المصري الكبير",
    artifacts: "القطع الأثرية",
    area: "المساحة بالمتر المربع",
    construction_start: "سنة بدء البناء",
    expected_opening: "سنة الافتتاح المتوقع",
    why_visit: "لماذا زيارة المتحف المصري الكبير؟",
    discover_history: "اكتشاف التاريخ",
    history_description:
      "يحتوي المتحف على أكثر من 100,000 قطعة أثرية نادرة من الحضارة المصرية القديمة.",
    modern_technologies: "التقنيات الحديثة",
    technologies_description:
      "استخدم أحدث تقنيات الواقع المعزز والتفاعلات الرقمية للحصول على تجربة فريدة.",
    exceptional_location: "الموقع الاستثنائي",
    location_description:
      "يقع المتحف بالقرب من أهرامات الجيزة، مما يجعله وجهة مثالية للسياحة والثقافة.",
    special_exhibitions: "المعارض الخاصة",
    exhibitions_description:
      "يستضيف المتحف فعاليات ومعارض مؤقتة تعرض أعظم كنوز مصر عبر العصور.",
    follow_us: "تابعنا",
    call_us: "اتصل بنا",
    developed_by: "© تم التطوير بواسطة عبدالله هاني",
  },
};

// 🔹 Set Language Direction (RTL or LTR)
function setDirection(lang) {
  if (lang === "en") {
    document.documentElement.lang = "ar";
    document.body.dir = "rtl";
  } else {
    document.documentElement.lang = "en";
    document.body.dir = "ltr";
  }
}

// 🔹 Translate Page Content

function translatePage(lang) {
  setDirection(lang);
  const elementsToTranslate = document.querySelectorAll("[data-translate]");
  elementsToTranslate.forEach((element) => {
    const key = element.getAttribute("data-translate");
    if (translationData[lang] && translationData[lang][key]) {
      element.textContent = translationData[lang][key];
    }
  });
}

// 🔹 Language Toggle Button Event
document.querySelectorAll(".lang-btn").forEach((button) => {
  button.addEventListener("click", (event) => {
    const lang = event.target.getAttribute("data-lang");
    translatePage(lang);
  });
});

// Default Language: English
translatePage("en");
