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

// 🔹 Search & Filter Artifacts
const searchInput = document.getElementById("searchInput");
const eraFilter = document.getElementById("eraFilter");

function filterArtifacts() {
  const searchValue = searchInput.value.toLowerCase();
  const selectedEra = eraFilter.value;
  const artifacts = document.querySelectorAll(".artifact-card, .card");

  artifacts.forEach((artifact) => {
    const title = artifact.querySelector("h3")?.textContent.toLowerCase() || "";
    const era = artifact.getAttribute("data-era") || "ancient"; // افتراضي

    const matchesSearch = title.includes(searchValue);
    const matchesEra = selectedEra === "all" || era === selectedEra;

    artifact.style.display = matchesSearch && matchesEra ? "block" : "none";
  });
}

searchInput.addEventListener("input", filterArtifacts);
eraFilter.addEventListener("change", filterArtifacts);
