// Farm Direct homepage interactions.
// This file uses plain JavaScript; no framework or server is needed yet.

const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector("#primary-nav");

if (menuToggle && primaryNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = primaryNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close the mobile menu after a navigation link is selected.
  primaryNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      primaryNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const searchInput = document.querySelector("#product-search");
const filterButtons = document.querySelectorAll("[data-filter]");
const productCards = document.querySelectorAll(".product-card");
const emptyState = document.querySelector("#empty-state");
let activeCategory = "All";

function updateProducts() {
  const searchTerm = searchInput ? searchInput.value.trim().toLowerCase() : "";
  let visibleCount = 0;

  productCards.forEach((card) => {
    const category = card.dataset.category || "";
    const name = card.dataset.name || "";
    const matchesCategory = activeCategory === "All" || category === activeCategory;
    const matchesSearch = name.toLowerCase().includes(searchTerm) ||
      category.toLowerCase().includes(searchTerm);
    const shouldShow = matchesCategory && matchesSearch;

    card.hidden = !shouldShow;
    if (shouldShow) visibleCount += 1;
  });

  if (emptyState) emptyState.hidden = visibleCount !== 0;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.filter || "All";

    filterButtons.forEach((item) => {
      const selected = item === button;
      item.classList.toggle("is-active", selected);
      item.setAttribute("aria-pressed", String(selected));
    });

    updateProducts();
  });
});

if (searchInput) {
  searchInput.addEventListener("input", updateProducts);
}

// Keep the footer year current automatically.
const yearElement = document.querySelector("#current-year");
if (yearElement) {
  yearElement.textContent = String(new Date().getFullYear());
}

// Category cards select the matching product filter.
document.querySelectorAll("[data-category-link]").forEach((link) => {
  link.addEventListener("click", () => {
    const category = link.dataset.categoryLink;
    const matchingButton = Array.from(filterButtons).find(
      (button) => button.dataset.filter === category
    );

    if (matchingButton) matchingButton.click();
  });
});
