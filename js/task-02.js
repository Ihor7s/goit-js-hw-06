const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const navIthemEl = document.createElement('li');
// navIthemEl.classList.add('item');
// navIthemEl.textContent = ingredients;

const elements = ingredients.map(option => {

const navIthemEl = document.createElement('li');
navIthemEl.classList.add('item');
navIthemEl.textContent = ingredients;
  return navIthemEl
  
} )



console.log(elements)

