/* =========================================================
   Mariam Mohamed Nasr Shabaka - 225108699
   FT-WEB-101 | Field Training I | Task 1
   Only job: add or remove the "dark" class on <body>.
   All colors live in css/style.css.
   ========================================================= */

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});
