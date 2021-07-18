let slider = document.getElementById("priceslider");
let pageViews = document.getElementById("pageviews");
let priceNumber = document.getElementById("pricenumber");

slider.addEventListener('change', () => {

    switch (slider.value) {
        case "1":
            pageViews.textContent = "10K";
            priceNumber.textContent = "8";
            break;
        case "3":
            pageViews.textContent = "50K";
            priceNumber.textContent = "12";
            break;
        case "5":
            pageViews.textContent = "100K";
            priceNumber.textContent = "16";
            break;
        case "7":
            pageViews.textContent = "500K";
            priceNumber.textContent = "24";
            break;
        case "9":
            pageViews.textContent = "1M";
            priceNumber.textContent = "36";
            break;
    }


});