window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle
  ('window-scroll', window.scrollY > 0)
}
)

window.addEventListener('scroll', () => {
  document.querySelector('.ineL').classList.toggle
  ('Line', window.scrollY > 1509)
  document.querySelector('.ine2').classList.toggle
  ('Line', window.scrollY > 1909)
  document.querySelector('.ine3').classList.toggle
  ('Line', window.scrollY > 2166)
  document.querySelector('.ine4').classList.toggle
  ('Line', window.scrollY > 2700)
  document.querySelector('.ine5').classList.toggle
  ('Line', window.scrollY > 3094)
  
  
}
)

// window.scrollBy;
// alert(window.scrollY);