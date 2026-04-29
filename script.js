const productsContainer = document.getElementById("productsContainer");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

const products = [
    {
        name: "Stylish T-Shirt",
        category: "fashion",
        price: "₹1200",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
    },
    {
        name: "Wireless Headphones",
        category: "electronics",
        price: "₹2150",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
    },
    {
        name: "Running Shoes",
        category: "shoes",
        price: "₹3500",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    },
    {
        name: "Beauty Kit",
        category: "beauty",
        price: "₹1500",
        image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
    },
    {
        name: "Smart Watch",
        category: "electronics",
        price: "₹1200",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
    },
    {
        name: "Casual Sneakers",
        category: "shoes",
        price: "₹7000",
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772"
    }
];

function displayProducts(filteredProducts) {
    let html = "";

    if (filteredProducts.length === 0) {
        productsContainer.innerHTML = `
            <div class="empty">
                No products found 🛒
            </div>
        `;
        return;
    }

    filteredProducts.forEach(product => {
        html += `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Category: ${product.category}</p>
                <div class="price">${product.price}</div>
                <button class="buy-btn">Buy Now</button>
            </div>
        `;
    });

    productsContainer.innerHTML = html;
}

function filterProducts() {
    const searchValue = searchInput.value.trim().toLowerCase();
    const selectedCategory = categoryFilter.value;

    const filteredProducts = products.filter(product => {
        const nameMatch = product.name.toLowerCase().includes(searchValue);

        const categoryMatch =
            selectedCategory === "all" ||
            product.category === selectedCategory;

        return nameMatch && categoryMatch;
    });

    displayProducts(filteredProducts);
}

searchInput.addEventListener("keyup", filterProducts);
categoryFilter.addEventListener("change", filterProducts);

displayProducts(products);