// не проверяйте,пожалуйста. я ее делал не один втроем, и то до окончательного решения пришлось гуглить, и подсматривать.

// const createBtn = document.querySelector('[data-action="render"]');
// // console.log(createBtn);
// const clearBtn = document.querySelector('[data-action="destroy"]');
// // console.log(clearBtn);
// const divBoxes = document.getElementById("boxes");

// function getAmount() {
//   const amount = +document.querySelector("#controls input").value; //думать не понял :(
//   createBoxes(amount); // как.............?
// }

// // console.log(divEl);
// // console.log(divBoxes);

// function createBoxes(amount) {
//   let size = 30;
//   const fragment = document.createDocumentFragment(); //что  єто? , смотреть MDN
//   for (let i = 0; i < amount; i += 1) {
//     let newSize = size + i * 10; //        ??????????????????????
//     const divEl = document.createElement("div");
//     divEl.style.cssText = `width: ${newSize}px; height: ${newSize}px; background-color: rgba(${random()}, ${random()}, ${random()})`;
//     fragment.appendChild(divEl);
//   } // cssText ---> MDN
//   divBoxes.appendChild(fragment);
// }

// const destroyBoxes = () => {
//   divBoxes.innerHTML = "";
// };

// function random() {
//   return Math.floor(Math.random() * 256); //  а где цвета , где какойто колорпикер или типа него???????????????????????????????????
// }
// createBtn.addEventListener("click", getAmount);
// clearBtn.addEventListener("click", destroyBoxes);

// ============================

// const divControls = document.querySelector(('#controls'));
const btnRender = document.querySelector("[data-action='render']");
const btnDestroy = document.querySelector("[data-action='destroy']");
const divBox = document.querySelector("#boxes");
const input = document.querySelector("input");

const min = +input.getAttribute("min");
const max = +input.getAttribute("max");
const step = +input.getAttribute("step");

btnRender.addEventListener("click", render);
btnDestroy.addEventListener("click", destroy);
let size = 30;

function render() {
  let arrDiv = [];
  if (+input.value > min && +input.value <= max) {
    for (let i = 0; i < +input.value; i += step) {
      const divEl = document.createElement("div");
      divEl.style.background = createRandom();
      divEl.style.width = size + "px";
      divEl.style.height = size + "px";
      size += 10;

      arrDiv.push(divEl);
    }
    divBox.append(...arrDiv);
  } else {
    alert(`Try once more`);
  }
}

function destroy() {
  input.value = "";
  size = 30;
  divBox.innerHTML = "";
}

function createRandom() {
  return `rgb(${(Math.random() * 255) << 0}, ${(Math.random() * 255) << 0}, ${
    (Math.random() * 255) << 0
  })`;
}
