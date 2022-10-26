
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");
// close
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready)
}
else {
  ready();
}

function ready() {
  //add to your ticket
  var addTicket = document.getElementsByClassName("addTicket")
  for (var i = 0; i < addTicket.length; i++) {
    var button = addTicket[i]
    button.addEventListener("click", addTicketClicked);
  }
}

function addTicketClicked(event) {
  var button = event.target
  var shopProducts = button.parentElement
  var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
  var price = shopProducts.getElementsByClassName("price")[0].innerText;
  var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
  var ticketJumlah = shopProducts.getElementsByClassName("ticket-quantity")[0].innerText;
  
  addProductToCart(title, price, productImg, ticketJumlah);
 
}

function addProductToCart(title, price, productImg, ticketJumlah){
  
 const titlePrint = document.getElementsByClassName("cart-product-title");
 const pricePrint = document.getElementsByClassName("cart-price");
 const imgPrint = document.getElementsByClassName("cart-img");
 const ticket = document.getElementsByClassName("ticket-jumlah");
 const ticket2 = document.getElementsByClassName("ticket-jumlah");
  
  titlePrint[0].innerHTML = title;
  pricePrint[0].innerHTML = price;
  imgPrint[0].src = productImg;
  ticket[0].innerHTML = ticketJumlah;
  ticket2[0].innerHTML = ticketJumlah;
 
}
// update total

function updatetotal() {
     var jumlahHarga = document.getElementById("total-price");
     jumlahHarga[0].innerText = "Rp " + total;
}

// INCREMENT DECREMENT TICKET
let stocky1 = document.getElementById("stock1")
let quantityTicket1 = document.getElementById("ticket1")
let totalAkhir = document.getElementById("total-price")
let setZero = document.getElementsByClassName("ticket-quantity")[0]

let quantity = 0
let stock = 20

function increment()
{
        if(stock>0)
        {
            quantity = quantity + 1;
            stock = stock - 1 ;
        }
        else
        {
        quantity = quantity - 0;
        stock = stock + 0;
        }
 
        quantityTicket1.innerHTML ="TICKET:"+ quantity
        total = quantity * 150000
}

function decrement()
{
  
      if (quantity>0)
      {
        quantity = quantity - 1;
        stock = stock + 1;
      } 
      else
      {
        quantity = quantity - 0;
        stock = stock + 0;
      }

  quantityTicket1.innerHTML ="TICKET:"+ quantity
  total = quantity * 150000
}

let stocky2 = document.getElementById("stock2")
let quantityTicket2 = document.getElementById("ticket2")

let quantity2 = 0
let stock2 = 30

function increment2()
{
        if(stock>0)
        {
            quantity2 = quantity2 + 1;
            stock2 = stock2 - 1 ;
        }
        else
        {
        quantity2 = quantity2 - 0;
        stock2 = stock2 + 0;
        }
        quantityTicket2.innerHTML ="TICKET:"+ quantity2
        total = quantity2 * 170000
}

function decrement2()
{
  
      if (quantity2>0)
      {
        quantity2 = quantity2 - 1;
        stock2 = stock2 + 1;
      }
      else
      {
        quantity2 = quantity2 - 0;
        stock2 = stock2 + 0;
      }
  quantityTicket2.innerHTML ="TICKET:"+ quantity2
  total = quantity2 * 170000
}



let stocky3 = document.getElementById("stock3")
let quantityTicket3 = document.getElementById("ticket3")

let quantity3 = 0
let stock3 = 40

function increment3()
{
        if(stock>0)
        {
            quantity3 = quantity3 + 1;
            stock3 = stock3 - 1 ;
        }
        else
        {
        quantity3 = quantity3 - 0;
        stock3 = stock3 + 0;
        }
        quantityTicket3.innerHTML ="TICKET:"+ quantity3
        total = quantity3 * 100000
}

function decrement3()
{
  
      if (quantity3>0)
      {
        quantity3 = quantity3- 1;
        stock3 = stock3 + 1;
      }
      else
      {
        quantity3 = quantity3 - 0;
        stock3 = stock3 + 0;
      }
  quantityTicket3.innerHTML ="TICKET:"+ quantity3
  total = quantity3 * 100000
}

let stocky4 = document.getElementById("stock4")
let quantityTicket4 = document.getElementById("ticket4")

let quantity4 = 0
let stock4 = 50

function increment4()
{
        if(stock>0)
        {
            quantity4 = quantity4 + 1;
            stock4 = stock4 - 1 ;
        }
        else
        {
        quantity4 = quantity4 - 0;
        stock4 = stock4 + 0;
        }
        quantityTicket4.innerHTML ="TICKET:"+ quantity4
        total = quantity4 * 200000
}

function decrement4()
{
  
      if (quantity4>0)
      {
        quantity4 = quantity4- 1;
        stock4 = stock4 + 1;
      }
      else
      {
        quantity4 = quantity4 - 0;
        stock4 = stock4 + 0;
      }
  quantityTicket4.innerHTML ="TICKET:"+ quantity4
  total = quantity4 * 200000
}


let stocky5 = document.getElementById("stock5")
let quantityTicket5 = document.getElementById("ticket5")

let quantity5 = 0
let stock5 = 60

function increment5()
{
        if(stock>0)
        {
            quantity5 = quantity5 + 1;
            stock5 = stock5 - 1 ;
        }
        else
        {
        quantity5 = quantity5 - 0;
        stock5 = stock5 + 0;
        }
        quantityTicket5.innerHTML ="TICKET:"+ quantity5
        total = quantity5 * 300000
}

function decrement5()
{
  
      if (quantity5>0)
      {
        quantity5 = quantity5- 1;
        stock5 = stock5 + 1;
      }
      else
      {
        quantity5 = quantity5 - 0;
        stock5 = stock5 + 0;
      }
  quantityTicket5.innerHTML ="TICKET:"+ quantity5
  total = quantity5 * 300000
}


let stocky6 = document.getElementById("stock6")
let quantityTicket6 = document.getElementById("ticket6")

let quantity6 = 0
let stock6 = 70

function increment6()
{
        if(stock6>0)
        {
            quantity6 = quantity6 + 1;
            stock6 = stock6 - 1 ;
        }
        else
        {
        quantity6 = quantity6 - 0;
        stock6 = stock6 + 0;
        }
        quantityTicket6.innerHTML ="TICKET:"+ quantity6
        total = quantity6 * 250000
}

function decrement6()
{
  
      if (quantity6>0)
      {
        quantity6 = quantity6- 1;
        stock6 = stock6 + 1;
      }
      else
      {
        quantity6 = quantity6 - 0;
        stock6 = stock6 + 0;
      }
  quantityTicket6.innerHTML ="TICKET:"+ quantity6
  total = quantity6 * 250000
}


let stocky7 = document.getElementById("stock7")
let quantityTicket7 = document.getElementById("ticket7")

let quantity7 = 0
let stock7 = 80

function increment7()
{
        if(stock7>0)
        {
            quantity7 = quantity7 + 1;
            stock7 = stock7 - 1 ;
        }
        else
        {
        quantity7 = quantity7 - 0;
        stock7 = stock7 + 0;
        }
        quantityTicket7.innerHTML ="TICKET:"+ quantity7
        total = quantity7 * 350000
}

function decrement7()
{
  
      if (quantity7>0)
      {
        quantity7 = quantity7- 1;
        stock7 = stock7 + 1;
      }
      else
      {
        quantity7 = quantity7 - 0;
        stock7 = stock7 + 0;
      }
  quantityTicket7.innerHTML ="TICKET:"+ quantity7
  total = quantity7 * 350000
}


let stocky8 = document.getElementById("stock8")
let quantityTicket8 = document.getElementById("ticket8")

let quantity8 = 0
let stock8 = 90

function increment8()
{
        if(stock8>0)
        {
            quantity8 = quantity8 + 1;
            stock8 = stock8 - 1 ;
        }
        else
        {
        quantity8 = quantity8 - 0;
        stock8 = stock8 + 0;
        }
        quantityTicket8.innerHTML ="TICKET:"+ quantity8
        total = quantity8 * 245000
}

function decrement8()
{
  
      if (quantity8>0)
      {
        quantity8 = quantity8- 1;
        stock8 = stock8 + 1;
      }
      else
      {
        quantity8 = quantity8 - 0;
        stock8 = stock8 + 0;
      }
  quantityTicket8.innerHTML ="TICKET:"+ quantity8
  total = quantity8 * 245000
}


let stocky9 = document.getElementById("stock9")
let quantityTicket9 = document.getElementById("ticket9")

let quantity9 = 0
let stock9 = 100

function increment9()
{
        if(stock9>0)
        {
            quantity9 = quantity9 + 1;
            stock9 = stock9 - 1 ;
        }
        else
        {
        quantity9 = quantity9 - 0;
        stock9 = stock9 + 0;
        }
        quantityTicket9.innerHTML ="TICKET:"+ quantity9
        total = quantity9 * 55000
}

function decrement9()
{
  
      if (quantity9>0)
      {
        quantity9 = quantity9- 1;
        stock9 = stock9 + 1;
      }
      else
      {
        quantity9 = quantity9 - 0;
        stock9 = stock9 + 0;
      }
  quantityTicket9.innerHTML ="TICKET:"+ quantity9
  total = quantity9 * 55000
}

function submit(){
 
  if(quantity !== 0 ){
    quantity = 0
    setZero.innerHTML = "TICKET:"+ quantity
  }
  else if ( quantity2 !== 0)
  {
    quantity2 = 0
  setZero.innerHTML = "TICKET:"+ quantity2
  }
  else if ( quantity3 !== 0)
  {
    quantity3 = 0
  setZero.innerHTML = "TICKET:"+ quantity3
  }
  else if ( quantity4 !== 0)
  {
    quantity4= 0
  setZero.innerHTML = "TICKET:"+ quantity4
  }
  else if ( quantity5 !== 0)
  {
    quantity5 = 0
  setZero.innerHTML = "TICKET:"+ quantity5
  }
  else if ( quantity6 !== 0)
  {
    quantity6 = 0
  setZero.innerHTML = "TICKET:"+ quantity6
  }
  else if ( quantity7 !== 0)
  {
    quantity7 = 0
  setZero.innerHTML = "TICKET:"+ quantity7
  }
  else if ( quantity8 !== 0)
  {
    quantity8 = 0
  setZero.innerHTML = "TICKET:"+ quantity8
  }
  else if ( quantity9 !== 0)
  {
    quantity9 = 0
  setZero.innerHTML = "TICKET:"+ quantity9
  }
  stocky1.innerHTML ="STOCK:"+ stock
  stocky2.innerHTML ="STOCK:"+ stock2
  stocky3.innerHTML ="STOCK:"+ stock3
  stocky4.innerHTML ="STOCK:"+ stock4
  stocky5.innerHTML ="STOCK:"+ stock5
  stocky6.innerHTML ="STOCK:"+ stock6
  stocky7.innerHTML ="STOCK:"+ stock7
  stocky8.innerHTML ="STOCK:"+ stock8
  stocky9.innerHTML ="STOCK:"+ stock9
  totalAkhir.innerHTML = total
}








