const categoriesItems = document.querySelectorAll('li.item');
console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach(category => {
    const categoryTitle = category.querySelector('h2').textContent;
    const categoryEl = category.querySelectorAll('li').length;
    console.log(`Category: ${categoryTitle}, Elements: ${categoryEl}`);
}); 
   
