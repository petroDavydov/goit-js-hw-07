// ## Задание 6

// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое
// на правильное количество символов.

// ```html
// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />
// ```

// - Сколько символов должно быть в инпуте, указывается в его атрибуте
//   `data-length`.
// - Если введено подходящее количество, то `border` инпута становится зеленым,
//   если неправильное - красным.

// Для добавления стилей, используй CSS-классы `valid` и `invalid`.

// ```css
// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }
// ```

const input = document.querySelector("#validation-input");
// console.log(input);

const inputLength = input.getAttribute("data-length");
// console.log(inputLength);

const goodLength = inputLength;
// console.log(goodLength);

input.addEventListener("blur", count);

input.oninput = function () {
  if (
    input.value.length === parseInt(goodLength) ||
    input.value.length === "6"
  ) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else if (input.value.length !== goodLength) {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
};

function count() {
  console.log(input.value.length && input.value);
}
