let slider = document.getElementById("priceslider");
let monthSlider = document.getElementById("monthslider");
let pageViews = document.getElementById("pageviews");
let priceNumber = document.getElementById("pricenumber");


function pageChange() {

    switch (slider.value) {
        case "1":
            pageViews.textContent = "10K";

            priceCounter(8);
            break;
        case "3":
            pageViews.textContent = "50K";
            priceCounter(12);
            break;
        case "5":
            pageViews.textContent = "100K";
            priceCounter(16);
            break;
        case "7":
            pageViews.textContent = "500K";
            priceCounter(24);
            break;
        case "9":
            pageViews.textContent = "1M";
            priceCounter(36);
            break;
    }





};

function priceCounter(price) {
    if (monthSlider.value == "2") {
        priceNumber.textContent = price;
    } else {
        priceNumber.textContent = (price * 0.85).toFixed(0);
    }
}