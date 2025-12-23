// ===== PAGE LOADER =====
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.opacity = "0";

  setTimeout(() => {
    loader.style.display = "none";
  }, 500);
});

// ===== SCROLL REVEAL + ACTIVE NAV =====
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

function handleScroll() {
  let currentSectionId = "";

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();

    // Section is active when its center is visible
    if (
      rect.top <= window.innerHeight / 2 &&
      rect.bottom >= window.innerHeight / 2
    ) {
      currentSectionId = section.id;
    }

    // Reveal animation
    if (rect.top < window.innerHeight - 120) {
      section.classList.add("show");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${currentSectionId}`) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", handleScroll);
handleScroll(); // run once on page load
