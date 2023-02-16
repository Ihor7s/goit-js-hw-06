

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





// let counterValue = 0;

// const decrementBtn = document.querySelector('button[data-action="decrement"]');
// // console.log(decrementBtn);

// const incrementBtn = document.querySelector('button[data-action="increment"]');
// // console.log(incrementBtn);

// decrementBtn.addEventListener('click', () => {
//     console.log('klik-1')
// })

// incrementBtn.addEventListener('click', () => {
    
//     console.log('klik+1')
// })
