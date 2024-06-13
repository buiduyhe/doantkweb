document.getElementById('filterForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Ngăn chặn trình duyệt gửi dữ liệu và tải lại trang

    var category = document.getElementById('category').value;

    // Gửi dữ liệu lọc đến frame "content"
    parent.frames['content'].location.href = 'content.html?category=' + category;
});

// Add event listeners for sorting options
document.getElementById('sort-newest').addEventListener('click', function () {
    parent.frames['content'].location.href = updateURLParameter(parent.frames['content'].location.href, 'sort', 'newest');
});

document.getElementById('sort-price-asc').addEventListener('click', function () {
    parent.frames['content'].location.href = updateURLParameter(parent.frames['content'].location.href, 'sort', 'price-asc');
});

document.getElementById('sort-price-desc').addEventListener('click', function () {
    parent.frames['content'].location.href = updateURLParameter(parent.frames['content'].location.href, 'sort', 'price-desc');
});

function updateURLParameter(url, param, paramVal) {
    var newAdditionalURL = "";
    var tempArray = url.split("?");
    var baseURL = tempArray[0];
    var additionalURL = tempArray[1];
    var temp = "";
    
    if (additionalURL) {
        tempArray = additionalURL.split("&");
        for (var i = 0; i < tempArray.length; i++) {
            if (tempArray[i].split('=')[0] !== param) {
                newAdditionalURL += temp + tempArray[i];
                temp = "&";
            }
        }
    }

    var newParam = temp + param + "=" + paramVal;
    return baseURL + "?" + newAdditionalURL + newParam;
}
