const images = [
    "0.jpg",
    "1.jpeg",
    "2.jpeg",
    "3.jpeg"
]

const chosenImages = images[Math.floor(images.length * Math.random())];

const bgImg = document.createElement("img");

bgImg.src = `img/${chosenImages}`;

document.body.appendChild(bgImg);