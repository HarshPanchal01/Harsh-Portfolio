const yearEl = document.getElementById("year");
const scrollTopButton = document.querySelector(".scroll-top");
const themeToggleInput = document.getElementById("theme-toggle-input");
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
);

// Dark mode functionality
const getPreferredTheme = () => {
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme) {
    return storedTheme;
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const setTheme = (theme) => {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  if (themeToggleInput) {
    themeToggleInput.checked = theme === "dark";
  }
};

const toggleTheme = () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  setTheme(newTheme);
};

// Initialize theme
setTheme(getPreferredTheme());

// Theme toggle event listener
if (themeToggleInput) {
  themeToggleInput.addEventListener("change", toggleTheme);
}

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (scrollTopButton) {
  const toggleScrollTop = () => {
    if (window.scrollY > 320) {
      scrollTopButton.classList.add("scroll-top--visible");
    } else {
      scrollTopButton.classList.remove("scroll-top--visible");
    }
  };

  window.addEventListener("scroll", toggleScrollTop, { passive: true });
  toggleScrollTop();

  scrollTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion.matches ? "auto" : "smooth",
    });
  });
}
