const mediaQuery = window.matchMedia('(min-width: 768px)');
let discountField = document.querySelector(".discount");


function size(e) {
    if (mediaQuery.matches) {
        discountField.textContent = "25% discount";
    } else {
        discountField.textContent = "-25%";
    }
}

mediaQuery.addListener(size);

size(mediaQuery);