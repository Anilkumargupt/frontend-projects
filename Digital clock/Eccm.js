const products = [
    {
        id: 1,
        title: "Nike Air Max",
        price: 4999,
        oldprice: 5999,
        discount: 23,
        category: "Shoes",
        rating: 4.8,
        reviews: 124,
        image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=600&auto=format&fit=crop&q=60"
    },

    {
        id: 2,
        title: "Wireless Headphones",
        price: 2999,
        oldprice: 3999,
        discount: 22,
        category: "Electronics",
        rating: 4.7,
        reviews: 115,
        image: "https://images.unsplash.com/photo-1628202926206-c63a34b1618f?w=600&auto=format&fit=crop&q=60"
    },

    {
        id: 3,
        title: "Smart Watch",
        price: 6999,
        oldprice: 8999,
        discount: 18,
        category: "Gadgets",
        rating: 4.3,
        reviews: 94,
        image: "https://images.unsplash.com/photo-1632794716789-42d9995fb5b6?w=600&auto=format&fit=crop&q=60"
    },

    {
        id: 4,
        title: "Leather Backpack",
        price: 2499,
        oldprice: 3299,
        discount: 24,
        category: "Bags",
        rating: 4.9,
        reviews: 115,
        image: "https://images.unsplash.com/photo-1622560481156-01fc7e1693e6?w=600&auto=format&fit=crop&q=60"
    },

    {
        id: 5,
        title: "White Sneakers",
        price: 7999,
        oldprice: 9999,
        discount: 25,
        category: "Shoes",
        rating: 4.3,
        reviews: 94,
        image: "https://images.unsplash.com/photo-1562424995-2efe650421dd?w=600&auto=format&fit=crop&q=60"
    },

    {
        id: 6,
        title: "Premium T-shirt",
        price: 1499,
        oldprice: 1899,
        discount: 24,
        category: "Fashion",
        rating: 4.9,
        reviews: 115,
        image: "https://images.unsplash.com/photo-1781705580508-8a5d98fae60c?w=600&auto=format&fit=crop&q=60"
    },

    {
        id: 7,
        title: "Gaming Mouse",
        price: 1999,
        oldprice: 2999,
        discount: 25,
        category: "Electronics",
        rating: 4.3,
        reviews: 94,
        image: "https://images.unsplash.com/photo-1628832307345-7404b47f1751?w=600&auto=format&fit=crop&q=60"
    },

    {
        id: 8,
        title: "Bluetooth Speaker",
        price: 6999,
        oldprice: 8999,
        discount: 25,
        category: "Audio",
        rating: 4.3,
        reviews: 94,
        image: "https://images.unsplash.com/photo-1668649175276-fa4f96beb185?w=600&auto=format&fit=crop&q=60"
    }
];


// PRODUCT CONTAINER

const productContainer = document.getElementById("products");

if (productContainer) {

    productContainer.innerHTML = "";

    products.forEach((product) => {

        productContainer.innerHTML += `
        
        <article
            onclick="openProduct(${product.id})"
            class="group bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-2xl hover:translate-y-1 transition-all duration-500 cursor-pointer">

            <!-- IMAGE -->
            <div class="relative aspect-[4/4.5] overflow-hidden bg-stone-100">

                <img
                    src="${product.image}"
                    alt="${product.title}"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                >

                <!-- DISCOUNT -->
                <div class="absolute top-4 left-4 bg-emerald-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                    ${product.discount}% OFF
                </div>

                <!-- WISHLIST -->
                <button
                    onclick="event.stopPropagation()"
                    class="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/95 backdrop-blur flex items-center justify-center text-xl shadow-md hover:bg-emerald-600 hover:text-white transition">
                    ♡
                </button>

            </div>

            <!-- PRODUCT DETAILS -->
            <div class="p-5">

                <p class="text-sm text-emerald-600 font-medium">
                    ${product.category}
                </p>

                <h3 class="text-lg font-bold text-slate-900 mt-1">
                    ${product.title}
                </h3>

                <div class="flex items-center gap-2 mt-2">
                    <span class="text-yellow-500">
                        ★
                    </span>

                    <span class="text-sm font-medium">
                        ${product.rating}
                    </span>

                    <span class="text-sm text-stone-400">
                        (${product.reviews})
                    </span>
                </div>

                <div class="flex items-center gap-3 mt-3">

                    <span class="text-xl font-bold text-slate-900">
                        Rs. ${product.price}
                    </span>

                    <span class="text-sm text-stone-400 line-through">
                        Rs. ${product.oldprice}
                    </span>

                </div>

                <!-- QUICK VIEW -->
                <button
                    onclick="event.stopPropagation(); openProduct(${product.id})"
                    class="w-full mt-4 bg-emerald-600 text-white py-3 rounded-xl font-semibold hover:bg-emerald-700 transition">
                    Quick View →
                </button>

            </div>

        </article>

        `;
    });
}


// OPEN PRODUCT

function openProduct(id) {

    const product = products.find((item) => item.id === id);

    if (!product) {
        console.log("Product not found");
        return;
    }

    alert(
        `${product.title}\n\n` +
        `Price: Rs. ${product.price}\n` +
        `Category: ${product.category}\n` +
        `Rating: ${product.rating}`
    );
}

function openProduct(id) {
    localStorage.setItem("productId", id);
    window.location.href = "product.html";
}