let gp;

let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d") ?? null;
canvas.setAttribute("width", document.body.clientWidth + "px")
window.addEventListener("gamepadconnected", (e) => {
  requestAnimationFrame(main)
});
function main(){
  // axes 0 is left-right, axes 1 is up-down left stick
  // axes 2 is left-right, axes 3 is up-down right stick
  gp = navigator.getGamepads()[0];
  ctx.fillStyle="white"
  ctx.fillRect((gp.axes[0] * 100)+100,(gp.axes[1] * 100)+100,10,10)
  ctx.fillStyle="red"
  ctx.fillRect((gp.axes[2] * 100)+100,(gp.axes[3] * 100)+100,10,10)
  requestAnimationFrame(main)
}
window.addEventListener("gamepaddisconnected",function(e){
  cancelAnimationFrame(main)
})
window.addEventListener('resize', function() {
  canvas.setAttribute("width", document.body.clientWidth + "px")
  // canvas.setAttribute("height", document.body.clientHeight)
    // Your code to handle the resize event
});