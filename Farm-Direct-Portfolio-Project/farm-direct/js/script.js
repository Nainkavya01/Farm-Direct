// Farm Direct: accessible navigation, product discovery and demo basket.
const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector("#primary-nav");
if (menuToggle && primaryNav) {
  menuToggle.addEventListener("click", () => {
    const open = primaryNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(open));
  });
  primaryNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    primaryNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  }));
}

const searchInput = document.querySelector("#product-search");
const filterButtons = [...document.querySelectorAll("[data-filter]")];
const productCards = [...document.querySelectorAll(".product-card")];
const emptyState = document.querySelector("#empty-state");
const resultsCount = document.querySelector("#results-count");
let activeCategory = "All";

function updateProducts() {
  const term = searchInput?.value.trim().toLowerCase() || "";
  let count = 0;
  productCards.forEach(card => {
    const category = card.dataset.category || "";
    const name = card.dataset.name || "";
    const visible = (activeCategory === "All" || category === activeCategory) &&
      (name.toLowerCase().includes(term) || category.toLowerCase().includes(term));
    card.hidden = !visible;
    if (visible) count++;
  });
  if (emptyState) emptyState.hidden = count !== 0;
  if (resultsCount) resultsCount.textContent = `Showing ${count} ${count === 1 ? "sample item" : "sample items"}`;
}
filterButtons.forEach(button => button.addEventListener("click", () => {
  activeCategory = button.dataset.filter || "All";
  filterButtons.forEach(item => {
    const selected = item === button;
    item.classList.toggle("is-active", selected);
    item.setAttribute("aria-pressed", String(selected));
  });
  updateProducts();
}));
searchInput?.addEventListener("input", updateProducts);
document.querySelectorAll("[data-category-link]").forEach(link => link.addEventListener("click", () => {
  const button = filterButtons.find(item => item.dataset.filter === link.dataset.categoryLink);
  button?.click();
}));

const year = document.querySelector("#current-year");
if (year) year.textContent = String(new Date().getFullYear());

// Prices are intentionally illustrative and clearly labelled as demo data.
const priceByName = {
  "Farm-fresh tomatoes": 40,
  "Sweet red apples": 120,
  "Whole wheat grain": 35,
  "Fresh green spinach": 25
};
const basket = new Map();
const panel = document.querySelector("#cart-panel");
const backdrop = document.querySelector("#cart-backdrop");
const cartItems = document.querySelector("#cart-items");
const cartCount = document.querySelector("#cart-count");
const subtotal = document.querySelector("#cart-subtotal");
const live = document.querySelector("#cart-live");

function openCart() {
  panel?.classList.add("is-open");
  panel?.setAttribute("aria-hidden", "false");
  if (backdrop) backdrop.hidden = false;
  document.body.style.overflow = "hidden";
}
function closeCart() {
  panel?.classList.remove("is-open");
  panel?.setAttribute("aria-hidden", "true");
  if (backdrop) backdrop.hidden = true;
  document.body.style.overflow = "";
}
function renderCart() {
  const quantity = [...basket.values()].reduce((sum, item) => sum + item.quantity, 0);
  const total = [...basket.values()].reduce((sum, item) => sum + item.price * item.quantity, 0);
  if (cartCount) cartCount.textContent = quantity;
  if (subtotal) subtotal.textContent = `₹${total}`;
  if (!cartItems) return;
  if (!basket.size) {
    cartItems.innerHTML = '<p class="cart-empty">Your basket is empty. Add something fresh.</p>';
  } else {
    cartItems.innerHTML = [...basket.entries()].map(([name, item]) =>
      `<div class="cart-line"><div><strong>${name}</strong><small>₹${item.price} · Qty ${item.quantity}</small></div><div><strong>₹${item.price * item.quantity}</strong><button type="button" data-remove="${name}">Remove</button></div></div>`
    ).join("");
  }
}
document.querySelectorAll("[data-add]").forEach(button => button.addEventListener("click", () => {
  const name = button.dataset.add;
  if (!name || !priceByName[name]) return;
  const item = basket.get(name) || { price: priceByName[name], quantity: 0 };
  item.quantity++;
  basket.set(name, item);
  renderCart();
  if (live) live.textContent = `${name} added to basket`;
  openCart();
}));
cartItems?.addEventListener("click", event => {
  const button = event.target.closest("[data-remove]");
  if (!button) return;
  basket.delete(button.dataset.remove);
  renderCart();
});
document.querySelector("#cart-trigger")?.addEventListener("click", openCart);
document.querySelector("#cart-close")?.addEventListener("click", closeCart);
backdrop?.addEventListener("click", closeCart);
document.addEventListener("keydown", event => { if (event.key === "Escape") closeCart(); });
document.querySelector("#demo-checkout")?.addEventListener("click", () => {
  if (live) live.textContent = "This is a portfolio demo. Checkout and payment are not connected.";
  alert("Portfolio demo only: checkout, payment and order placement are not connected.");
});
renderCart();
