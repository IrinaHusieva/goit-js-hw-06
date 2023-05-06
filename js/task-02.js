const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const ref = document.querySelector('#ingredients');

// ingredients.forEach(ingredient => {
//   const createList = document.createElement('li');
//   createList.classList.add('item');
//   createList.textContent = ingredient;
//   ref.appendChild(createList);
// });

// const createList = ingredients.map(ingredient => `<li class="item">${ingredient}</li>`).join('');
// ref.innerHTML = createList;

const ulRef = document.querySelector('#ingredients'); 
const liElements = [];

for (let i = 0; i < ingredients.length; i++) {
  const createLi = document.createElement('li'); 
  createLi.textContent = ingredients[i];
  createLi.classList.add('item');
  liElements.push(createLi); 
}

ulRef.append(...liElements);