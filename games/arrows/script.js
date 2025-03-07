let keys = ["d", "f", "j", "k"]
let keysPressed = [false, false, false, false]
let alreadyWaiting = false;
let autoBind = true;
document.querySelectorAll("#pressButton").forEach(function(e, ind) {
  if (keys[ind] != "") {
    e.innerHTML = keys[ind];
  }
  // Press function
  function press(ev) {
    if (alreadyWaiting) {
      return;
    }
    alreadyWaiting = true;
    // wait for press
    document.addEventListener("keydown", setKey);
    ev.target.innerHTML = "Press a key...";
    function setKey(e) {
      // if(!alreadyWaiting){return}
      let i = parseInt(ev.target.getAttribute("class").replace("press", ""))
      if(i==4){
        autoBind = false
      }
      keys[i - 1] = e.key;
      ev.target.innerHTML = e.key;
      alreadyWaiting = false;
      document.removeEventListener("keydown", setKey);
      if(autoBind){
        document.querySelector(".press"+(i+1)).click()
      }
    }

    // check for event listener because it doesnt remove sometimes
    // nah it doesnt click right that's all
    
  }
  // e.onpointerdown = press;
  e.addEventListener("click", press);
})
// the key maker
function key(e) {
  // im sorry but im gonna use eval. hear me out.
  for (let i = 0; i < 4; i++) {
    eval(`if(e.key==keys[${i}]){keysPressed[${i}]=true}`)
    if (e.type == "keyup" && e.key == keys[i]) {
      keysPressed[i] = false
    }
  }
  // then the hacky part  
  for (let i = 0; i < 4; i++) {
    let arrow = document.querySelector("#arrow" + (i + 1))
    let defaultOpacity = window.getComputedStyle(arrow).getPropertyValue('--default-opacity')
    if (keysPressed[i]) {
      arrow.style.setProperty('--fa-secondary-opacity', '1');
    } else {
      arrow.style.setProperty('--fa-secondary-opacity', defaultOpacity);
    }
  }
}
document.addEventListener("keydown", key)
document.addEventListener("keyup", key)
document.querySelectorAll(".fa-duotone").forEach(function(e,i,a){
  // add click event to arrows, funni?
  function globalEvent(ev){
    let key = keys[i]
    if (key!=""){
      document.dispatchEvent(new KeyboardEvent(
        ev.type
          .replaceAll(/(mouse|touch)/g,"key")
          .replaceAll("start","down")
          .replaceAll("end","up")
        , {key: key})
      )
    }
  }
  e.addEventListener("mousedown",globalEvent)
  e.addEventListener("mouseup",globalEvent)
  e.addEventListener("touchstart",globalEvent)
  e.addEventListener("touchend",globalEvent)
})