let cart = [];

function toggleCart() {
    document.querySelector('.cart-sidebar').classList.toggle('open');
}

function addToCart(name, price, img) {
    cart.push({ name, price, img });
    updateCart();
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    let cartItems = document.getElementById('cart-items');
    let totalPrice = 0;
    cartItems.innerHTML = "";

    cart.forEach((item, index) => {
        totalPrice += item.price;
        cartItems.innerHTML += `
            <div class="cart-item">
                <img src="${item.img}" alt="${item.name}">
                <div>
                    <p>${item.name}</p>
                    <p class="price">$${item.price.toFixed(2)}</p>
                </div>
                <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
            </div>
        `;
    });

    document.getElementById('cart-total').textContent = totalPrice.toFixed(2);
    document.querySelector('.cart-count').textContent = cart.length;
    document.querySelector('.cart-count').style.display = cart.length > 0 ? 'block' : 'none';
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        alert("Checkout Successful!");
        cart = [];
        updateCart();
    }
}