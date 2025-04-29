const items = [
  { id: 1, name: "Italian Pasta", price: 400, img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092" },
  { id: 2, name: "Gourmet Burger", price: 350, img: "https://images.unsplash.com/photo-1604908177523-3940f19c1a8e" },
  { id: 3, name: "Premium Sushi", price: 750, img: "https://images.unsplash.com/photo-1576402187874-2b47a90e3f2c" },
  { id: 4, name: "Vegan Salad Bowl", price: 300, img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c" },
  { id: 5, name: "Chocolate Lava Cake", price: 220, img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587" },
  { id: 6, name: "Fresh Lemonade", price: 120, img: "https://images.unsplash.com/photo-1562059390-a761a084768e" }
];

const menuContainer = document.getElementById('menuItems');
const cartItemsContainer = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartCount = document.getElementById('cartCount');
const cartDropdown = document.getElementById('cartDropdown');
const cartBtn = document.getElementById('cartBtn');

let cart = [];

function renderMenu() {
  menuContainer.innerHTML = "";
  items.forEach(item => {
    menuContainer.innerHTML += `
      <div class="bg-white p-6 rounded-lg shadow-md hover:scale-105 transition text-center">
        <img src="${item.img}" alt="${item.name}" class="rounded-md mb-4 h-48 w-full object-cover">
        <h4 class="text-xl font-semibold mb-2">${item.name}</h4>
        <p class="text-gray-600 mb-2">₹${item.price} <span class="line-through text-gray-400 text-sm ml-1">₹${(item.price * 1.25).toFixed(0)}</span></p>
        <button onclick="addToCart(${item.id})" class="mt-4 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition">Add to Cart</button>
      </div>
    `;
  });
}

function addToCart(id) {
  const selectedItem = items.find(item => item.id === id);
  cart.push(selectedItem);
  updateCart();
}

function updateCart() {
  cartItemsContainer.innerHTML = "";
  let total = 0;
  cart.forEach(item => {
    total += item.price;
    cartItemsContainer.innerHTML += `<li class="flex justify-between text-sm">${item.name} <span>₹${item.price}</span></li>`;
  });
  cartTotal.innerText = total;
  cartCount.innerText = cart.length;
}

cartBtn.addEventListener('click', () => {
  cartDropdown.classList.toggle('hidden');
});

renderMenu();


