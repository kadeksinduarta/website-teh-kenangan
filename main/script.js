const navbarLink = document.querySelector(".navbar-link");

// ketika menu hamberger di click
document.querySelector("#menu").onclick = () => {
  navbarLink.classList.toggle("active");
};

// click di luar sideber untuk menghilangkan nav nya
const hambergerMenu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!hambergerMenu.contains(e.target) && !navbarLink.contains(e.target)) {
    navbarLink.classList.remove("active");
  }
});

document.querySelector("#twitter").onclick = () => {
  alert("saya sindu arta tidak memiliki twitter");
};

document.querySelector("#buttom").onclick = () => {
  alert("fitur ini tidak berfungsi, kayang ne cobak bangs*t");
};
