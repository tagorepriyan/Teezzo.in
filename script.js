// script.js

// Toggle Mobile Navigation
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}

// Dynamic Product Load
const products = [
    { name: "T-Shirt", price: "Rs. 349", image: "t-shirt.webp" },
    { name: "Hoodie", price: "Rs. 599", image: "Hoodie.webp" },
    { name: "Cargo", price: "Rs. 499", image: "Cargo.webp" },

];

const productGrid = document.querySelector(".product-grid");

products.forEach(product => {
    const productCard = document.createElement("div");
    productCard.classList.add("product");

    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        <button class="buy-btn">Buy Now</button>
    `;

    productGrid.appendChild(productCard);
});

// Scroll to Top Button
const scrollToTopBtn = document.createElement("button");
scrollToTopBtn.innerText = "↑";
scrollToTopBtn.classList.add("scroll-to-top");

document.body.appendChild(scrollToTopBtn);

scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});


// Featured Collections
const collections = [
    { name: "Streetwear Edition", image: "tshirt 4.png" },
    { name: "Techwear Essentials", image: "tshirt 1.png" },
    { name: "Luxury Minimalism", image: "tshirt 2.png" },
    { name: "Trendy Shoes", image: "shoes 2.png" },
];

const collectionGrid = document.querySelector(".collection-grid");

collections.forEach(collection => {
    const collectionItem = document.createElement("div");
    collectionItem.classList.add("collection-item");

    collectionItem.innerHTML = `
        <img src="${collection.image}" alt="${collection.name}" />
        <h3>${collection.name}</h3>
    `;

    collectionGrid.appendChild(collectionItem);
});

// Customer Reviews
const reviews = [
    { name: "Tagorepriyan", review: "Amazing quality and fit!" },
    { name: "Dhillesh", review: "Best streetwear collection!" },
    { name: "Gopinath", review: "Love the futuristic designs!" },
];

const reviewsContainer = document.querySelector(".reviews-container");

reviews.forEach(review => {
    const reviewItem = document.createElement("div");
    reviewItem.classList.add("review-item");

    reviewItem.innerHTML = `
        <p>"${review.review}"</p>
        <h4>- ${review.name}</h4>
    `;

    reviewsContainer.appendChild(reviewItem);
});
