let c = 0;
let mouseX = 0;
let mouseY = 0;
let multiplier = 100;
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d") ?? null;
// c is increasing by 0.01 each frame-ish?
function run(e) {
  if (e) {
    mouseX = e.x;
    mouseY = e.y;
  }
  if (canvas.getContext) {
    ctx.strokeStyle = "white"
    // clear screen
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // circles
    ctx.beginPath()
    // outer circle
    ctx.arc(mouseX, mouseY, 100, 0, Math.PI * 2, true);
    ctx.stroke()
    ctx.beginPath()
    // inner circlce
    ctx.arc(Math.cos(c) * multiplier + mouseX, Math.sin(c) * multiplier + mouseY, 20, 0, Math.PI * 2, false)
    ctx.stroke()
  }
}
document.addEventListener("mousemove", run)
setInterval(function() {
  c = (c + 0.01) % 6.28
  run()
}, 20)
document.addEventListener("DOMContentLoaded", function() {
  canvas.setAttribute("width", document.body.clientWidth + "px")
  canvas.setAttribute("height", document.body.clientHeight + "px")
})