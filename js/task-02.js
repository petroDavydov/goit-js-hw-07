const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsEl = ingredients.forEach((ingredient) => {
  const listIngredient = document.querySelector("#ingredients");

  let createTegLi = document.createElement("li");

  createTegLi.append(ingredient);

  //   console.log(tegLi);
  const fullIngredientsList = listIngredient.appendChild(createTegLi);
  //   console.log(fullList);
  return fullIngredientsList;
});
