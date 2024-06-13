var suggestions = ["Áo", "Quần", "Giày", "Túi", "Mũ", "Đầm", "Váy", "Áo len", "Quần jeans", "Giày thể thao", "Áo thun", "Túi xách"];

function suggestKeywords(event) {
    var input = event.target.value.toLowerCase();
    var datalist = document.getElementById('searchSuggestions');
    datalist.innerHTML = '';

    if (input.length > 0) {
        var filteredSuggestions = suggestions.filter(function (suggestion) {
            return suggestion.toLowerCase().startsWith(input);
        });

        for (var i = 0; i < Math.min(filteredSuggestions.length, 5); i++) {
            var option = document.createElement('option');
            option.value = filteredSuggestions[i];
            datalist.appendChild(option);
        }
    }
}

function goToCart() {
    var contentFrame = parent.frames['content'];
    if (contentFrame) {
        contentFrame.location.href = 'giohang.html';
    } else {
        window.location.href = 'giohang.html';
    }
}

var cart = JSON.parse(localStorage.getItem('cart')) || [];
updateCartCount();

function updateCartCount() {
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    var totalQuantity = cart.reduce(function (sum, product) {
        return sum + product.quantity;
    }, 0);
    document.getElementById('cart-count').textContent = totalQuantity;
}

window.onload = function () {
    updateCartCount();
};

function searchProduct() {
    var keyword = document.getElementById('searchInput').value;
    var contentFrame = parent.frames['content'];
    if (contentFrame) {
        contentFrame.location.href = 'content.html?keyword=' + encodeURIComponent(keyword);
    } else {
        window.location.href = 'content.html?keyword=' + encodeURIComponent(keyword);
    }
}

function searchKeyPress(event) {
    if (event.keyCode === 13) {
        searchProduct();
    }
}
