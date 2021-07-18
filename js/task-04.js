// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать
// значение счетчика на `1`.

// - Создай переменную `counterValue` в которой будет хранится текущее значение
//   счетчика.
// - Создай функции `increment` и `decrement` для увеличения и уменьшения значения
//   счетчика
// - Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

// const counter = {

//   counterValue: 0,

//   increment() {
//     this.counterValue += 1;
//   },

//   decrement() {
//     this.counterValue -= 1;
//   },
// };

// const decrementMinus = document.querySelector('[data-action="decrement"]');
// const incrementPlus = document.querySelector('[data-action="increment"]');
// const showValue = document.querySelector("#value");

// incrementPlus.addEventListener("click", () => {
//   counter.increment();
//   showValue.textContent = counter.counterValue;
// });

// decrementMinus.addEventListener("click", () => {
//   counter.decrement();
//   showValue.textContent = counter.counterValue;
// });

// const btnIncrement = document.querySelector('[data-action="increment"]');
// const btnDecrement = document.querySelector('[data-action="decrement"]');
// const value = document.querySelector("#value");

// let counterValue = 0;

// const decrement = () => {
//   counterValue -= 1;
//   value.textContent = counterValue;
// };

// const increment = () => {
//   counterValue += 1;
//   value.textContent = counterValue;
// };

// btnIncrement.addEventListener("click", increment);
// btnDecrement.addEventListener("click", decrement);

// const buttonInc = document.querySelector('[data-action="increment"]');
// const buttonDec = document.querySelector('[data-action="decrement"]');
// const value = document.querySelector('#value')

// console.log(buttonInc)
// console.log(buttonDec)
// console.log(value)

// buttonInc.addEventListener('click', increment)
// buttonDec.addEventListener('click', decriment)

// let total = 0;

// function increment(){
// 	total +=1
// 	value.textContent = total

// }

// function decriment(){
// 	total -=1
// 	value.textContent = total

// }

// =========

// const [buttonDec, value, buttonInc] = document.querySelector(
//   "#counter"
// ).children;

// console.log(buttonInc);
// console.log(buttonDec);
// console.log(value);

// buttonInc.addEventListener("click", increment);
// buttonDec.addEventListener("click", decriment);

// let total = 0;

// function increment() {
//   total += 1;
//   value.textContent = total;
// }

// function decriment() {
//   total -= 1;
//   value.textContent = total;
// }

// ==================

const [buttonDec, value, buttonInc] = document.querySelector(
  "#counter"
).children;


const increment = () => (value.textContent = +value.textContent + 1);

const decriment = () => (value.textContent -= 1);


buttonInc.addEventListener("click", increment);
buttonDec.addEventListener("click", decriment);