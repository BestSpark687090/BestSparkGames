let keys = ["d", "f", "j", "k"]
let keysPressed = [false,false,false,false]
let alreadyWaiting = false;
document.querySelectorAll("#pressButton").forEach(function(e,i){
  if(keys[i]!=""){
    e.innerHTML = keys[i];
  }
  // Press function
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
  // e.onpointerdown = press;
  e.addEventListener("click", press);


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
  // let defaultOpacity = 0.25
  // figure out an easier way to get the opacity
  
  for(let i=0;i<4;i++){
    let arrow = document.querySelector("#arrow"+(i+1))
    let defaultOpacity = window.getComputedStyle(arrow).getPropertyValue('--default-opacity')
    if(keysPressed[i]){ 
      arrow.style.setProperty('--fa-secondary-opacity', '1');
    }else{
      arrow.style.setProperty('--fa-secondary-opacity', defaultOpacity);
    }
  }
}
document.addEventListener("keydown", key)
document.addEventListener("keyup",key)
