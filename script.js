
let images = [
    "../images/2.png",
    "../images/Sip & Savour Fresh Fruit Drinks.png",
    "../images/Sip & Savour Matcha Strawberry Drinks.png"
];

let currentImage = 0;

function changeSlide() {
    currentImage = (currentImage + 1) % images.length;

    document.getElementById("bannerImage").src = images[currentImage];
}

setInterval(changeSlide, 3000);

