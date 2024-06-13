document.addEventListener('DOMContentLoaded', function () {
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    var cartItemsContainer = document.getElementById('cartItems');
    var totalAmount = 0;

    function updateCart() {
        cartItemsContainer.innerHTML = '';
        totalAmount = 0;
        cart.forEach(function (item, index) {
            var row = document.createElement('tr');

            var imgCell = document.createElement('td');
            var img = document.createElement('img');
            img.src = item.img;
            img.width = 50;
            img.height = 50;
            imgCell.appendChild(img);

            var nameCell = document.createElement('td');
            nameCell.textContent = item.name;

            var priceCell = document.createElement('td');
            priceCell.textContent = item.price;

            var quantityCell = document.createElement('td');
            var quantityInput = document.createElement('input');
            quantityInput.type = 'number';
            quantityInput.value = item.quantity;
            quantityInput.min = 1;
            quantityInput.addEventListener('change', function () {
                item.quantity = parseInt(quantityInput.value);
                localStorage.setItem('cart', JSON.stringify(cart));
                updateCart();
            });
            quantityCell.appendChild(quantityInput);

            var totalCell = document.createElement('td');
            var itemTotal = parseFloat(item.price.replace('$', '')) * item.quantity;
            totalCell.textContent = '$' + itemTotal.toFixed(2);
            totalAmount += itemTotal;

            var actionCell = document.createElement('td');
            var removeButton = document.createElement('button');
            removeButton.textContent = 'Xóa';
            removeButton.className = 'remove-button';
            removeButton.addEventListener('click', function () {
                cart.splice(index, 1);
                localStorage.setItem('cart', JSON.stringify(cart));
                updateCart();
            });
            actionCell.appendChild(removeButton);

            row.appendChild(imgCell);
            row.appendChild(nameCell);
            row.appendChild(priceCell);
            row.appendChild(quantityCell);
            row.appendChild(totalCell);
            row.appendChild(actionCell);

            cartItemsContainer.appendChild(row);
        });

        document.getElementById('totalAmount').textContent = totalAmount.toFixed(2);
    }

    updateCart();
});
window.onload = function () {
    var urlParams = new URLSearchParams(window.location.search);
    var category = urlParams.get('category');
    var keyword = urlParams.get('keyword');

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