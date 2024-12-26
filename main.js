const navContainer = document.querySelector("#nav-container")
const openNavBtn = document.querySelector("#nav-btn")
const icon = document.querySelector("#nav-icon")

function toggleMenu() {
  navContainer.classList.toggle("show-nav-items")
  openNavBtn.classList.toggle("close")

  if(openNavBtn.classList.contains("close")) {
    icon.classList.remove("bx-menu")
    icon.classList.add("bx-x")
  } else {
    icon.classList.add("bx-menu")
    icon.classList.remove("bx-x")
  }
}

openNavBtn.addEventListener("click", () => {toggleMenu()})

let swiper = new Swiper(".mySwiper", {
  slidesPerView :1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints : {
    600: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
})