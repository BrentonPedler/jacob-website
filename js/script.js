const sideNav = document.querySelector(".side-nav")
const overlay = document.querySelector(".overlay")
const ham = document.querySelector(".ham")
const menuX = document.querySelector(".menu-x")
const menuItems = document.querySelectorAll(".menu-link")

menuItems.forEach(menuItem => {
  menuItem.addEventListener("click", toggleHamburger)
})

ham.addEventListener("click", toggleHamburger)
menuX.addEventListener("click", toggleHamburger)
overlay.addEventListener("click", toggleHamburger)

function toggleHamburger() {
  overlay.classList.toggle("show-overlay")
  sideNav.classList.toggle("show-nav")
}
