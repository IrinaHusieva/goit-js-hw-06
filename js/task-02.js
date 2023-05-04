const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ref = document.querySelector('#ingredients');

ingredients.forEach(ingredient => {
  const createList = document.createElement('li');
  createList.classList.add('item');
  createList.textContent = ingredient;
  ref.appendChild(createList);
});
