const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event) => {
  console.log("kk");
  const xPos = event.offsetX;
  const yPos = event.offsetY;
  console.log(event.offsetX);
  const spanEl = document.createElement("span");
  bodyEl.appendChild(spanEl);
  spanEl.style.left = xPos + "px";
  spanEl.style.top = yPos + "px";
  const size = Math.random() * 100;
  spanEl.style.width = size + "px";
  spanEl.style.height = size + "px";
  console.log(event.offsetY);
  setTimeout(() => {
    spanEl.remove();
  }, 300);
});
