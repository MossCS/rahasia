"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");
const mentok = document.querySelector(".footer");

const MAX_IMAGES = 12;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    // changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
      hideBtn();
    }
  }
});

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function handleYesClick() {
  titleElement.innerHTML = "Yayyy!! :3";
  buttonsContainer.classList.add("hidden");
  mentok.style.fontSize = `0px`;
  changeImage("yes");
  await delay(5000);
  window.location.href = "lagu.html";
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function hideBtn() {
  noButton.style.transform = 'scale(0)';
  mentok.style.fontSize = `20px`;
}

function generateMessage(noCount) {
  const messages = [
    "pelissss",
    "gitu kamuu yahhh",
    "jahatt bangetttt",
    "nyenyenye",
    "🥺🥺🥺🥺",
    "KWKWKW",
    "NGAPAINNN WKWKWK",
    "hayoo tambah besar WKWKAK",
    "😋😋😝😝",
    "benerann nichh???",
    "yakinnn???",
    "okehh fain",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
//   catImg.src = `img/cat-${image}.jpg`;
catImg.src = `https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}
