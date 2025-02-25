let points = 0
document.addEventListener("keyup", function() {
  let text = document.querySelector(".points");
  points++;
  text.innerHTML = points
})