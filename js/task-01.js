
const listItem = document.querySelectorAll('.item');
console.log(`number of categories: ${listItem.length}`);

listItem.forEach((item) => {
    console.log(`category: ${item.children[0].textContent}`);
    console.log(`element: ${item.lastElementChild.children.length}`);
});