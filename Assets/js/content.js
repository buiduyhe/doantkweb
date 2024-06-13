window.onload = function () {
    var urlParams = new URLSearchParams(window.location.search);
    var category = urlParams.get('category');
    var keyword = urlParams.get('keyword');
    var sort = urlParams.get('sort');

    // Hiển thị sản phẩm dựa trên chức năng lọc theo danh mục
    if (category === null || category === undefined || category === 'all') {
        showAllProducts();
    } else {
        filterProductsByCategory(category);
    }

    // Thực hiện tìm kiếm nếu có từ khóa được cung cấp
    if (keyword) {
        searchProducts(keyword);
    }

    // Thực hiện sắp xếp nếu có tiêu chí sắp xếp được cung cấp
    if (sort) {
        if (sort === 'newest') {
            sortNewest();
        } else if (sort === 'price-asc') {
            sortPriceAsc();
        } else if (sort === 'price-desc') {
            sortPriceDesc();
        }
    }

    var displayedProducts = document.querySelectorAll('.product[style="display: block;"]');
    if (displayedProducts.length === 0) {
        document.getElementById('noResultsMessage').style.display = 'block';
    }
};

function showAllProducts() {
    var products = document.querySelectorAll('.product');
    for (var i = 0; i < products.length; i++) {
        products[i].style.display = 'block';
    }
}

function filterProductsByCategory(category) {
    var products = document.querySelectorAll('.product');
    for (var i = 0; i < products.length; i++) {
        var productCategory = products[i].getAttribute('data-category').toLowerCase();
        if (productCategory.includes(category)) {
            products[i].style.display = 'block';
        } else {
            products[i].style.display = 'none';
        }
    }
}
document.querySelectorAll('.view-details-button').forEach(button => {
    button.addEventListener('click', function () {
        const product = this.closest('.product');
        const productName = product.querySelector('.product-name').textContent;
        const productPrice = product.querySelector('.product-price').textContent;
        const productImg = product.querySelector('img').src;

        const productDetail = {
            name: productName,
            price: productPrice,
            img: productImg,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum."
        };
        localStorage.setItem('productDetail', JSON.stringify(productDetail));
    });
});
function sortProducts(compareFunction) {
    var productsContainer = document.querySelector('.product-container');
    var products = Array.from(document.querySelectorAll('.product'));
    
    products.sort(compareFunction);
    
    products.forEach(function(product) {
        productsContainer.appendChild(product);
    });
}

function sortNewest() {
    sortProducts(function(a, b) {
        return b.getAttribute('data-timestamp') - a.getAttribute('data-timestamp');
    });
}

function sortPriceAsc() {
    sortProducts(function(a, b) {
        return parseFloat(a.querySelector('.product-price').textContent.replace('$', '')) - 
               parseFloat(b.querySelector('.product-price').textContent.replace('$', ''));
    });
}

function sortPriceDesc() {
    sortProducts(function(a, b) {
        return parseFloat(b.querySelector('.product-price').textContent.replace('$', '')) - 
               parseFloat(a.querySelector('.product-price').textContent.replace('$', ''));
    });
}
function updateCartCount() {
    var cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        var totalQuantity = cart.reduce((sum, product) => sum + product.quantity, 0);
        cartCountElement.textContent = totalQuantity;
    }
}
function searchProducts(keyword) {
    keyword = keyword.toLowerCase();
    var products = document.querySelectorAll('.product');
    for (var i = 0; i < products.length; i++) {
        var productName = products[i].querySelector('.product-name').textContent.toLowerCase();
        if (productName.includes(keyword)) {
            products[i].style.display = 'block';
        } else {
            products[i].style.display = 'none';
        }
    }
}
var cart = [];

// Xử lý sự kiện khi nhấn nút "Thêm vào giỏ hàng"
var addToCartButtons = document.querySelectorAll('.add-to-cart-button');
addToCartButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        var product = button.closest('.product');
        var productName = product.querySelector('.product-name').textContent;
        var productPrice = product.querySelector('.product-price').textContent;
        var productImg = product.querySelector('img').src;

        addToCart(productName, productPrice, productImg); // Gọi hàm để thêm sản phẩm vào giỏ hàng
        alert('Đã thêm ' + productName + ' vào giỏ hàng.');
    });
});
function addToCart(productName, productPrice, productImg) {
    var cart = JSON.parse(localStorage.getItem('cart')) || [];

    var existingProduct = cart.find(function (item) {
        return item.name === productName;
    });

    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        var productObj = {
            name: productName,
            price: productPrice,
            img: productImg,
            quantity: 1
        };
        cart.push(productObj);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount(); // Cập nhật số lượng sản phẩm trong giỏ hàng
}
let __protocol = document.location.protocol;
let __baseUrl = __protocol + '//livechat.fpt.ai/v35/src';

let prefixNameLiveChat = 'Hỗ trợ shop';
let objPreDefineLiveChat = {
    appCode: '656b9936b711434efc01720d4ef9401f',
    themes: '',
    appName: prefixNameLiveChat ? prefixNameLiveChat : 'Live support',
    thumb: '',
    icon_bot: ''
},
    appCodeHash = window.location.hash.substr(1);
if (appCodeHash.length == 32) {
    objPreDefineLiveChat.appCode = appCodeHash;
}

let fpt_ai_livechat_script = document.createElement('script');
fpt_ai_livechat_script.id = 'fpt_ai_livechat_script';
fpt_ai_livechat_script.src = __baseUrl + '/static/fptai-livechat.js';
document.body.appendChild(fpt_ai_livechat_script);

let fpt_ai_livechat_stylesheet = document.createElement('link');
fpt_ai_livechat_stylesheet.id = 'fpt_ai_livechat_script';
fpt_ai_livechat_stylesheet.rel = 'stylesheet';
fpt_ai_livechat_stylesheet.href = __baseUrl + '/static/fptai-livechat.css';
document.body.appendChild(fpt_ai_livechat_stylesheet);

fpt_ai_livechat_script.onload = function () {
    fpt_ai_render_chatbox(objPreDefineLiveChat, __baseUrl, 'livechat.fpt.ai:443');
}