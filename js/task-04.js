

const value = document.querySelector("#value");
const counterBtn = document.querySelector("#counter");


const buttonDecrement = counterBtn.firstElementChild;
const buttonIncrement = counterBtn.lastElementChild;

let counterValue = 0;

const valueСounter = function () {
  value.textContent = counterValue;
};

const counterDecrement = function () {
  counterValue -= 1;
  valueСounter();
};

const counterIncrement = function () {
  counterValue += 1;
  valueСounter();
};

buttonDecrement.addEventListener("click", (event) => {
  counterDecrement();
});

buttonIncrement.addEventListener("click", (event) => {
  counterIncrement();
});



