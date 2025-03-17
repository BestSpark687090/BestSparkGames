if (location.pathname == "/") { // main page, add games list
  let games = document.querySelector(".games")
  // fetch json file games.json
  let file = await fetch("/games.json");
  let jsonText = await file.text();
  let json = JSON.parse(jsonText);
  // add games to games list
  for (let i = 0; i < json.games.length; i++) {
    let game = json.games[i];
    let name = json.names[i];
    let a = document.createElement("a");
    a.href = "/games/" + game;
    a.innerHTML = name;
    games.appendChild(a);
  }
} else {
  let a = document.createElement("a");
  a.href = "/"
  a.classList.add("back")
  a.innerHTML = "Back"
  document.body.appendChild(a)
  let menu = document.createElement("div");
  menu.classList.add("menu")
  menu.hidden = true;
  let link = document.createElement("link");
  link.rel = "stylesheet"
  link.href = "https://site-assets.fontawesome.com/releases/v6.6.0/css/all.css";
  document.body.appendChild(link);
  let i = document.createElement("i");
  i.classList.add("fa-solid", "fa-bars","menuButton");
  i.onclick = function() {
    let width = menu.offsetWidth
    menu.style.display = "flex"
    menu.animate(
      [{ left: CSS.px(-width-1) }, { left: 0 }],
      { duration: 500, fill: "forwards", easing: "ease-in-out" }
    );
    console.log("menu")
  }
  document.body.appendChild(i);
  let div = document.createElement("div");
  div.classList.add("left");
  menu.appendChild(div)
  let i2 = document.createElement("i");
  i2.classList.add("fa-solid", "fa-xmark","menuButton");
  div.appendChild(i2)
  menu.innerHTML += "<br>"
  menu.querySelector(".fa-xmark").addEventListener("click", function() {
    let width = menu.offsetWidth
    console.log("close")
    menu.animate(
      [{ left: 0 }, { left: CSS.px(-width-1) }],
      { duration: 500, fill: "forwards", easing: "ease-in-out" }
    );
  })
  // list making
  let file = await fetch("/games.json");
  let jsonText = await file.text();
  let json = JSON.parse(jsonText);
  for (let i = 0; i < json.games.length; i++) {
    let game = json.games[i];
    let name = json.names[i];
    let a = document.createElement("a");
    a.href = "/games/" + game;
    a.innerHTML = name;
    menu.appendChild(a);
  }
  document.body.appendChild(menu)
  let width = menu.offsetWidth
  menu.style.left = (-width - 17) + "px"
}
function test() {
  alert("aaa")
}