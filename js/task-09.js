
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonChange = document.querySelector('.change-color');
buttonChange.addEventListener("click", getRandomHexColor);

const backgroundColor = document.querySelector('body');
backgroundColor.style.background = getRandomHexColor();

const spanColor = document.querySelector('.color');
spanColor.textContent = getRandomHexColor();

