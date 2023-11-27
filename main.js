const bow = document.querySelector(".bow");
const topRibbon = document.querySelector(".topRibbon");
const bottomRibbon = document.querySelector(".bottomRibbon");
const wrapping = document.querySelector(".wrapping");

bow.addEventListener("click", () => {
  bow.classList.add("animate__rotateOutUpLeft")
  topRibbon.addEventListener("click", () => {
    topRibbon.classList.add("animate__backOutLeft");
    bottomRibbon.addEventListener("click", () => {
      bottomRibbon.classList.add("animate__backOutUp");
      wrapping.addEventListener("click", () => {
        wrapping.classList.add("animate__fadeOutDown");
      });
    });
  });
});
