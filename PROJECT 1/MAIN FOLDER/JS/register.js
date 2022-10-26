window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle
  ('window-scroll', window.scrollY > 0)
}
)

const form = document.querySelector('form');

form.addEventListener('submit', (e) =>{
  e.preventDefault();
  const fd = new FormData(form);
  const obj = Object.fromEntries(fd);
  
  console.log(obj);

  const json =JSON.stringify(obj);
  localStorage.setItem('form', json);

 location.href="BookingTicket.html";
})




