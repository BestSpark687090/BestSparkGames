let keys = ["", "", "", ""]
let keysPressed = [false,false,false,false]
let alreadyWaiting = false;
document.querySelectorAll("#pressButton").forEach(function(e){
  function press(ev) {
    if (alreadyWaiting) {
      return;
    }
    alreadyWaiting = true;
    // wait for press
    ev.target.innerHTML = "Press a key...";
    function setKey(e) {
      // if(!alreadyWaiting){return}
      i = parseInt(ev.target.getAttribute("class").replace("press",""))
      keys[i - 1] = e.key;
      ev.target.innerHTML = e.key;
      alreadyWaiting = false;
      ev.target.removeEventListener("keydown", setKey);
    }
    ev.target.addEventListener("keydown", setKey);
    // check for event listener because it doesnt remove sometimes
    // nah it doesnt click right that's all
  }
  e.onpointerdown = press;
})
// the key maker
function key(e){
  // keysPressed = [false,false,false,false]
  // if(e.key==keys[0]){
    
  // }
  // im sorry but im gonna use eval. hear me out.
  for(let i=0;i<4;i++){
    eval(`if(e.key==keys[${i}]){keysPressed[${i}]= true}`)
    if(e.type=="keyup"&&e.key==keys[i]){
      keysPressed[i] = false
    }
  }

  // switch(e.key){
  //   case keys[0]:
  //     keysPressed[0] = true;
  //   case keys[1]:
  //     keysPressed[1] = true;
  //   case keys[2]:
  //     keysPressed[2] = true;
  //   case keys[3]:
  //     keysPressed[3] = true;
  // }
  // then the hacky part
  // i in is the index so it makes it easier to type
  let defaultOpacity = 0.25
  for(let i=0;i<4;i++){
    let el = document.querySelector("#arrow"+(i+1)).style.cssText
    if(keysPressed[i]){ 
      el = el.replaceAll(`y: ${defaultOpacity};`,"y: 1;")
    }else{

      el = el.replaceAll("y: 1;",`y: ${defaultOpacity};`)
    }
    document.querySelector("#arrow"+(i+1)).style.cssText = el
  }
}
document.addEventListener("keydown", key)
document.addEventListener("keyup",key)
