// order.js

let cart = [];
let total = 0;

function addToCart(name, price) {
  const discountedPrice = price * 0.8; // 20% OFF
  cart.push({ name, price: discountedPrice });

  renderCart();
}

function renderCart() {
  const cartList = document.getElementById('cartList');
  const totalAmount = document.getElementById('totalAmount');

  cartList.innerHTML = '';
  total = 0;

  cart.forEach(item => {
    const li = document.createElement('li');
    li.className = 'flex justify-between items-center border-b pb-2';
    li.innerHTML = `<span>${item.name}</span> <span>₹${item.price.toFixed(0)}</span>`;
    cartList.appendChild(li);

    total += item.price;
  });

  totalAmount.innerText = total.toFixed(0);
}

function confirmOrder() {
  if (cart.length === 0) {
    alert("Your cart is empty! Please add some items.");
    return;
  }
  // Redirect to success page
  window.location.href = "success.html";
}

