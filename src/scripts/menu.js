const burger = document.getElementById("menu");
const nav = document.getElementById("nav");
if (burger && nav) {
  burger.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("hidden") === false;
    nav.classList.toggle("flex", isOpen);
    burger.setAttribute("aria-expanded", String(isOpen));
  });
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.add("hidden");
      nav.classList.remove("flex");
      burger.setAttribute("aria-expanded", "false");
    });
  });
}
