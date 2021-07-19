const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

// const ingredientsEl = ingredients.forEach((ingredient) => {
//   const listIngredient = document.querySelector("#ingredients");

//   let createTegLi = document.createElement("li");

//   createTegLi.append(ingredient);

//   //   console.log(createTegLi.append(ingredient));

//   const fullIngredientsList = listIngredient.appendChild(createTegLi);
//   //   console.log(fullIngredientsList);
//   return fullIngredientsList;
// });

// ==2 variant==

// const ingredientsEl = ingredients.map((ingredient) => {
//   const listIngredient = document.querySelector("#ingredients");

//   let createTegLi = document.createElement("li");

//   createTegLi.append(ingredient);

//   //   console.log(createTegLi.append(ingredient));

//   const fullIngredientsList = listIngredient.appendChild(createTegLi);
//   //   console.log(fullIngredientsList);
//   return fullIngredientsList;
// });

//   ==3 variant==

// const listIngredient = document.querySelector("#ingredients");

// const ingredientsEl = ingredients.map((ingredient) => {
//   let createTegLi = document.createElement("li");
//   createTegLi.append(ingredient);
//   return createTegLi;
// });


// listIngredient.append(...ingredientsEl);

// console.log(listIngredient);


// =====================


const ulList = document.querySelector("#ingredients");
const ingredientsEl = ingredients.map((element) => {
  const li = document.createElement("li");
  li.innerHTML = `<p>${element}</p>`;
return li;
});

ulList.append(...ingredientsEl);