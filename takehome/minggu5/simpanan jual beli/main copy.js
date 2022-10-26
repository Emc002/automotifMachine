// cart
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");
// open cart
cartIcon.onclick = () => {
  cart.classList.add("active");
}
// close cart
closeCart.onclick = () => {
  cart.classList.remove("active");
}

// cart working js

if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready)
}
else {
  ready();
}
// making function

function ready() {
  //remove item from cart
  var removeCartButton = document.getElementsByClassName("cart-remove");
  console.log(removeCartButton);

  for (var i = 0; i < removeCartButton.length; i++) {
    var button = removeCartButton[i]
    button.addEventListener("click", removeCartItem)
  }
  //quantity change

  var quantityInputs = document.getElementsByClassName("cart-quantity")
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i]
    input.addEventListener("change", quantityChanged);
  }



  //add to cart
  var addCart = document.getElementsByClassName("add-cart")
  for (var i = 0; i < addCart.length; i++) {
    var button = addCart[i]
    button.addEventListener("click", addCartClicked);
  }
}





// remove items from Cart
function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updatetotal();
}
//QUANTITY CHANGES
function quantityChanged(event) {
  var input = event.target
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1
  }
  updatetotal()
}
//add To Cart
function addCartClicked(event) {
  var button = event.target
  var shopProducts = button.parentElement
  var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
  var price = shopProducts.getElementsByClassName("price")[0].innerText;
  var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
  var ticketJumlah = shopProducts.getElementsByClassName("ticket-quantity")[0].innerText;
  
  addProductToCart(title, price, productImg, ticketJumlah);
  //write the damn code in here
  // updatetotal();
}



function addProductToCart(title, price, productImg, ticketJumlah){

  console.log(title);
 const titlePrint = document.getElementsByClassName("cart-product-title");
 const pricePrint = document.getElementsByClassName("cart-price");
 const imgPrint = document.getElementsByClassName("cart-img");
 const ticket = document.getElementsByClassName("ticket-jumlah");
  
  titlePrint[0].innerHTML = title;
  pricePrint[0].innerHTML = price;
  imgPrint[0].src = productImg;
  ticket[0].innerHTML = ticketJumlah;
 
}




// update total

// function updatetotal() {
//   var cartContent = document.getElementsByClassName("cart-content")[0];
//   var cartBoxes = cartContent.getElementsByClassName("cart-box");
//   var total = 0;
//   for (var i = 0; i < cartBoxes.length; i++) {
//     var cartBox = cartBoxes[i];
//     var priceElement = cartBox.getElementsByClassName("cart-price")[0];
//     var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
//     var price = parseFloat(priceElement.innerText.replace("Rp", ""));
//     var quantity = quantityElement.value
//     total = total + price * quantity;
//     document.getElementsByClassName("total-price")[0].innerText = "Rp" + total;
//   }
// }


// INCREMENT DECREMENT TICKET
let stocky1 = document.getElementById("stock1")
let quantityTicket1 = document.getElementById("ticket1")

let quantity = 0
let stock = 42
function increment()
{
  if(stock>0){
  quantity = quantity + 1;
  stock = stock - 1 ;
}
else{
  quantity = quantity - 0;
  stock = stock + 0;
}
  stocky1.innerHTML = stock
  quantityTicket1.innerHTML = quantity
  // console.log(stock);
  // console.log(quantity);
}

function decrement(){
  
  if (quantity>0){
  quantity = quantity - 1;
  stock = stock + 1;
}
else{
  quantity = quantity - 0;
  stock = stock + 0;
}
  stocky1.innerHTML = stock
  quantityTicket1.innerHTML = quantity
  // console.log(stock);
  // console.log(quantity);
}





































// document.getElementById("count-el").innerText ="hahahah " + myDogAge;

// function addProductToCart(title, price, productImg) {


//   var cartShopBox = document.createElement('div')
//       cartShopBox.classList.add("cart-box")
 
//   var cartItems = document.getElementsByClassName("cart-content")
//   console.log(cartItems);
//   // var cartItemNames = cartItems.getElementsByClassName("cart-product-title")
//   // var cartItemPrice = cartItems.getElementsByClassName("cart-product-price")
//   // var cartItemImg = cartItems.getElementsByClassName("cart-product-img")

//   // for (var i = 0; i < cartItemNames.length; i++) {
//   //   alert("Kamu Sudah Menyimpan ticket ini di keranjang ticket ");
//   //   return;
//   }
// }

// var cartBoxContent = '
// <div class="cart-box">
//             <img src="gambar/design.jpg" alt="" class="cart-img">
//             <div class="detail-box">
//               <div class="cart-product-title">Event Design</div>
//               <div class="cart-price">Rp250000</div>
//               <input type="number" value="1" class="cart-quantity">
//             </div>
//             <!-- REMOVE CART -->
//             <i class='bx bx-trash-alt cart-remove'></i>
//           </div> 








// cartShopBox.innerHTML = cartBoxContent
// cartItems.append(cartBoxContent)
// cartShopBox.getElementsByClassName('cart-remove') [0].addEventListener('click', removeCartItem );
// cartShopBox.getElementsByClassName('cart-quantity') [0].addEventListener('change', quantityChanged);














