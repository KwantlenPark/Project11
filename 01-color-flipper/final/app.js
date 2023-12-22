const Images = ['url(dog1.webp)', 'url(dog2.jpg)'];
const btn = document.getElementById("btn");
const text1 = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  // console.log(randomNumber);

  body.style.backgroundImage = Images[randomNumber];
  text1.textContent = Images[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * Images.length);
}

var body = document.getElementsByTagName('body')[0];
