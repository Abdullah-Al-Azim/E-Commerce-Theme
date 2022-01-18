// Category show/hide section starts
const shop = document.querySelector(".ecommerce__shop");
const categorySection = document.querySelector(".category__section");

// hide the shop category section when the window is scrolled
window.addEventListener("scroll", (e) => {
  if (window.pageYOffset > 0) {
    categorySection.style.height = 0;
    categorySection.style.opacity = 0;
    categorySection.style.visibility = "hidden";
  }
});

shop.addEventListener("mouseenter", () => {
  categorySection.style.height = "70vh";
  categorySection.style.opacity = 1;
  categorySection.style.visibility = "visible";
});

categorySection.addEventListener("mouseenter", () => {
  categorySection.style.height = "70vh";
  categorySection.style.opacity = 1;
  categorySection.style.visibility = "visible";
});

categorySection.addEventListener("mouseleave", () => {
  categorySection.style.height = 0;
  categorySection.style.opacity = 0;
  categorySection.style.visibility = "hidden";
});

shop.addEventListener("mouseleave", () => {
  categorySection.style.height = 0;
  categorySection.style.opacity = 0;
  categorySection.style.visibility = "hidden";
});
// Category show/hide section ends
