$(document).ready(function() {
    $('[type="tel"]').mask('+38(000)-00-00-000')
    $('#password').hideShowPassword({
        innerToggle: true
  });
})

const btnHistoryBack = document.querySelector('#history-back');
const btnHistory =()=> window.history.back();
if (btnHistoryBack) btnHistoryBack.addEventListener('click', btnHistory)

window.addEventListener("scroll", function() {
  const header = document.querySelector("header");
  if (window.scrollY > header.offsetTop) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    clickable: true,
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});