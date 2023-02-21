

const buttonChange = document.querySelector('.change-color');

const backgroundColor = document.querySelector('body');

const spanColor = document.querySelector('.color');

buttonChange.addEventListener("click", getRandomHexColor);

function getRandomHexColor() {

  const randomColor =  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  spanColor.textContent = randomColor;
  backgroundColor.style.background = randomColor;
};

