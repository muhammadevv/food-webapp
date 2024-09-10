const categoryButtons = document.querySelectorAll('.products-category_item')
const paymentAcc = document.querySelector('.payment-accardion')
const paymentButtons = document.querySelectorAll('.payment-button')
const paymentBtn = document.querySelector('.payment-buttons')
const paymentIcon = document.querySelector('.payment-icon')

const swiper = new Swiper(".banner", {
  spaceBetween: 12,
  centeredSlides: false,
  speed: 1000,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  }
})

paymentButtons.forEach((item) => item.addEventListener('click', () => {
  paymentButtons.forEach((el) => el.classList.remove('active'))
  item.classList.add('active')
}))

categoryButtons.forEach((item) => item.addEventListener('click', () => {
  categoryButtons.forEach((el) => el.classList.remove('active'))
  item.classList.add('active')
}))

paymentAcc.addEventListener('click', () => {
  paymentIcon.classList.toggle('active')
  paymentBtn.classList.toggle('active')
})