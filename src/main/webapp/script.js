const prices={
"Pizza Hut":299,
"KFC":249,
"Burger King":199,
"Dominos":279
};

function addToCart(item){
let cart=JSON.parse(localStorage.getItem("cart"))||[];
cart.push(item);
localStorage.setItem("cart",JSON.stringify(cart));
alert(item+" added");
}

window.onload=function(){
renderCart();
}

function renderCart(){
let container=document.getElementById("cartContainer");
if(!container) return;

let cart=JSON.parse(localStorage.getItem("cart"))||[];
let total=0;

container.innerHTML="";

cart.forEach(item=>{
total+=prices[item];

container.innerHTML+=`
<div class="cart-item">
<h3>${item}</h3>
<p>₹${prices[item]}</p>
</div>
`;
});

document.getElementById("total").innerText=total;
}

function payNow(){
alert("Payment Successful. Order placed!");
localStorage.clear();
location.reload();
}

function searchRestaurant(){
let input=document.getElementById("search").value.toLowerCase();
let cards=document.getElementsByClassName("card");

for(let i=0;i<cards.length;i++){
let name=cards[i].getElementsByTagName("h3")[0].innerText.toLowerCase();
cards[i].style.display=name.includes(input)?"block":"none";
}
}
