const sliderContainer = document.querySelector(".slider-container");
const slider = document.querySelector(".slider");
const cardImages = document.querySelectorAll(".project-image");
const cardPreview = document.querySelectorAll(".preview");
const cardVisitSite = document.querySelectorAll(".visit-site");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");

let canGrab = true;
let pressed = false;
let startX;
let x;

sliderContainer.addEventListener("mousedown", (e) => {
  if (!canGrab) return;
  e.stopPropagation();
  e.preventDefault();
  pressed = true;
  startX = e.offsetX - slider.offsetLeft - 5;
  sliderContainer.style.cursor = "grabbing";
});

sliderContainer.addEventListener("mouseenter", () => {
  sliderContainer.style.cursor = "grab";
});

cardImages.forEach((cardImage) => {
  cardImage.addEventListener("mouseenter", () => {
    canGrab = false;
    sliderContainer.style.cursor = "default";
  });

  cardImage.addEventListener("mouseleave", () => {
    canGrab = true;
    sliderContainer.style.cursor = "grab";
  });
});

cardPreview.forEach((cardImage) => {
  cardImage.addEventListener("mouseenter", () => {
    canGrab = false;
    sliderContainer.style.cursor = "default";
  });

  cardImage.addEventListener("mouseleave", () => {
    canGrab = true;
    sliderContainer.style.cursor = "grab";
  });
});

cardVisitSite.forEach((cardImage) => {
  cardImage.addEventListener("mouseenter", () => {
    canGrab = false;
    sliderContainer.style.cursor = "default";
  });

  cardImage.addEventListener("mouseleave", () => {
    canGrab = true;
    sliderContainer.style.cursor = "grab";
  });
});

window.addEventListener("mouseup", () => {
  sliderContainer.style.cursor = "grab";
  pressed = false;
});

sliderContainer.addEventListener("mousemove", (e) => {
  if (!pressed) return;
  e.preventDefault();

  x = e.offsetX;

  slider.style.left = `${x - startX}px`;
  checkBoundary();
});

const checkBoundary = () => {
  let outer = sliderContainer.getBoundingClientRect();
  let inner = slider.getBoundingClientRect();

  if (parseInt(slider.style.left) > 0) {
    slider.style.left = "0px";
  }

  if (inner.right < outer.right) {
    slider.style.left = `-${inner.width - outer.width}px`;
  }
};

arrowLeft.addEventListener("click", () => {
  slider.style.left = "0px";
  slider.style.transform = "translateX(0%)";
});

arrowRight.addEventListener("click", () => {
  slider.style.left = "0px";
  slider.style.transform = "translateX(-50%)";
});
