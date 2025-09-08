/ Sample products (you can replace with your own)
const products = [
  {
    name: "Kids Fashion Dress",
    price: "₦15,000",
    image: "https://source.unsplash.com/400x400/?kids,clothes"
  },
  {
    name: "Men’s T-Shirt",
    price: "₦10,000",
    image: "https://source.unsplash.com/400x400/?mens,tshirt"
  },
  {
    name: "Women’s Handbag",
    price: "₦25,000",
    image: "https://source.unsplash.com/400x400/?handbag"
  },
  {
    name: "Sneakers",
    price: "₦18,000",
    image: "https://source.unsplash.com/400x400/?sneakers"
  }
];

// Function to display products
function loadProducts() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.price}</p>
      <button>Add to Cart</button>
    `;

    productList.appendChild(card);
  });
}

// Run function when page loads
document.addEventListener("DOMContentLoaded", loadProducts);
