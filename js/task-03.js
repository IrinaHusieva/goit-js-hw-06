const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const createImg = document.querySelector('ul.gallery');
// images.forEach(img => {
//   const imgLi = document.createElement('li');
//   const imgEl = `<img src="${img.url}" alt="${img.alt}" width="500">`;
//   imgLi.innerHTML = imgEl;
//   createImg.insertAdjacentElement('beforeend', imgLi);
// });

const createImg = document.querySelector('ul.gallery');
const galleryItems = images.map(img => `<li><img src="${img.url}" alt="${img.alt}" width="500"></li>`).join('');
createImg.insertAdjacentHTML('beforeend', galleryItems);

