
let images = [
    "2.png",
    "Sip & Savour Fresh Fruit Drinks.png",
    "Sip & Savour Matcha Strawberry Drinks.png"
];

let currentImage = 0;

function changeSlide() {
    currentImage = (currentImage + 1) % images.length;

    document.getElementById("bannerImage").src = images[currentImage];
}

setInterval(changeSlide, 3000);

