const swiper = new Swiper(".banner", {
  spaceBetween: 12,
  centeredSlides: false,
  speed: 1000,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
});


const categoryButtons = document.querySelectorAll('.products-category_item')

function removeActiveAll() {
  categoryButtons.forEach((item) =>
    item.classList.remove('active')
  )
}

categoryButtons.forEach((item) => item.addEventListener('click', () => {
  removeActiveAll()
  item.classList.add('active')
}))