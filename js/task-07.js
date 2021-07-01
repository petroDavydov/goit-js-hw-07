// ## Задание 7

// Напиши скрипт, который реагирует на изменение значения `input#font-size-control`
// (событие input) и изменяет инлайн-стиль `span#text` обновляя свойство
// `font-size`. В результате при перетаскивании ползунка будет меняться размер
// текста.

// ```html
// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>
// // ```

const targetInput = document.querySelector("#font-size-control");
console.log(targetInput);

const targetSpanText = document.querySelector("#text");
console.log(targetSpanText);

targetInput.addEventListener("input", move);

function move() {
  targetSpanText.style.fontSize = targetInput.value + "px";
}
