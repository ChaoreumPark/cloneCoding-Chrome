const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
// = <img src="">

document.body.appendChild(bgImage);
// prepend = 가장 마지막
