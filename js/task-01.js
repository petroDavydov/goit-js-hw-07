const categories = document.querySelector("#categories");
const childrenLength = categories.children.length;
console.log(`List has ${childrenLength} elements.`);

const listOfElem = document.querySelectorAll(`.item`);
for (let item of listOfElem) {
  console.log(
    `Category: `,
    item.firstElementChild.textContent + "\n" + `Number of elements: `,
    item.lastElementChild.children.length
  );
}
