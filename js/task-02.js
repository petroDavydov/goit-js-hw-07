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

const ingredientsEl = ingredients.map((ingredient) => {
  const listIngredient = document.querySelector("#ingredients");

  let createTegLi = document.createElement("li");

  createTegLi.append(ingredient);

  //   console.log(createTegLi.append(ingredient));

  const fullIngredientsList = listIngredient.appendChild(createTegLi);
  //   console.log(fullIngredientsList);
  return fullIngredientsList;
});

//   ==3 variant==найден подобний код но не понят! зачем, там ведь список...

// const ingredientsEl = ingredients.forEach((ingredient) => {

// 	const listIngredient = document.querySelector("#ingredients");

// 	let createTegLi = document.createElement("li");

// 	createTegLi.innerHTML = ingredient;
// 	listIngredient.append(createTegLi);
// 	parent.append(...createTegLi)
//   });

//   console.log(ingredientsEl);
