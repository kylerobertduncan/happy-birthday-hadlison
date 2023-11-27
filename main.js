const bow = document.querySelector(".bow");
const topRibbon = document.querySelector(".topRibbon");
const bottomRibbon = document.querySelector(".bottomRibbon");
const wrapping = document.querySelector(".wrapping");

bow.addEventListener("click", () => {
  bow.classList.add("animate__rotateOutUpLeft")
  bow.classList.remove("cursorPointer");
  topRibbon.classList.add("cursorPointer");
  
  topRibbon.addEventListener("click", () => {
    topRibbon.classList.add("animate__backOutLeft");
    topRibbon.classList.remove("cursorPointer");
    bottomRibbon.classList.add("cursorPointer");
  
    bottomRibbon.addEventListener("click", () => {
      bottomRibbon.classList.add("animate__backOutUp");
      bottomRibbon.classList.remove("cursorPointer");
      wrapping.classList.add("cursorPointer");
  
      wrapping.addEventListener("click", () => {
        wrapping.classList.add("animate__fadeOutDown");
        wrapping.classList.remove("cursorPointer");
      });
    });
  });
});
