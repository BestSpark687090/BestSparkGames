let clicks = 0;
function clickButton() {
  clicks++;
  let text = document.querySelector(".text");
  text.innerHTML = clicks;
}