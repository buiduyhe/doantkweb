// assets/js/script.js

document.addEventListener('DOMContentLoaded', () => {
    // Menu toggle for mobile view
    const menuBtn = document.getElementById('menu-btn');
    const navbar = document.querySelector('.navbar');

    menuBtn.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    // Thumbnail image click to change main image
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.querySelector('.main-image');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            mainImage.src = thumbnail.src;
        });
    });

    // Add to cart button
    const addToCartBtn = document.querySelector('.add-to-cart');

    addToCartBtn.addEventListener('click', () => {
        const quantity = document.getElementById('quantity').value;
        alert(`Added ${quantity} items to your cart!`);
    });
});
document.addEventListener('DOMContentLoaded', function () {
            const productDetail = JSON.parse(localStorage.getItem('productDetail'));

            if (productDetail) {
                document.querySelector('.main-image').src = productDetail.img;
                document.querySelector('.product-title').textContent = productDetail.name;
                document.querySelector('.product-price').textContent = productDetail.price;
                document.querySelector('.product-description').textContent = productDetail.description;
            }

            document.querySelector('.add-to-cart').addEventListener('click', function () {
                const quantity = document.querySelector('#quantity').value;
                addToCart(productDetail.name, productDetail.price, productDetail.img, quantity);
            });

            function addToCart(name, price, img, quantity) {
                let cart = JSON.parse(localStorage.getItem('cart')) || [];
                let product = cart.find(p => p.name === name);

                if (product) {
                    product.quantity += parseInt(quantity);
                } else {
                    cart.push({ name, price, img, quantity: parseInt(quantity) });
                }

                localStorage.setItem('cart', JSON.stringify(cart));
                alert('Sản phẩm đã được thêm vào giỏ hàng');
            }
        });