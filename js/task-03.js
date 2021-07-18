const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// =====================================

const findTargetId = document.querySelector("#gallery");

const makeGallery = ({ url, alt }) =>
  ` <li class =  li-item-gallery><img class = gallery-image src="${url}" alt = "${alt}"></li>`;

const showGallery = images.reduce((acc, image) => acc + makeGallery(image), "");

findTargetId.insertAdjacentHTML("beforeend", showGallery);
// ======================================

//* ход мислей предпоследний

// const makeGallery = images
//   .map((image) => {
//     const createTagLi = document.createElement("li");
//     createTagLi.classList.add("li-item-gallery");
//     const createTagImg = document.createElement("img");
//     createTagImg.src = image.url;
//     createTagImg.alt = image.alt;
//     createTagImg.classList.add("galery-image");
//     const fullTagLiAndImg = findTargetId.append(createTagLi, createTagImg);
//     return fullTagLiAndImg;
//   })
//   .reduce(
//     ({ url, alt }) =>
//       `<li class =  li-item-gallery><img class = galery-image src=${url} ${alt}></li>`,
//     ""
//   );
// document
//   .querySelector("#gallery")
//   .insertAdjacentHTML("beforeend", ...makeGallery);


// ===============


const ul = document.querySelector('#gallery');

const createElement = ({url,alt})=>`<li><img src ="${url} alt= "${alt}" width='350'></li>`

const markUp = images.map(createElement).join();

ul.insertAdjacentHTML('beforeend', markUp)


// =========================


const ul = document.querySelector('#gallery');

const createElement = (acc,{url,alt})=>acc+`<li><img src ="${url} alt= "${alt}" width='350'></li>`

const markUp = images.reduce(createElement,'');

ul.insertAdjacentHTML('beforeend', markUp)
