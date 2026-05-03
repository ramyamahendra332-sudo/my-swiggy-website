function addToCart(item){
let cart=JSON.parse(localStorage.getItem("cart"))||[];
cart.push(item);
localStorage.setItem("cart",JSON.stringify(cart));
alert(item+" added");
}

function searchRestaurants(){
let input=document.getElementById("search").value.toLowerCase();
let cards=document.getElementsByClassName("card");

for(let i=0;i<cards.length;i++){
let name=cards[i].getElementsByTagName("h3")[0].innerText.toLowerCase();

cards[i].style.display=name.includes(input)?"":"none";
}
}

window.onload=function(){
let cartList=document.getElementById("cartList");
if(cartList){
let cart=JSON.parse(localStorage.getItem("cart"))||[];

cart.forEach(item=>{
let li=document.createElement("li");
li.textContent=item;
cartList.appendChild(li);
});
}
}

function checkout(){
alert("Order placed successfully!");
localStorage.clear();
location.reload();
}
