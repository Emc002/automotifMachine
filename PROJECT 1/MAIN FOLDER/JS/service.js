window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle
  ('window-scroll', window.scrollY > 0)
}
)

window.addEventListener('scroll', () => {
  document.querySelector('.lineOne').classList.toggle
  ('lineOneAnimation', window.scrollY > 0)
  document.querySelector('.lineTwo').classList.toggle
  ('lineTwoAnimation', window.scrollY > 600)
  document.querySelector('.edu2').classList.toggle
  ('imageTwo', window.scrollY > 600)
  document.querySelector('.lineThree').classList.toggle
  ('lineThreeAnimation', window.scrollY > 900)
  document.querySelector('.edu3').classList.toggle
  ('imageThree', window.scrollY > 900)
  document.querySelector('.lineFour').classList.toggle
  ('lineFourAnimation', window.scrollY > 1137)
  document.querySelector('.edu4').classList.toggle
  ('imageFour', window.scrollY > 1137)
  document.querySelector('.lineFive').classList.toggle
  ('lineFiveAnimation', window.scrollY > 1437)
  document.querySelector('.edu5').classList.toggle
  ('imageFive', window.scrollY > 1437)
  document.querySelector('.lineSix').classList.toggle
  ('lineSixAnimation', window.scrollY > 1632)
  document.querySelector('.edu6').classList.toggle
  ('imageSix', window.scrollY > 1632)
}
)

function educationLink()
{
     location.href = "Education.html";
} 

function paintingLink()
{
     location.href = "Painting.html";
} 


function serviceLink()
{
     location.href = "serviceCars.html";
} 


function carsLink()
{
     location.href = "Cars.html";
} 


function sparePartLink()
{
     location.href = "SparePart.html";
} 


function communityLink()
{
     location.href = "Community.html";
} 


const btn1 = document.querySelector('.btn1');
btn1.onclick = educationLink;

const btn2 = document.querySelector('.btn2');
btn2.onclick = paintingLink;

const btn3 = document.querySelector('.btn3');
btn3.onclick =serviceLink ;


const btn4 = document.querySelector('.btn4');
btn4.onclick =carsLink ;

const btn5 = document.querySelector('.btn5');
btn5.onclick = sparePartLink;

const btn6 = document.querySelector('.btn6');
btn6.onclick = communityLink;




// window.scrollBy;
// alert(window.scrollY);