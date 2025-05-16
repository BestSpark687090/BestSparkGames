for(let i=6;i<64;i+=4){
  document.body.innerText += (`<line x1="${i}" y1="3" x2="${i+2}" y2="3"/>`)
  console.log("h")
}
// rects
//<rect x="6" y="5" width="2" height="2" fill="black" stroke="black"/>
for(let i=6;i<64;i+=4){
  document.body.innerText += (`<rect x="${i}" y="5" width="2" height="2" stroke="black"/>`)
  console.log("h")
}