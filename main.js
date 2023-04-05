const menu_on = document.querySelector(".menu-on");
const menu_off = document.querySelector(".menu-off");

const clicked = (e) => {
  e.preventDefault();
  document.querySelector(".menubar").style.display = "block";
  document.querySelector(".menu-on").style.display = "none";
  document.querySelector(".menu-off").style.display = "block";
};

menu_on.addEventListener("click", clicked);
menu_off.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".menubar").style.display = "none";
  document.querySelector(".menu-on").style.display = "block";
  document.querySelector(".menu-off").style.display = "none";
});
